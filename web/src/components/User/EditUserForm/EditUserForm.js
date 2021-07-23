 import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'
import { useState } from 'react'
import { storage } from 'src/firebase/firebase'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import { useQuery } from '@redwoodjs/web'
import USER_QUERY from 'src/graphql-helpers/userquery'
import dummyObject from 'src/graphql-helpers/dummyobject'

const EditUserForm = (props) => {
  const [profilePicAsFile, setProfilePicAsFile] = useState('')
  const [profilePicUrl, setProfilePicUrl] = useState(props.user.profilePicUrl)
  const [showInput, setShowInput] = useState(true)
  const [showUpload, setShowUpload] = useState(false)
  const isSpanish = Boolean(props.language==='Spanish')

  const currentUser = getLoggedInUser();
  const currentUserId = props.user.id

  const { error:useQueryError, data } = currentUserId ?
    useQuery(USER_QUERY, {
      variables: { currentUserId }
    })
    :
    dummyObject;

  const onSubmit = (data) => {
    const dataWithProfilePicUrl = Object.assign(data, { profilePicUrl } )
    props.onSave(dataWithProfilePicUrl, props?.user?.id)
  }

  const handleProfilePicAsFile = (e) => {
    setProfilePicAsFile(e.target.files[0])
    setShowUpload(true)
  }

  const handleFirebaseUpload = (e) => {
    if (!profilePicAsFile) {
      console.log('no file selected')
      return;
    }
    e.preventDefault()
    console.log('start of upload')
    if (profilePicAsFile === '') {
      console.error(`not an image, the image file is a ${typeof (profilePicAsFile)}`)
    }
    const uploadTask = storage.ref(`/profile-pics/${profilePicAsFile.name}`).put(profilePicAsFile)
    uploadTask.on('state_changed',
      (snapShot) => {
        console.log(`snapshot: ${snapShot}`)
      }, (err) => {
        console.log(err)
      }, () => {
        storage
          .ref('profile-pics')
          .child(profilePicAsFile.name)
          .getDownloadURL()
          .then(fireBaseUrl => {
            console.log(`firebaseurl: ${fireBaseUrl}`)
            setProfilePicUrl(fireBaseUrl)
          })
          .then(() =>{
            setShowUpload(false)
            setShowInput(false)
          })
      }
    )
  }

  return (
    (currentUser.localSessionPassword === data?.user.localSessionPassword) ? (
    <div className="rw-form-wrapper">
      {useQueryError && <h2>{useQueryError}</h2>}
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <div style={{ display: 'flex' }}>
        <Label
          name="preferSpanish"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?<span>Prefiero espa&ntilde;ol</span>:<span>Prefer spanish</span>}
        </Label>
        <CheckboxField
          name="preferSpanish"
          defaultChecked={props.user?.preferSpanish}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          style={{ margin: '30px 20px 0px 20px' }}
        />
        </div>
        <FieldError name="preferSpanish" className="rw-field-error" />

        <Label
          name="bio"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bio
        </Label>
        <TextAreaField
          name="bio"
          defaultValue={props.user?.bio}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="bio" className="rw-field-error" />

        {/* profilePicUrl start */}

        <Label
          name="profile-picture"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
          style={{
            marginTop: '100px'
          }}
        >
          {isSpanish?`Foto de perfil`:`Profile picture`}
        </Label>
        {showInput && !profilePicUrl &&
          <input
            type='file'
            onChange={handleProfilePicAsFile}
          />
        }
        {showUpload &&
          <div style={{ marginTop: '50px', maxWidth: '25%' }}>
            <div className="rw-button-group rw-button rw-button-green" onClick={handleFirebaseUpload}
            >
              {isSpanish?`Cargar`:`Upload`}
            </div>
          </div>
        }

        {profilePicUrl && (
          <div>
            <img src={profilePicUrl} style={{ display: 'block', margin: '2rem 0', objectFit: 'contain' }} height='300' />
            <div
              onClick={() => {
                setProfilePicUrl(null)
                setShowInput(true)
                }
              }
              className="rw-button rw-button-small rw-button-blue"
              style={{ textAlign: 'center', width: '50%' }}
            >
              {isSpanish?`Reemplazar imagen`:`Replace image`}
            </div>
          </div>
        )}

        {/* profilePicUrl end */}

        <Label
          name="location"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?<span>Ubicaci&oacute;n</span>:<span>Location</span>}
        </Label>
        <TextField
          name="location"
          defaultValue={props.user?.location}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="location" className="rw-field-error" />

        <Label
          name="university"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?<span>Universidad o afiliaci&oacute;n acad&eacute;mica</span>:<span>University or academic affiliation</span>}
        </Label>
        <TextField
          name="university"
          defaultValue={props.user?.university}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="university" className="rw-field-error" />

        <Label
          name="credentials"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
         {isSpanish?`Credenciales`:`Credentials`}
        </Label>
        <TextAreaField
          name="credentials"
          defaultValue={props.user?.credentials}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="credentials" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?`Estado`:`Status`}
        </Label>
        {isSpanish
          ? (
          <TextField
            name="status"
            defaultValue={props.user?.status}
            placeholder="Comparte un pensamiento"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          )
          : (
          <TextField
            name="status"
            defaultValue={props.user?.status}
            placeholder="What's on your mind?"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          )
        }
        <FieldError name="status" className="rw-field-error" />

        <Label
          name="linkAcademia"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?`Cuenta de Academia.edu`:`Academia.edu link`}
        </Label>
        <TextField
          name="linkAcademia"
          defaultValue={props.user?.linkAcademia}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="linkAcademia" className="rw-field-error" />

        <Label
          name="linkTwitter"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?`Cuenta de Twitter`:`Twitter link`}
        </Label>
        <TextField
          name="linkTwitter"
          defaultValue={props.user?.linkTwitter}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="linkTwitter" className="rw-field-error" />

        <Label
          name="linkLinkedIn"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?`Cuenta de LinkedIn`:`LinkedIn account`}
        </Label>
        <TextField
          name="linkLinkedIn"
          defaultValue={props.user?.linkLinkedIn}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="linkLinkedIn" className="rw-field-error" />

        <Label
          name="otherMedia"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?<span>Otra media de comunicaci&oacute;n</span>:<span>Other media</span>}
        </Label>
        {isSpanish
          ? (
          <TextField
            name="otherMedia"
            defaultValue={props.user?.otherMedia}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            placeholder='video, sitio web personal, podcast...'
          />
          )
          : (
          <TextField
            name="otherMedia"
            defaultValue={props.user?.otherMedia}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            placeholder='video, personal website, podcast...'
          />
          )
        }
        <FieldError name="otherMedia" className="rw-field-error" />

        <Label
          name="pub1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?<span>Publicaci&oacute;n</span>:<span>Publication</span>}
        </Label>
        <TextAreaField
          name="pub1"
          defaultValue={props.user?.pub1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="pub1" className="rw-field-error" />

        <Label
          name="pub1desc"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?<span>Descripci&oacute;n</span>:<span>Description</span>}
        </Label>
        <TextAreaField
          name="pub1desc"
          defaultValue={props.user?.pub1desc}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="pub1desc" className="rw-field-error" />

        <Label
          name="pub2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?<span>Segunda publicaci&oacute;n</span>:<span>Second publication</span>}
        </Label>
        <TextAreaField
          name="pub2"
          defaultValue={props.user?.pub2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="pub2" className="rw-field-error" />

        <Label
          name="pub2desc"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?<span>Descripci&oacute;n</span>:<span>Description</span>}
        </Label>
        <TextAreaField
          name="pub2desc"
          defaultValue={props.user?.pub2desc}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="pub2desc" className="rw-field-error" />

        <Label
          name="pub3"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?<span>Tercera publicaci&oacute;n</span>:<span>Third publication</span>}
        </Label>
        <TextAreaField
          name="pub3"
          defaultValue={props.user?.pub3}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="pub3" className="rw-field-error" />

        <Label
          name="pub3desc"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?<span>Descripci&oacute;n</span>:<span>Description</span>}
        </Label>
        <TextAreaField
          name="pub3desc"
          defaultValue={props.user?.pub3desc}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="pub3desc" className="rw-field-error" />

        <Label
          name="pub4"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?<span>Cuarta publicaci&oacute;n</span>:<span>Fourth publication</span>}
        </Label>
        <TextAreaField
          name="pub4"
          defaultValue={props.user?.pub4}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="pub4" className="rw-field-error" />

        <Label
          name="pub4desc"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?<span>Descripci&oacute;n</span>:<span>Description</span>}
        </Label>
        <TextAreaField
          name="pub4desc"
          defaultValue={props.user?.pub4desc}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="pub4desc" className="rw-field-error" />

        <Label
          name="focusByTopic"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?`Temas de enfoque`:`Focus by topic`}
        </Label>
        <TextAreaField
          name="focusByTopic"
          defaultValue={props.user?.focusByTopic}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="focusByTopic" className="rw-field-error" />

        <Label
          name="focusByEra"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {isSpanish?`Eras de enfoque`:`Time periods of interest`}
        </Label>
        <TextAreaField
          name="focusByEra"
          defaultValue={props.user?.focusByEra}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="focusByEra" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            {isSpanish?`Guardar cambios`:`Save`}
          </Submit>
        </div>
      </Form>
    </div>
    )
    :
    (
      <h2>Invalid credentials</h2>
    )
  )
}

export default EditUserForm
