import React, {useState, useEffect} from 'react';
import {useLocation, useParams, Link} from 'react-router-dom';
import api from '../../api';
import playBtn from '../../assets/images/icons/playTwitch.svg';
import NumFormatter from '../../js/NumFormatter';
import view from '../../assets/images/icons/view.svg';



export default function GameStreamers() {

  let {slug} = useParams();
  let location = useLocation();
  console.log(location);

  const [streamData, setStreamData] = useState([]);
  const [viewersTotal, setViewersTotal] = useState(0);

  useEffect(() => {

      const fetchData = async () => {
          const result = await api.get(
              `https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`
          );
          let dataArray = result.data.data;

          let finalArray = dataArray.map(stream => {
              let newURL = stream.thumbnail_url
              .replace('{width}', "320")
              .replace('{height}', "180");
              stream.thumbnail_url = newURL;
              return stream;
          })

          // calcul du total des viewers
          let viewersCount = finalArray.reduce((acc, val) => {
              return acc + val.viewer_count;
          }, 0);

          let userIDs = dataArray.map(stream => {
              return stream.user_id;
          })

          let baseUrl = "https://api.twitch.tv/helix/users?";
          let queryParamsUsers = "";

          userIDs.map(id => {
              return (queryParamsUsers = queryParamsUsers + `id=${id}&`)
          })
          let finalUrl = baseUrl + queryParamsUsers;

          let getUsersLogin = await api.get(finalUrl);
          
          let userLoginArray = getUsersLogin.data.data;

          finalArray = dataArray.map(stream => {

              stream.login = "";

              userLoginArray.forEach(login => {
                  if(stream.user_id === login.id) {
                      stream.login = login.login;
                  }
              })

              return stream;
          })

          setViewersTotal(viewersCount);
          setStreamData(finalArray)
      }

      fetchData();
  }, [location.state.gameID])

  console.log(viewersTotal);
  console.log(streamData);

  return (
    <div className="gameStreamers">
      <h1 className="titleGameStreamers text-5xl font-medium my-8">Stream : {slug}</h1>
      <div className="border-twitch border-2 w-44 mx-auto rounded-lg h-10 flex items-center justify-center text-twitch font-bold animate-pulse">
        <img className="w-5" src={view} alt="icon view (eye)" />
        <h3 className="viewersGameStreamers ml-3 ">{NumFormatter(viewersTotal)} Viewers</h3>
      </div>

      <div className="containerGameStreamers">
      {streamData.map((streamer, index) =>(
        <Link key={index} to={{ pathname: `/live/${streamer.login}` }}>
          <div className="cardStreamer">
            {/* image top streamer (image taken from his live) */}
            <img src={streamer.thumbnail_url} className="imgCardStreamer" alt=""/>
            <div className="p-3">

              <p>{streamer.viewers_count}</p> {/* <== nummber of viewers actually watching*/}

              {/* button to watch streamer*/}
                <div className="btnCardStreamer">
                  <img className="w-6 mr-3" src={playBtn} alt="play video"/> {/* <== button image PLAY*/}
                  <span>{streamer.user_name}</span> {/* <== streamer pseudo*/}
                </div>
            </div>

          </div>
        </Link>
      ))}

      </div>
    </div>
  )
}
