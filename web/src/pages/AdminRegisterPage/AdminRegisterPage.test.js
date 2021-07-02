import { render } from '@redwoodjs/testing'

import AdminRegisterPage from './AdminRegisterPage'

describe('AdminRegisterPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminRegisterPage />)
    }).not.toThrow()
  })
})
