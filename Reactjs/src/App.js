import React from 'react';
import './App.css';
import BusinessList from './components/businessList/businessList';
import SearchFilter from './components/searchFilter/comp';

function App() {
  return (
    <React.Fragment>
      <SearchFilter />
  <BusinessList />

    </React.Fragment>
  );
}

export default App;
