import React from 'react';
import { useGlobalContext } from './context';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
// items

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
