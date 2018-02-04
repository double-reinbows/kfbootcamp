// @flow
import React, {PropTypes} from 'react';
// import RadioButton from './RadioButton';


type Props = {
  // selected: boolean,
  name?: string,
  // value: string,
  children?: string,
};

export default function RadioButton(props: Props) {
  let {children} = props;
  // {name, children}: props;

  return (
    <div>
      <input type="radio" name={this.context.name} id={children}/>
      <label htmlFor={children}>{children}</label>
    </div>
  );
}

RadioButton.ContextTypes = {
  name: PropTypes.string,
};
