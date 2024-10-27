"use client"

import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'

function SocialLinks({link}: {link: string} ) {
    const [hover, setHover] = useState(false)
    const [fgColor, setFgColor] = useState('#DC2626')
    
    useEffect(() => {
      if(document && document.documentElement.classList.contains('dark')) {
        setFgColor('#E2E8F0')
      }
    }, [])

    
  return (
    <SocialIcon
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              url={link}
              target="_blank"
              fgColor={!hover ? 'gray' : fgColor}
              className="fill-stone-600 hover:fill-stone-200 size-8"
              bgColor="transparent"
            />
  )
}

export default SocialLinks