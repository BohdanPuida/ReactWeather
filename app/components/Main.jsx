var React = require('react');

var Nav = require('Nav');

var Main = ({children}) => {   //props;
  return (
    <div>
      <Nav/>
      <h2>
        Main component
      </h2>
      {children}

    </div>

  );
}

module.exports = Main;
