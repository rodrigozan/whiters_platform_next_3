import React, { useState } from 'react';

const genres = [
  {
    name: 'Fantasia',
    subgenres: ['Alta Fantasia', 'Baixa Fantasia', 'Fantasia Urbana', 'Fantasia Científica'],
  },
  {
    name: 'Ficção Científica',
    subgenres: ['Cyberpunk', 'Distopia', 'Ficção Científica Hard', 'Ficção Científica Soft'],
  },
  {
    name: 'Horror',
    subgenres: ['Horror Cósmico', 'Horror Gótico', 'Horror Psicológico', 'Slasher'],
  },
];

const GenreList = () => {
  const [genre, setGenre] = useState('');
  const [subgenre, setSubgenre] = useState('');

  const handleAddGenre = (event) => {
    setGenre(event.target.value);
  };

  const handleAddSubgenre = (event) => {
    setSubgenre(event.target.value);
  };

  const filteredGenres = genres.filter((genre) =>
    genre.name.toLowerCase().includes(genre)
  );

  const filteredSubgenres = genres
    .map((genre) => genre.subgenres)
    .flat()
    .filter((subgenre) => subgenre.toLowerCase().includes(subgenre.toLowerCase()));

  return (
    <div>
      <h2>Lista de Gêneros</h2>
      <input type="text" placeholder="Pesquisar Gênero" onChange={handleAddGenre} />
      <ul>
        {filteredGenres.map((genre) => (
          <li key={genre.name}>
            {genre.name}
            <ul>
              {genre.subgenres.map((subgenre) => (
                <li key={subgenre}>{subgenre}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Pesquisar Subgênero" onChange={handleAddSubgenre} />
      <ul>
        {filteredSubgenres.map((subgenre) => (
          <li key={subgenre}>{subgenre}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
