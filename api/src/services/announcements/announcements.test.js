import {
  announcements,
  announcement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from './announcements'

describe('announcements', () => {
  scenario('returns all announcements', async (scenario) => {
    const result = await announcements()

    expect(result.length).toEqual(Object.keys(scenario.announcement).length)
  })

  scenario('returns a single announcement', async (scenario) => {
    const result = await announcement({ id: scenario.announcement.one.id })

    expect(result).toEqual(scenario.announcement.one)
  })

  scenario('creates a announcement', async () => {
    const result = await createAnnouncement({
      input: { headline: 'String' },
    })

    expect(result.headline).toEqual('String')
  })

  scenario('updates a announcement', async (scenario) => {
    const original = await announcement({ id: scenario.announcement.one.id })
    const result = await updateAnnouncement({
      id: original.id,
      input: { headline: 'String2' },
    })

    expect(result.headline).toEqual('String2')
  })

  scenario('deletes a announcement', async (scenario) => {
    const original = await deleteAnnouncement({
      id: scenario.announcement.one.id,
    })

    const result = await announcement({ id: original.id })

    expect(result).toEqual(null)
  })
})
