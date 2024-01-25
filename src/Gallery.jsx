import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

function Gallery() {
  const { search } = useGlobalContext();
  const { data, isPending } = useQuery({
    queryKey: ['images', search],
    queryFn: async () => {
      const res = await axios.get(`${url}&query=${search}&per_page=9`);
      return res.data.results;
    },
  });

  if (isPending) {
    return (
      <div className="gallery">
        <div className="loading"></div>
      </div>
    );
  }
  console.log(data);
  return (
    <div className="gallery">
      {data.map(({ id, description, urls: { regular } }) => {
        return (
          <img src={regular} alt={description} key={id} className="image" />
        );
      })}
    </div>
  );
}

export default Gallery;
