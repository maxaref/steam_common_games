import './index.less';
import React from 'react';
import List from './components/List/index';
import Form from './components/Form/index';
import { CommonGamesStore } from './store';
import { observer } from 'mobx-react';

const store = new CommonGamesStore();

const CommonGames = () => (
  <div className={`common-games ${store.isLoading ? 'common-games--loading' : ''}`}>
    <Form store={store} />
    <List store={store} />
  </div>
);

export default observer(CommonGames);