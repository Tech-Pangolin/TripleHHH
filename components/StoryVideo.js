'use client';

import { useEffect, useRef, useState } from 'react';

export default function StoryVideo() {
  const videoRef = useRef(null);
  const [playbackUrl, setPlaybackUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isPlaying || !playbackUrl || !videoRef.current) {
      return;
    }

    videoRef.current.play().catch(() => {
      setError('Unable to start video playback.');
      setIsPlaying(false);
    });
  }, [isPlaying, playbackUrl]);

  async function handlePlayClick() {
    setLoading(true);
    setError('');

    try {
      let url = playbackUrl;
      if (!url) {
        const response = await fetch('/api/story-video/token', { cache: 'no-store' });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Unable to load video.');
        }
        url = data.playbackUrl;
        setPlaybackUrl(url);
      }

      setIsPlaying(true);
    } catch (err) {
      setError(err.message || 'Unable to load video.');
      setIsPlaying(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="story-video"
      onContextMenu={(event) => event.preventDefault()}
    >
      {!isPlaying ? (
        <button
          type="button"
          className="story-video__poster"
          onClick={handlePlayClick}
          disabled={loading}
          aria-label="Play recovery story video"
        >
          <img
            src="/assets/img/pexels/headscarf-phone-smile.jpg"
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
      ) : (
        <video
          ref={videoRef}
          className="story-video__player"
          src={playbackUrl}
          controls
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          playsInline
          preload="metadata"
          draggable={false}
          onContextMenu={(event) => event.preventDefault()}
        />
      )}

      {error && <p className="story-video__error">{error}</p>}
    </div>
  );
}
