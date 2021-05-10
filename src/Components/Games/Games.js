import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../../api';
import playBtn from '../../assets/images/icons/playTwitch.svg';

// SHOW PAGE LIST OF TOP GAMES STREAMED

export default function Games() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      const result = await api.get('https://api.twitch.tv/helix/games/top')

      let dataArray = result.data.data;
      let finalArray = dataArray.map(game => {
        let newUrl = game.box_art_url
        .replace("{width}", "250")
        .replace("{height}", "300");
      game.box_art_url = newUrl;
      return game;
      });

      setGames(finalArray);

    }

    fetchData();

  }, [])

  return (
    <div className="gamesList">
      <h1 className="titleGamesList">Jeux les plus populaires :</h1>

      <div className="containerGamesList">
        {games.map((game, index) =>(
          <Link key={index} to={{pathname: "game-streamers/" + game.name, state: {gameID: game.id}}}>
            <div className="cardGame">
              <img src={game.box_art_url} alt="couverture du jeu " className="w-full"/>

              <div className="cardGameBtn">
                <img className="w-6 mr-3" src={playBtn} alt="play video"/>
                <span>{game.name}</span>
              </div>

            </div>
          </Link>

        ))}
      </div>
      
    </div>
  )
}
