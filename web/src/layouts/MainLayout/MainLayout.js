import Header from 'src/components/Header'

const MainLayout = props => {
  const { language, setLanguage } = props
  return (
    <>
      <div className="rw-scaffold">
        <Header
          setLanguage={setLanguage}
          language={language}
        />
        <main className="rw-main">

          {React.Children.map(props.children,
            child => {
              return React.cloneElement(child, {language, setLanguage})
            }
          )}
        </main>
      </div>
    </>
  )
}

export default MainLayout
