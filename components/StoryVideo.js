'use client';

import { storyVideoPoster } from '@/lib/story-images';
import { useRef, useState } from 'react';

const STORY_VIDEO_SRC = '/assets/media/story-video.mp4';

export default function StoryVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handlePlayClick() {
    const video = videoRef.current;
    if (!video || loading) return;

    setLoading(true);
    setError('');

    try {
      if (!video.getAttribute('src')) {
        video.src = STORY_VIDEO_SRC;
      }

      // Show the player first — browsers often won't fire canplay / play()
      // while the video element is display:none.
      setIsPlaying(true);

      await video.play();
    } catch (err) {
      console.error('Story video playback error:', err);
      setError('Unable to start video playback. Please try again.');
      setIsPlaying(false);
    } finally {
      setLoading(false);
    }
  }

  function handleVideoError() {
    setError('Unable to load video. Please try again.');
    setIsPlaying(false);
    setLoading(false);
  }

  return (
    <div className="story-video" onContextMenu={(event) => event.preventDefault()}>
      <video
        ref={videoRef}
        className={`story-video__player${isPlaying ? ' story-video__player--visible' : ''}`}
        controls
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
        playsInline
        preload="metadata"
        draggable={false}
        onContextMenu={(event) => event.preventDefault()}
        onError={handleVideoError}
        onPlaying={() => setLoading(false)}
      />

      {!isPlaying && (
        <button
          type="button"
          className="story-video__poster"
          onClick={handlePlayClick}
          disabled={loading}
          aria-label="Play recovery story video"
        >
          <img
            src={storyVideoPoster}
            alt="Chenell Hickey recovery story"
            className="story-video__poster-image"
            draggable={false}
          />
          <span className="story-video__overlay" aria-hidden="true" />
          <span className="story-video__play">
            <i className={`bi ${loading ? 'bi-hourglass-split' : 'bi-play-circle-fill'}`} />
            <span>{loading ? 'Loading video...' : 'Watch My Story'}</span>
          </span>
        </button>
      )}

      {error && <p className="story-video__error">{error}</p>}
    </div>
  );
}
