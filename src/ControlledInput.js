import React from 'react';

class ControlledInput extends React.Component {
  state = {
    text: 'please typing something interesting'
  };

  handleAction = (event) => {
    let text = event.target.value;
    text = text.replace(/[0-9]/g, '');
    this.setState({
        text: text
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
