import { render } from '@redwoodjs/testing'

import AdminDeleteUserPage from './AdminDeleteUserPage'

describe('AdminDeleteUserPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminDeleteUserPage />)
    }).not.toThrow()
  })
})
