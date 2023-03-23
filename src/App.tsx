import "./App.css";
import UserProvider from "./context/UserContext";
import { RoutesApp } from "./routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserProvider>
          <RoutesApp />
        </UserProvider>
      </header>
    </div>
  );
}

export default App;
