import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const currentUser = getLoggedInUser();
const language = currentUser.preferSpanish ? 'Spanish' : sessionStorage.getItem('language') || 'English';
const isSpanish = Boolean(language==='Spanish' ? true : false)

  const onChange = (event) => {
    setSearchInput(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <div className='flex' id='search'>
        <input placeholder={isSpanish ? 'Buscar':'Search'}
          value={searchInput}
        onChange={onChange}
        />
        <Link
          to={routes.search({ entry:searchInput })}
          className='tagLink'
        >
          <button
            type="button"
            className="rw-button"
            onClick={onSubmit}
          >
            {isSpanish?'Ir':'Go'}
          </button>
        </Link>
      </div>
    </>
  )
}

export default Search
