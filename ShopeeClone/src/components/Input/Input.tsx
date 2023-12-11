import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  placeholder?: string
  className?: string
  errorMessage?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  rules?: RegisterOptions
}
export default function Input({ type, placeholder, className, errorMessage, name, register, rules }: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm'
        placeholder={placeholder}
        autoComplete='on'
        {...register(name, rules)}
      />
      <div className='mt-1 text-sm text-red-600 min-h-[1rem]'>{errorMessage}</div>
    </div>
  )
}
