import React from 'react'

interface ContentProps {
  children?: React.ReactNode;
}

export const MainContent: React.FC<ContentProps> = ({children}) => {
  return <main className='content'>{children}</main>
}
