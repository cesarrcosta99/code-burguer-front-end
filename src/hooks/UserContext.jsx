import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'

const userContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async (userInfo) => {
    setUserData(userInfo)

    await localStorage.setItem('codeburguer:userData', JSON.stringify(userInfo))
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clienteInfo = await localStorage.getItem('codeburguer:userData')

      if(clienteInfo) setUserData(JSON.parse(clienteInfo))
    }

    loadUserData()
  }, [])

  return <userContext.Provider value={{ putUserData, userData }}>{children}</userContext.Provider>
}

export const useUser = () => {
  const context = useContext(userContext)

  if (!context) {
    throw new Error('useUser must be used with userContext')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
