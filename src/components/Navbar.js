import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';
import { ButtonContainer } from './Button';

import styled from 'styled-components';

class Navbar extends Component {
    
    render() { 
        return (  
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk
                */}
                <Link to="/">
                    <img src={Logo} alt="store" className="navbar-brand" style={{ width: "60px"}}/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span>
                            <i className="fas fa-cart-plus" />
                        </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background:#343a40!important;
    .nav-link{
        color:var(--textWhite)!important;
        font-size:1.2rem;
        text-transform:capitalize;
        transition:all 0.3s ease-in-out !important;
    }
    .nav-link:hover{
        color:#ffffff!important;
    }
`;

export default Navbar;