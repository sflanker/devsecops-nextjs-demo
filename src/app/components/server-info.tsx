'use client'

import {useEffect, useState} from 'react';

export default function ServerInfo() {
  const [time, setTime] = useState('Loading...');

  useEffect(
    () => {
      fetch('/.netlify/functions/time')
        .then(async res => {
          const data = await res.json();
          setTime(data.time);
        })
        .catch(err => {
          console.error(err);
          setTime('Error');
        });
    },
    []
  );

  return <ul>
    <li>Server Time: {time}</li>
  </ul>;
}