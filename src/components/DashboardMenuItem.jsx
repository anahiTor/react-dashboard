import React from "react"
import "../assets/scss/dashboardMenuItem.scss"
import { Link } from "react-router-dom";


function DashboardMenuItem(props) {
    const handleDashboardMenuItems = (event) => {
        document.querySelectorAll(".menu-item").forEach(el => {
            el.classList.remove('menu-item_active')
        })
        event.target.classList.add("menu-item_active")
    }
    return (
        <div className="menu-item-content" onClick={handleDashboardMenuItems}>
            <Link className={props.active=== "true" ? "menu-item menu-item_active" : "menu-item"} to={props.link}>
                <span className={props.isShow ? "menu-title" : "menu-title menu-title_deactive"}>{props.title}</span>
                <div className="icon-block">
                    <i className={props.iClassName}></i>
                </div>
            </Link>
        </div>
    )
}

export default DashboardMenuItem;