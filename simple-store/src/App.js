import "./App.css";
import HomePage from "./components/pages/home/HomePage";
import ProductItem from "./components/UI/products/ProductItem";

function App() {
  return (
    <div className="App">
      <HomePage />
      <ProductItem title="First product" />
      <ProductItem title="First product" />
    </div>
  );
}

export default App;
