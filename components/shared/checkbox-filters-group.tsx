'use client';
import React, { useState } from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input, Skeleton } from '../ui';

type Item = FilterChecboxProps;
interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selectedIds?: Set<string>;
  className?: string;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit,
  searchInputPlaceholder = 'Поиск...',
  loading,
  defaultValue,
  selectedIds,
  onClickCheckbox,
  className,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  if (loading) {
    return (
      <div className={className}>
        <div className="font-bold mb-3">{title}</div>
        {...Array(limit)
          .fill(0)
          .map((_, idx) => <Skeleton key={idx} className="h-6 mb-5 rounded-[8px] " />)}
        <Skeleton className=" w-28 h-6 mb-5 rounded-[8px] " />
      </div>
    );
  }
  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    : defaultItems?.slice(0, limit);

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            onChange={onChangeSearchInput}
            className={'bg-gray-50 border-none'}
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            key={index}
            checked={selectedIds?.has(item.value)}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            name={name}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button className="text-primary mt-3" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Скрыть' : '+ Показать всё'}
          </button>
        </div>
      )}
    </div>
  );
};
