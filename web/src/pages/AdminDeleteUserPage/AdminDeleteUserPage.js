import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout';
import { useState } from 'react'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
// import DeleteUsers from 'src/components/User/DeleteUser'
import DeleteUsersCell from 'src/components/DeleteUsersCell'
import { useQuery, useMutation } from '@redwoodjs/web'
import USER_QUERY from 'src/graphql-helpers/userquery'
import dummyObject from 'src/graphql-helpers/dummyobject'

const AdminDeleteUserPage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)
  const currentUser = getLoggedInUser();
  const currentUserId = currentUser.id;

  const { loading:useQueryLoading, error: useQueryError, data } = currentUserId ?
    useQuery(USER_QUERY, {
      variables: { currentUserId }
    })
    :
    dummyObject;

  return (
    <MainLayout
      language={currentUser.preferSpanish ? 'Spanish' : language}
      setLanguage={setLanguage}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    >
    {((currentUser?.localSessionPassword === data?.user.localSessionPassword) && data?.user.isAdmin) ? (
      <DeleteUsersCell />
      ):
      <InvalidCredentials />}
    </MainLayout>
  )
}

export const InvalidCredentials = () => {
  return (
    <div>
      <h2>Invalid credentials</h2>
    </div>
  )
}


export default AdminDeleteUserPage
