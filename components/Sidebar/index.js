import { useContext } from 'react';
import { Nav, NavDropdown, Button } from 'react-bootstrap';

import StyledComponent from '../StyledComponent';
import styled from 'styled-components';

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

function Sidebar({ onToggleTheme }) {
  return (
    <StyledComponent>
      <Nav className="flex-column">
        <StyledNavbarLink href="/dashboard" className="link-primary">Dashboard</StyledNavbarLink>
        <StyledNavbarLink href="/orders" className="link-primary">Pedidos</StyledNavbarLink>
        <NavDropdown  className="link-primary" title="Produtos" id="products-dropdown">
          <NavDropdown.Item href="/products">Todos os Produtos</NavDropdown.Item>
          <NavDropdown.Item href="/categories">Categorias</NavDropdown.Item>
          <NavDropdown.Item href="/inventory">Inventário</NavDropdown.Item>
        </NavDropdown>
        <StyledNavbarLink href="/customers" className="link-primary">Clientes</StyledNavbarLink>
        <StyledNavbarLink href="/reports" className="link-primary">Relatórios</StyledNavbarLink>
        <StyledNavbarLink href="/settings" className="link-primary">Configurações</StyledNavbarLink>
        <Button variant="outline-info" onClick={onToggleTheme}>Toggle Tema</Button>
      </Nav>
    </StyledComponent>
  );
}

export default Sidebar;
