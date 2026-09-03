'use client';

import { storyVideoPoster } from '@/lib/story-images';
import { useEffect, useRef, useState } from 'react';

async function fetchPlaybackUrl() {
  const response = await fetch('/api/story-video/token', { cache: 'no-store' });
  const text = await response.text();
  let data = {};

  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    throw new Error(text || 'Unable to load video.');
  }

  if (!response.ok) {
    throw new Error(data.error || 'Unable to load video.');
  }

  return data.playbackUrl;
}

function waitForVideoReady(video) {
  if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    function cleanup() {
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('error', onError);
    }

    function onCanPlay() {
      cleanup();
      resolve();
    }

    function onError() {
      cleanup();
      reject(new Error('Unable to load video.'));
    }

    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('error', onError);
    video.load();
  });
}

export default function StoryVideo() {
  const videoRef = useRef(null);
  const [playbackUrl, setPlaybackUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    fetchPlaybackUrl()
      .then((url) => {
        if (!cancelled) {
          setPlaybackUrl(url);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  async function handlePlayClick() {
    setLoading(true);
    setError('');

    try {
      const video = videoRef.current;
      if (!video) {
        throw new Error('Unable to load video.');
      }

      let url = playbackUrl;
      if (!url) {
        url = await fetchPlaybackUrl();
        setPlaybackUrl(url);
      }

      if (video.getAttribute('src') !== url) {
        video.src = url;
      }

      await waitForVideoReady(video);
      setIsPlaying(true);
      await video.play();
    } catch (err) {
      setError(err.message || 'Unable to start video playback.');
      setIsPlaying(false);
    } finally {
      setLoading(false);
    }
  }

  function handleVideoError() {
    setError('Unable to load video. Please try again.');
    setIsPlaying(false);
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
        preload="none"
        draggable={false}
        onContextMenu={(event) => event.preventDefault()}
        onError={handleVideoError}
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
