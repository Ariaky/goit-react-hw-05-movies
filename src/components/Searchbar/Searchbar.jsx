import { Form, Input, Button } from './SearchBar.styled';

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
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          name="query" 
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name..."
        />
        <Button type="submit">Search</Button>
      </Form>
    );
  };
  
  export default Searchbar;