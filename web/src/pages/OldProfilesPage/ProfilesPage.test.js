import { render } from '@redwoodjs/testing'

import ProfilesPage from './OldProfilesPage'

describe('ProfilesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfilesPage />)
    }).not.toThrow()
  })
})
