// @flow
import React, {Component} from 'react';

type State = {
  result: Array<Object>;
  searchInput: string,
};
type Props = {};

export default class Search extends Component<Props, State> {

  state: State = {
    result: [],
    searchInput: '',
  };
  initResponse: Promise<*>;
  repoPromises: Array<Promise<*>>;

  async componentDidMount() {
    this.state.result.push(<li>Loading...</li>);
    let myRequest = new Request('https://jsonplaceholder.typicode.com/posts');
    this.initResponse = fetch(myRequest);
    this.initResponse.then((response) => {
      // console.log(response.status);
      if (response.status === 200) {
        return response.json();
      } else {
        throw 'Failed to get initial list of repos';
      }
    }).then((jsonData: Array<Object>) => {
      console.log(jsonData);
      this.repoPromises = jsonData.map((response2) => {
        let requestPerRepo = new Request('https://jsonplaceholder.typicode.com/users/' + response2.userId);
        return fetch(requestPerRepo);
      });
      // console.log(this.repoPromises);

      Promise.all(this.repoPromises).then((values) => {
        // console.log(values);
        // let arrayToString = values.toString();
        // this.setState({repos: arrayToString});
        return values.map((item) => {
          let a = item.json();
          // console.log(a);
          this.setState({result: []});
          // this.setState({result: [{''}]});
          return a;
        }).map((item) => {
          item.then((j: Object) => {
            let newResult = this.state.result;
            newResult.push(<li>{j.name + ' ' + j.email}</li>);
            this.setState({result: newResult});
            console.log(this.state.result);
          });
        });
      });
    });
    console.log(this.state.result);
  }
  _changeSearchInput = (input: string) => {
    this.setState({searchInput: input});
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.searchInput} onChange={((e) => {this._changeSearchInput(e.target.value)})} />
        <ul>
          {this.state.result}
        </ul>
        {/*this.state.repos*/}
      </div>
    );
  }
}
