import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className="tweet">
      <Avatar/>
      <div className="content">
        <NameWithNick/>
        <Message/>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar"
    />
  );
}

function Message() {
  return (
    <div className="message">
      Message is less than 150 characters.
    </div>
  );
}

function NameWithNick() {
  return (
    <span className="name-with-nick">
      <span className="name">Dmitry</span>
      <span className="nick">@nick</span>
    </span>
  );
}

ReactDOM.render(
  <Tweet/>,
  document.querySelector('#root')
);
