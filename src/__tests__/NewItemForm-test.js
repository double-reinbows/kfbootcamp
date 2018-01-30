// @flow
import React from 'react';
import {shallow} from 'enzyme';

import NewItemForm from '../day8-9/NewItemForm';

it('should render a form', () => {
  let onChange = () => {};
  let onAddItem = () => {};
  let wrapper = shallow(
    <NewItemForm
      addTodoInput=""
      onTextChange={onChange}
      onAddItem={onAddItem}
    />
  );
  expect(
    wrapper.matchesElement(
      <div>
        <input type="text" value="" />
        <button onClick={onAddItem}>Submit</button>
      </div>
    )
  ).toEqual(true);
});
