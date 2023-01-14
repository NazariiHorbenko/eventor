import React from "react";
import Loginpage from "./pages/login_screen/Loginpage";
import Signuppage from "./pages/sign_up_screen/Signuppage";
import Menu from "./components/Menu";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import "./style/index.css";
function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      {/* <Signuppage /> */}
    {/* <Loginpage /> */}

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="register" element={<Signuppage />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
