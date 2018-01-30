// @flow
import React from 'react';
import type {Person} from './state';

type Props = {
  people: Array<Person>,
  searchValueChanged: (string) => void;
  searchValue: string,
};

export default function ContactsNavigator(props: Props) {
  let {people, searchValueChanged, searchValue} = props;

  let styleSheet = {
    flex: 1,
    backgroundColor: 'white',
  };

  let listStyle = {
    listStyle: 'none',
  };

  let _personsName = people.filter((item) => {
    return item.name.toLowerCase().includes(searchValue.toLowerCase());
  }).map((item) => {
    return (<li key={item.id}>{item.name}</li>);
  });

  return (
    <div style={styleSheet}>
      <input type="text" onChange={(event) => searchValueChanged(event.target.value)} value={searchValue}
        placeholder="who ya lookin for?"/>
      <ul style={listStyle}>
        {_personsName}
      </ul>
    </div>
  );
}
