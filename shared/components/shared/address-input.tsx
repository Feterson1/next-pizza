'use client';
import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="87e1d0a0fdbe52f96ccf1c0f855aacdee8f4a98a"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
