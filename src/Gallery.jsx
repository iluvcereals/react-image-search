import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from './context';
import Loading from './Loading';
import NotFound from './NotFound';
const url = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_API_KEY
}`;

function Gallery() {
  const { search } = useGlobalContext();
  const { data, isPending, isError } = useQuery({
    queryKey: ['images', search],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${search}&per_page=12`);
      console.log(response.data.results);
      return response.data.results;
    },
  });
  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <p>Error...</p>;
  }
  if (data.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="gallery">
      {data.map(({ id, alt_description, urls }) => {
        return (
          <img
            src={urls.regular}
            alt={alt_description}
            key={id}
            className="image"
          />
        );
      })}
    </div>
  );
}

export default Gallery;
