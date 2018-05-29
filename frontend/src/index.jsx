import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import CommonGames from './modules/CommonGames/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommonGames />, document.getElementById('root'));
registerServiceWorker();
