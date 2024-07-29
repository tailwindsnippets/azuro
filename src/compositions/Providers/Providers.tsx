'use client'

import React from 'react'
import { type State } from 'wagmi'
import { type ChainId } from '@azuro-org/toolkit'
import { type Address } from 'viem'
import { IntlProvider } from '@locmod/intl'
import { SvgProvider, SvgSprite } from 'svg-provider'
import { AzuroSDKProvider, LiveProvider } from '@azuro-org/sdk'
import { WagmiProvider } from 'wallet'
import { DeviceProvider } from 'contexts'


type Props = {
  userAgent: string
  initialChainId: ChainId
  initialLiveState: boolean
  initialState?: State
}


const Providers: React.CFC<Props> = (props) => {
  const { children, userAgent, initialState, initialChainId, initialLiveState } = props

  return (
    <DeviceProvider userAgent={userAgent}>
      <SvgProvider>
        <IntlProvider locale="en">
          <WagmiProvider initialState={initialState}>
            <AzuroSDKProvider initialChainId={initialChainId} isBatchBetWithSameGameEnabled affiliate={process.env.NEXT_PUBLIC_AFFILIATE_ADDRESS as Address}>
              <LiveProvider initialLiveState={initialLiveState}>
                {children}
              </LiveProvider>
            </AzuroSDKProvider>
          </WagmiProvider>
        </IntlProvider>
        <div className="sr-only">
          <SvgSprite />
        </div>
      </SvgProvider>
    </DeviceProvider>
  )
}

export default Providers
