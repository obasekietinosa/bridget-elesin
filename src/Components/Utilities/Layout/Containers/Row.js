import React from 'react'

export default function Row({ children, className, ...props}) {
  return (
    <div {...props} className={`row ${className}`}>
      {children}
    </div>
  )
}