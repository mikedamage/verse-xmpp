import React from 'react';
import AppBar from 'material-ui/AppBar';

const VerseAppBar = (props) => {
  return (
    <AppBar title="Verse Messenger" iconClassNameRight="muidocs-icon-navigation-expand-more" {...props} />
  );
};

export default VerseAppBar;
