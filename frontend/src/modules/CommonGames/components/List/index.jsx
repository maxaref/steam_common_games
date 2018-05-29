import React from 'react';
import { PropTypes} from 'prop-types';
import { observer, PropTypes as MxPropTypes } from 'mobx-react';
import Loader from '../../../../components/Loader';

const ListItem = ({ src, image, name }) => (
  <a href={src} className="common-games-list__item" target="_blank">
    <img src={image} alt={name} className="common-games-list__item-poster"/>
    <span className="common-games-list__item-title">{name}</span>
  </a>
);

ListItem.propTypes = {
  appid: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const List = ({ store }) => (
  <div className="common-games-list">
    <Loader className="common-games__loader" />
    {!!store.items.length && <h1>Common games:</h1>}
    {!store.items.length && store.isFetched && <h1>Common games haven't found.</h1>}
    {store.items.map(item => <ListItem key={item.appid} {...item} />)}
  </div>
);

List.propTypes = {
  store: PropTypes.shape({
    isFetched: PropTypes.bool.isRequired,
    items: MxPropTypes.observableArray,
  }),
};

export default observer(List);