// @flow
import React, {Component} from 'react';
'use strict';

type State = {
  renderedArr: Array<Object>; //JSX
  searchInput: string,
  initResponse: null | Promise<*>,
  resultArr: Array<Object>, //clean objects
};
type Props = {};

export default class Search extends Component<Props, State> {

  state: State = {
    renderedArr: [],
    searchInput: '',
    initResponse: null,
    resultArr: [],
  };


  async componentDidMount() {
    let {renderedArr, resultArr} = this.state;
    let myRequest = new Request('https://jsonplaceholder.typicode.com/users');
    let jsonProm = fetch(myRequest).then((res) => {
      // console.log(res);
      return res.json();
    }).then((json) => {
      return json;
    }).catch((err) => {
      console.log(err); //return nothing here
    });
    let init = (<li>Loading available users...</li>);
    this.setState({renderedArr: [...renderedArr, init]});
    renderedArr = this.state.resultArr;
    let json = await jsonProm;
    if (!json) {
      let newRender = [];
      newRender.push(<li>Oh snap! Something went wrong!</li>);
      this.setState({renderedArr: newRender});
    } else {
      this.setState({resultArr: Array.from(json)});
      resultArr = this.state.resultArr; // have to re-set resultArr
      let newRender = resultArr.map((item, i) => {
        return (<li key={i}>{item.name}</li>);
      });
      console.log('WORKS', newRender);
      this.setState({renderedArr: newRender});
    }
  }
  _changeSearchInput = (input: string) => {
    this.setState({searchInput: input});
  }
  async _searchUser(e) {
    let {searchInput, resultArr} = this.state;
    let cleanSearchInput = searchInput.replace(/\s/g, '').toLowerCase();
    let found = resultArr.find((element) => {
      return element.name.replace(/\s/g, '').toLowerCase() === cleanSearchInput;
    });
    console.log(found);
    if (!found) {
      let newRender = [];
      newRender.push(<li>You have to type one of the listed names brah!</li>);
      this.setState({renderedArr: newRender});
    } else {
      let myRequest = new Request('https://jsonplaceholder.typicode.com/users/' + found.id);
      let jsonProm = fetch(myRequest).then((res) => {
        return res.json();
      }).then((json) => {
        return json;
      }).catch((err) => {
        console.log(err); //return nothing here
      });
      let newRender = [];
      let init = (<li>Nice! Loading that User&apos;s deets....</li>);
      newRender.push(init);
      this.setState({renderedArr: newRender});
      let json = await jsonProm;
      // console.log('HERP', json);
      if (json) {
        let newRender = Object.entries(json);

        let list: Array<Object> = newRender.map((item, i) => {
          if (typeof item[1] === 'number') {
            let stringItem = item[1].toString();
            return (<li key={i}>{item[0]} : {stringItem}</li>);
          } else if (typeof item[1] === 'object') {
            // console.log('HALO HALO');
            let stringItem = JSON.stringify(item[1]);
            return (<li key={i}>{item[0]} : {stringItem}</li>);
          }
          return (<li key={i}>{item[0]} : {item[1]}</li>);
        });
        console.log('HALO', list);
        this.setState({renderedArr: list});
      } else {
        throw 'MAYDAY MAYDAY!';
      }
    }
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.searchInput} onChange={((e) => {this._changeSearchInput(e.target.value)})} />
        <button onClick={(e) => {this._searchUser(e);}}>SUBMIT</button>
        <ul>
          {this.state.renderedArr}
        </ul>
        {/*this.state.repos*/}
      </div>
    );
  }
}
