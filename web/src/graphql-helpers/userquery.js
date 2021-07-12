const USER_QUERY = gql`
query GetUserById($currentUserId: Int!) {
  user (id: $currentUserId) {
    id
    isAdmin
    localSessionPassword
  }
}
`

export default USER_QUERY
