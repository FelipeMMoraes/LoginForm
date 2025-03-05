import styled from 'styled-components';

const ContainerLogin = styled.div`
  text-align: center;

  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  gap: 60px;
  padding: 80px 40px;
  border-radius: 20px;

  button {
    cursor: pointer;
    background-color: green;
    padding: 10px 20px;
    border-radius: 10px;
    color: white;

    &:hover {
      scale: 1.1;
    }
  }
`;
const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  label {
    padding-right: 20px;
  }

  input {
    padding: 10px 20px;
    border-radius: 5px;
  }
`;

export { ContainerLogin, FormLogin };
