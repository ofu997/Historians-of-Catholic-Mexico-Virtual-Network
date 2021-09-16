export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String!
    lastname: String
    password: String!
    isAdmin: Boolean!
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
    tagChurchStateRels: Boolean
    tagCathGender: Boolean
    tagRightLeftWing: Boolean
    tagViolenceMilitancyMartyrdom: Boolean
    tagCathYouthStudentGroups: Boolean
    tagNationalism: Boolean
    tagMigrations: Boolean
    tagModernitySecSciences: Boolean
    tagPressLitIntelHist: Boolean
    tagMusArts: Boolean
    tagVisCulture: Boolean
    tagTransIntlHist: Boolean
    tagLocRegHist: Boolean
    tagOralHist: Boolean
    tagRaceRacism: Boolean

  }

  type Query {
    users: [User!]!
    user(id: Int!): User

    findUsersByTag(tag: String): [User]
  }

  input CreateUserInput {
    email: String!
    name: String!
    password: String!
    isAdmin: Boolean
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
    tagChurchStateRels:Boolean
    tagCathGender: Boolean
    tagRightLeftWing: Boolean
    tagViolenceMilitancyMartyrdom: Boolean
    tagCathYouthStudentGroups: Boolean
    tagNationalism: Boolean
    tagMigrations: Boolean
    tagModernitySecSciences: Boolean
    tagPressLitIntelHist: Boolean
    tagMusArts: Boolean
    tagVisCulture: Boolean
    tagTransIntlHist: Boolean
    tagLocRegHist: Boolean
    tagOralHist: Boolean
    tagRaceRacism: Boolean
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input UpdateUserInput {
    email: String
    name: String
    lastname: String
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
    tagChurchStateRels:Boolean
    tagCathGender: Boolean
    tagRightLeftWing: Boolean
    tagViolenceMilitancyMartyrdom: Boolean
    tagCathYouthStudentGroups: Boolean
    tagNationalism: Boolean
    tagMigrations: Boolean
    tagModernitySecSciences: Boolean
    tagPressLitIntelHist: Boolean
    tagMusArts: Boolean
    tagVisCulture: Boolean
    tagTransIntlHist: Boolean
    tagLocRegHist: Boolean
    tagOralHist: Boolean
    tagRaceRacism: Boolean
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!

    loginUser(input: LoginInput!): User!
    createAdmin(input: CreateUserInput!): User!
    logoutUser(id: Int!): User!
  }
`
