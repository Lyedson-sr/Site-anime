import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';
import Jujutsu from './img/jujutsu.jpg';
import one_piece from './img/one_piece.webp'
import Attack_on_Titan from './img/Attack_on_Titan.webp'
import kimetsu from './img/kimetsu.png'


const MangaDetails = () => {
  const { id } = useParams(); // Iso vai Pegar o ID do mangá da URL

  // Dados dos mangás (é com se fosse a simulação de uma API ou banco de dados)
  const mangas = [
    {
      id: 1,
      title: 'Jujutsu Kaisen',
      cover: Jujutsu,
      description: 'No universo de Jujutsu Kaisen, escondido à vista de todos, um conflito milenar continua. Mostra sobrenaturais comercialmente como “Maldições” alternativamente humanidade das sombras, e humanos poderosos.',
      rating: 4.7,
      genres: ['Ação', 'Sobrenatural', 'Drama'],
      chapters: [
        { id: 1, title: 'Capítulo 1: O Feiticeiro Jujutsu' },
        { id: 2, title: 'Capítulo 2: A Maldição do Dedo' },
        { id: 3, title: 'Capítulo 3: O Pacto com Sukuna' },
      ],
    },
    {
      id: 2,
      title: 'One Piece',
      cover: one_piece,
      description: 'Monkey D. Luffy e sua tripulação partem em uma aventura para encontrar o tesouro lendário, o One Piece, e se tornar o Rei dos Piratas.',
      rating: 4.8,
      genres: ['Ação', 'Aventura', 'Comédia'],
      chapters: [
        { id: 1, title: 'Capítulo 1: A Aventura Começa' },
        { id: 2, title: 'Capítulo 2: O Pirata Shanks' },
        { id: 3, title: 'Capítulo 3: A Fruta do Diabo' },
      ],
    },
    {
      id: 3,
      title: 'Kimetsu no Yaiba',
      cover: kimetsu,
      description: 'Tanjiro Kamado luta para salvar sua irmã, Nezuko, de uma maldição demoníaca e vingar sua família, morta por demônios.',
      rating: 4.9,
      genres: ['Ação', 'Fantasia', 'Histórico'],
      chapters: [
        { id: 1, title: 'Capítulo 1: O Massacre da Família Kamado' },
        { id: 2, title: 'Capítulo 2: O Treinamento de Urokodaki' },
        { id: 3, title: 'Capítulo 3: A Prova Final' },
      ],
    },
    {
      id: 4,
      title: 'Attack on Titan',
      cover: Attack_on_Titan,
      description: 'A humanidade luta pela sobrevivência em um mundo dominado por Titãs, criaturas gigantes que devoram humanos.',
      rating: 4.8,
      genres: ['Ação', 'Drama', 'Fantasia Sombria'],
      chapters: [
        { id: 1, title: 'Capítulo 1: Ao Grito de "Ataque!"' },
        { id: 2, title: 'Capítulo 2: O Dia em que o Mundo Caiu' },
        { id: 3, title: 'Capítulo 3: A Humanidade Contra-Ataca' },
      ],
    },
  ];

  // Encontra o mangá pelo ID
  const manga = mangas.find(m => m.id === parseInt(id));

  if (!manga) {
    return <div className="manga-not-found">Mangá não encontrado!</div>;
  }

  return (
    <div className="manga-details-page">
      {/* Botão de voltar */}
      <Link to="/mangas" className="back-button">
        &larr; Voltar para a lista de mangás
      </Link>

      {/* Os Detalhes do Mangá */}
      <div className="manga-details">
        <img src={manga.cover} alt={manga.title} className="manga-cover" />
        <div className="manga-info">
          <h1>{manga.title}</h1>
          <p className="manga-description">{manga.description}</p>
          <p className="manga-rating"><strong>Avaliação:</strong> {manga.rating}</p>
          <p className="manga-genres"><strong>Gêneros:</strong> {manga.genres.join(', ')}</p>
        </div>
      </div>

      {/* A Lista de Capítulos */}
      <div className="chapters-section">
        <h2>Capítulos</h2>
        <ul className="chapters-list">
          {manga.chapters.map(chapter => (
            <li key={chapter.id} className="chapter-item">
              <span>{chapter.title}</span>
              <button className="read-button">Ler</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MangaDetails;