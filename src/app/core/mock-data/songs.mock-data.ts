import { ISong } from '../../shared/interfaces';

export const SONGS: ISong[] = [
  // 1
  {
    title: 'Rolling in the deep',
    genre: 'Rhythm and blues soul',
    artists: [
      {
        name: 'Adele',
        region: 'UK',
      },
    ],
    writers: [
      {
        name: 'Adele',
        region: 'UK',
        gender: 'F',
      },
      {
        name: 'Paul Epworth',
        region: 'UK',
        gender: 'M',
      },
    ],
    statistics: {
      youtubeViews: 2049170347,
      isHit: true,
    },
  },
  // 2
  {
    title: 'Hello',
    genre: 'Pop Soul',
    artists: [
      {
        name: 'Adele',
        region: 'UK',
      },
    ],
    writers: [
      {
        name: 'Adele',
        region: 'UK',
        gender: 'F',
      },
      {
        name: 'AdkinsGreg Kurstin',
        region: 'US',
        gender: 'F',
      },
    ],
    statistics: {
      youtubeViews: 2989727972,
      isHit: true,
    },
  },
  // 3
  {
    title: 'Chasing Pavements',
    genre: 'Pop',
    artists: [
      {
        name: 'Adele',
        region: 'UK',
      },
    ],
    writers: [
      {
        name: 'Adele',
        region: 'UK',
        gender: 'F',
      },
      {
        name: 'Eg White',
        region: 'UK',
        gender: 'M',
      },
    ],
    statistics: {
      youtubeViews: 180292039,
      isHit: true,
    },
  },
];
