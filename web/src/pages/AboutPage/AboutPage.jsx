import MainLayout from 'src/layouts/MainLayout/MainLayout';
import { useState } from 'react'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'

const AboutPage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)

  const currentUser = getLoggedInUser();

  return (
    <MainLayout
      language={currentUser.preferSpanish ? 'Spanish' : language}
      setLanguage={setLanguage}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    >
      <AboutPageContent />
    </MainLayout>
  )
}

const AboutPageContent = props => {
  const isSpanish = Boolean(props.language==='Spanish' ? true : false);
  return(
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      {isSpanish
      ? (
        <h3
        className='home-or-about-page-content rokkitt'>
          La Red de Historiadores del Catolicismo en México (HISTCATMEX) reúne a un conjunto de historiadores e investigadores de metodología
          multidisciplinaria cuyo objetivo es estudiar el catolicismo en México durante el siglo XX, en particular cómo la religión pudo fomentar
          comunidad, crear divisiones y transformar a México dentro y fuera de sus fronteras. Está compuesta de profesorxs consolidadxs,
          investigadores emergentes y estudiantes de posgrado, HISTCATMEX promueve el diálogo académico entre investigadores en México, Europa
          y las Américas. La Red es única en su alcance ya que aborda el catolicismo como fuerza política en la sociedad para entender cómo la
          religión llegó a contribuir a la propagación de distintas ideologías dentro del campo de derechas, izquierdas y demás. La Red se dedica
          a organizar talleres, seminarios académicos y mesas de conferencia. Actualmente estamos por organizar nuestro propio coloquio que pretende
          ir más allá del intercambio académico. HISTCATMEX busca desarrollar la conciencia pública sobre la historia del catolicismo en México y
          su influencia en debates contemporáneos. Para unirse a la red o solicitar más información, escribanos a histcatmex@gmail.com.
        </h3>
      )
      : (
        <h3
        className='home-or-about-page-content rokkitt'>
          Historians of Catholic Mexico Virtual Network (HISTCATMEX) brings together scholars who study Catholics and Catholicism in
          twentieth-century Mexico. Made up of tenured professors, senior scholars, advanced graduate students, and everyone in between,
          HISTCATMEX promotes academic dialogue between scholars based in Mexico, Europe, and the Americas. The network is the first of its
          kind, emphasizing the ways in which religion cultivates community, creates division, and transforms greater Mexico, both within and
          beyond its borders.  HISTCATMEX, in particular, strives to understand Catholicism as a political force in society that contributed
          to Mexicans’ dissemination of religiously-influenced ideas over time, whether on the political left, right, or taking a “middle path.”
          Having organized our own workshop series and conference panels, we are currently planning our own symposium for the future. In
          addition to cultivating scholarship, HISTCATMEX seeks to develop awareness about Mexican Catholic history and relevant contemporary
          issues. To join our network or request more information, please contact histcatmex@gmail.com.
        </h3>
      )}
      </div>
    </>
  )
}

const Console = props => {
  console.log('table of language')
  console.table(props.language)
  return false;
}

export default AboutPage
