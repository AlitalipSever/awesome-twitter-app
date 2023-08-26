import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tweet } from './TweetService.types';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export const createTweetSource = (
  frequency: number,
  account: string,
  attribute: string,
  URL: string,
) => {
  return interval(frequency).pipe(
    map(
      (i: number) =>
        ({
          account,
          timestamp: moment(Date.now()).format('HH:mm:ss'),
          content: `${attribute} Tweet number ${i + 1}`,
          username: `${attribute}User${i + 1}`,
          handle: `${attribute}User${i + 1}`,
          avatarUrl: URL,
          liked: false,
          id: uuidv4(),
        }) as Tweet,
    ),
  );
};
