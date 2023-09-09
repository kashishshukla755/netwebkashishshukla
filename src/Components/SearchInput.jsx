// SearchInput.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      axios
        .get(`https://dummyjson.com/products/search?q=${debouncedSearchTerm}`)
        .then((response) => {
          setSearchResults(response.data.products);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setLoading(false);
        });
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  const handleSearch = () => {
    setDebouncedSearchTerm(searchTerm);
  };

  return (
    <div>
      <h2>Search Products</h2>
      <input
        type="text"
        placeholder="Enter a product name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <div>Loading...</div>}

      {searchResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchInput;
