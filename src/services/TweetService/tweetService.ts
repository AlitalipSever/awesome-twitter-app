import { merge } from 'rxjs';
import { createTweetSource } from './utils';

const tweetObservable = merge(
  createTweetSource(5000, 'AwardsDarwin', 'Facepalm'),
  createTweetSource(3000, 'iamdevloper', 'Expert'),
  createTweetSource(5000, 'CommitStrip', 'Funny'),
);

export const tweetService = {
  getTweets: () => tweetObservable,
};
