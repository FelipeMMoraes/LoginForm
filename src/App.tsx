import { LoginForm } from './components/LoginForm';
import { ResetStyle } from './styles/GlobalStyles/resetStyles';
import { Container } from './styles/App';

function App() {
  return (
    <Container>
      <LoginForm />
      <ResetStyle />
    </Container>
  );
}

export default App;
