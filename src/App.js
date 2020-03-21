import React, {useEffect} from 'react';
import './App.css';

function App() {

  useEffect(() => {
    console.log('Hi jeff and Willie')
    
  }, [])
  return (
    <div className="App">
      <h1>hello world</h1>
      <h1>{Math.floor(Math.random() * 100)}</h1>
    </div>
  );
}

export default App;
