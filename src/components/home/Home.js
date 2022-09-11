import React from 'react';
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all').then((res) => {});
  }, []);

  return <div></div>;
};

export default Home;
