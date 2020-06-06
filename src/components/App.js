import React from 'react';
import LinkList from './LinkList';
import CreateLink from './CreateLink';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <CreateLink />
      <LinkList />
    </div>
  );
}

export default App;
