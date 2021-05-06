import React from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';
import {useParams} from 'react-router-dom';

export default function Live() {
  
  let {slug} = useParams();
  console.log(slug);

  return (
    <div className="container-live-video">
      <ReactTwitchEmbedVideo width="100%" height="100%" channel="CohhCarnage" />
    </div>
  )
}
