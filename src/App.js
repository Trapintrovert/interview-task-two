
import { Container } from 'reactstrap'
import Login from './components/login/Login';
import './App.scss';

function App() {
  return (
    <section className="login">
      <Container >
        <Login/>
      </Container>
    </section>
  );
}

export default App;
