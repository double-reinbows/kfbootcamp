// @flow
import React from 'react';


type Props = {
  // selected: boolean,
  name?: string,
  // value: string,
  children?: string,
};
export default function RadioButton(props: Props) {
  let {name, children} = props;

  return (
    <div>
      <input type="radio" name={name} id={children}/>
      <label htmlFor={children}>{children}</label>
    </div>
  );
}
