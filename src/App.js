import React from "react";
import {persistor, store} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {Router} from "./components/Routes/routes";
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './logo.svg';

export const App = () => {
  return (
    <Provider store={store}>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React Homework
                </Navbar.Brand>
            </Container>
        </Navbar>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );

};
