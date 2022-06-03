import "./App.css";
import Dictionary from "./Dictionary";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="galaxy" />
        <Contact />
      </div>
    </div>
  );
}

export default App;
