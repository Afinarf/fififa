'use client'

import React, { createContext, useContext, useState } from 'react'

type ActiveSectionContextType = {
  activeSection: string
  setActiveSection: (section: string) => void
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('Home')

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext)
  if (!context) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider')
  }
  return context
}