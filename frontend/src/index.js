import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import {Provider} from 'react-redux';
import store from './store/index.js';
import './styles/base/reset.css';
import './styles/components/activeFriend.css';
import './styles/components/friendInfo.css';
import './styles/components/friends.css';
import './styles/components/message.css';
import './styles/components/messageSend.css';
import './styles/components/messenger.css';
import './styles/components/register.css';
import './styles/components/rightSide.css';
import './styles/layout/grid.css';
import './styles/utils/utils.css';

import { positions, transitions, Provider as AlertProvider} from 'react-alert';
import alertTemplate from 'react-alert-template-basic';

const options = {
  timeout : 5000,
  positions: positions.BOTTOM_CENTER,
  transitions : transitions.SCALE
}

ReactDOM.render(
   <Provider store={store}>
     <AlertProvider template={alertTemplate} {...options} >
    <App />
    </AlertProvider>
    </Provider>
  ,
  document.getElementById('root')
); 