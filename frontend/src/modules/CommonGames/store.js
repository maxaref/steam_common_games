import { getByLinksText } from '../../services/commonGames';
import { flow, autorun, action, observable } from "mobx";

export class CommonGamesStore {
  @observable linksText = '';
  @observable items = [];
  @observable isLoading = false;

  @action changeLinksText = (text) => {
    this.linksText = text;
  };

  constructor() {
    autorun(() => console.log(this.linksText, this.items.length));
  }

  @action.bound
  findGames = flow(function* () {
    this.isLoading = true;

    const games = yield getByLinksText(this.linksText);

    this.items = games;
    this.isLoading = false;
  });
}