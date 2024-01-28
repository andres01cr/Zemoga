import React from 'react';
import styled from 'styled-components';
import searchIcon from './assets/img/search.svg'; // Update the path as needed

const StyledNav = styled.nav`
    position: fixed;
    z-index: 2;
    top: 0;
    display: flex;
    width: calc(100vw - 2rem);
    min-height: 10rem;
    justify-content: space-between;
    padding: 0 1rem;
    background: linear-gradient(to bottom, rgba(0,0,0,.8) 0, rgba(0,0,0,0) 80%);
`;

const MaxCentered = styled.div`
    position: relative;
    display: block;
    width: 100vw;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
`;

const Logo = styled.h1`
    margin: 2.5rem 0 0;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.5rem;
    color: var(--color-white);
`;

const HamburgerButton = styled.button`
    position: relative;
    top: 2rem;
    right: 1rem;
    width: 25px;
    height: 20px;
    padding: 0;
    border: 0;
    background-color: transparent;
`;

const NavLinks = styled.ul`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    width: 100vw;
    height: calc(100vh - 4rem);
    flex-direction: column;
    padding: 4rem 0 2rem;
    background-color: var(--color-darker-background);
    transform: translateX(100vw);
    &:focus-within {
        transform: translateX(0);
    }
`;

const NavLink = styled.li`
    width: 100%;
    margin: 3rem 0;
    font-size: 2rem;
    text-align: center;
    a {
        text-decoration: none;
        color: var(--color-white);
    }
`;

const SearchForm = styled.form`
    /* Additional styles if needed */
`;

const SearchInput = styled.input`
    width: 25vw;
    border: 0;
    border-bottom: 2px solid var(--color-white);
    background-color: transparent;
    border-radius: 0;
    font-size: 1.5rem;
    transition: width .2s ease-in;
    &:focus {
        width: 60vw;
        outline: 0;
    }
`;

const SearchButton = styled.button`
    width: 24px;
    height: 24px;
    margin-left: .5rem;
    padding: 0;
    border: 0;
    background-color: transparent;
    img {
        width: 100%;
        height: 100%;
    }
`;

const Navbar = () => {
    return (
        <StyledNav>
            <MaxCentered>
                <Logo>Rule of thumb.</Logo>
                <HamburgerButton aria-label="Open Menu">
                    {/* SVG code */}
                </HamburgerButton>
                <NavLinks>
                    {/* NavLinks content */}
                </NavLinks>
            </MaxCentered>
        </StyledNav>
    );
};

export default Navbar;
