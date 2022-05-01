import "./App.css";
import Minter from "./pages/minter";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path="/" component={Minter} />
      </main>
    </div>
  );
}

export default App;
