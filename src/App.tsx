import { FC } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const App: FC = () => {
  const title = import.meta.env.VITE_APP_TITLE;
  console.dir(import.meta.env);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default App;
