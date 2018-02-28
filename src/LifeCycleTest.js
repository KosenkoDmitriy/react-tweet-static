import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycleTest extends React.Component {
  state = { counter: 0 };

  constructor(props) {
    super(props);
    console.log('Constructing...');
    console.log('Current state: ', this.state);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('current props:', this.props);
    console.log('next props:', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleAction = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    console.log('rendering...');
    return (
      <button type="button" onClick={this.handleAction} >
        Click to start counting {this.state.counter}
      </button>
    );
  };

}

export default LifeCycleTest;
