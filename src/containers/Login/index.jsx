import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'
import * as Yup from 'yup'
import Button from '../../Components/Button'
import ImagemLogin from '../../assets/Login-Image.png'
import Logo from '../../assets/Logo.png'
import { apiCodeBurguer } from '../../services/api'
import { Container, ContainerItens, Error, Input, Label, LoginImage, SignInLinks } from './styles'

function Login() {
  const {putUserData}=useUser()
  
  const navigate=useNavigate()

  const fazerCadastro=()=>{
    navigate("/cadastro")
  }

  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail válido').required('O e-email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (clientData) => {
     const {data}= await toast.promise(
      apiCodeBurguer.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)',
        error: 'Verifique seu e-mail e senha'
      }
    )
    putUserData(data)
    
    }
    

  return (
    <Container>
      <LoginImage src={ImagemLogin} />
      <ContainerItens>
        <img src={Logo} />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type='email' {...register('email')} error={errors.email?.message} />
          <Error>{errors.email?.message}</Error>

          <Label>Senha</Label>
          <Input type='password' {...register('password')} error={errors.password?.message} />
          <Error>{errors.password?.message}</Error>

          <Button type='submit' style={{ marginTop: 40, marginBottom: 20 }}>
            Sign In
          </Button>
        </form>
        <SignInLinks>
          Não possui conta? <a onClick={fazerCadastro}>Sign Up</a>
        </SignInLinks>
      </ContainerItens>
    </Container>
  )
}

export default Login
