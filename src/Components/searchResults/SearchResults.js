import React, {useState, useEffect} from 'react';
import api from '../../api';
import {Link, useParams} from 'react-router-dom';
import playBtn from '../../assets/images/icons/playTwitch.svg';

export default function SearchResults() {

  let {slug} = useParams();

  // check if there is a result for the search
  const [searchResults, setSearchResults] = useState(true);
  
  // get informations about the searched streamer
  const [streamerInfos, setStreamerInfos] = useState([]);

  // replace ' ' (space) by '' (no space) on the search input
  let cleanSearch = slug.replace(/ /g, '');

  useEffect(() => {
    const fetchData = async () =>{
      const result = await api.get(`https://api.twitch.tv/helix/users?login=${cleanSearch}`);
      setStreamerInfos(result.data.data)
    }
    fetchData();
  }, [])

  return (
    <div className="w-full">
      <h1>Résultat de la recherche</h1>
      <div className="flex justify-center flex-wrap items-center">
        {streamerInfos.map((stream, index) =>(
        <Link key={index} to={{pathname: `/live/${stream.login}`}}>
          <div className="card-search">
            <img src={stream.profile_image_url} alt="couverture du jeu " className="w-full"/>

            <div className="card-search-btn">
              <img className="w-6 mr-3" src={playBtn} alt="play video"/>
              <span className="overflow-ellipsis overflow-hidden">{stream.display_name}</span>
            </div>

          </div>
        </Link>
        ))}
      </div>
      
    </div>
  )
}
