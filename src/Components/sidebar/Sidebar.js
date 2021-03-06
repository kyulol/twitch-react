import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../../api';
import view from '../../assets/images/icons/view.svg';
import NumFormatter from '../../js/NumFormatter';

export default function Sidebar() {

  const [topStreamers, setTopStreamers] = useState([]);

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
        stream.avatar = "";
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
        return stream;

      })

      setTopStreamers(finalArray.slice(0,6));

    }

    fetchData();

  }, [])
  // console.log("hello");

  return (
    <div className="sidebar">
      <h3 className="text-center py-4">Chaines recommand??es</h3>

      <ul className="mx-auto divide-y-2 divide-twitch divide-solid">
        
        {topStreamers.map((stream, index) =>(
          <li  key={index} className="py-2 text-sm text-left">
            <Link to={{pathname: `/live/${stream.login}`}}>

              <div className="flex items-center w-full">

                <div className="relative mr-3">
                  <img className="w-10 rounded-full overflow-ellipsis overflow-hidden" src={stream.avatar} alt={`stream.login 'avatar'`}/>
                </div>

                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <span className="overflow-ellipsis overflow-hidden">{stream.user_name}</span>
                    <span className="flex justify-end font-light text-xs">
                        <img src={view} className="w-4 mr-2 animate-pulse" alt=""/>
                        {NumFormatter(stream.viewer_count)}
                    </span>  
                  </div>
                  
                  <p className="text-left w-full overflow-ellipsis overflow-hidden">{stream.gameName}</p>
                </div>

              </div>
                
            </Link>
          </li>
        ))}

      </ul>
    </div>
  )
}
