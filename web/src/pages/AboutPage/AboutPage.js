import { Link, routes } from '@redwoodjs/router'
import languageContext from 'src/languageContext';
import { useContext } from 'react'

const AboutPage = () => {

  // const { language } = useContext(languageContext)
  const language = sessionStorage.getItem('language');
  return (
    <>
      <h1>AboutPage</h1>
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.js</code>
      </p>
        <div>
          My default route is named <code>about</code>, link to me with `
          <Link to={routes.about()}>About</Link>`
          <p>{language}</p>
          {/* <languageContext.Consumer>
          {language =>
          <>
          <p>
          Language is : {language.language}

          </p>
          <Console language={language} />
          </>
          }
          </languageContext.Consumer> */}
        </div>
    </>
  )
}

const Console = props => {
  // console.log(`language is : ${props.language}`)
  console.log('table of language')
  console.table(props.language)
  return false;
}

export default AboutPage
