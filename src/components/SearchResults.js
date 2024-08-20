import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get('query');

  return (
    <div>
      <h2>Resultados de búsqueda para: {searchTerm}</h2>
      {/* Aquí irán los productos filtrados */}
    </div>
  );
}

export default SearchResults;
