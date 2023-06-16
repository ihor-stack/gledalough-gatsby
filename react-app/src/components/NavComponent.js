import React, { useState } from 'react';
import NavPrimary from '../components/NavPrimary';
import NavMobile from '../components/NavMobile';
import StickyHeader from '../components/StickyHeader';

const NavComponent = ({ pathname, pageClass }) => {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <>
            <StickyHeader pathname={pathname} currentPage={pageClass} />
            <NavPrimary pathname={pathname} currentPage={pageClass} />
            <NavMobile pathname={pathname} currentPage={pageClass} menuActive={menuActive} toggleMenu={toggleMenu} />
        </>
    )
};

export default NavComponent;