import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="overlay"></div>
      <header className="nav-header fixed-top">
        <Header />
      </header>
      <main className="h-100">
        <Main />
      </main>
    </div>
  );
}

export default App;
