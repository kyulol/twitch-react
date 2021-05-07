import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../../api';
import playBtn from '../../assets/images/icons/playTwitch.svg';

// SHOW PAGE LIST OF TOP STREAMERS

export default function TopStreams() {

  const [channels, setChannels] = useState([]);

  useEffect(() =>{

    const fetchData = async () => {
      
      const result = await api.get('https://api.twitch.tv/helix/streams');

      let dataArray = result.data.data;
      
      let gamesIDs = dataArray.map(streamer => {
        return streamer.game_id;
      })

      let usersIDs = dataArray.map(streamer => {
        return streamer.user_id;
      })

      let baseUrlGames = 'https://api.twitch.tv/helix/games?';

      let baseUrlUsers = 'https://api.twitch.tv/helix/users?';

      let queryParamsGames = "";
      let queryParamsUsers = "";

      gamesIDs.map(id =>{
        return queryParamsGames = queryParamsGames + `id=${id}&`
      })
      usersIDs.map(id =>{
        return queryParamsUsers = queryParamsUsers + `id=${id}&`
      })

      let urlFinalGames = baseUrlGames + queryParamsGames;
      let urlFinalUsers = baseUrlUsers + queryParamsUsers;

      let gamesNames = await api.get(urlFinalGames);
      let getUsers = await api.get(urlFinalUsers);

      let gamesNamesArray = gamesNames.data.data;
      let getUsersArray = getUsers.data.data;

      let finalArray = dataArray.map(stream =>{
        stream.gameName = "";
        stream.login = "";

        gamesNamesArray.forEach(name => {
          getUsersArray.forEach(user => {
            if (stream.user_id === user.id && stream.game_id === name.id) {
              stream.avatar = user.profile_image_url;
              stream.gameName = name.name;
              stream.login = user.login;

            }

          });
          
        });
        let newUrl = stream.thumbnail_url
        .replace("{width}", "320")
        .replace("{height}", "180");
        stream.thumbnail_url = newUrl;


        return stream;

      })

      setChannels(finalArray);

    }

    fetchData();

  }, [])

  return (
    <div className="">
      <h1 className="text-5xl font-medium my-8">Streams les plus populaires</h1>

      {/* container cards top streamers */}
      <div className="flex flex-wrap justify-center items-center font-medium text-white">

        {/* start loop card top streamers */}
        {channels.map((channel, index) =>( 

        <Link key={index} to={{ pathname: `/live/${channel.login}` }}>
          <div className="cardTopStream">
            {/* image top streamer (image taken from his live) */}
            <img src={channel.thumbnail_url} className="w-full object-contain" alt=""/>
            <p className="cardGameName ">{channel.gameName}</p> {/* <== name of the game he is playing*/}
            <div className="p-3">

              
              <p>{channel.viewers_count}</p> {/* <== nummber of viewers actually watching*/}

              {/* button to watch streamer*/}
                <div className="cardStreamBtn flex items-center justify-center whitespace-nowrapw-full">
                  <img className="w-6 mr-3" src={playBtn} alt="play video"/> {/* <== button image PLAY*/}
                  <span className="overflow-ellipsis overflow-hidden">{channel.user_name}</span> {/* <== streamer pseudo*/}
                </div>
            </div>

          </div>
        </Link>


        ))}
      </div>
      
    </div>
  )
}
