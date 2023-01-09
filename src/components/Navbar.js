import React from 'react';
import {
	FaHome, 
	FaSearch,
	FaMapMarkerAlt,
	FaRegGem,
	FaRegCommentDots, 
	FaRegUserCircle,
	
	FaGripHorizontal, 
	FaHandshake,
	
} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

const ICON_SIZE = 25;

function Navbar() {

	return (
		<>
			
			<nav className={ 'navbar'  }>
				
				<div>
					<NavLink
						className="logo"
						
					>
							EvEntor
					</NavLink>
					<div className="links nav-top">
						<NavLink to="/home" className="nav-link">
							<FaHome size={ICON_SIZE} />
							{/* <img className='icon' src={require("../assets/Images/msg932933983-184997.jpg")}></img> */}
							<span>Home</span>
						</NavLink>
						<NavLink to="/search" className="nav-link">
							<FaSearch size={ICON_SIZE} />
							<span>Search </span>
						</NavLink>
						<NavLink to="/map" className="nav-link">
							<FaMapMarkerAlt size={ICON_SIZE} />
							<span>Map</span> 
						</NavLink>
						<NavLink to="/massages" className="nav-link">
							<FaRegCommentDots size={ICON_SIZE} />
							<span>Massages</span> 
						</NavLink>
						<NavLink to="/Notification" className="nav-link">
							<FaHandshake size={ICON_SIZE} />
							<span>Notification</span> 
						</NavLink>
						<NavLink to="/profile" className="nav-link">
							<FaRegUserCircle size={ICON_SIZE} />
							<span>Profile</span> 
						</NavLink>
					</div>
				</div>

				<div className="links">
					<NavLink to="/premium" className="nav-link">
						<FaRegGem size={ICON_SIZE} />
						<span>Premium</span> 
					</NavLink>
					<NavLink to="/more" className="nav-link">
						<FaGripHorizontal size={ICON_SIZE} />
						<span>More</span> 
					</NavLink>
				</div>
			</nav>
		</>
  );
}

export default Navbar;
