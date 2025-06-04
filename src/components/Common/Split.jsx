import React from "react";

import Splitting from "splitting.js";

class Split extends React.Component {
  target = React.createRef();

  split = () => {
    if (this.target.current) {
      Splitting({ target: this.target.current });
    }
  };

  componentDidMount = this.split;
  componentDidUpdate = this.split;

  render() {
    const { tag: Tag = 'div', ...props } = this.props;
    return <Tag ref={this.target} {...props}>{this.props.children}</Tag>;
  }
}

export default Split;
