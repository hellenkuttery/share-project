import './App.css';
import Signup from "./pages/Signup";
// import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar"

function App() {
  console.log(process.env)
  return (
  
    <div className="App">
        <Navbar/>
        <br></br> <br></br>
        <Signup/>
    </div>
  );
}

export default App;
