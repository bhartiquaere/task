import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

const Profile = ({...props}) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((dropdown) => !dropdown);
    const navigate=useNavigate();
   const handleLogOut=()=>{
    localStorage.removeItem("token");
    navigate("/login")
   }
  return (
    <>
    <Dropdown 
    tag="li"
    className='nav-item dropdown has-arrow main-drop'
     toggle={toggle}
     isOpen={open}
    >
    <DropdownToggle
     href="#"
      className="dropdown-toggle nav-link"
       data-bs-toggle="dropdown"
 onClick={(e) => {
          e.preventDefault();
        }}
       >
                <span className="user-img">
                    <img src="assets/img/avatar/avatar-27.jpg" alt="User Image" />
                  <span className="status online"></span></span>
                <span>Admin</span>

              </DropdownToggle>
              <DropdownMenu className="dropdown-menu">
              
                <a className="dropdown-item" href="#">My Profile</a>
                <a className="dropdown-item" href="#">Settings</a>
                <a className="dropdown-item" onClick={handleLogOut} >Logout</a>
              
              </DropdownMenu>
              
    </Dropdown>
    </>
  )
}

export default Profile;