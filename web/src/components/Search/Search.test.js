import { render } from '@redwoodjs/testing'

import Search from './Search'

describe('Search', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Search />)
    }).not.toThrow()
  })
})
