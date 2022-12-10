const SearchTerm = (props) => {
    
    return(
        <form onSubmit={props.onSubmit}>
        <input name="searchInput" />
        <button> SUBMIT </button>
      </form>
    )
}
export default SearchTerm