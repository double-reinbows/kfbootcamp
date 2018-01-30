// @flow
import React from 'react';

type TextChanged = (newValue: string) => void;

type Props = {
  searchValue: string,
  onChange: TextChanged,
};

export default function SearchForm(props: Props) {
  let {searchValue, onChange} = props;

  return (
    <div>
      <input type="text" value={searchValue} onChange={(event: SyntheticInputEvent<HTMLInputElement>) => onChange(event.target.value)} />
    </div>
  );
}
