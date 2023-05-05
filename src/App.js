import React from 'react';
import Header from './Header';
import Video from './Video1';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
      <iframe class="video" width="640" height="360" src="https://www.youtube.com/embed/ABF7op2W8pM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      </main>
      <Footer />
    </div>
  );
}

export default App;
