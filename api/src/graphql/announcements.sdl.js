export const schema = gql`
  type Announcement {
    id: Int!
    englishHeadline: String!
    englishSubheadline: String
    spanishHeadline: String
    spanishSubheadline: String
    date: String
  }

  type Query {
    announcements: [Announcement!]!
    announcement(id: Int!): Announcement
  }

  input CreateAnnouncementInput {
    englishHeadline: String!
    englishSubheadline: String
    spanishHeadline: String
    spanishSubheadline: String
    date: String
  }

  input UpdateAnnouncementInput {
    englishHeadline: String
    englishSubheadline: String
    spanishHeadline: String
    spanishSubheadline: String
    date: String
  }

  type Mutation {
    createAnnouncement(input: CreateAnnouncementInput!): Announcement!
    updateAnnouncement(id: Int!, input: UpdateAnnouncementInput!): Announcement!
    deleteAnnouncement(id: Int!): Announcement!
  }
`
