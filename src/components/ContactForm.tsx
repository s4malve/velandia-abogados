import type TContactForm from '@/types/contactForm'

import { useState } from 'react'
import { FieldError, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Input from '@/components/Input'
import Button from '@/components/Button'

import Person from '@/components/icons/Person'
import Gmail from '@/components/icons/Gmail'
import Typography from '@/components/icons/Typography'
import LoadingSping from '@/components/icons/LoadingSping'
import PaperPlane from '@/components/icons/PaperPlane'
import Check from '@/components/icons/Check'
import Exclamation from '@/components/icons/Exclamation'

import ContactFormSchema from '@/schema/contactForm'
import sendMessage from '@/api/sendMessage'

type MessageStatus = 'secondary' | 'loading' | 'error' | 'success'
export default function ContactForm() {
  const [messageStatus, setMessageStatus] = useState<MessageStatus>('secondary')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TContactForm>({
    resolver: zodResolver(ContactFormSchema)
  })

  const onSubmit = handleSubmit(async (contactForm) => {
    const { data, loading, error } = await sendMessage(contactForm)

    if (!data && !loading && !error) setMessageStatus('secondary')
    else if (!data && loading) setMessageStatus('loading')
    else if (data && !loading && !error) setMessageStatus('success')
    else if (!data && !loading && error) setMessageStatus('error')
  })

  return (
    <form
      className='col-start-7 col-end-11 flex flex-col gap-y-8'
      onSubmit={onSubmit}
    >
      <Input
        label='nombre'
        placeholder='Luz Velandia'
        icon={Person}
        register={register}
        required
        name='name'
        type='text'
        error={errors.name as FieldError}
      />
      <Input
        label='correo'
        placeholder='yovese@gmail.com'
        register={register}
        name='email'
        type='email'
        icon={Gmail}
        error={errors.email as FieldError}
        required
      />
      <Input
        as='textarea'
        label='mensaje'
        register={register}
        name='message'
        placeholder='Hola Luz, tengo un problema...'
        icon={Typography}
        error={errors.message as FieldError}
        required
      />
      <Button
        type='submit'
        disabled={messageStatus === 'loading' || messageStatus === 'success'}
        variant={messageStatus}
        size='lg'
      >
        {messageStatus === 'secondary' && (
          <>
            <PaperPlane size='sm' /> Escríbenos{' '}
          </>
        )}
        {messageStatus === 'error' && (
          <>
            <Exclamation size='sm' />
            An error occured
          </>
        )}
        {messageStatus === 'loading' && (
          <>
            <LoadingSping size='sm' className='animate-spin' />
            Enviando mensaje...
          </>
        )}
        {messageStatus === 'success' && (
          <>
            <Check size='sm' />
            Mensaje Enviado
          </>
        )}
      </Button>
    </form>
  )
}
