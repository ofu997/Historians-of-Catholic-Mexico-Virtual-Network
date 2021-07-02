export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String!
    password: String!
    isAdmin: Boolean!
    jwt: String
    localSessionPassword: String
    preferSpanish: Boolean!
    bio: String
    location: String
    university: String
    credentials: String
    status: String
    profilePicUrl: String
    linkAcademia: String
    linkTwitter: String
    linkLinkedIn: String
    otherMedia: String
    pub1: String
    pub1desc: String
    pub2: String
    pub2desc: String
    pub3: String
    pub3desc: String
    pub4: String
    pub4desc: String
    focusByTopic: String
    focusByEra: String
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }

  input CreateUserInput {
    email: String!
    name: String!
    password: String!
    isAdmin: Boolean!
    jwt: String
    localSessionPassword: String
    preferSpanish: Boolean!
    bio: String
    location: String
    university: String
    credentials: String
    status: String
    profilePicUrl: String
    linkAcademia: String
    linkTwitter: String
    linkLinkedIn: String
    otherMedia: String
    pub1: String
    pub1desc: String
    pub2: String
    pub2desc: String
    pub3: String
    pub3desc: String
    pub4: String
    pub4desc: String
    focusByTopic: String
    focusByEra: String
  }

  input UpdateUserInput {
    email: String
    name: String
    password: String
    isAdmin: Boolean
    jwt: String
    localSessionPassword: String
    preferSpanish: Boolean
    bio: String
    location: String
    university: String
    credentials: String
    status: String
    profilePicUrl: String
    linkAcademia: String
    linkTwitter: String
    linkLinkedIn: String
    otherMedia: String
    pub1: String
    pub1desc: String
    pub2: String
    pub2desc: String
    pub3: String
    pub3desc: String
    pub4: String
    pub4desc: String
    focusByTopic: String
    focusByEra: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
