import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
<<<<<<< Updated upstream
=======
  const serverUrl = `http://localhost:8080`
  const labelList = [
    {label: `Home`, link: `/`},
    {label: `WARN List`, link: `/list`},
    {label: `About`, link: `/about`}
  ]

  // useEffect(() => {
  //   async function fetchWarnList(){
  //     try {
  //       axios
  //       .get(serverUrl)
  //     }
  //   }
  // },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
