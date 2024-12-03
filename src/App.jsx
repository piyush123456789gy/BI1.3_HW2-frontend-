import useFetch from "./useFetch";
import Hotels from "./components/Hotels";
import HotelByName from "./components/HotelByName";
import AddHotel from "./components/AddHotel";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <h1>⚛️ react playground! [edited by piyush goyal]</h1>
        <p>Crafted with care by Tanay Pratap ❤️ - Happy coding!</p>
        <AddHotel />
        <Hotels />
        <HotelByName name="Sunset Resort" />
      </div>
    </>
  );
}

export default App;
