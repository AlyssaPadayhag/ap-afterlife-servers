import "./App.scss";
import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Afterlife Gaming Community</h1>
        <div>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-steam-symbol"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </header>
      <Navigation />
    </div>
  );
}

export default App;
