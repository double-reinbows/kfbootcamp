// @flow
import React from 'react';

type Props = {
  onAddItem: () => void,
  addTodoInput: string,
  onTextChange: (content: string) => void,
};

export default function NewItemForm(props: Props) {
  let onChange = props.onTextChange;
  let onSubmit = () => {
    props.onAddItem();
  };
  let onKeyPress = (target: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (target.charCode === 13) {
      onSubmit();
    }
  };

  return (
    <div>
      <input type="text" value={props.addTodoInput} onChange={(event: SyntheticInputEvent<HTMLInputElement>) => onChange(event.target.value)} onKeyPress={onKeyPress}/>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
