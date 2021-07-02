export const schema = gql`
  type Announcement {
    id: Int!
    headline: String!
    subheadline: String
    date: String
  }

  type Query {
    announcements: [Announcement!]!
    announcement(id: Int!): Announcement
  }

  input CreateAnnouncementInput {
    headline: String!
    subheadline: String
    date: String
  }

  input UpdateAnnouncementInput {
    headline: String
    subheadline: String
    date: String
  }

  type Mutation {
    createAnnouncement(input: CreateAnnouncementInput!): Announcement!
    updateAnnouncement(id: Int!, input: UpdateAnnouncementInput!): Announcement!
    deleteAnnouncement(id: Int!): Announcement!
  }
`
