import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

type SignInCredentials = {
  login: string
  senha: string
}

interface AuthContextData {
  data: LoginResponse
  loading: boolean
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<LoginResponse>({} as LoginResponse)
  const [loading, setLoading] = useState(true)

  const userStorage = '@test:eem'

  async function signIn({ login, senha }: SignInCredentials) {
    try {
      const result = await fetch(
        'https://api.tst2.escolaapp.com/api/v1/Acesso/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            login,
            senha,
            nomeApp: 'br.com.eem.teste',
            versaoApp: '10',
            versaoSO: '10',
            idDispositivo: 'teste-mobile'
          })
        }
      )
      const json: LoginResponse = await result.json()
      if (json.mensagemRetorno) {
        throw new Error(json.mensagemRetorno)
      }
      if (!json.conteudo[0]) {
        throw new Error('Verifique as credenciais')
      }

      setData(json)
      await AsyncStorage.setItem(userStorage, JSON.stringify(json))
    } catch (error) {
      Alert.alert(
        'Opa',
        `Ocorreu um erro inesperado ao tentar logar: ${error.message}`
      )
    }
  }

  async function signOut() {
    setData({} as LoginResponse)
    await AsyncStorage.removeItem(userStorage)
  }

  useEffect(() => {
    async function loadSessionStorageData() {
      const sessionStoraged = await AsyncStorage.getItem(userStorage)

      if (sessionStoraged) {
        const session = JSON.parse(sessionStoraged) as LoginResponse
        setData(session)
      }
      setLoading(false)
    }
    loadSessionStorageData()
  }, [])

  return (
    <AuthContext.Provider value={{ data, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  return useContext(AuthContext)
}

export { useAuth, AuthProvider }
