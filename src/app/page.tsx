'use client'

import { usePathname } from 'next/navigation'
import Walletpage from './components/WalletPage'

export default function Home() {
  const pathname = usePathname()
  return <>
    
    <Walletpage /></>
}