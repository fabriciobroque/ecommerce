import "./App.css";
import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import { RouteApp } from "./route";
import { CarrinhoContextProvider } from "./hooks/CarrinhoContext";

function App() {
  return (
    <div className="App">
      <CarrinhoContextProvider>
        <RouteApp />
      </CarrinhoContextProvider>
    </div>
  );
}

export default App;
