import { radius } from '@/constant/styles'
import { Icon } from '@iconify/react'

interface ButtonProps {
   text?: string
   icon?: any
   variant?: 'transparent' | 'primary' | 'outline'
   size?: 'sm' | 'md' | 'lg' | 'xl'
   type?: 'button' | 'submit' | 'reset'
   rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'default'
   onClick?: () => void
}

const Button = ({ text, icon, type, size, variant, rounded = 'default', onClick }: ButtonProps) => {
   return (
      <button
         onClick={onClick}
         className={`btn ${!text && icon && 'btn-icon'} ${size} ${variant}
      ${radius[rounded]}
      `}
         type={type}>
         {icon && <Icon icon={icon} />}
         {text && <span>{text}</span>}
      </button>
   )
}

export default Button
