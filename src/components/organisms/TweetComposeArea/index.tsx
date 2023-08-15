import React from 'react';
import Button from '../../molecules/Button';

export interface TweetComposeAreaProps {
  tweetText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}
const TweetComposeArea: React.FC<TweetComposeAreaProps> = ({
  onChange,
  onSubmit,
  tweetText,
}) => {
  return (
    <div className="border-t border-b border-gray-300 h-40 flex-row flex px-4">
      <div className="w-16 pt-4">
        <div className="w-10 h-10 bg-slate-400 rounded-full text-center">
          pic
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="border-b border-gray-300 h-32">
          <input
            type="text"
            placeholder="What's happening?"
            value={tweetText}
            onChange={onChange}
            className="w-full h-16 outline-none border-none py-4"
          />
        </div>
        <div className="justify-between items-center flex ">
          <div>icons</div>
          <div>
            <Button
              label={'Post'}
              className="px-4 text-lg"
              size={'small'}
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetComposeArea;
