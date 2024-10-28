import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RestaurantsList from "./components/restaurants-list/restaurants-list";

function App() {
  return (
    <div className="App">
      <Header />
      <RestaurantsList />
      <Footer />
    </div>
  );
}

export default App;
