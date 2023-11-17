'use client'

import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function ScreenContainer({ children }: Props) {
  return <div className="flex min-h-screen flex-col">{children}</div>
}

export default ScreenContainer
