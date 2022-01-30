import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ChatList } from "./components/Chat/chatList";
import { ConnectedChats } from "./components/Chat/chats";
import { Home } from "./components/Home/home";
import { ConnectedProfile} from "./components/Profile/profile";
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './logo_bt.svg';

export const App = () => {

  return (
  <BrowserRouter>
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
        <Nav className="me-auto">
          <Nav.Link href="/">Домой</Nav.Link>
          <Nav.Link href="/chats">Чаты</Nav.Link>
          <Nav.Link href="/profile">Профиль</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="profile" element={<ConnectedProfile />} />
      <Route path="chats">
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<ConnectedChats />} />
      </Route>
      <Route path="*" element={<h3>404</h3>}/>
    </Routes>
  </BrowserRouter>
  );
};
