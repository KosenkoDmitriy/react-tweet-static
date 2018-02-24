import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment'; // yarn add moment


function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithNick author={tweet.author}/>
        <Time dateTime={tweet.timestamp}/>
        <Message text={tweet.msg}/>
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

var testTweet = {
    msg: "Message ... ",
    gravatar: "qwer", // https://daveceddia.com/gravatar
    author: {
      nick: "bondPerson",
      name: "Bond"
    },
    likes: 555,
    retweets: 1000001,
    timestamp: "2018-02-24 21:21:21"
}

function Avatar({ hash }) {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar"
    />
  );
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

function NameWithNick({ author }) {
  const {name, nick} = author;
  return (
    <span className="name-with-nick">
      <span className="name">{name}</span>
      <span className="nick">@{nick}</span>
    </span>
  );
}

const Time = ({ dateTime }) => {
  const timeString = moment(dateTime).fromNow();
  return (
    <span className="time"> {timeString} </span>
  );
}

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
  <Tweet tweet={testTweet}/>,
  document.querySelector('#root')
);
