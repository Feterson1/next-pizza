'use client';

import { Input } from '../../ui';
import { ClearButton } from '../clear-button';
import { ErrorText } from '../error-text';
import { RequiredSymbol } from '../required-symbol';
import { useFormContext } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  requiered?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({ className, name, label, requiered, ...props }) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();
  const onClickClear = () => {
    setValue(name, '', { shouldValidate: true });
  };
  const value = watch(name);
  const errorText = errors[name]?.message as string;
  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {requiered && <RequiredSymbol />}
        </p>
      )}
      <div className="relative">
        <Input className="h-12 text-md" {...register(name)} {...props} />
        {value && <ClearButton onClick={onClickClear} />}
      </div>
      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
