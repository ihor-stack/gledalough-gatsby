import React, { useState } from 'react';
import NavPrimary from '../components/NavPrimary';
import NavMobile from '../components/NavMobile';
import StickyHeader from '../components/StickyHeader';

const NavComponent = ({ pathname, currentPage }) => {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <>
            <StickyHeader pathname={pathname} currentPage={currentPage} />
            <NavPrimary pathname={pathname} currentPage={currentPage} />
            <NavMobile pathname={pathname} currentPage={currentPage} menuActive={menuActive} toggleMenu={toggleMenu} />
        </>
    )
};

export default NavComponent;