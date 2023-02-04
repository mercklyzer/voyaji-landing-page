import React, { FunctionComponent, ReactNode } from 'react'

interface Props {
    children: ReactNode;
    className?: string;
}

const Quarter:FunctionComponent<Props> = ({children, className}) => {
  return (
    <div style={{
        backgroundImage: 'url("/assets/images/q1_element.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}
        className={`border-2 w-full max-w-[1200px] rounded-xl px-4 py-16 sm:p-8 md:p-16 text-white gap-4 gap-y-12 ${className}`}>
        {children}
    </div>
  )
}

export default Quarter