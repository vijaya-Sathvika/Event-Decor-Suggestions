import React from 'react';
import Header from './Header';
import NavBar from './NavBar';  // Import the new NavBar component
import MainContent from './MainContent';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <NavBar /> {/* The navigation bar will be right below the header */}
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;