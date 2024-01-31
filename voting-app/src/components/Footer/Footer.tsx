import React from 'react';
import styled from 'styled-components';

// Define the styled components
const FooterContainer = styled.footer`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 0 1rem 3rem;
`;

const LinksContainer = styled.div`
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    li {
        padding: .5rem 0;
        font-size: 1.25rem;
    }

    a {
        color: var(--color-dark-gray);
        text-decoration: none;
    }

    a:hover {
        color: var(--color-darker-gray);
        text-decoration: underline;
    }
`;

const SocialContainer = styled.div`
    span {
        color: var(--color-darker-gray);
        font-size: 1.25rem;
        text-align: right;
    }

    ul {
        display: flex;
        margin-top: 1rem;
    }

    ul > li {
        margin-right: 1rem;
    }
`;

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <FooterContainer>
            <LinksContainer>
                <ul>
                    <li>
                        <a href="#">Terms and Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </LinksContainer>
            <SocialContainer>
                <span>Follow us</span>
                <ul>
                    <li>
                        <a href="#">
                            {/* SVG for social media icon */}
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            {/* SVG for another social media icon */}
                        </a>
                    </li>
                </ul>
            </SocialContainer>
        </FooterContainer>
    );
};

export default Footer;