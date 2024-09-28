import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from './store/fetchCategories'; 
import { fetchProducts } from './store/fetchProducts'; 
import CategorySelect from './components/CategorySelect';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';

const App = () => {
  const dispatch = useDispatch();
  const {selectedCategory, searchTerm } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts({ category: selectedCategory, search: searchTerm, skip: 0 }));
  }, [dispatch, selectedCategory, searchTerm]);

  return (
    <div>
      <header className="bg-blue-500 text-center text-white p-4 text-xl font-bold">
        Assingment
      </header>
      <CategorySelect />
      <SearchBar />
      <ProductList />
    </div>
  );
};

export default App;

// no debouncing hence it can make multiple api calls on typing.
// no shimmer effect
// no ui for pagination