// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/admin/delete-user" page={AdminDeleteUserPage} name="adminDeleteUser" />
      <Route path="/admin/register-user" page={AdminRegisterUserPage} name="adminRegisterUser" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/admin/announcements/new" page={AnnouncementNewAnnouncementPage} name="newAnnouncement" />
      <Route path="/admin/announcements/{id:Int}/edit" page={AnnouncementEditAnnouncementPage} name="editAnnouncement" />
      {/* <Route path="/announcements/{id:Int}" page={AnnouncementAnnouncementPage} name="announcement" /> */}
      <Route path="/announcements" page={AnnouncementAnnouncementsPage} name="announcements" />
      {/* <Route path="/users/new" page={UserNewUserPage} name="newUser" /> */}
      <Route path="/profiles/{id:Int}/edit" page={UserEditUserPage} name="editProfile" />
      <Route path="/profiles/{id:Int}" page={UserUserPage} name="profile" />
      {/* <Route path="/users" page={UserUsersPage} name="users" /> */}
      <Route path="/admin/register-admin" page={AdminRegisterPage} name="adminRegister" />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/profiles" page={ProfilesPage} name="profiles" />
      <Route path="/profiles/tags/{tag:String}" page={TaggedUsersPage} name="taggedUsers" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
