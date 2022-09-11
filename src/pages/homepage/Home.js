import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/card/Card';

const Home = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all').then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);

  return (
    <>
      <div>
        {data &&
          data?.map((item) => {
            return (
              <div key={item.show.id}>
                <Card
                  img={item.show.image.medium}
                  name={item.show.name}
                  language={item.show.language}
                  genres={item.show.genres[0]}
                  rating={item.show.rating.average}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
