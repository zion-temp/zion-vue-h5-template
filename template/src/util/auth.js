

const TokenKey = 'Token'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
	removeToken()
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}