export const getLoggedInUser = () => sessionStorage.getItem('user')?
  JSON.parse(sessionStorage.getItem('user'))
  : []
