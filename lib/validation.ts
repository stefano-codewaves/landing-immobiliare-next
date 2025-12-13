import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Campo obbligatorio'),
  email: z.string().min(1, 'Campo obbligatorio').email('Formato non valido'),
  phone: z.string().regex(/^[+()\d-]+$/, 'Formato non valido'),
  privacy: z.boolean().refine(val => val === true, 'Campo obbligatorio'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
