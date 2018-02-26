import React from 'react';

function Nav({children}) {
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

function NavMenu() {
  return(
    <Nav>
      <NavItem url='/'>Home</NavItem>
      <NavItem url='/about'>About</NavItem>
      <NavItem url='/contacts'>Contacts</NavItem>
    </Nav>
  );
}

export { NavMenu };
