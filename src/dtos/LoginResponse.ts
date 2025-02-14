interface LoginResponse {
  conteudo: School[]
  mensagemRetorno: null
  excecao: null
  status: number
  erros: null
  __eem: boolean
  sucesso: boolean
  targetUrl: null
}

interface School {
  id: number
  nomeAplicacao: string
  contexto: string
  urlIconeContexto: string
  urlLogoContexto: string
  login: string
  token: string
  nomeCompleto: string
  telefoneCelular: null
  email: null
  urlPublicaFoto: null
  forcarTrocaSenha: boolean
  exigirTrocaSenha: boolean
  guid: string
  tipoApp: null
  acessoTemporario: boolean
}
