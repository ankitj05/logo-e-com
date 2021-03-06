import React, { useContext } from 'react';
import LogoItem from './LogoItem';
import LogoContext from '../../context/logo/logoContext';

const Logo = () => {

    const logoContext = useContext(LogoContext);

    return (
        <div className='flex flex-wrap justify-center mx-auto mt-2 px-3'>
            {logoContext.logos.map(logo => (
                <LogoItem key={logo.name} logo={logo} />
            ))}
        </div>
    )
}

export default Logo;