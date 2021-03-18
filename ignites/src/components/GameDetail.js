import React from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "./util";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const { screen, game, isLoading } = useSelector((state) => state.detail);
  const htmlPart = game.description;
  return (
    <>
      {!isLoading && (
        <Cardshadow className="shadow" onClick={exitDetailHandler}>
          <Detail LayoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 LayoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                LayoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 640)}
                alt="b_image"
              />
            </Media>
            <Description>
              <p dangerouslySetInnerHTML={{ __html: htmlPart }} />
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={screen.image}
                  alt="screenshots"
                  key={screen.image.id}
                />
              ))}
            </div>
          </Detail>
        </Cardshadow>
      )}
    </>
  );
};

const Cardshadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
`;

const Detail = styled(motion.div)`
  width: 70%;
  border-radius: 1rem;
  padding: 1rem 2.3rem;
  background: white;
  position: absolute;
  left: 15%;
  color: black;
  margin-top: 1rem;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 55vh;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
