import { render } from '@redwoodjs/testing'

import AdminRegisterUserPage from './AdminRegisterUserPage'

describe('AdminRegisterUserPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminRegisterUserPage />)
    }).not.toThrow()
  })
})
