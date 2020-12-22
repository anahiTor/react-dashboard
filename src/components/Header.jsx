import React from 'react';
import "../index.scss"
import "../assets/scss/header.scss"
import { connect } from "react-redux";
import { showMenu } from "../redux/actions/action.js";


function Header({ isShow, showMenu }) {
    const handleMenu = () =>  {
        showMenu(!isShow)
    }
    return (
        <section id='header'>
            <div className="header-content">
                <div className='menuHandler'>
                    <i className={isShow ? "fas fa-times" : 'fas fa-bars'} onClick={handleMenu} ></i>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);
