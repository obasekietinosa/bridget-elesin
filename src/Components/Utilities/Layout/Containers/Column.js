import React from 'react'

export default function Column({ children, size, className, offset, ...props}) {
  let clsNm = ``
  if(typeof size === "object") {
    for (const [key, value] of Object.entries(size)) {
      clsNm += `col-${key}-${value} `
    }
  } else {
    clsNm += `col-${size} `
  }

  if (offset) {
    if(typeof offset === "object") {
      for (const [key, value] of Object.entries(offset)) {
        clsNm += `offset-${key}-${value} `
      }
    } else {
      clsNm += `offset-${offset}`
    }
  }
  clsNm = `${clsNm} ${className}`
  return (
    <div {...props} className={clsNm}>
      {children}
    </div>
  )
}