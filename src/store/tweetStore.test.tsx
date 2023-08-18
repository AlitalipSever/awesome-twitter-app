import { setTweets, getTweets, getLikedTweetCount } from './tweetStore';
import { TestScheduler } from 'rxjs/testing';
import { Tweet } from '../types/Tweet';

const mockTweets: Tweet[] = [
  {
    id: '1',
    liked: false,
    receivedAt: Date.now(),
    username: 'User1',
    handle: '@user1',
    content: 'This is a tweet from user1',
    timestamp: '12:00:00',
    avatarUrl: 'https://example.com/avatar1.jpg',
  },
  {
    id: '2',
    liked: true,
    receivedAt: Date.now(),
    username: 'User2',
    handle: '@user2',
    content: 'This is a tweet from user2',
    timestamp: '12:01:00',
    avatarUrl: 'https://example.com/avatar2.jpg',
  },
  {
    id: '3',
    liked: true,
    receivedAt: Date.now(),
    username: 'User3',
    handle: '@user3',
    content: 'This is a tweet from user3',
    timestamp: '12:02:00',
    avatarUrl: 'https://example.com/avatar3.jpg',
  },
];

describe('TweetStore', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should set tweets correctly', () => {
    setTweets(mockTweets);
    const tweetsObservable = getTweets();

    testScheduler.run(({ expectObservable }) => {
      expectObservable(tweetsObservable).toBe('a', { a: mockTweets });
    });
  });

  it('should get the correct count of liked tweets', () => {
    setTweets(mockTweets);

    testScheduler.run(({ expectObservable }) => {
      expectObservable(getLikedTweetCount()).toBe('a', { a: 2 });
    });
  });
});
