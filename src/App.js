import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
 import Login from "./Login";
 import ParentClass from "./ParentClass";
// import ClassLogin from "./ClassLogin"

const App = ()=>{
  return(
   <Router>
    <div className = "App">
      <ul>
        <li>
          <Link to = "/count">First page</Link>
        </li>
        <li>
          <Link to = "/Loginpage">Second page</Link>
        </li>
      </ul>
<Routes>
  <Route exact path = "/Count" element = {
    <ParentClass/>
  }></Route>
  <Route exact path = "/Loginpage" element = {
    <Login/>
  } />
</Routes>
    </div>
   </Router>
  );
}
export default App;