import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import Button from '../../Components/Button'
import imagemRegister from '../../assets/Imagem-Register.png'
import Logo from '../../assets/Logo.png'
import { apiCodeBurguer } from '../../services/api'
import {
  Container,
  ContainerItens,
  Error,
  Input,
  Label,
  RegisterImage,
  SignInLinks
} from './styles'

function Register() {

  const navigate=useNavigate()

  const fazerLogin=()=>{
    navigate('/login')
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string().email('Digite um e-mail válido').required('O e-email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos'),
    confirmPassword: Yup.string().required('A senha é obrigatória').oneOf([Yup.ref('password')],'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    try {
      const {status}= await apiCodeBurguer.post('users', {
        name: data.email,
        email: data.email,
        password: data.password
      },{validateStatus:()=>true}
      )

      if(status ===201 || status===200){
        toast.success('Cadastro Criado com sucesso');
      } else if(status === 409){
        toast.error('E-mail já cadastrado! Faça login para continuar')
      } else {
        throw new Error()
      }
      
    } catch(err){
      toast.error('Falha no sistema!Tente novamente!')
    }
  }

  return (
    <Container>
      <RegisterImage src={imagemRegister} />
      <ContainerItens>
        <img src={Logo} />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input type='text' {...register('name')} error={errors.name?.message} />
          <Error>{errors.name?.message}</Error>

          <Label error={errors.email?.message}>Email</Label>
          <Input type='email' {...register('email')} error={errors.email?.message} />
          <Error>{errors.email?.message}</Error>

          <Label error={errors.password?.message}>Senha</Label>
          <Input type='password' {...register('password')} error={errors.password?.message} />
          <Error>{errors.password?.message}</Error>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type='password'
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />

          <Error>{errors.confirmPassword?.message}</Error>

          <Button type='submit' style={{ marginTop: 20, marginBottom: 20 }}>
            Sign Up
          </Button>
        </form>
        <SignInLinks>
          Já Possui Conta? <a onClick={fazerLogin}>Sign In</a>
        </SignInLinks>
      </ContainerItens>
    </Container>
  )
}

export default Register
