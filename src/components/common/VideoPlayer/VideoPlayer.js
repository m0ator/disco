import React, { useState, useRef } from 'react';
import { Icon } from '../Icon/Icon';
import './VideoPlayer.css';

export const VideoPlayer = ({
  src,
  poster,
  title,
  autoPlay = false,
  controls = true,
  loop = false,
  muted = false,
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * duration;
  };

  const handleVolumeChange = (e) => {
    const value = e.target.value;
    setVolume(value);
    videoRef.current.volume = value;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className={`video-player ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={togglePlay}
      />

      {controls && (showControls || !isPlaying) && (
        <div className="video-controls">
          <div 
            className="video-progress" 
            ref={progressRef}
            onClick={handleProgressClick}
          >
            <div 
              className="progress-bar"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>

          <div className="controls-main">
            <button className="control-button" onClick={togglePlay}>
              <Icon name={isPlaying ? 'pause' : 'play_arrow'} />
            </button>

            <div className="time-display">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            <div className="volume-control">
              <Icon name={volume === 0 ? 'volume_off' : 'volume_up'} />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            </div>

            {title && <div className="video-title">{title}</div>}
          </div>
        </div>
      )}

      {!isPlaying && !showControls && (
        <button className="play-overlay" onClick={togglePlay}>
          <Icon name="play_circle" />
        </button>
      )}
    </div>
  );
}; 