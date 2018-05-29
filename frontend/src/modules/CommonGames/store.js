import { getByLinksText } from '../../services/commonGames';
import { flow, action, observable } from "mobx";

export class CommonGamesStore {
  @observable linksText = '';
  @observable items = [];
  @observable isLoading = false;
  @observable isFetched = false;

  @action changeLinksText = (text) => {
    this.linksText = text;
    this.isFetched = false;
  };

  @action.bound
  findGames = flow(function* () {
    this.isLoading = true;

    const games = yield getByLinksText(this.linksText);

    this.items = games.length && games || [];
    this.isLoading = false;
    this.isFetched = true;
  });
}