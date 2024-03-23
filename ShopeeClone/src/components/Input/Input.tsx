import { InputHTMLAttributes } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}
export default function Input({
  type,
  placeholder,
  className,
  errorMessage,
  name,
  register,
  rules,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm',
  classNameError = 'mt-1 text-sm text-red-600 min-h-[1rem]'
}: Props) {
  const registerResult = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input type={type} className={classNameInput} placeholder={placeholder} autoComplete='on' {...registerResult} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
