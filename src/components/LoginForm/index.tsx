import * as S from './styled';

const LoginForm = () => (
  <S.ContainerLogin>
    <div>Login</div>

    <S.FormLogin>
      <div>
        <label>Username</label>
        <input type="text" placeholder="Enter Username" required />
      </div>

      <div>
        <label>password</label>
        <input type="password" placeholder="Enter Password" required />
      </div>
    </S.FormLogin>

    <div>
      <button>Enviar</button>
    </div>
  </S.ContainerLogin>
);

export { LoginForm };
