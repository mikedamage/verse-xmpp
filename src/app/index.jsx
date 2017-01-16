import React                                 from 'react';
import { render }                            from 'react-dom';
import injectTapEventPlugin                  from 'react-tap-event-plugin';
import { $build, $iq, $msg, $pres, Strophe } from './util/strophe-helper';
import MuiThemeProvider                      from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import appStore from './stores/index';

injectTapEventPlugin();

const App = (
  <Provider store={appStore}>
    <MuiThemeProvider>
      <div className="hello">Hello</div>
    </MuiThemeProvider>
  </Provider>
);

render(App, document.getElementById('app'));
