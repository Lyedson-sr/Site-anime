import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../App.css';
import dandadanImage from './img/dandadan.jpg';
import naruto from './img/naruto.jpg'
import Attack_on_Titan from './img/Attack_on_Titan.webp'
import haikyuu from './img/haikyuu.jpg'
import kimetsu from './img/kimetsu.png'
import kaiju from './img/kaiju.jpg'

function Home() {
  const highlights = [
    {
      id: 1,
      title: 'Naruto',
      date: '2019/12/15',
      description: 'Descrição.',
      rating: '★★★★☆ 7.35',
      image: naruto,
    },
    {
      id: 2,
      title: 'Dandadan',
      description: 'Descrição.',
      rating: '★★★★☆ 7.25',
      image: dandadanImage,
    },
    {
      id: 3,
      title: 'Attack on Titan',
      description: 'Descrição.',
      rating: '★★★★☆ 7.5',
      image: Attack_on_Titan ,
    },
    {
      id: 4,
      title: 'kaiju no 8',
      date: '2019/12/15',
      description: 'Descrição.',
      rating: '★★★★☆ 7.5',
      image: kaiju,
    },
    {
      id: 5,
      title: 'Haikyu!!',
      description: 'Descrição.',
      rating: '★★★★☆ 7.5',
      image: haikyuu,
    },
    {
      id: 6,
      title: 'Kimetsu no Yaiba',
      description: 'Descrição.',
      rating: '★★★★☆ 7.5',
      image: kimetsu,
    },
  ];

  const items = highlights.map((highlight) => (
    <div key={highlight.id} className="carousel-item">
      <img src={highlight.image} alt={highlight.title} />
      <h3>{highlight.title}</h3>
      {highlight.date && <p className="date">{highlight.date}</p>}
      <p className="description">{highlight.description}</p>
      <p className="rating">{highlight.rating}</p>
    </div>
  ));

  return (
    <div className="home-page">
      <h1 className="welcome-title">Bem-vindo ao Mundo dos Animes e Mangás</h1>
      <p className="welcome-text">
        Animes são produções animadas originárias do Japão, que abrangem uma variedade de gêneros e estilos.
        Desde aventuras épicas até histórias de romance e comédia, os animes conquistaram fãs em todo o mundo.
        Eles são conhecidos por sua arte única, narrativas envolventes e personagens memoráveis.
      </p>
      <p className="welcome-text">
        Mangás, por outro lado, são quadrinhos japoneses que muitas vezes servem de base para animes.
        Eles são publicados em revistas especializadas e cobrem uma ampla gama de temas, desde ação e fantasia
        até dramas cotidianos. Mangás como "Naruto", "One Piece" e "Attack on Titan" se tornaram fenômenos globais.
      </p>

      <h2>Destaques da Semana</h2>
      <div className="carousel-container">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1024: { items: 4 },
          }}
          autoPlay
          autoPlayInterval={3000}
          infinite
          disableButtonsControls
        />
      </div>

      <div className="additional-content">
        <h2>Mais sobre Animes e Mangás</h2>
        <p className="welcome-text">
          A cultura otaku, que engloba animes, mangás, cosplay e muito mais, tem crescido exponencialmente ao redor do mundo.
          Eventos como a Comic-Con e a Anime Expo atraem milhares de fãs todos os anos, celebrando a paixão por essas formas de arte.
        </p>
        <p className="welcome-text">
          Além disso, plataformas de streaming como Crunchyroll e Funimation tornaram os animes acessíveis a um público global,
          enquanto editoras como a Panini e a JBC trazem os mangás para os fãs brasileiros.
        </p>
      </div>
    </div>
  );
}

export default Home;