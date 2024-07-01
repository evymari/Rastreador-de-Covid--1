import React, { useState } from 'react';
import SidebarImages from '../../utils/images/imagesSideBar';
import './sideBarLateral.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const buttons = [
    { img: SidebarImages.coronaVirusLogo, to: "/"},
    { img: SidebarImages.iconoGrafico, to: "/tracker1"},
    { img: SidebarImages.iconoBarras, to: "/tracker2"},
    { img: SidebarImages.iconoCuadrado ,to: "/tracker3"},
    { img: SidebarImages.iconoCarpeta , to: "/tracker4"},
    { img: SidebarImages.iconoPantallas, to: "/tracker5" },
    { img: SidebarImages.iconoFlecha, to: "/tracker6" },
    { img: SidebarImages.iconoGlobo , to: "/tracker7"},
    { img: SidebarImages.iconoMensaje, to: "/tracker8" },
    { img: SidebarImages.iconoHueco, to: "/tracker9"},
  ];
<NavLink to ='/'>  </NavLink>
  return (
    <div className="sidebar">
      {buttons.map((button, index) => {
        
        const isLogo = index === 0;
        const isActive = activeIndex === index && !isLogo;
        const isLast = index === buttons.length - 1;
        const buttonClasses = [
          'sidebar-button',
          isActive ? 'active' : '',
          isLogo ? 'logo no-highlight' : '',
          isLast ? 'last-button' : '',
        ].join(' ');

      
        return (
        <NavLink
          key={index}
          to={button.to}
          className={buttonClasses}
          onClick={() => handleClick(index)}
          activeClassName="active-link"
        >
          <img src={button.img} alt="" />
        </NavLink>

          // <button
          //   key={index}
          //   className={buttonClasses}
          //   onClick={() => handleClick(index)}
          // >
          //   <img src={button.img} alt="" />
          // </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
