import Header from 'src/components/Header'

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="rw-scaffold">
        <Header />
        <main className="rw-main">{children}</main>
      </div>
    </>
  )
}

export default MainLayout
