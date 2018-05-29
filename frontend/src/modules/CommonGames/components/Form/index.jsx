import React from 'react';
import { observer } from 'mobx-react';
import Button from '../../../../components/Button';

const Form = ({ store: { linksText, changeLinksText, findGames }  }) => (
  <div className="common-games__form">
    <div className="common-games__form-title">Please, insert links to Steam users profiles:</div>
    <textarea
      cols="30" rows="10" className="common-games__form-text" placeholder="Links to profile"
      onChange={e => changeLinksText(e.target.value)}
      value={linksText}
    ></textarea>
    <Button className="common-games__form-button" onClick={findGames}>Show</Button>
  </div>
);

export default observer(Form);