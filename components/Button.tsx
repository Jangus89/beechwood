'use client'

interface ButtonProps {
  variant?: 'fill' | 'ghost' | 'bare' | 'wa'
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  variant = 'fill',
  children,
  href,
  onClick,
  className = '',
  fullWidth = false,
  type = 'button',
}: ButtonProps) {
  const baseClass = fullWidth ? 'w-full' : ''
  const variantClass = {
    fill: 'btn-fill',
    ghost: 'btn-ghost',
    bare: 'btn-bare',
    wa: 'btn-wa',
  }[variant]

  const combinedClass = `${variantClass} ${baseClass} ${className}`

  if (href) {
    return (
      <a href={href} className={combinedClass} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {children}
    </button>
  )
}
