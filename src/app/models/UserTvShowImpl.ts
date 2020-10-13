import { TvShowImpl } from './TvShowImpl';

export class UserTvShowsImpl {

  constructor(
    public tvShow?: TvShowImpl,
    public watchingSeason?: number,
    public watchingEpisode?: number,
    public completed?: boolean,
    public rating?: number,
  ) {}  
  
  //constructor() {}

  /*constructor(
    private _tvShow: TvShowImpl,
    private _watchingSeason: number,
    private _watchingEpisode: number,
    private _completed: boolean,
    private _rating: number,
  ) {}

  get id(): number {
    return this._id;
  }

  set id(newId: number) {
    this._id = newId;
  }

  get watchingSeason(): number {
    return this._watchingSeason;
  }

  set watchingSeason(watchingSeason: number) {
    this._watchingSeason = watchingSeason;
  }*/


}
