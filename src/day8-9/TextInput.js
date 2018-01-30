// @flow
import type {State} from './types/State';
// import {setState} from './main_react';
import React from 'react';

type Props = {
  state: State,
};

export default function TextInput(props: Props) {
  let {state} = props;
  return (
    <input type="text" value={state.textInput} />
    //   onInput=() => {
    //
    // }>
  );
}
