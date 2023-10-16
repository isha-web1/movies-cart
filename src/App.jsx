import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

function App() {
  const [watchTime, setWatchTime] = useState("")
  const handleWatchTime = (time) => {
   const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
   if(previousWatchTime){
    const sum = previousWatchTime + time;
    localStorage.setItem("watchTime", sum)
    setWatchTime(sum)
   }
   else{
    localStorage.setItem("watchTime", time);
    setWatchTime(time)
   }
  }
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-8 ">
        <div className="home-container col-span-8 md:col-span-6">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="sideCart col-span-8 md:col-span-2 outline outline-offset-2 outline-1 text-center py-4">
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
    </>
  );
}

export default App;

