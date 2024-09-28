import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/fetchProducts'; 

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts({ category: selectedCategory, search: searchTerm, skip }));
  }, [dispatch, selectedCategory, searchTerm, skip]);

  const handleLoadMore = () => {
    setSkip((prevSkip) => prevSkip + 10);
  };

  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-cover rounded-t-lg" />
            <div className="p-2">
              <h3 className="text-md font-semibold">{product.title}</h3>
              <p className="text-gray-600 text-sm">Price: ₹{(product.price *"85").toFixed(2)}</p>
              <button className="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {products.length > 0 && (
        <button
          onClick={handleLoadMore}
          className="ml-[45%] mb-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default ProductList;
