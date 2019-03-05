import React from 'react';

const SongDetail = ({ song }) => {
  if (!song) return null;
  return (
    <dl>
      <dt>Name</dt>
      <dd>{song.name}</dd>
      // <dt>Capital</dt>
      // <dd>{song.capital}</dd>
      // <dt>Population</dt>
      // <dd>{song.population}</dd>
    </dl>
  );
}

export default SongDetail;
