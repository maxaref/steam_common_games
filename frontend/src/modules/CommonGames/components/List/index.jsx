import React from 'react';
import { observer } from 'mobx-react';
import Loader from '../../../../components/Loader';

const ListItem = ({ src, image, name }) => (
  <a href={src} className="common-games__list-item" target="_blank">
    <img src={image} alt={name} className="common-games__list-item-poster"/>
    <span className="common-games__list-item-title">{name}</span>
  </a>
);

const List = ({ store }) => (
  <div className="common-games__list">
    <Loader className="common-games__loader" />
    {!!store.items.length && <h1>Common games:</h1>}
    {store.items.map(item => <ListItem key={item.appid} {...item} />)}
  </div>
);

export default observer(List);