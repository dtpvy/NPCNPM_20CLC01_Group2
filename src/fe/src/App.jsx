import React from "react";
import Login from "./components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile/Profile.jsx";
import Bought from "./Components/Profile/bought.jsx";
import Layout from "./components/Layout";
import EditProfile from "./Components/Profile/editProfile.jsx";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="bought" element={<Bought />} />
        <Route path="profile" element={<Profile />} />
        <Route path="editprofile" element={<EditProfile />} />
      </Route>
    </Routes>
  );
};

export default App;
