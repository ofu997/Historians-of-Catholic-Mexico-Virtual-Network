import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { useState } from 'react'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import TagAndSearch from 'src/components/TagAndSearch/TagAndSearch'
import SearchResultCell from 'src/components/SearchResultCell/SearchResultCell'

const currentUser = getLoggedInUser();

const SearchPage = props => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)

  return (
    <>
      <MainLayout
        language={currentUser.preferSpanish ? 'Spanish' : language}
        setLanguage={setLanguage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        showFooter={false}
      >
        <SearchPageContent entry={props.entry} />
      </MainLayout>
    </>
  )
}

const SearchPageContent = props =>
  <>
    <TagAndSearch />
    <SearchResultCell entry={props.entry} />
  </>
export default SearchPage
