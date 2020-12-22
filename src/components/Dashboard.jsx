import React from 'react';
import "../index.scss"
import "../assets/scss/dashboard.scss"
import { Link } from "react-router-dom";
import DashboardMenuItem from './DashboardMenuItem';
import { connect } from "react-redux";
import { showMenu } from "../redux/actions/action.js";

function Dashboard({ showMenu, isShow }) {
    return (
        <section id='dashboard' className={!isShow ? "closeDashboard" : "dashboard"}>
            <div className="logo-block">
                <Link to="/">
                    <div className='logo-wrapper'></div>
                </Link>
            </div>
            <div className="menus">
                <DashboardMenuItem title="Contacts" link="/contatcs" iClassName="fas fa-address-card" isShow={isShow} active="true"/>
            </div>
        </section>
    )
}

const mapStateToProps = ({ isShow }) => ({
    isShow
});

const mapDispatchToProps = {
    showMenu,
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);