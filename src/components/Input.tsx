import { createElement } from 'react'
import type Icon from '@/types/icon'
import type { FC, HtmlHTMLAttributes, HTMLInputTypeAttribute } from 'react'
import type { FieldError } from 'react-hook-form'

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  as?: 'input' | 'textarea'
  label: string
  icon?: FC<Icon>
  type?: HTMLInputTypeAttribute
  error?: FieldError
}

export default function Input({
  label,
  type,
  placeholder,
  error,
  icon: Icon,
  as = 'input',
  ...restOfProps
}: InputProps) {
  const textAreaStyles = as === 'textarea' ? 'items-start' : 'items-center'
  const errorIconStyles = error ? 'text-red-500' : ''
  const errorInputStyles = error
    ? 'border-red-400 hover:border-red-500 animate-shake'
    : 'border-slate-400 hover:border-slate-300 hover:shadow-slate-700 focus-within:shadow-slate-700 focus-within:border-slate-300'

  return (
    <label htmlFor={label}>
      <span className='font-semibold text-slate-300 mb-4 capitalize inline-block'>
        {label}
      </span>
      <div
        className={`flex gap-x-3 outline-none rounded-xl py-4 px-5 border bg-slate-700 text-slate-400 shadow-md shadow-transparent ${textAreaStyles} ${errorInputStyles}`}
      >
        {Icon && <Icon size='md' className={errorIconStyles} />}
        {createElement(as, {
          type,
          placeholder,
          className:
            'bg-transparent text-slate-100 outline-none resize-y w-full max-h-[240px]',
          ...restOfProps
        })}
      </div>
      {error && (
        <span className='mt-2 text-sm italic text-rose-500 inline-block'>
          {error.message}
        </span>
      )}
    </label>
  )
}
