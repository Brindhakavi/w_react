// import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
// import HOC from "./HOC";
// import React from "react";
// import Home from "./Home";
// import Courses from "./Courses";
// import AboutUS from "./AboutUS";
// import ContactUS from "./ContactUS"
import ListProducts from "./ListProducts";

const App = () => {
  return (
   <div>
      <ListProducts/>
        
        {/* <Routes>
          <Route exact path="/" element={<HOC childComponent={<Home />} />} />
          <Route exact path="/Home" element={<HOC childComponent={<Home />} />} />
          <Route exact path="/Courses" element={<HOC childComponent={<Courses />} />} />
          <Route exact path="/AboutUS" element={<HOC childComponent={<AboutUS />} />} />
          <Route exact path="/ContactUS" element={<HOC childComponent={<ContactUS />} />} />
        </Routes>
      </Router> */}
    </div>
  );
}
export default App;