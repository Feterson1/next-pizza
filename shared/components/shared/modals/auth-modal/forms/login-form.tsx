import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { formLoginSchema, TFormLoginValues } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Title } from '../../../title';
import { FormInput } from '../../../form-components';
import { Button } from '@/shared/components/ui';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
interface Props {
  onClose?: VoidFunction;
}
export const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  console.log(form, 'ХукФорм');

  const onSubmit = async (data: TFormLoginValues) => {
    console.log(data, 'Данные');
    try {
      const response = await signIn('credentials', {
        ...data,
        redirect: false,
      });
      if (!response?.ok) {
        throw Error();
      }
      toast.success('Вы успешно вошли в аккаунт', { icon: '✅' });
      onClose?.();
    } catch (error) {
      console.error('Error [LOGIN]', error);
      toast.error('Не удалось войти в аккаунт', { icon: '❌' });
    }
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title text="Вход в аккаунт" size="md" className="font-bold" />
            <p className="text-gray-400">Ввведите свою почту,чтобы войти в свой аккаунт</p>
          </div>
          <img src="/assets/images/phone-icon.png" alt="phone-icon" width={60} height={60} />
        </div>
        <FormInput name="email" label="E-mail" requiered />
        <FormInput type="password" name="password" label="Пароль" requiered />
        <Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
          {form.formState.isSubmitting ? 'Вход...' : 'Войти'}
        </Button>
      </form>
    </FormProvider>
  );
};
