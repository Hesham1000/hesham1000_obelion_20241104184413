import React from 'react';
import SignUp from './components/SignUp/SignUp.js';
import BlogPost from './components/BlogPost/BlogPost.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <SignUp />
        <BlogPost />
      </main>
      <footer>
        <p>© 2023 My React App. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
