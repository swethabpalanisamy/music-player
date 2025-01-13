import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import MusicPlate from "./MusicPlate";

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

function MusicPlayer() {
  const [rotate, setRotate] = useState(false);
  return (
    <Page>
      <LeftSection>
        <div
          style={{
            backgroundColor: "#252424",
            borderRadius: "10px",
            margin: "10px",
            width: "90%",
            height: "100px",
          }}
        >
          <h4
            style={{ color: "white", margin: "0", padding: "10px 0px 0 10px" }}
          >
            Slow Life
          </h4>
          <p
            style={{
              color: "grey",
              margin: "0",
              padding: "10px 0px 10px 10px",
            }}
          >
            currently playing...
          </p>
        </div>
      </LeftSection>
      <RightSection>
        <MusicPlate rotate={rotate} />
        <ProgressBar rotate={setRotate} />
      </RightSection>
    </Page>
  );
}

export default MusicPlayer;
