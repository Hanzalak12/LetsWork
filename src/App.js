import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Gallery from './pages/Gallery.jsx';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const App = () => {
  return (
    <Provider store={store}>
        <Gallery />
    </Provider>
  );
};

export default App;
