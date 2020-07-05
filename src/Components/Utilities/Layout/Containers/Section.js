import React from 'react'

export default function Section({ children, bg, className, ...props}) {
  const style = {
    backgroundColor: bg
  }
  return (
    <section {...props} style={style} className={`${className}`}>
      {children}
    </section>
  )
}