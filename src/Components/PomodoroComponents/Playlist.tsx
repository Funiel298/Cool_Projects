import React from 'react';

interface PlaylistProps {
  songs?: string[]; // Make songs prop optional
}

const Playlist: React.FC<PlaylistProps> = ({ songs = [] }) => (
  <div>
    <h3 className="text-lg font-medium mb-2">Playlist</h3>
    <ul>
      {songs.map((song, index) => (
        <li key={index}>{song}</li>
      ))}
    </ul>
  </div>
);

export default Playlist;
