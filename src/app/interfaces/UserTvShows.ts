import { TvShow } from './TvShow';

export interface UserTvShows {
  id: number;
  tvShow: TvShow;
  watchingSeason: number;
  watchingEpisode: number;
  completed: boolean;
  rating: number;
}

