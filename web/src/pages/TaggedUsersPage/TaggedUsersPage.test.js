import { render } from '@redwoodjs/testing'

import TaggedUsersPage from './TaggedUsersPage'

describe('TaggedUsersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TaggedUsersPage />)
    }).not.toThrow()
  })
})
