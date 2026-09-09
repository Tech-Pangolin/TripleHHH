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
  return new Promise((resolve, reject) => {
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      resolve();
      return;
    }

    function cleanup() {
      video.removeEventListener('canplay', onReady);
      video.removeEventListener('loadeddata', onReady);
      video.removeEventListener('error', onError);
    }

    function onReady() {
      cleanup();
      resolve();
    }

    function onError() {
      cleanup();
      reject(new Error('Unable to load video.'));
    }

    video.addEventListener('canplay', onReady);
    video.addEventListener('loadeddata', onReady);
    video.addEventListener('error', onError);

    // Catch race where data became ready between the check and listener attach.
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      cleanup();
      resolve();
    }
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
        // Attach ready listeners before setting src so we don't miss canplay.
        const ready = waitForVideoReady(video);
        video.src = url;
        await ready;
      } else {
        await waitForVideoReady(video);
      }

      await video.play();
      setIsPlaying(true);
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
