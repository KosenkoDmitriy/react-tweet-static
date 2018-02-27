import React from 'react';

function Child({ onAction }) {
  return (
    <button onClick={onAction}> Click me</button>
  );
}

const ThreeCounters = () => (
  <div>
    <Counter />
    <Counter />
    <Counter />
  </div>
);

class Counter extends React.Component {
  state = {
    actionCount: 0
  }

  handleAction = (action) => {
    console.log('Child action: ', action);

    this.setState({
      actionCount: this.state.actionCount + 1
    });
  }

  render() {
    return(
      <div>
        <Child onAction={this.handleAction} />
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }

}

export { ThreeCounters, Counter };
