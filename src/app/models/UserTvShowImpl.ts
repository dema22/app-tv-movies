import { TvShowImpl } from './TvShowImpl';

export class UserTvShowsImpl {
  // Remember to use typescript convention (_ for prrivate properties, and getters and setters with the name of the property)
  constructor(
    private _tvShow?: TvShowImpl,
    private _watchingSeason?: number,
    private _watchingEpisode?: number,
    private _completed?: boolean,
    private _rating?: number,
  ) {}

  get tvShow(): TvShowImpl {
    return this._tvShow;
  }

  set tvShow(tvShow: TvShowImpl) {
    this._tvShow = tvShow;
  }

  get watchingSeason(): number {
    return this._watchingSeason;
  }

  set watchingSeason(watchingSeason: number) {
    this._watchingSeason = watchingSeason;
  }

  get watchingEpisode(): number {
    return this._watchingEpisode;
  }

  set watchingEpisode(watchingEpisode: number) {
    this._watchingEpisode = watchingEpisode;
  }

  get completed(): boolean {
    return this._completed;
  }

  set completed(completed: boolean) {
    this._completed = completed;
  }

  get rating(): number {
    return this._rating;
  }

  set rating(rating: number) {
    this._rating = rating;
  }
}
