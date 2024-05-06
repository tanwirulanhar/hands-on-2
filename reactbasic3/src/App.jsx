//cara membuat state
//import state dulu 1
import { useState } from "react";
import Sidebar from "./component/Sidebar";

const App = () => {
  //state 2 wajib menggunakan set
  // const [age, setAge] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  // const [hideSidebar, setHideSidebar] = useState(true);


  //membuat show sidebar
  const toggleSidebar = () => {
     
    setShowSidebar(!showSidebar);
  };


//   let thisYear = new Date().getFullYear();
//   let bornYear = 1991;
//   //penggunaan function state

//  const calculateAge = () => {
//   const age = thisYear - bornYear;
//   setAge(age);
//  };
  
  
  return (
    <div>
      {/* <h1>{age}</h1>
      <button onClick={calculateAge}>calculate my age</button> */}
      {!showSidebar &&(
        <button onClick={toggleSidebar} style={{transform: "rotate(90deg)", marginBottom: "40px"}}>
          |||</button>
      )}
      

      {showSidebar && <Sidebar toggleSidebar={toggleSidebar}/>}


    </div>
  )
};

export default App;