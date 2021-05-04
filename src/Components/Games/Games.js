import React, {useState, useEffect} from 'react';
import api from '../../api';
import playBtn from '../../assets/images/icons/playTwitch.svg';

export default function Games() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      const result = await api.get('https://api.twitch.tv/helix/games/top')
      console.log(result);

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

  console.log(games);

  return (
    <div className="pl-60">
      <h1 className="text-5xl font-bold my-8">Jeux les plus populaires</h1>

      <div className="flex items-center justify-center flex-wrap">
        {games.map((game, index) =>(

          <div key={index} className="cardGame bg-twitch transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-none hover:ring ring-twitch ring-offset-4 ">
            <img src={game.box_art_url} alt="couverture du jeu " calssName="w-full"/>

              <div className="cardGameBtn flex items-center justify-center whitespace-nowrap font-medium text-white w-full p-3">
                <img className="w-6 mr-3" src={playBtn} alt="play video"/>
                <span className="overflow-ellipsis overflow-hidden">{game.name}</span>
              </div>

          </div>

        ))}
      </div>
      
    </div>
  )
}