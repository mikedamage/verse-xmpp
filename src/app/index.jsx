import React                from 'react';
import { render }           from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import { Provider }         from 'react-redux';
import store                from './stores/index';
import VerseAppBar          from './components/verse-app-bar';
import './util/strophe-plugins';

injectTapEventPlugin();

const App = (
  <Provider store={store}>
    <MuiThemeProvider>
      <VerseAppBar />
    </MuiThemeProvider>
  </Provider>
);

render(App, document.getElementById('app'));
