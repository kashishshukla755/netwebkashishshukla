


// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function ProductSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [products, setProducts] = useState([]);
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
//   const location = useLocation();

//   useEffect(() => {
//     const debounceTimeout = setTimeout(() => {
//       setDebouncedSearchTerm(searchTerm);
//     }, 300);

//     return () => clearTimeout(debounceTimeout);
//   }, [searchTerm]);

//   useEffect(() => {
//     if (debouncedSearchTerm || location.search) {
//       const searchQuery = debouncedSearchTerm || new URLSearchParams(location.search).get('q');
//       fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
//         .then((response) => response.json())
//         .then((data) => {
//           if (data && data.products) {
//             setProducts(data.products);
//           } else {
//             setProducts([]); // Set an empty array as fallback
//           }
//         })
//         .catch((error) => {
//           console.error('API error:', error);
//           setProducts([]); // Set an empty array on API error
//         });
//     } else {
//       setProducts([]); // Set empty array if the search term is empty
//     }
//   }, [debouncedSearchTerm, location.search]);

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <div>
//               <img src={product.thumbnail} alt={product.title} />
//               <h3>{product.title}</h3>
//               <p>{product.description}</p>
//               <p>Price: ${product.price}</p>
//               <p>Rating: {product.rating}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductSearch;


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const location = useLocation();

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm && location.search) {
      const searchQuery = debouncedSearchTerm;
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.products) {
            setProducts(data.products);
          } else {
            setProducts([]); // Set an empty array as fallback
          }
        })
        .catch((error) => {
          console.error('API error:', error);
          setProducts([]); // Set an empty array on API error
        });
    } else {
      setProducts([]); // Set empty array if the search term is empty
    }
  }, [debouncedSearchTerm, location.search]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(e.target.value);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleSearch} // Listen for Enter key press
      />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;

