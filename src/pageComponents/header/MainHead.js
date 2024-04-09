import React from 'react';
import Sidenav from '../sidebar/Sidenav';
import Profile from '../dropdown/Profile';
import Chats from '../dropdown/Chats';
import Notifications from '../dropdown/Notifications';
import LanguageDropdown from '../dropdown/Language';
import MainComponent from '../main/MainComponent';

export const MainHead = ({ ClassName, ...props }) => {

  const handleToggle=()=>{
    var body = document.body;
    body.classList.toggle("mini-sidebar");
    var subdropSiblings = document.querySelectorAll(".subdrop + ul");
    subdropSiblings.forEach(function(sibling) {
      if (body.classList.contains("mini-sidebar")) {
        sibling.style.display = "block";
      } else {
        sibling.style.display = "none";
      }
  })
}

  return (
    <>

      <div className={`header `} >
        <div className="header-left">
          <a href="#" className="logo">
            <img src="assets/img/logo.svg" alt="Logo" />
          </a>
          <a href="#" className="logo collapse-logo">
            <img src="assets/img/collapse-logo.svg" alt="Logo" />
          </a>
          <a href="admin-dashboard.html" className="logo2">
            <img src="assets/img/logo2.png" width="40" height="40" alt="Logo" />
          </a>
        </div>
        <a id="toggle_btn" onClick={handleToggle} >
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
        <div className="page-title-box">
          <h3>Dreams Technologies</h3>
        </div>
        <a id="mobile_btn" className="mobile_btn" href="#sidebar"><i className="fa-solid fa-bars"></i></a>

        <ul className="nav user-menu">

          <li className="nav-item">
            <div className="top-nav-search">
              <a href="javascript:void(0);" className="responsive-search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
              <form>
                <input className="form-control" type="text" placeholder="Search here" />
                <button className="btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
              </form>
            </div>
          </li>
          <LanguageDropdown />
          <Notifications />
          <Chats />
          <Profile />

        </ul>
      </div>
      <Sidenav className={`sidebar`}
      />
<MainComponent/>

    </>
  )
}
