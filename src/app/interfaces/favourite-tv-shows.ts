import { TvShow } from './tv-shows';

export interface FavouriteTvShow {
  id: number;
  tvShow: TvShow;
  watchingSeason: number;
  watchingEpisode: number;
  completed: boolean;
  rating: number;
}

