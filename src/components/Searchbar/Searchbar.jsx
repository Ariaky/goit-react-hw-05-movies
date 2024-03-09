import { Form, Input, Button } from './SearchBar.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Searchbar = ({ setSearchParams, fetchMoviesFromApi }) => {
    const handleSubmit = async e => {
      e.preventDefault();
      const searchForm = e.currentTarget;
      const searchQuery = searchForm.elements.query.value;

      if (!searchQuery.trim()) {
        Notify.warning('Please enter a movie name.');
        return;
      }

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