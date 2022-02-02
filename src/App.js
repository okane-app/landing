import './App.css';
import okaneLogo from "./logo.png";

function App() {
  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <a href="https://github.com/okane-app/okane"><img src={okaneLogo} alt="Logo Okane" /></a>
      <div className="d-block">
        <h1 className="App-title">Okane</h1>
        <h2 className="App-motto">Ne dépense plus jamais de trop.</h2>
      </div>
    </div>
  )
}

export default App;
