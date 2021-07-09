import Header from 'src/components/Header'

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
      </div>
    </>
  )
}

export default MainLayout
