import React from 'react'
import logo from '../assets/logo.svg';

const navOps=[{
    iconName:"person_outline",
    icon:"Sign In"},
    {
        iconName:"shopping_bag",
        icon:"Cart"
    },
    {
        iconName:"support",
        icon:"Help"
    },
    {
        iconName:"search",
        icon:"Search"
    },
]

const Navbar = (props) => {
  return (
    <section className="navbar">
        <div className="container">
            <img className="logo" src={logo} />
            <div className="location">
                <span className="city">{props.city}</span>
                <span className="state">{props.state}, {props.country}</span>
            </div>
            <div className="navbar-options">
                <div className="navbar-option">
                    {navOps.map((navOps)=>(
                        <div key={navOps.iconName} className="navbar-option">
                        <span className="material-icons">
                            {navOps.iconName}
                            </span> {navOps.icon}
                    </div>
                    ))}
                </div>
            </div>
        </div>
        
    </section>

  )
}

export default Navbar