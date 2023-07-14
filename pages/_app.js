import { useState } from 'react';
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Container, Row, Col } from 'react-bootstrap';

import themeDefault from "../themes/theme.default";
import themeDark from "../themes/theme.dark"

import StyledComponent from '../components/StyledComponent';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  const [currentTheme, setCurrentTheme] = useState(themeDefault);
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === themeDefault ? themeDark : themeDefault
    );
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyledComponent>
        <Container fluid>
          <Row>
            {showSidebar && (
              <Col sm={3} md={2} className="primaryColor">
                {/* Barra Lateral */}
                <h2>Griots</h2>
                <Sidebar onToggleTheme={toggleTheme} />
              </Col>
            )}
            <Col sm={showSidebar ? 9 : 12} md={showSidebar ? 10 : 12}>
              <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
              <Component {...pageProps} />
            </Col>
          </Row>
        </Container>
      </StyledComponent>
    </ThemeProvider>
  )
}
