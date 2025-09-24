// app/Validators/ContactValidator.ts
import vine from '@vinejs/vine'

export const contactValidator = vine.compile(
  vine.object({
    name: vine
      .string()
      .trim()
      .minLength(2)
      .maxLength(255),
    
    email: vine
      .string()
      .email()
      .trim()
      .maxLength(255),
    
    message: vine
      .string()
      .trim()
      .minLength(5)
      .maxLength(1000)
  })
)