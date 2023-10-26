export const KEY_WALLET_NAME = "WALLET_NAME"
export const KEY_DARK_MODE = "DARK_MODE"

export function setConnected() {
  localStorage.setItem("CONNECTED", "true")
}

export function setWalletName(walletName) {
  localStorage.setItem(KEY_WALLET_NAME, walletName)
}

export function removeWalletName() {
  localStorage.removeItem(KEY_WALLET_NAME)
}

export function isConnected() {
  const connected = localStorage.getItem("CONNECTED")
  if (connected && KEY_WALLET_NAME) {
    return true
  }
  return false
}
export function logout() {
  localStorage.removeItem("CONNECTED")
  removeWalletName()
}

export function getMainnets() {
  const networksInfo = localStorage.getItem("networks")
  if (networksInfo) {
    const networks = JSON.parse(networksInfo)
    if (networks?.mainnets) {
      return networks?.mainnets
    }
  }
  return []
}

export function getTestnets() {
  const networksInfo = localStorage.getItem("networks")
  if (networksInfo) {
    const networks = JSON.parse(networksInfo)
    if (networks?.testnets) {
      return networks?.testnets
    }
  }
  return []
}

export function setNetwork(chainInfo) {
  var mainnets = getMainnets()
  var testnets = getTestnets()
  if (chainInfo.isTestnet) {
    testnets.push(chainInfo)
  } else {
    mainnets.push(chainInfo)
  }
  localStorage.setItem(
    "networks",
    JSON.stringify({ mainnets: mainnets, testnets: testnets })
  )
}
