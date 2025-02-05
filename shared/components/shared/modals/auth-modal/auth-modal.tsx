'use client';
import { Button, Dialog, DialogContent } from '@/shared/components/ui';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { LoginForm } from './forms/login-form';
import { RegisterForm } from './forms/register-form';
interface Props {
  open: boolean;
  onClose: () => void;
}
export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const [type, SetType] = useState<'login' | 'register'>('login');
  const onSwitchType = () => {
    SetType(type === 'login' ? 'register' : 'login');
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[450px] bg-white p-10">
        {type === 'login' ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <RegisterForm onClose={handleClose} />
        )}
        <hr />
        <div className="flex gap-2">
          <Button
            onClick={() => {
              signIn('github', { callbackUrl: '/', redirect: true });
            }}
            variant="secondary"
            type="button"
            className="gap-2 h-12 p-2 flex-1">
            <img className="h-6 w-6" src="https://github.githubassets.com/favicons/favicon.svg" />
            GitHub
          </Button>
          <Button
            onClick={() => {
              signIn('google', { callbackUrl: '/', redirect: true });
            }}
            variant="secondary"
            type="button"
            className="gap-2 h-12 p-2 flex-1">
            <img
              className="h-6 w-6"
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
            />
            Google
          </Button>
        </div>
        <Button variant={'outline'} onClick={onSwitchType} type="button" className="h-12">
          {type !== 'login' ? 'Вход' : 'Регистрация'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
