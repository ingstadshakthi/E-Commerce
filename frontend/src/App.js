import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <Fragment>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
