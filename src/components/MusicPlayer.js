import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { css } from "@emotion/react";
import ProgressBar from "./ProgressBar";

const Page = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  height: 100vh;
`;
const LeftSection = styled.div`
  width: 40%;
  color: white;
  background-color: #000;
`;
const RightSection = styled.div`
  width: 60%;
  color: white;
  background-color: #252424;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MusicPlate = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  transition: transform 0.1s ease;
  animation: ${(props) => (props.rotate ? "roll 5s linear infinite" : "none")};
  @keyframes roll {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  /* Small screens (e.g., phones) */
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const MusicPlate1 = styled.div`
  width: 50px;
  height: 50px;
  //   text-align: center;
  border-radius: 100px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252424;
`;

function MusicPlayer() {
  const [rotate, setRotate] = useState(false);
  return (
    <Page>
      <LeftSection></LeftSection>
      <RightSection>
        <MusicPlate rotate={rotate}>
          <MusicPlate1>
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "100px",
                backgroundColor: "white",
              }}
            />
          </MusicPlate1>
        </MusicPlate>
        <ProgressBar rotate={setRotate} />
        {/* <audio controls src={slowlife}></audio> */}
      </RightSection>
    </Page>
  );
}

export default MusicPlayer;
