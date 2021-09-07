import React, { useState } from 'react';
import { MobileMenu } from './MobileMenu';

export const BurgerMenuBtn = ({toggleMenu}) => {

const [focus, setFocus] = useState(false)

const handleToggle = () => {
    setFocus(!focus);
    toggleMenu();
}

    return (
        <div className='burger-menu' onClick={()=> handleToggle()}>    
            <div className={`line one ${focus ? 'focus' : ' '}`} />
            <div className={`line two ${focus ? 'focus' : ' '}`} />
            <div className={`line three ${focus ? 'focus' : ' '}`}/> 
            {focus && <MobileMenu />}   
        </div>
    )
}