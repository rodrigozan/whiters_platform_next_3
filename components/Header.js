import { useState } from 'react';
import { useRouter } from 'next/router';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaBackward, FaBars, FaUser, FaBell } from 'react-icons/fa';

import styled from 'styled-components';

import StyledComponent from './StyledComponent';

const StyledNavbar = styled(Navbar.Brand)`
  /* Estilos personalizados para o Navbar */
  color: ${props => props.theme.dark_white};
  /* Outras propriedades de estilo */
`;

const linkColors = {
  "link-primary": "primaryColor",
  "link-secondary": "secondaryColor",
  "link-success": "successColor",
  "link-danger": "dangerColor",
  "link-warning": "warningColor",
  "link-info": "infoColor",
  "link-light": "lightColor",
  "link-dark": "darkColor",
  "link-body-emphasis": "bodyEmphasisColor"
};

const StyledNavbarLink = styled(Nav.Link)`
  /* Estilos personalizados para o Navbar */
  color: ${props => {
    const colorProp = linkColors[props.className];
    return colorProp ? props.theme[colorProp] : props.theme.dark_white;
  }};
`;


function Header({ toggleSidebar, showSidebar }) {
  const router = useRouter();
  const { pathname } = router;

  const getPageName = (pathname) => {
    const pathParts = pathname.split('/');
    const lastPart = pathParts[pathParts.length - 1];
    const formattedPageName = lastPart.replace(/_/g, ' ')
      .replace(/\b\w/g, (match) => match.toUpperCase());

    return formattedPageName;
  };

  const [breadcrumbs, setBreadcrumbs] = useState([getPageName(pathname)]);

  //const [breadcrumbs, setBreadcrumbs] = useState(['Dashboard']);

  const handleBreadcrumbClick = (index) => {
    setBreadcrumbs((prevBreadcrumbs) => prevBreadcrumbs.slice(0, index + 1));
  };

  return (
    <StyledComponent>
      <header>
        <Navbar expand="lg" className="justify-content-between">
          <Navbar.Toggle
            aria-controls="sidebar"
            onClick={toggleSidebar}
            className="me-2"
          >
            <FaBars />
          </Navbar.Toggle>
          <Button
            variant="outline-info"
            onClick={toggleSidebar}
          >
            {showSidebar ? <FaBackward /> : <FaBars />}
          </Button>

          <StyledNavbar>{breadcrumbs[breadcrumbs.length - 1]}</StyledNavbar>

          <Nav>
            <StyledNavbarLink className="link-primary" href="#">
              <FaUser />
            </StyledNavbarLink>
            <StyledNavbarLink className="link-primary" href="#">
              <FaBell />
            </StyledNavbarLink>
          </Nav>
        </Navbar>
      </header>
    </StyledComponent>
  );
}

export default Header;
