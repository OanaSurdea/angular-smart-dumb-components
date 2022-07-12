import { IArtist, IStatistic, IWriter } from '.';

export class ISong {
  title: string;
  genre: string;
  artists: IArtist[];
  writers: IWriter[];
  statistics?: IStatistic;
}
