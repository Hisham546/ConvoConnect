/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { RecoilRoot } from "recoil";
import React from 'react';

const Root = () => (
   <RecoilRoot>
         <App />
       </RecoilRoot>
  )


AppRegistry.registerComponent(appName, () => Root);
