import React, {useState} from 'react';
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";


function Menu() {
	const [navVisible, showNavbar] = useState(false);

	return (
		<BrowserRouter >
			<div className="App">
				<Navbar visible={ navVisible } show={ showNavbar } />
				<Routes>
					<Route path="/" element={<Navigate to="/dashboard" />} />
					<Route path='/home' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Home</h1>
							
						</div>
					} />
					<Route path='/search' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Search</h1>
						</div>
					}/>
					<Route path='/map' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Map</h1>
						</div>
					}/>
					<Route path='/massages' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Massages</h1>
						</div>
					}/>
					<Route path='/notification' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Notification</h1>
						</div>
					}/>
					<Route path='/profile' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Profile</h1>
						</div>
					}/>
					<Route path='/premium' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Premium</h1>
						</div>
					}/>
					<Route path='/more' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>More</h1>
						</div>
					}/>
				</Routes>
			</div>
		</BrowserRouter>
  );
}

export default Menu;