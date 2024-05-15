import { render } from '@redwoodjs/testing'

import TagAndSearch from './TagAndSearch'

describe('TagAndSearch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TagAndSearch />)
    }).not.toThrow()
  })
})
