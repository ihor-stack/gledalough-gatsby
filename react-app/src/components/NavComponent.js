import React, { useState } from 'react';
import NavPrimary from '../components/NavPrimary';
import NavMobile from '../components/NavMobile';
import StickyHeader from '../components/StickyHeader';

const NavComponent = ({ pageClass }) => {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <>
            <StickyHeader currentPage={pageClass} />
            <NavPrimary currentPage={pageClass} />
            <NavMobile currentPage={pageClass} menuActive={menuActive} toggleMenu={toggleMenu} />
        </>
    )
};

export default NavComponent;