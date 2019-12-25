import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link
} from "react-router";
import logo from './logo.svg';
import './App.css';
import { I18nProvider } from '@lingui/react';
import { Trans } from '@lingui/macro';
import { ConfigProvider } from 'antd';
import Header from './components/A';
import Add from './components/B';
import List from './components/C';

function App() {
  return (
    // <ConfigProvider>
    //   <I18nProvider language="zh">
    //     <div className="App">
    //       <header className="App-header">
    //         {/* <Header></Header> */}
    //       </header>
    //       <Add></Add>
    //       <List></List>
    //     </div>
    //   </I18nProvider>
    // </ConfigProvider>
    <div>
      <Add></Add>
      <List></List>
    </div>
  );
}

export default App;
