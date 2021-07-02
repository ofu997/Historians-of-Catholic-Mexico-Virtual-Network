import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="email" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.user?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="password"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Password
        </Label>
        <TextField
          name="password"
          defaultValue={props.user?.password}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="password" className="rw-field-error" />

        <Label
          name="isAdmin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is admin
        </Label>
        <CheckboxField
          name="isAdmin"
          defaultChecked={props.user?.isAdmin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="isAdmin" className="rw-field-error" />

        <Label
          name="jwt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Jwt
        </Label>
        <TextField
          name="jwt"
          defaultValue={props.user?.jwt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="jwt" className="rw-field-error" />

        <Label
          name="localSessionPassword"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Local session password
        </Label>
        <TextField
          name="localSessionPassword"
          defaultValue={props.user?.localSessionPassword}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="localSessionPassword" className="rw-field-error" />

        <Label
          name="preferSpanish"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prefer spanish
        </Label>
        <CheckboxField
          name="preferSpanish"
          defaultChecked={props.user?.preferSpanish}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="preferSpanish" className="rw-field-error" />

        <Label
          name="bio"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bio
        </Label>
        <TextField
          name="bio"
          defaultValue={props.user?.bio}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="bio" className="rw-field-error" />

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
          validation={{ required: true }}
        />
        <FieldError name="location" className="rw-field-error" />

        <Label
          name="university"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          University
        </Label>
        <TextField
          name="university"
          defaultValue={props.user?.university}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="university" className="rw-field-error" />

        <Label
          name="credentials"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Credentials
        </Label>
        <TextField
          name="credentials"
          defaultValue={props.user?.credentials}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="status" className="rw-field-error" />

        <Label
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
          validation={{ required: true }}
        />
        <FieldError name="profilePicUrl" className="rw-field-error" />

        <Label
          name="linkAcademia"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Link academia
        </Label>
        <TextField
          name="linkAcademia"
          defaultValue={props.user?.linkAcademia}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="linkAcademia" className="rw-field-error" />

        <Label
          name="linkTwitter"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Link twitter
        </Label>
        <TextField
          name="linkTwitter"
          defaultValue={props.user?.linkTwitter}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="linkTwitter" className="rw-field-error" />

        <Label
          name="linkLinkedIn"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Link linked in
        </Label>
        <TextField
          name="linkLinkedIn"
          defaultValue={props.user?.linkLinkedIn}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
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
          validation={{ required: true }}
        />
        <FieldError name="otherMedia" className="rw-field-error" />

        <Label
          name="pub1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pub1
        </Label>
        <TextField
          name="pub1"
          defaultValue={props.user?.pub1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="pub1" className="rw-field-error" />

        <Label
          name="pub1desc"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pub1desc
        </Label>
        <TextField
          name="pub1desc"
          defaultValue={props.user?.pub1desc}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="pub1desc" className="rw-field-error" />

        <Label
          name="pub2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pub2
        </Label>
        <TextField
          name="pub2"
          defaultValue={props.user?.pub2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="pub2" className="rw-field-error" />

        <Label
          name="pub2desc"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pub2desc
        </Label>
        <TextField
          name="pub2desc"
          defaultValue={props.user?.pub2desc}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="pub2desc" className="rw-field-error" />

        <Label
          name="pub3"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pub3
        </Label>
        <TextField
          name="pub3"
          defaultValue={props.user?.pub3}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="pub3" className="rw-field-error" />

        <Label
          name="pub3desc"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pub3desc
        </Label>
        <TextField
          name="pub3desc"
          defaultValue={props.user?.pub3desc}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="pub3desc" className="rw-field-error" />

        <Label
          name="pub4"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pub4
        </Label>
        <TextField
          name="pub4"
          defaultValue={props.user?.pub4}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="pub4" className="rw-field-error" />

        <Label
          name="pub4desc"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pub4desc
        </Label>
        <TextField
          name="pub4desc"
          defaultValue={props.user?.pub4desc}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="pub4desc" className="rw-field-error" />

        <Label
          name="focusByTopic"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Focus by topic
        </Label>
        <TextField
          name="focusByTopic"
          defaultValue={props.user?.focusByTopic}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="focusByTopic" className="rw-field-error" />

        <Label
          name="focusByEra"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Focus by era
        </Label>
        <TextField
          name="focusByEra"
          defaultValue={props.user?.focusByEra}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
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
}

export default UserForm
