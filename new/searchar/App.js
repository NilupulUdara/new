import React from 'react';
import SearchBar from './SearchBar';

const App = () => {
  const items = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
  ];

  return (
    <div>
      <h1>Simple Search Bar</h1>
      <SearchBar items={items} />
    </div>
  );
};

export default App;
