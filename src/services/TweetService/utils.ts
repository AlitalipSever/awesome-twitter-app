import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tweet } from './types';

export const createTweetSource = (
  frequency: number,
  account: string,
  attribute: string,
) => {
  return interval(frequency).pipe(
    map(
      (i: number) =>
        ({
          account,
          timestamp: Date.now().toString(),
          content: `${attribute} Tweet number ${i + 1}`,
          username: `${attribute}User${i + 1}`,
          handle: `${attribute}User${i + 1}`,
          avatarUrl:
            'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
        }) as Tweet,
    ),
  );
};
