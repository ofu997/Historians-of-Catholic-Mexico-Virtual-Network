import { Link, routes } from '@redwoodjs/router'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'



const TagLinks = props => {
  const currentUser = getLoggedInUser();
  const language = currentUser.preferSpanish ? 'Spanish' : sessionStorage.getItem('language') || 'English';
  const isSpanish = Boolean(language==='Spanish' ? true : false)
  const highlighted = { backgroundColor: '#eaf8ea', borderBottom: '2px solid #708090', borderRight: '2px solid #bdc5cc', borderTop: 'none', borderLeft: 'none' };
  const nonHighlighted = { };
  return (
    <>
        <Link
          to={routes.taggedUsers({ tag: "church-and-state-relations" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'church-and-state-relations' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Relaci&oacute;n Iglesia-Estado</span> : <span>Church-State relations</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "catholicism-and-gender" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'catholicism-and-gender' ? highlighted : nonHighlighted}
          >
          {isSpanish ? <span>Catolicismo y g&eacute;nero</span> : <span>Catholicism and gender</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "right-and-left-wing-politics" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'right-and-left-wing-politics' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Derechas y/o izquierdas</span> : <span>Right and left-wing politics</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "violence-militancy-martyrdom" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'violence-militancy-martyrdom' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Violencia, militancia y martirio</span> : <span>Violence, militancy, and martyrdom</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "catholicism-and-youth-student-groups" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'catholicism-and-youth-student-groups' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Catolicismo y juventudes</span> : <span>Catholicism and youth/student groups</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "nationalism" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'nationalism' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Nacionalismo</span> : <span>Nationalism</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "migrations" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'migrations' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Migraciones</span> : <span>Migrations</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "modernity-secularization-sciences" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'modernity-secularization-sciences' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Modernidad, ciencias y secularizaci&oacute;n</span> : <span>Modernity, secularization, and the sciences</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "press-literature-intellectual-history" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'press-literature-intellectual-history' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Prensa, literatura e historia intelectual</span> : <span>Press, literature, and intellectual history</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "music-and-arts" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'music-and-arts' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>M&uacute;sica y artes</span> : <span>Music and the arts</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "visual-culture" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'visual-culture' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Cultura visual</span> : <span>Visual culture</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "transnational-and-international-history" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'transnational-and-international-history' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Historia transnacional o internacional</span> : <span>Transnational and/or international history</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "local-and-regional-history" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'local-and-regional-history' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Historia local o regional</span> : <span>Local and/or regional history</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "oral-history" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'oral-history' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Testimonio oral</span> : <span>Oral history</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "race-and-racism" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'race-and-racism' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Etnia, razas y racismo</span> : <span>Race and racism</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "devotions" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'devotions' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Devociones</span> : <span>Devotions</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "clergy" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'clergy' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Clero</span> : <span>Clergy</span>}
          </div>
        </Link>

        <Link
          to={routes.taggedUsers({ tag: "liturgy" })}
          className='tagLink'
        >
          <div
            style={props.tag && props.tag == 'litugy' ? highlighted : nonHighlighted}
          >
            {isSpanish ? <span>Liturgia</span> : <span>Liturgy</span>}
          </div>
        </Link>
    </>
  )
}

export default TagLinks
