// @flow
import React from 'react';

type Props = {
  choices: [string],
  selectedIndex: number | null,
  onChange: Function,
  name: string,
  radioGroupKey: number,
};

export default function RadioGroup(props: Props) {
  let {choices, selectedIndex, onChange, name, radioGroupKey} = props;

  let RadioButtons = choices.map((item, index) => {
    console.log(selectedIndex);
    let checked = selectedIndex === index ? true : false;
    return (
      <div className="radio" key={index}>
        <label key={index}>
          <input type="radio" value={index} name={name} checked={checked} key={index}
            onChange={(event) => {
              onChange(radioGroupKey, event.target.value);
            }}/>
          {item}
        </label>
      </div>
    );
  });

  return (
    <div className="container">
      <form>
        {RadioButtons}
      </form>
    </div>
  );
}
