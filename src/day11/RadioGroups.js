// @flow
import React, {Component} from 'react';
import RadioGroup from './RadioGroup';
import update from 'immutability-helper';

type Props = {};

type RadioGroupObj = {
  choices: Array<string>,
  selectedIndex: number | null,
  name: string,
  // ref: mixed,
};

type State = {
  radioGroups: Array<RadioGroupObj>,
};



export default class RadioGroups extends Component<Props, State> {

  state: State = {
    radioGroups: [
      {choices: ['red', 'blue', 'yellow', 'green'],
        selectedIndex: null,
        name: 'colours',
      },
      {choices: ['soccer', 'badminton', 'equestrian', 'water polo'],
        selectedIndex: null,
        name: 'sports',
      },
    ],
  };

  radioButtonSelected = (radioGroupIndex: number, changedIndex: number) => {
    // let radioGroups = this.state.radioGroups;
    // let changedRadioGroup:RadioGroupObj = this.state.radioGroups[radioGroupIndex];
    // let newRadioGroup: RadioGroupObj = {...changedRadioGroup, selectedIndex: changedIndex};
    // this.setState({newRadioGroup});
    // let newRadioGroups = {...this.state.radioGroups, radioGroups:
    // this.setState(radioGroups, {radioGroups: newRadioGroup});
    // let selectedIndex = {...this.state.radioGroups[radioGroupIndex].selectedIndex};
    // selectedIndex = changedIndex;
    // this.setState({selectedIndex});
    // const collection = [1, 2, {a: [12, 17, 15]}];
    // const newCollection = update(collection, {2: {a: {$splice: [[1, 1, 13, 14]]}}});
  // => [1, 2, {a: [12, 13, 14, 15]}]
    console.log(this.state.radioGroups[radioGroupIndex]);
    let newState = update(this.state.radioGroups, {radioGroupIndex: {selectedIndex: {$set: changedIndex}}});
    console.log(newState);
    this.setState(newState);
  };

  render() {
    let {radioGroups} = this.state;
    let _radioGroup = radioGroups.map((item, index) => {
      return (
        <RadioGroup choices={item.choices} selectedIndex={item.selectedIndex} key={index}
          name={item.name} radioGroupKey={index} onChange={this.radioButtonSelected}/>
      );
    });
    return (
      <div>
        {_radioGroup}
      </div>
    );
  }
}
