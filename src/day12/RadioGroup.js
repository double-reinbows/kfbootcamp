 // @flow
import React, {Component, PropTypes} from 'react';

type Props = {
  name: string,
  children?: Array<string>,
};

export class RadioGroup extends Component<Props> {
  props: Props;

  static childContextTypes = {
    name: PropTypes.string,
  };

  getChildContext() {
    return {name: this.props.name};
  }

  // childrenWithProps: React.Children.map(children, (RadioButton) => {
  //   return React.cloneElement(RadioButton, {name: this.name});
  // });

  render() {
    let {children, ...otherProps} = this.props;
    return (
      <div {...otherProps}>
        {children}
      </div>
    );
  }
}
