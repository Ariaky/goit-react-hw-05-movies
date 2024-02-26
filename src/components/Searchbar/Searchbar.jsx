const Searchbar = ({ setSearchParams, fetchMoviesFromApi }) => {
    const handleSubmit = async e => {
      e.preventDefault();
      const searchForm = e.currentTarget;
      const searchQuery = searchForm.elements.query.value;
      setSearchParams({ query: searchQuery });
      searchForm.reset();
      fetchMoviesFromApi(searchQuery);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    );
  };
  
  export default Searchbar;