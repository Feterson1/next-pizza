import Email from 'next-auth/providers/email';
import { z } from 'zod';
const passwordSchema = z
  .string()
  .min(6, { message: 'Пароль должен содержать не менее 6 символов' });
export const formLoginSchema = z.object({
  email: z.string().email({ message: 'Введите корректную почту!' }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullName: z.string().min(2, { message: 'Введите имя и фамилию' }),
      phone: z.string().min(10, { message: 'Введите корректный номер телефона' }),
      confirmPassword: passwordSchema,
    }),
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
