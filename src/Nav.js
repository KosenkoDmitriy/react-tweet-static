import React from 'react';
import PropTypes from 'prop-types';

function Nav({children}) {
  React.Children.forEach(children, (item) => {
    item.type === NavItem ? console.log("ok") : console.error("only NavItem allowed") ;
  })

  let items = React.Children.toArray(children);
  for (let i = items.length - 1; i >= 1; i--) {
    items.splice(i, 0,
      <span key={i} className="separator">|</span>
    );
  }
  return (
    <div>{items}</div>
  );
}

function NavItem({url,children}) {
  return (
    <a href={url}>{children}</a>
  );
}
NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

function NavMenu() {
  return(
    <Nav>
      <NavItem url='/'>Home</NavItem>
      <NavItem url='/about'>About</NavItem>
      <a href='/contacts'>Contacts</a>
    </Nav>
  );
}

export { NavMenu };
