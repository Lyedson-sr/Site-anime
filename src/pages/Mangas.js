import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Jujutsu from './img/jujutsu.jpg';
import Attack_on_Titan from './img/Attack_on_Titan.webp'
import kimetsu from './img/kimetsu.png'
import one_piece from './img/one_piece.webp'
import Jujutsu2 from './img/jujutsu2.jpg';


const Mangas = () => {
  const topManga = {
    id: 1,
    title: 'Jujutsu Kaisen',
    cover: Jujutsu,
    description: 'No universo de Jujutsu Kaisen, escondido à vista de todos, um conflito milenar continua. Mostra sobrenaturais comercialmente como “Maldições” alternativamente humanidade das sombras, e humanos poderosos.',
    rating: 4.7,
    genres: ['Ação', 'Sobrenatural', 'Drama'],
  };

  const availableMangas = [
    {
      id: 1,
      title: 'Jujutsu Kaisen',
      cover: Jujutsu2 ,
      description: 'Um mangá sobre maldições e batalhas sobrenaturais.',
    },
    {
      id: 2,
      title: 'One Piece',
      cover: one_piece,
      description: 'A aventura de Luffy para se tornar o Rei dos Piratas.',
    },
    {
      id: 4,
      title: 'Attack on Titan',
      cover: Attack_on_Titan,
      description: 'A humanidade luta contra gigantes devoradores de humanos.',
    },
    {
      id: 3,
      title: 'Kimetsu no Yaiba',
      cover: kimetsu,
      description: 'Tanjiro luta para salvar sua irmã de uma maldição demoníaca.',
    },
  ];

  return (
    <div className="mangas-page">
      <h1>Mangás</h1>

      {/* Manga Top 1 do Mês */}
      <div className="top-manga">
        <h2>Manga Top 1 do Mês</h2>
        <div className="top-manga-details">
          <img src={topManga.cover} alt={topManga.title} />
          <div className="top-manga-info">
            <h3>{topManga.title}</h3>
            <p>{topManga.description}</p>
            <p><strong>Avaliação:</strong> {topManga.rating}</p>
            <p><strong>Gêneros:</strong> {topManga.genres.join(', ')}</p>
          </div>
        </div>
      </div>

      {/* Mangás Disponíveis */}
      <div className="available-mangas">
        <h2>Mangás Disponíveis</h2>
        <div className="manga-list">
          {availableMangas.map(manga => (
            <Link to={`/manga/${manga.id}`} key={manga.id} className="manga-item">
              <img src={manga.cover} alt={manga.title} />
              <div className="manga-info">
                <h3>{manga.title}</h3>
                <p>{manga.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mangas;