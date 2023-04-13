import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchDescription } from '../services/fetchApi';

export default function ProductCard({
  thumbnail, title, price, permalink, id,
}) {
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchDescription(id).then((res) => setDescription(res.plain_text));
  }, []);
  return (
    <div>
      <img src={thumbnail} alt="thumbnail" />
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>
        {' '}
        {price}
        {' '}
      </h2>
      <form action={permalink}>
        <input type="submit" value="Ir ao site" />
      </form>
    </div>
  );
}

ProductCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  permalink: PropTypes.permalink,
}.isRequired;
