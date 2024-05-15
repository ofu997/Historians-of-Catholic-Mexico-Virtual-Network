import TagLinks from 'src/components/Tag/TagLinks'
import Search from 'src/components/Search/Search'

const TagAndSearch = props => {
  return (
    <>
      <section className='flex-wrap-items tags v-margin'>
        <TagLinks
          tag={props.tag}
        />
      </section>
      <Search />
    </>
  )
}

export default TagAndSearch
