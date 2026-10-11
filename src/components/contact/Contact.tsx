import { AlertCircle, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { Reveal } from '@/components/layout/Reveal'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { SocialLinks } from '@/components/layout/SocialLinks'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CONTACT, isConfigured } from '@/lib/constants'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const { t } = useTranslation()
  const [errors, setErrors] = useState<FormErrors>({})

  const emailConfigured = isConfigured(CONTACT.email)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    const nextErrors: FormErrors = {}

    if (!name) nextErrors.name = t('contact.validation.name')
    if (!EMAIL_PATTERN.test(email)) nextErrors.email = t('contact.validation.email')
    if (!message) nextErrors.message = t('contact.validation.message')

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0 || !emailConfigured) return

    const subject = encodeURIComponent(`${t('contact.form.name')}: ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)

    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact" surface>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 mx-auto w-full max-w-[1400px] px-4">
        <div>
          <SectionHeading
            eyebrow={t('contact.eyebrow')}
            title={t('contact.title')}
            description={t('contact.description')}
            className="mb-8"
          />

          <Reveal delay={100}>
            <SocialLinks variant="list" />
          </Reveal>
        </div>

        <Reveal delay={160}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-card md:p-8"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                {t('contact.form.name')}
              </label>
              <Input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder={t('contact.form.namePlaceholder')}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
              />
              {errors.name ? (
                <p
                  id="contact-name-error"
                  role="alert"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600"
                >
                  <AlertCircle className="size-3.5" aria-hidden />
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                {t('contact.form.email')}
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={t('contact.form.emailPlaceholder')}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
              {errors.email ? (
                <p
                  id="contact-email-error"
                  role="alert"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600"
                >
                  <AlertCircle className="size-3.5" aria-hidden />
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                {t('contact.form.message')}
              </label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder={t('contact.form.messagePlaceholder')}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
              />
              {errors.message ? (
                <p
                  id="contact-message-error"
                  role="alert"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600"
                >
                  <AlertCircle className="size-3.5" aria-hidden />
                  {errors.message}
                </p>
              ) : null}
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-2 w-full sm:w-auto"
              disabled={!emailConfigured}
            >
              <Send aria-hidden />
              {t('contact.form.send')}
            </Button>

            <p className="text-xs leading-relaxed text-muted-foreground">
              {emailConfigured ? (
                t('contact.form.note')
              ) : (
                <span className="inline-block rounded-md bg-muted px-2 py-1 font-mono">
                  {t('common.todo')} — VITE_CONTACT_EMAIL
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
