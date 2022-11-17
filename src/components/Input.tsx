import {
  createElement,
  ElementType,
  HtmlHTMLAttributes,
  HTMLInputTypeAttribute
} from 'react'

type InputProps = Omit<
  {
    label: string
    icon?: ElementType
    as?: 'input' | 'textarea'
    type?: HTMLInputTypeAttribute
  } & HtmlHTMLAttributes<HTMLInputElement & HTMLSelectElement>,
  'className'
>

export default function Input(props: InputProps) {
  const { icon: Icon, label, type = 'text', as = 'input' } = props
  const isTextArea = as === 'textarea' ? 'items-start' : 'items-center'

  return (
    <label htmlFor={props.id} className='flex flex-col gap-y-4'>
      <span className='font-semibold text-slate-300'>{label}</span>
      <div
        className={`flex gap-x-3 outline-none rounded-xl py-4 px-5 border border-slate-400 bg-slate-700 text-slate-400 hover:border-slate-300 shadow-md shadow-transparent hover:shadow-slate-700 focus-within:shadow-slate-700 focus-within:border-slate-300 ${isTextArea}`}
      >
        {Icon && <Icon />}
        {createElement(as, {
          className:
            'bg-transparent text-slate-100 outline-none resize-y w-full max-h-[240px]',
          ...props
        })}
      </div>
    </label>
  )
}
