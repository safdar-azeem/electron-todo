import { radius } from '@/constant/styles'
import { useState } from 'react'

interface InputProps {
   label?: string
   placeholder?: string
   name?: string
   value?: string
   type?: 'text' | 'password' | 'email' | 'number'
   size?: 'sm' | 'md' | 'lg' | 'xl'
   rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'default'
   variant?: 'outline' | 'filled'
   icon?: any
   iconPosition?: 'left' | 'right'
   error?: string
   disabled?: boolean
   children?: React.ReactNode
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
   label,
   placeholder,
   type,
   name,
   value,
   size,
   variant,
   icon,
   error,
   disabled,
   rounded = 'default',
   children,
   onChange,
}: InputProps) => {
   const [isFocus, setIsFocus] = useState(false)

   const onFocus = () => setIsFocus(true)
   const onBlur = () => setIsFocus(false)

   return (
      <div>
         {label && <label className="label">{label}</label>}
         <div className={`input-group ${isFocus && 'focus'}`}>
            <input
               className={`input ${size} ${radius[rounded]} ${variant} ${icon && 'icon'}`}
               name={name}
               type={type}
               placeholder={placeholder}
               disabled={disabled}
               value={value}
               onFocus={onFocus}
               onBlur={onBlur}
               onChange={onChange}
            />
            {children}
         </div>
         {error && <div className="text-xs mt-1 text-red-500">{error}</div>}
      </div>
   )
}

export default Input
