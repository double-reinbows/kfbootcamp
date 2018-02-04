 // @flow
import React from 'react';
import RadioButton from './RadioButton';

type Props = {
  choices: Array<string>,
  selectedIndex: number | null,
  onChange: Function,
  name: string,
  radioGroupKey: number,
  children: Array<RadioButton>,
  key: number,
};

export default function RadioGroup(props: Props) {
  let {choices, selectedIndex, onChange, name, radioGroupKey, children} = props;

  let childrenWithProps = React.Children.map(children, (RadioButton) => {
    return React.cloneElement(RadioButton, {name: name});
  });


  return (
    <div>
      {childrenWithProps}
    </div>
  );
}
