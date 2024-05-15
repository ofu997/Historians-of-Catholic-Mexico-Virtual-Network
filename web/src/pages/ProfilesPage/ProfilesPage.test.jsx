import { render } from '@redwoodjs/testing'

import ProfilesPage from './ProfilesPage'

describe('ProfilesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfilesPage />)
    }).not.toThrow()
  })
})
