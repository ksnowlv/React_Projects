import logo from './logo.svg';
import './App.css';
import AboutPage from './pages/AboutPage';
import MyButton from './components/MyButton';
import Gallery from './pages/Gallery';
import LikeButton from './components/LikeButton';
import ShoppingList from './pages/ShoppingList';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleOnClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

      <AboutPage />
      <h2>测试不同按钮间共享count计数</h2>
      <MyButton count={count} onClick={handleOnClick}/> 
      <MyButton count={count} onClick={handleOnClick}/> 
      <MyButton count={count} onClick={handleOnClick}/>
      <Gallery/>
      <LikeButton/>
      <ShoppingList/>
    </div>
  );
}

export default App;
