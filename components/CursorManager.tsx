'use client'

import { useEffect } from 'react'

export default function CursorManager() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const cursorRing = document.getElementById('cursor-ring')

    if (!cursor || !cursorRing) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    let animationId: number

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.2
      cursorY += (mouseY - cursorY) * 0.2

      cursor.style.left = cursorX + 'px'
      cursor.style.top = cursorY + 'px'

      cursorRing.style.left = mouseX + 'px'
      cursorRing.style.top = mouseY + 'px'

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return null
}
