// import {
//   Form,
//   FormError,
//   FieldError,
//   Label,
//   TextField,
//   Submit,
// } from '@redwoodjs/forms'

// const formatDatetime = (value) => {
//   if (value) {
//     return value.replace(/:\d{2}\.\d{3}\w/, '')
//   }
// }

// const AnnouncementForm = (props) => {
//   const onSubmit = (data) => {
//     props.onSave(data, props?.announcement?.id)
//   }

//   return (
//     <div className="rw-form-wrapper">
//       <Form onSubmit={onSubmit} error={props.error}>
//         <FormError
//           error={props.error}
//           wrapperClassName="rw-form-error-wrapper"
//           titleClassName="rw-form-error-title"
//           listClassName="rw-form-error-list"
//         />

//         <Label
//           name="headline"
//           className="rw-label"
//           errorClassName="rw-label rw-label-error"
//         >
//           Headline
//         </Label>
//         <TextField
//           name="headline"
//           defaultValue={props.announcement?.headline}
//           className="rw-input"
//           errorClassName="rw-input rw-input-error"
//           validation={{ required: true }}
//         />
//         <FieldError name="headline" className="rw-field-error" />

//         <Label
//           name="subheadline"
//           className="rw-label"
//           errorClassName="rw-label rw-label-error"
//         >
//           Subheadline
//         </Label>
//         <TextField
//           name="subheadline"
//           defaultValue={props.announcement?.subheadline}
//           className="rw-input"
//           errorClassName="rw-input rw-input-error"
//           validation={{ required: true }}
//         />
//         <FieldError name="subheadline" className="rw-field-error" />

//         <Label
//           name="date"
//           className="rw-label"
//           errorClassName="rw-label rw-label-error"
//         >
//           Date
//         </Label>
//         <TextField
//           name="date"
//           defaultValue={props.announcement?.date}
//           className="rw-input"
//           errorClassName="rw-input rw-input-error"
//           validation={{ required: true }}
//         />
//         <FieldError name="date" className="rw-field-error" />

//         <div className="rw-button-group">
//           <Submit disabled={props.loading} className="rw-button rw-button-blue">
//             Save
//           </Submit>
//         </div>
//       </Form>
//     </div>
//   )
// }

// export default AnnouncementForm
