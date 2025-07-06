import React from "react";
// import Axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import TripList from "./components/Trips/TripList";
import AddTrip from "./components/Trips/AddTrip";
import EditTrip from "./components/Trips/EditTrip";
import Itinerary from "./components/Itinerary/Itinerary";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { AuthProvider } from "./context/AuthContext";


const App = () => {
  // const [data,setData]=useState("");

  // const getData=async()=>{
  //   const response=await Axios.get("http://localhost:5000/getData");
  //   setData(response.data);
  // }

  // useEffect(()=>{
  //   getData()
  // },[]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/trips" element={<TripList />} />
        <Route path="/add-trip" element={<AddTrip />} />
        <Route path="/edit-trip/:id" element={<EditTrip />} />
        <Route path="/itinerary/:tripId" element={<Itinerary />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
