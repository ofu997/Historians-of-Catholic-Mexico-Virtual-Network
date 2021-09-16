import { Link, routes } from '@redwoodjs/router'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'

const truncate = (text) => {
  let output = text
  if (text && text.length > 150) {
    output = output.substring(0, 150) + '...'
  }
  return output
}

const UsersList = props => {
  const currentUser = getLoggedInUser();
  // preferSpanish is priority. English is set if sessionStorage language key is English
  // or if there is no key at all
  const language = currentUser.preferSpanish ? 'Spanish' : sessionStorage.getItem('language') || 'English';
  const isSpanish = Boolean(language==='Spanish' ? true : false)

  const users = props.users.filter(user => user.email != 'trees73@gmail.com')

  return (
    <>
      <section className='flex-wrap-items tags v-margin'>

        <Link
          to={routes.taggedUsers({ tag: "church-and-state-relations" })}
          className='tagLink'
        >
          <div>{isSpanish ? <span>Relaci&oacute;n Iglesia-Estado</span> : <span>Church-State relations</span>}</div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "catholicism-and-gender" })}
          className='tagLink'
        >
          <div>{isSpanish ? <span>Catolicismo y g&eacute;nero</span> : <span>Catholicism and gender</span>}</div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "right-and-left-wing-politics" })}
          className='tagLink'
        >
          <div>{isSpanish ? <span>Derechas y/o izquierdas</span> : <span>Right and left-wing politics</span>}</div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "violence-militancy-martyrdom" })}
          className='tagLink'
        >
          <div>{isSpanish ? <span>Violencia, militancia y martirio</span> : <span>Violence, militancy, and martyrdom</span>}</div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "catholicism-and-youth-student-groups" })}
          className='tagLink'
        >
          <div>
            {isSpanish ? <span>Catolicismo y juventudes</span> : <span>Catholicism and youth/student groups</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "nationalism" })}
          className='tagLink'
        >
          <div>
            {isSpanish ? <span>Nacionalismo</span> : <span>Nationalism</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "migrations" })}
          className='tagLink'
        >
          <div>
            {isSpanish ? <span>Migraciones</span> : <span>Migrations</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "modernity-secularization-sciences" })}
          className='tagLink'
        >
          <div>
            {isSpanish ? <span>Modernidad, ciencias y secularizaci&oacute;n</span> : <span>Modernity, secularization, and the sciences</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "press-literature-intellectual-history" })}
          className='tagLink'
        >
          <div>
            {isSpanish ? <span>Prensa, literatura e historia intelectual</span> : <span>Press, literature, and intellectual history</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "music-and-arts" })}
          className='tagLink'
        >
          <div>
            {isSpanish ? <span>M&uacute;sica y artes</span> : <span>Music and the arts</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "visual-culture" })}
          className='tagLink'
        >
          <div>
            {isSpanish ? <span>Cultura visual</span> : <span>Visual culture</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "transnational-and-international-history" })}
          className='tagLink'
        >
          <div>
            {isSpanish ? <span>Historia transnacional o internacional</span> : <span>Transnational and/or international history</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "local-and-regional-history" })}
          className='tagLink'
        >
          <div>
            {isSpanish ? <span>Historia local o regional</span> : <span>Local and/or regional history</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "oral-history" })}
          className='tagLink'
        >
          <div>
            {isSpanish ? <span>Testimonio oral</span> : <span>Oral history</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "race-and-racism" })}
          className='tagLink'
        >
          <div>
            {isSpanish ? <span>Etnia, razas y racismo</span> : <span>Race and racism</span>}
          </div>
        </Link>

      </section>
      <div id='users-table' className="rw-segment rw-table-wrapper-responsive">
        <table className="rw-table">
          <thead>
            <tr>
              <th id='th-name'>{isSpanish? `Nombre`:`Name`}</th>
              <th>{isSpanish?`Estado`:`Status`}</th>
              <th>{isSpanish?`Universidad`:`University`}</th>
              <th>{isSpanish?<span>Ubicaci&oacute;n</span>:<span>Location</span>}</th>
              <th>{isSpanish?`Credenciales`:`Credentials`}</th>
              <th>{isSpanish?`Temas de enfoque`:`Focus by topic`}</th>
              <th>{isSpanish?`Eras de enfoque`:`Focus by era`}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) =>
              <tr key={user.id}>
                <td id='td-username'>
                  <Link
                    to={routes.profile({ id: user.id })}
                    id='link-for-username'
                    className="rw-button-profiles rw-button-small"
                  >
                    {truncate(user.name)}
                  </Link>
                </td>
                <td>{truncate(user.status)}</td>
                <td>{truncate(user.university)}</td>
                <td>{truncate(user.location)}</td>
                <td>{truncate(user.credentials)}</td>
                <td>{truncate(user.focusByTopic)}</td>
                <td>{truncate(user.focusByEra)}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UsersList
