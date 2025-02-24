'use client';

import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useEffect } from 'react';

export function ReownProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const solanaWeb3JsAdapter = new SolanaAdapter({
      wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
    });

    const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;

    const metadata = {
      name: 'AppKit',
      description: 'AppKit Solana Example',
      url: process.env.NEXT_PUBLIC_APP_URL || 'https://example.com',
      icons: ['https://avatars.githubusercontent.com/u/179229932']
    };

    createAppKit({
      adapters: [solanaWeb3JsAdapter],
      networks: [solana, solanaTestnet, solanaDevnet],
      metadata: metadata,
      projectId,
      features: {
        analytics: true,
        email: true,
        socials: ['google', 'x', 'apple'],
        emailShowWallets: true,
        onramp: false
      },
    });
  }, []); 

  return <>{children}</>;
}