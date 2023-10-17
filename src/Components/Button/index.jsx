import PropTypes from 'prop-types'
import { Botao } from './styles'

function Button({ children, ...rest }) {
 
  return <Botao {...rest}>{children}</Botao>
}

export default Button

Button.propTypes = {
  children: PropTypes.string
}
