import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

function App() {
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-8 ">
        <div className="home-container col-span-8 md:col-span-6">
          <Home></Home>
        </div>
        <div className="sideCart col-span-8 md:col-span-2 outline outline-offset-2 outline-1 text-center py-4">
          <SideCart></SideCart>
        </div>
      </div>
    </>
  );
}

export default App;

