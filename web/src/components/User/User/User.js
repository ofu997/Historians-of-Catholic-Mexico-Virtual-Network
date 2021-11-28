import { useQuery, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import USER_QUERY from 'src/graphql-helpers/userquery'
import dummyObject from 'src/graphql-helpers/dummyobject'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const User = ({ user }) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
      navigate(routes.profiles())
    },
  })

  // query the user being displayed instead of currentUser
  const { error, data } = user.id ?
    useQuery(USER_QUERY, {
      variables: { currentUserId : user.id }
    })
    :
    dummyObject;

  const tagValues = [ user.tagChurchStateRels,
    user.tagCathGender,
    user.tagRightLeftWing,
    user.tagViolenceMilitancyMartyrdom,
    user.tagCathYouthStudentGroups,
    user.tagNationalism,
    user.tagMigrations,
    user.tagModernitySecSciences,
    user.tagPressLitIntelHist,
    user.tagMusArts,
    user.tagVisCulture,
    user.tagTransIntlHist,
    user.tagLocRegHist,
    user.tagOralHist
  ]

  const currentUser = getLoggedInUser();
  // preferSpanish is priority. English is set if sessionStorage language key is English
  // or if there is no key at all
  const language = currentUser.preferSpanish ? 'Spanish' : sessionStorage.getItem('language') || 'English';
  const isSpanish = Boolean(language==='Spanish' ? true : false)

  return (
    <>
      <div id='user-component'>
        <h1>{error}</h1>
        <h3 className="rw-heading cntr-h">
          {user.name}
        </h3>
        {user.profilePicUrl && (
          <div id='img-container'>
            <img src={user.profilePicUrl} width='400' height='400' />
          </div>
        )}
        <table id='primary-profile-table' className="rw-table-profile">
          <tbody>
            {user.bio && (
              <tr>
                <th>Bio</th>
                <td className='allow-newline'>{user.bio}</td>
              </tr>
            )}

            {user.status && (
              <tr>
                <th>{isSpanish?`Estado`:`Status`}</th>
                <td>{user.status}</td>
              </tr>
            )}
            {user.university && (
              <tr>
                <th>{isSpanish?<span>Universidad o afiliaci&oacute;n</span>:<span>University or affiliation</span>}</th>
                <td>{user.university}</td>
              </tr>
            )}
            {user.credentials && (
              <tr>
                <th>{isSpanish?`Credenciales`:`Credentials`}</th>
                <td>{user.credentials}</td>
              </tr>
            )}
            {user.focusByTopic && (
              <tr>
                <th>{isSpanish?<span>Temas de enfoque</span>:<span>Focus by topic</span>}</th>
                <td>{user.focusByTopic}</td>
              </tr>
            )}
            {user.focusByEra && (
              <tr>
                <th>{isSpanish?<span>Épocas de enfoque</span>:<span>Focus by era</span>}</th>
                <td>{user.focusByEra}</td>
              </tr>
            )}
          </tbody>
        </table>

        {user.pub1 && (
          <h4 className="rw-heading cntr-h v-margin">{isSpanish?`Publicaciones`:`Publications`}</h4>
        )}
        {user.pub1 && (
          <div className='userPubSeparator'>
            <p>{user.pub1}</p>
            {user.pub1desc && (
              <p>{isSpanish?<span>Descripci&oacute;n/v&iacute;nculo</span>:<span>Description/link</span>}: {user.pub1desc}</p>
            )}
          </div>
        )}
        {user.pub2 && (
          <div className='userPubSeparator'>
            <p>{user.pub2}</p>
            {user.pub2desc && (
              <p>{isSpanish?<span>Descripci&oacute;n/v&iacute;nculo</span>:<span>Description/link</span>}: {user.pub2desc}</p>
            )}
          </div>
        )}
        {user.pub3 && (
          <div className='userPubSeparator'>
            <p>{user.pub3}</p>
            {user.pub3desc && (
              <p>{isSpanish?<span>Descripci&oacute;n/v&iacute;nculo</span>:<span>Description/link</span>}: {user.pub3desc}</p>
            )}
          </div>
        )}
        {user.pub4 && (
          <div className='userPubSeparator'>
            <p>{user.pub4}</p>
            {user.pub4desc && (
              <p>{isSpanish?<span>Descripci&oacut;en/v&iacute;nculo</span>:<span>Description/link</span>}: {user.pub4desc}</p>
            )}
          </div>
        )}

        {tagValues.includes(true) &&(<h4 className="rw-heading cntr-h">{isSpanish?`Palabras Claves`:`Tags`}</h4>)}
        <section className='flex-wrap-items tags v-margin'>
          {user.tagChurchStateRels && (
            <div>
              {isSpanish ? <span>Relaci&oacute;n Iglesia-Estado</span> : <span>Church-State relations</span>}
            </div>
          )}
          {user.tagCathGender && (
            <div>{isSpanish ? <span>Catolicismo y g&eacute;nero</span> : <span>Catholicism and gender</span>}</div>
          )}
          {user.tagRightLeftWing && (
            <div>{isSpanish ? <span>Derechas y/o izquierdas</span> : <span>Right and left-wing politics</span>}</div>
          )}
          {user.tagViolenceMilitancyMartyrdom && (
            <div>{isSpanish ? <span>Violencia, militancia, y martirio</span> : <span>Violence, militancy, and martyrdom</span>}</div>
          )}
          {user.tagCathYouthStudentGroups && (
            <div>{isSpanish ? <span>Catolicismo y juventudes</span> : <span>Catholicism and youth/student groups</span>}</div>
          )}
          {user.tagNationalism && (
            <div>{isSpanish ? <span>Nacionalismo</span> : <span>Nationalism</span>}</div>
          )}
          {user.tagMigrations && (
            <div>{isSpanish ? <span>Migraciones</span> : <span>Migrations</span>}</div>
          )}
          {user.tagModernitySecSciences && (
            <div>{isSpanish ? <span>Modernidad, ciencias, y secularizaci&oacute;n</span> : <span>Modernity, secularization, and the sciences</span>}</div>
          )}
          {user.tagPressLitIntelHist && (
            <div>{isSpanish ? <span>Prensa, literatura, e historia intelectual</span> : <span>Press, literature, and intellectual history</span>}</div>
          )}
          {user.tagMusArts && (
            <div>{isSpanish ? <span>M&uacute;sica y artes</span> : <span>Music and the arts</span>}</div>
          )}
          {user.tagVisCulture && (
            <div>{isSpanish ? <span>Cultura visual</span> : <span>Visual culture</span>}</div>
          )}
          {user.tagTransIntlHist && (
            <div>{isSpanish ? <span>Historia transnacional o internacional</span> : <span>Transnational and/or international history</span>}</div>
          )}
          {user.tagLocRegHist && (
            <div>{isSpanish ? <span>Historia local o regional</span> : <span>Local and/or regional history</span>}</div>
          )}
          {user.tagOralHist && (
            <div>{isSpanish ? <span>Testimonio oral</span> : <span>Oral history</span>}</div>
          )}
          {user.tagRaceRacism && (
            <div>{isSpanish ? <span>Etnia, razas y racismo</span> : <span>Race and racism</span>}</div>
          )}
          {user.tagDevotions && (
            <div>{isSpanish ? <span>Devociones</span> : <span>Devotions</span>}</div>
          )}
          {user.tagClergy && (
            <div>{isSpanish ? <span>Clero</span> : <span>Clergy</span>}</div>
          )}
          {user.tagLiturgy && (
            <div>{isSpanish ? <span>Liturgia</span> : <span>Liturgy</span>}</div>
          )}
        </section>

        <h4 className="rw-heading cntr-h">{isSpanish?`Contacto`:`Contact`}</h4>
        <section className='flex-wrap-items space-between'>
          <p><a href={`mailto:${user.email}`}>{user.email}</a></p>
          {user.linkAcademia && (
            <p><a href={user.linkAcademia} target='_blank' rel="noopener noreferrer">Academia.edu</a></p>
          )}
          {user.linkTwitter && (
          <p><a href={user.linkTwitter} target='_blank' rel="noopener noreferrer">Twitter</a></p>
          )}
          {user.linkLinkedIn && (
          <p><a href={user.linkLinkedIn} target='_blank' rel="noopener noreferrer">LinkedIn</a></p>
          )}
          {user.otherMedia && (
          <p><a href={user.otherMedia} target='_blank' rel="noopener noreferrer">{user.otherMedia}</a></p>
          )}
        </section>
      </div>

      <nav className="rw-button-group">
      {// currentUser owns displayed user
      (currentUser.localSessionPassword === data.user.localSessionPassword) && (
        <Link
          to={routes.editProfile({ id: user.id })}
          className="rw-button rw-button-blue"
        >
          {isSpanish?`Editar`:`Edit`}
        </Link>
      )}
      </nav>
    </>
  )
}

export default User
