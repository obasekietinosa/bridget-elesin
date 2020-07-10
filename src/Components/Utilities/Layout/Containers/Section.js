import React from 'react'

export default function Section({ children, bg, color, className, style, ...props}) {
  const colorScheme = {
    backgroundColor: `var(--${bg})`,
    color: `var(--${color})`
  }
  style = {...style, ...colorScheme}
  return (
    <section {...props} style={style} className={`${className}`}>
      {children}
    </section>
  )
}