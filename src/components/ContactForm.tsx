import type TContactForm from '@/types/contactForm'

import { useEffect } from 'react'
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
import useButtonStatus from '@/hooks/useButtonStatus'
import useStatus from '@/hooks/useStatus'

export default function ContactForm() {
  const { buttonStatus, setButtonStatus } = useButtonStatus()
  const { setData, setEndLoading, setError, setStartLoading } = useStatus()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<TContactForm>({
    resolver: zodResolver(ContactFormSchema)
  })

  const onSubmit = handleSubmit(async (contactForm) => {
    try {
      setButtonStatus('loading')
      setStartLoading()

      const res = await sendMessage(contactForm)

      if (res.ok) {
        const data = await res.json()
        setButtonStatus('success')
        setData(data)

        return
      }

      const error = await Promise.reject(res)

      setError(error)
      return
    } catch (error) {
      setButtonStatus('error')
      setError(error as string)
    } finally {
      setEndLoading()
    }
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: '', message: '', name: '' })
    }
  }, [isSubmitSuccessful])

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
        disabled={buttonStatus === 'loading' || buttonStatus === 'success'}
        variant={buttonStatus}
        size='lg'
      >
        {buttonStatus === 'secondary' && (
          <>
            <PaperPlane size='sm' /> Escríbenos{' '}
          </>
        )}
        {buttonStatus === 'error' && (
          <>
            <Exclamation size='sm' />
            An error occured
          </>
        )}
        {buttonStatus === 'loading' && (
          <>
            <LoadingSping size='sm' className='animate-spin' />
            Enviando mensaje...
          </>
        )}
        {buttonStatus === 'success' && (
          <>
            <Check size='sm' />
            Mensaje Enviado
          </>
        )}
      </Button>
    </form>
  )
}
