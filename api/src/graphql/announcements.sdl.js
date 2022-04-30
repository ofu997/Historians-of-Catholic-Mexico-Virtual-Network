export const schema = gql`
  type Announcement {
    id: Int!
    englishHeadline: String!
    englishSubheadline: String
    spanishHeadline: String
    spanishSubheadline: String
    date: String
    spanishDate: String
    important: Boolean
  }

  type Query {
    announcements: [Announcement!]! @skipAuth
    announcement(id: Int!): Announcement @skipAuth

    importantAnnouncements: [Announcement!] @skipAuth
  }

  input CreateAnnouncementInput {
    englishHeadline: String!
    englishSubheadline: String
    spanishHeadline: String
    spanishSubheadline: String
    date: String
    spanishDate: String
    important: Boolean
  }

  input UpdateAnnouncementInput {
    englishHeadline: String
    englishSubheadline: String
    spanishHeadline: String
    spanishSubheadline: String
    date: String
    spanishDate: String
    important: Boolean
  }

  type Mutation {
    createAnnouncement(input: CreateAnnouncementInput!): Announcement! @skipAuth
    updateAnnouncement(id: Int!, input: UpdateAnnouncementInput!): Announcement! @skipAuth
    deleteAnnouncement(id: Int!): Announcement! @skipAuth
  }
`
