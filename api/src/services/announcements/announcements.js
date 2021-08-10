import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  // rules.add(requireAuth)
  rules.skip()
}

export const announcements = () => {
  return db.announcement.findMany()
}

export const announcement = ({ id }) => {
  return db.announcement.findUnique({
    where: { id },
  })
}

export const createAnnouncement = ({ input }) => {
  return db.announcement.create({
    data: input,
  })
}

export const updateAnnouncement = ({ id, input }) => {
  return db.announcement.update({
    data: input,
    where: { id },
  })
}

export const deleteAnnouncement = ({ id }) => {
  return db.announcement.delete({
    where: { id },
  })
}

export const importantAnnouncements = () => {
  return db.announcement.findMany({
    where: {
      important : true
    }
  })
}
