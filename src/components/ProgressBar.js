import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import slowlife from "../assets/media/slowlife.mp3";
import pause from "../assets/images/pause.png";
import play from "../assets/images/play-button.png";

const PlayingBar = styled.div`
  width: 70%;
  color: white;
  height: 5px;
  background-color: white;
  //   margin-top: 6rem;
  border-radius: 10px;
  margin: 0 10px;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 480px) {
    width: 20%;
  }
`;
const Playing = styled.div`
  width: ${(props) => props.width}%;
  height: 5px;
  background-color: red;
  //   margin-top: 6rem;
  border-radius: 10px;
`;
const PlayButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-top: 6rem;
`;
const PlayButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  //   padding: 20px;
`;

const PlayButtons = styled.button`
  //   padding: 10px;
  margin-left: 10px;
  font-weight: 700;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
`;
const ProgressBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  //   padding: 20px;
`;
const PlayButtonImages = styled.img`
  width: 25px;
  height: 24px;
  background-color: white;
  border-radius: 100%;
  padding: 10px;
`;
function ProgressBar({ rotate }) {
  const audio = useRef(new Audio(slowlife));
  const progressBarRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [playingSeconds, setPlayingSeconds] = useState(0);
  const audioMetaData = {
    minutes: Math.floor(audio.current.duration / 60) || 0,
    seconds: Math.floor(audio.current.duration % 60) || 0,
  };
  useEffect(() => {
    audio.current.addEventListener("timeupdate", () =>
      setPlayingSeconds(audio.current.currentTime)
    );
    return () => {
      audio.current.removeEventListener("timeupdate", () =>
        setPlayingSeconds(audio.current.currentTime)
      );
    };
  }, []);

  const playMusic = () => {
    if (!playing) {
      audio.current.play();
      rotate(true);
    } else {
      rotate(false);
      audio.current.pause();
    }
    let play = !playing;
    setPlaying(play);
  };

  const forwardMusic = (e) => {
    let width = progressBarRef.current.offsetWidth;
    let clickWidth = e.nativeEvent.offsetX;
    let newTime = (clickWidth / width) * audio.current.duration;
    audio.current.currentTime = newTime;
    setPlayingSeconds(newTime);
  };
  console.log(audio.current.currentTime, playingSeconds, "audio.current");
  return (
    <PlayButtonArea>
      <ProgressBarDiv>
        <h6>{`${Math.floor(playingSeconds / 60)} : ${Math.floor(
          playingSeconds % 60
        )}`}</h6>
        <PlayingBar ref={progressBarRef} onClick={(e) => forwardMusic(e)}>
          <Playing
            width={(playingSeconds / audio.current.duration) * 100 || 0}
          ></Playing>
        </PlayingBar>
        <h6>{`${audioMetaData.minutes} : ${audioMetaData.seconds}`}</h6>
      </ProgressBarDiv>
      <PlayButton>
        {/* <PlayButtons>prev</PlayButtons> */}
        <PlayButtons onClick={playMusic}>
          <PlayButtonImages src={playing ? pause : play} />
        </PlayButtons>
        {/* <PlayButtons>next</PlayButtons> */}
      </PlayButton>
    </PlayButtonArea>
  );
}

export default ProgressBar;
