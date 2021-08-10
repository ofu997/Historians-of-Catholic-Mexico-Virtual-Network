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
    announcements: [Announcement!]!
    announcement(id: Int!): Announcement

    importantAnnouncements: [Announcement!]
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
    createAnnouncement(input: CreateAnnouncementInput!): Announcement!
    updateAnnouncement(id: Int!, input: UpdateAnnouncementInput!): Announcement!
    deleteAnnouncement(id: Int!): Announcement!
  }
`
