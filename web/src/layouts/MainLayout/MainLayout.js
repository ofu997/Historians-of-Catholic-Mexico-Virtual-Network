import Header from 'src/components/Header'
import logo from '../../../public/histcatmex-logo.png'
import twitterLogo from '../../../public/twitter.png'
import mail from '../../../public/mail.png'
import youtubeLogo from '../../../public/youtube.png'
import facebookLogo from '../../../public/facebook.png'

const MainLayout = props => {
  const { language, setLanguage } = props
  const { isLoggedIn, setIsLoggedIn } = props
  return (
    <>
      <div className="rw-scaffold">
        <Header
          setLanguage={setLanguage}
          language={language}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <main className="rw-main">
          {React.Children.map(props.children,
            child => {
              return React.cloneElement(child, {language, setLanguage, isLoggedIn})
            }
          )}
        </main>
        {props.showFooter != false && (
          <footer className='flex' id='footer'>
            <div className='flex'>
              <div style={{ alignContent: 'center' }}>
                <img src={logo} alt='hcm-logo' height={20} width={20} />
              </div>
              <p id='footer-title' className='rokkitt'>HISTCATMEX&trade;</p>
            </div>

            <a href="mailto:histcatmex@gmail.com" target='_blank noopener noreferrer'>
              <img src={mail} alt='twitter-logo' height={15} width={15} />
            </a>

            <a href="https://twitter.com/histcatmex" target='_blank noopener noreferrer'>
              <img src={twitterLogo} alt='twitter-logo' height={15} width={15} />
            </a>

            <a href='https://www.facebook.com/groups/1248799175481178' target='_blank noopener noreferrer'>
              <img src={facebookLogo} alt='facebook-logo' height={20} width={20} />
            </a>

            <a href="https://tinyurl.com/h62vyw62" target='_blank noopener noreferrer'>
              <img src={youtubeLogo} alt='youtube-logo' height={15} />
            </a>
          </footer>
        )}
      </div>
    </>
  )
}

export default MainLayout
