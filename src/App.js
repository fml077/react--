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
import B from './components/B';
import C from './components/C';
import E from './components/E';
import F from './components/F';

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
      <B name="小黄鸡" age="2" />
      <C name="喵姑娘" age="3"/>
      <E />
      <F />
    </div>
  );
}

export default App;
