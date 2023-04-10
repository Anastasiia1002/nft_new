import React from "react";

import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import News from "./components/News/News";
import AppMenu from "./components/AppMenu/AppMenu";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import PrivateRoute from "./utils/router/PrivateRoute";
import PublicRoute from "./utils/router/PublicRoute";

function App() {
  return (
    <>
      <Routes>
        {/* <AppMenu/>
<Main/> */}
        <Route path="/" element={<AppMenu />}>
         <Route index element={<Home />} /> 
          <Route path="/News" element={<News />} />

          <Route element={<PrivateRoute/>}>
          <Route path="/Profile" element={<Profile />} />
          </Route>

          <Route element={<PublicRoute />}>
          <Route  path="/Login" element={<Login />} />
          <Route  path="/Registration" element={<Registration />} />
          </Route>

       

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {/* <News /> */}
    </>
  );
}

export default App;
