import React from 'react';

function Child({ onAction, onReset }) {
  return (
    <div>
      <button onClick={onAction}> Click me</button>
      <button onClick={onReset}>Reset</button>
    </div>
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

    // this.setState({
    //   actionCount: this.state.actionCount + 1
    // });

    // functional setState without side effects
    this.setState((state, props) => {
      return {
        actionCount: state.actionCount + 1
      }
    });
  }

  resetState = () => {
    // this.setState({actionCount: 0}); // async reset
    // immediately reset
    this.setState({actionCount: 0}, function() {
      console.log("immediately reset :", this.state.actionCount);
    });
    console.log("reset :", this.state.actionCount);
  };

  render() {
    return(
      <div>
        <Child onAction={this.handleAction } onReset={ this.resetState } />
        <p>Clicked {this.state.actionCount} times </p>
      </div>
    );
  }

}

export { ThreeCounters, Counter };
