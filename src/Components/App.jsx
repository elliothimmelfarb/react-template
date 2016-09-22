import React, { PropTypes } from 'react';

const App = ({ children }) => (
  <div className="container-fluid">
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired, //  eslint-disable-line react/forbid-prop-types
};

export default App;
