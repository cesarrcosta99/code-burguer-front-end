import styled from 'styled-components'
import BackgroundImage from '../../assets/Background.png'

export const Container = styled.div`
  background: url('${BackgroundImage}');
  height: 100vh;
  width: 100vw;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginImage = styled.img`
  height: 82%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 82%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
    margin-top: 70px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Error = styled.p`
  color: #cc1717;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  margin-top: 2px;
`

export const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 3px;
`

export const Input = styled.input`
  height: 33px;
  width: 391.42;
  border: ${(errorMessage) => (errorMessage.error ? '2px solid #CC1717' : 'none')};
  box-shadow: 3px 3px 18px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  padding-left: 10px;
`

export const SignInLinks = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  letter-spacing: 0em;
  color: #ffffff;
  margin-top: 8px;

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`
