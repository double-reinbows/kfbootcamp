// @flow
import React, {Component} from 'react';

type State = {
  result: Array<Object>;
  repos: string,
};
type Props = {};

export default class MyRender extends Component<Props, State> {

  state: State = {
    result: [],
    repos: 'Loading....',
  }
  initResponse: Promise<*>;
  repoPromises: Array<Promise<*>>;

  componentDidMount() {
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
          this.setState({repos: ''});
          // this.setState({result: [{''}]});
          return a;
        }).map((item) => {
          item.then((j: Object) => {
            // console.log(j.name);
            let newRepos = this.state.repos;
            newRepos += j.name + ' ' + j.subscribers_count;
            this.setState({repos: newRepos});
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

  // componentDidUpdate(prevProps, prevState, prevContext) {
  //
  // }

  repoLine = this.state.result.map((item, i) => {
    console.log(item);
    return (
      <li key={i}>{item.name}{item.subscribers_count}</li>
    );
  });

  render() {
    return (
      <div>
        <ul>
          {this.state.result}
        </ul>
        {/*this.state.repos*/}
      </div>
    );
  }
}
