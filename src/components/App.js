import { Routes, Route } from "react-router-dom";
import Event from "./Event";
import Home from "./Home";
import Create from "./Create";
import '../App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/create" element={ <Create /> } />
        <Route path="/event" element={ <Event /> } />
      </Routes>
    </div>
  );
}

export default App;
