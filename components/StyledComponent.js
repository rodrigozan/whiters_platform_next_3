import styled from 'styled-components';
import { Button, Navbar, Form, FormControl } from 'react-bootstrap';

// // Estilizando o componente Button
// const StyledButton = styled(Button)`
//   /* Estilos personalizados para o Button */
//   background-color: ${props => props.theme.primaryColor};
//   color: ${props => props.theme.lightColor};
//   border: none;
//   /* Outras propriedades de estilo */
// `;

// Estilizando o componente Navbar

// // Estilizando o componente Form
// const StyledForm = styled(Form)`
//   /* Estilos personalizados para o Form */
//   /* Outras propriedades de estilo */
// `;

// // Estilizando o componente FormControl
// const StyledFormControl = styled(FormControl)`
//   /* Estilos personalizados para o FormControl */
//   /* Outras propriedades de estilo */
// `;


const StyledComponent = styled.div`
  background-color: ${props => props.theme.white_dark};
  color: ${props => props.theme.secondaryColor};

  /* title */

  h1 {
    color: ${props => props.theme.primaryColor};
    font-size: 2rem;
  }

  h2 {
    color: ${props => props.theme.secondaryColor};
    font-size: 1.8rem;
  }

  /* Links */

  a {
    /* Estilos para todos os links */
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
    /* Outras propriedades de estilo */

    /* Estilos específicos para cada tipo de link */
    &.link-primary {
      color: ${props => props.theme.primaryColor};
    }
    &.link-secondary {
      color: ${props => props.theme.secondaryColor};
    }
    &.link-success {
      color: ${props => props.theme.successColor};
    }
    &.link-danger {
      color: ${props => props.theme.dangerColor};
    }
    &.link-warning {
      color: ${props => props.theme.warningColor};
    }
    &.link-info {
      color: ${props => props.theme.infoColor};
    }
    &.link-light {
      color: ${props => props.theme.lightColor};
    }
    &.link-dark {
      color: ${props => props.theme.darkColor};
    }
    &.link-body-emphasis {
      color: ${props => props.theme.bodyEmphasisColor};
    }
  }

  /* Forms */

  input, textarea {
    background-color: ${props => props.theme.lightColor};
    color: ${props => props.theme.darkColor};
    border: 1px solid ${props => props.theme.secondaryColor};
    /* outras estilizações de input */
  }

  button {
    background-color: ${props => props.theme.infoColor};
    color: ${props => props.theme.lightColor};
    border: none;
    /* outras estilizações de button */
  }
`;

export default StyledComponent
