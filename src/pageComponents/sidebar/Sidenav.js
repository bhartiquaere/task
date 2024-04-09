import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

const Sidenav = ({ className, ...props }) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const menuData = [           
        { label: 'Admin Dashboard', link: '/admin-dashboard', active: false },
        { label: 'Employee Dashboard', link: '/employee-dashboard', active: false },
        { label: 'Deals Dashboard', link: '/deals-dashboard', active: false },
        { label: 'Leads Dashboard', link: '/leads-dashboard', active: false }    
    ];

    return (
        <div className={className}>
            <div className={`sidebar-inner slimscroll ${className}`}>
                <div className={`sidebar-menu ${className}`} >
                    <ul className="sidebar-vertical">
                        <li className="menu-title">
                            <span>Main</span>
                        </li>
                        <Dropdown
                        tag="li"
                        toggle={toggle} 
                        isOpen={open}
                        className="submenu">
                            <DropdownToggle tag="a" 
                            onClick={(e) => e.preventDefault()} href="#">
                                <i className="la la-dashcube"></i>
                                <span>Dashboard</span>
                                <span className="menu-arrow"></span>
                            </DropdownToggle>
                            <DropdownMenu tag="ul"
                            style={{display:"block"}}
                            >
                                {menuData.map((item, index) => (
                                    <li key={index} className={item.active ? "active" : ""}>
                                        <a href={item.link}>{item.label}</a>
                                    </li>
                                ))}
                            </DropdownMenu>
                        </Dropdown>  
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidenav;
