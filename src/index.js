import React from 'react';
import ReactDOM from 'react-dom';

// Global modules
import './index.css';

// Local modules
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
