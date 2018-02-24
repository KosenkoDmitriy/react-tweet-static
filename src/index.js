import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className="tweet">
      <Avatar/>
      <div className="content">
        <NameWithNick/>
        <Time/>
        <Message/>
        <div className="buttons">
          <ReplyBtn/>
          <RetweetBtn/>
          <LikeBtn/>
          <MoreOptionsBtn/>
        </div>
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

const Time = () => (
  <span className="time">5h ago</span>
);

const ReplyBtn = () => (
  <i className="fa fa-reply reply-button"/>
);

const RetweetBtn = () => (
  <i className="fa fa-retweet retweet-button"/>
);

const LikeBtn = () => (
  <i className="fa fa-heart like-button"/>
);

const MoreOptionsBtn = () => (
  <i className="fa fa-ellipsis-h more-button"/>
);

ReactDOM.render(
  <Tweet/>,
  document.querySelector('#root')
);
