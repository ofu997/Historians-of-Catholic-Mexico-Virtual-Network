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

// const USER_QUERY = gql`
// query GetUserByIdNewUserComponent($userId: Int!) {
//   user (id: $userId) {
//     id
//     isAdmin
//     localSessionPassword
//     preferSpanish
//   }
// }
// `

// const dummyObject = { error: null, data: null };

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
      <h2>{useQueryError}</h2>
      <h2>{props.language}</h2>
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
          <p style={{ verticalAlign: 'center' }}>Prefer spanish</p>
        </Label>
        <CheckboxField
          name="preferSpanish"
          defaultChecked={props.user?.preferSpanish}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          style={{ margin: '30px 20px 0px 20px' }}
        />
        </div>
        {/* <Label>
          {isSpanish
          ? <p><span>(</span>Su cambio de preferencia va a tener efecto en la pr&oacute;xima sesi&oacute;n<span>)</span></p>
          : <p><span>(</span>A change in your preference will take effect in your next session<span>)</span></p>}
        </Label> */}
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
          Profile picture
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
              Upload
            </div>
          </div>
        }

        {profilePicUrl && (
          <div
            // style={{ maxHeight: '25%' }}
          >
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
              Replace Image
            </div>
          </div>
        )}

        {/* profilePicUrl end */}

        <Label
          name="location"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Location
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
          University or academic affiliation
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
          Credentials
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
          Status
        </Label>
        <TextField
          name="status"
          defaultValue={props.user?.status}
          placeholder="What's on your mind?"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="status" className="rw-field-error" />

        {/* <Label
          name="profilePicUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profile pic url
        </Label>
        <TextField
          name="profilePicUrl"
          defaultValue={props.user?.profilePicUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="profilePicUrl" className="rw-field-error" /> */}

        <Label
          name="linkAcademia"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Academia.edu link
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
          Twitter link
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
          Linkedin account
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
          Other media
        </Label>
        <TextField
          name="otherMedia"
          defaultValue={props.user?.otherMedia}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="otherMedia" className="rw-field-error" />

        <Label
          name="pub1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Publication link
        </Label>
        <TextField
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
          Description
        </Label>
        <TextField
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
          Second publication
        </Label>
        <TextField
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
          Description
        </Label>
        <TextField
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
          Third publication
        </Label>
        <TextField
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
          Description
        </Label>
        <TextField
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
          Fourth publication
        </Label>
        <TextField
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
          Description
        </Label>
        <TextField
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
          Topics of interest
        </Label>
        <TextField
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
          Time periods of interest
        </Label>
        <TextField
          name="focusByEra"
          defaultValue={props.user?.focusByEra}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="focusByEra" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
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

export { EditUserForm, USER_QUERY }
