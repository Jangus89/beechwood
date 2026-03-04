export function initCursor() {
  if (typeof window === 'undefined') return

  const cursor = document.getElementById('cursor')
  const cursorRing = document.getElementById('cursor-ring')

  if (!cursor || !cursorRing) return

  let mouseX = 0
  let mouseY = 0
  let cursorX = 0
  let cursorY = 0

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  function animate() {
    cursorX += (mouseX - cursorX) * 0.2
    cursorY += (mouseY - cursorY) * 0.2

    cursor.style.left = cursorX + 'px'
    cursor.style.top = cursorY + 'px'

    cursorRing.style.left = mouseX + 'px'
    cursorRing.style.top = mouseY + 'px'

    requestAnimationFrame(animate)
  }

  animate()
}
