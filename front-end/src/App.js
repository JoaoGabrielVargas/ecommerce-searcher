import React, { useState } from 'react';
import { fetchApi } from './services/fetchApi';
import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  const [store, setStore] = useState('');
  const [category, setCategory] = useState('Geladeira');
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  /* useEffect(() => {
    fetchApi('celular', 'moto G 60');
  }, []); */

  const handleClick = async () => {
    await fetchApi(category, query).then((res) => setProducts(res.results));
  };

  return (
    <div className="container">
      <header className="container-header">
        <select name="store" onChange={(e) => setStore(e.target.value)}>
          <option value="Mercado Livre" defaultValue>Mercado Livre</option>
          <option value="Buscapé">Buscapé</option>
        </select>
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="Geladeira">Geladeira</option>
          <option value="TV">TV</option>
          <option value="Celular">Celular</option>
        </select>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button type="button" onClick={handleClick}> Search </button>
      </header>
      <p>{store}</p>
      <div>
        {products.length === 0 ? <p> Busque alguns itens! </p>
          : products.map((el) => (
            <ProductCard
              thumbnail={el.thumbnail}
              title={el.title}
              price={el.price}
              permalink={el.permalink}
              id={el.id}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
