'use client'

import { http, cookieStorage, createStorage } from 'wagmi'
import { injected, walletConnect } from 'wagmi/connectors'
import type {PrivyClientConfig} from '@privy-io/react-auth'
import { createConfig } from '@privy-io/wagmi'
import { polygon, polygonAmoy, gnosis, chiliz, spicy } from 'viem/chains'
import { constants } from 'helpers'
import iconAzuroImage from 'src/app/icon.png'

import { appChains } from './chains'


const injectedConnector = injected({ shimDisconnect: true, unstable_shimAsyncInject: true })

// Replace this with your Privy config
export const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    createOnLogin: 'users-without-wallets',
    requireUserPasswordOnCreate: false,
    // waitForTransactionConfirmation: false,
    showWalletUIs: false,
  },
  loginMethods: ['email', 'google', 'twitter', 'wallet', 'farcaster', 'discord', 'instagram' ],
  appearance: {
    theme: 'dark',
    showWalletLoginFirst: true,
  },
};

export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID as string

const walletConnectConnector = walletConnect({
  projectId,
  metadata: {
    name: 'Azuro Betting Example',
    description: '',
    icons: [ `${constants.baseUrl}/${iconAzuroImage.src}` ],
    url: '',
  },
  showQrModal: true,
})

const wagmiConfig = createConfig({
  chains: appChains,
  transports: {
    [polygon.id]: http(constants.rpcByChains[polygon.id]),
    [polygonAmoy.id]: http(constants.rpcByChains[polygonAmoy.id]),
    [gnosis.id]: http(constants.rpcByChains[gnosis.id]),
    [chiliz.id]: http(constants.rpcByChains[chiliz.id]),
    [spicy.id]: http(constants.rpcByChains[spicy.id]),
  },
  connectors: [
    injectedConnector,
    walletConnectConnector,
  ],
  ssr: true,
  syncConnectedChain: true,
  multiInjectedProviderDiscovery: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig
  }
}

export default wagmiConfig
