import React from 'react'

export default function Section({ children, bg, color, className, ...props}) {
  const style = {
    backgroundColor: `var(--${bg})`,
    color: `var(--${color})`
  }
  return (
    <section {...props} style={style} className={`${className}`}>
      {children}
    </section>
  )
}