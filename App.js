import React from 'react';
import Navbar from './components/header/header'

import Body from "./components/Body/body";
import Footer from './components/Footer/footer'

function App() {
  return (
    <div className="App bg-light">
      <Navbar />

      <Body />
      <Footer />
    </div>
  );
}

export default App;
