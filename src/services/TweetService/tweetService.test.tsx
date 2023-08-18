import { TestScheduler } from 'rxjs/testing';

import moment from 'moment';
import { createTweetSource } from './utils';
import { take } from 'rxjs';

describe('createTweetSource', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should return an observable that emits tweets', () => {
    testScheduler.run(({ expectObservable }) => {
      const frequency = 1000;
      const account = 'testAccount';
      const attribute = 'testAttribute';
      const URL = 'https://example.com/image.jpg';

      const expectedTweet = {
        account,
        timestamp: moment(Date.now()).format('HH:mm:ss'),
        content: `${attribute} Tweet number 1`,
        username: `${attribute}User1`,
        handle: `${attribute}User1`,
        avatarUrl: URL,
      };

      const source$ = createTweetSource(frequency, account, attribute, URL);

      expectObservable(source$.pipe(take(1))).toBe('1000ms (a|)', {
        a: expectedTweet,
      });
    });
  });
});
