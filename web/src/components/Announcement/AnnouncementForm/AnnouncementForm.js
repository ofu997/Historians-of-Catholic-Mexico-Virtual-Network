import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  CheckboxField,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const AnnouncementForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.announcement?.id)
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
          name="englishHeadline"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Headline
        </Label>
        <TextField
          name="englishHeadline"
          defaultValue={props.announcement?.englishHeadline}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="englishHeadline" className="rw-field-error" />

        <Label
          name="englishSubheadline"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Subheadline
        </Label>
        <TextField
          name="englishSubheadline"
          defaultValue={props.announcement?.englishSubheadline}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="englishSubheadline" className="rw-field-error" />

        <Label
          name="spanishHeadline"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Spanish headline
        </Label>
        <TextField
          name="spanishHeadline"
          defaultValue={props.announcement?.spanishHeadline}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="spanishHeadline" className="rw-field-error" />

        <Label
          name="spanishSubheadline"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Spanish subheadline
        </Label>
        <TextField
          name="spanishSubheadline"
          defaultValue={props.announcement?.spanishSubheadline}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="spanishSubheadline" className="rw-field-error" />

        <Label
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date
        </Label>
        <TextField
          name="date"
          defaultValue={props.announcement?.date}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="date" className="rw-field-error" />

        <Label
          name="spanishDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Spanish date
        </Label>
        <TextField
          name="spanishDate"
          defaultValue={props.announcement?.spanishDate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="spanishDate" className="rw-field-error" />

        <Label
          name="important"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Important
        </Label>
        <CheckboxField
          name="important"
          defaultChecked={props.announcement?.important}
          className="rw-input editUserCheckbox"
          errorClassName="rw-input rw-input-error"
        />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AnnouncementForm
