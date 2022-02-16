import React, { useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

function VideoList(props) {
  const { category } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const response = await tmdbApi.getVideos(category, props.id);
      setVideos(response.results.slice(0, 5));
    };

    getVideos();
  }, [category, props.id]);
  return (
    <div>
      {videos.map((item, id) => (
        <Video key={id} item={item} />
      ))}
    </div>
  );
}

const Video = (props) => {
  const item = props.item;

  const iframeRef = useRef();

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);
  return (
    <div className="video" style={{ marginTop: "50px" }}>
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        style={{ width: "100%" }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoList;
