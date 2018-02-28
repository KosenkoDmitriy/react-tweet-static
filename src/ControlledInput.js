import React from 'react';

class ControlledInput extends React.Component {
  state = { text: '' };

  handleAction = (event) => {
    this.setState({
      text: event.target.value
    });
    console.log("", this.state.text);
  };

  render() {
    return (
      <input type="text" value={this.state.text} onChange={this.handleAction} />
    );
  }
}

export { ControlledInput };
