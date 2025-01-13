import React from "react";
import styled from "styled-components";

const MusicPlateDiv = styled.div`
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

const MusicPlateOuterCircle = styled.div`
  width: 50px;
  height: 50px;
  //   text-align: center;
  border-radius: 100px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252424;

  /* Small screens (e.g., phones) */
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

function MusicPlate({ rotate }) {
  return (
    <MusicPlateDiv rotate={rotate}>
      <MusicPlateOuterCircle>
        <div
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "100px",
            backgroundColor: "white",
          }}
        />
      </MusicPlateOuterCircle>
    </MusicPlateDiv>
  );
}

export default MusicPlate;
