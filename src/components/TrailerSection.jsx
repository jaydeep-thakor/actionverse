import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { dummyTrailers } from '../assets/assets';
import BlurCircle from './BlurCircle';

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  // Extract YouTube video ID from full URL
  const getVideoId = (url) => {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : url;
  };

  return (
    <div className='custom-container py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>
        Trailers
      </p>

      <div className='relative mt-6 mx-auto max-w-[960px] w-full aspect-video'>
        {currentTrailer?.videoUrl && (
          <YouTube
            videoId={getVideoId(currentTrailer.videoUrl)}
            opts={{
              width: '100%',
              height: '540',
              playerVars: { autoplay: 0 },
            }}
            className="mx-auto max-w-full"
          />
        )}

        {/* Example: Change trailer on click */}
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          {dummyTrailers.map((trailer, idx) => (
            <img
              key={idx}
              src={trailer.image}
              alt="Trailer Thumbnail"
              className={`w-40 cursor-pointer rounded-lg border-2 ${
                currentTrailer.videoUrl === trailer.videoUrl
                  ? 'border-red-500'
                  : 'border-transparent'
              }`}
              onClick={() => setCurrentTrailer(trailer)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
