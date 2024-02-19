/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';
import store from './src/state/store';
import { Provider } from 'react-redux';
import { RealmProvider } from '@realm/react';
import { Profile,UserId } from './src/models/realmModels';

const schemaVersion = 3;

const Root = () => (
  <Provider store={store}>
    <RealmProvider schemaVersion={schemaVersion} schema={[Profile,UserId]}>
      <App />
    </RealmProvider>
  </Provider>

)


AppRegistry.registerComponent(appName, () => Root);
