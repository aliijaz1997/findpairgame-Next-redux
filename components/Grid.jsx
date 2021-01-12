import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  LIMIT_CARDS,
  SHUFFLE,
  DUPLICATE_CARDS,
  RESET_CARDS,
  FLIP_ALL_CARDS,
} from "../react-redux/constants/action-types";

import { flipCard } from "../react-redux/actions/index";

function Grid(props) {
  useEffect(() => {
    props.resetCards();
    props.shuffleCards();
    props.limitCards();
    props.duplicateCards();
    props.shuffleCards();

    setTimeout(() => {
      props.flipAllCards();
    }, 1500);
  }, [props.numberOfPairs]);

  useEffect(() => {
    if (props.matching) {
      setTimeout(() => {
        props.flipAllCards();
      }, 1000);
    }
  }, [props.matching]);

  useEffect(() => {
    if (props.numberOfFoundPairs === props.numberOfPairs) {
      setTimeout(() => {
        alert(" This time you matched ");
      }, 500);
    }
  }, [props.numberOfFoundPairs]);

  return (
    // How images are displayed
    <GridContainer>
      {props.cards.map((card, index) => {
        if (card.isActive || card.timed) {
          return (
            <ImageWrapper color="#bbb" width={props.width} key={"div" + index}>
              <img key={card.src + index} data-index={card.index} src={card.src} />
            </ImageWrapper>
          );
        }
        else if (card.match) {
          return (
            <ImageWrapper
              color="transparent"
              width={props.width}
              key={"div" + index}
            />
          );
        }
        else {
          return (
            <ImageWrapper
              color="#bbb"
              width={props.width}
              key={"div" + index}
              onClick={() => {
                if (!props.matching) {
                  props.flipCard(card.index);
                }
              }}
            />
          );
        }
      })}
    </GridContainer>
  );
}

const mapStateToProps = (state) => ({
  numberOfPairs: state.numberOfPairs,
  numberOfAttempts: state.numberOfAttempts,
  numberOfFoundPairs: state.numberOfFoundPairs,
  cards: state.cards,
  clickCounter: state.clickCounter,
  matching: state.matching,
  width: state.width,
  matching: state.matching,
});

const mapDispatchToProps = (dispatch) => ({
  shuffleCards: () => dispatch({ type: SHUFFLE }),
  limitCards: () => dispatch({ type: LIMIT_CARDS }),
  duplicateCards: () => dispatch({ type: DUPLICATE_CARDS }),
  resetCards: () => dispatch({ type: RESET_CARDS }),
  flipAllCards: () => dispatch({ type: FLIP_ALL_CARDS }),
  flipCard: (index) => dispatch(flipCard(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);

// ---------------------------------
const GridContainer = styled.div`
  width: 520px;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  padding-top: 5%;
`;

const ImageWrapper = styled.div`
  display: inline-block;
  margin-right: 1px;
  margin-top: 2px;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.width + "px"};
  background-color: ${(props) => props.color};

  overflow: auto;

  img,
  .blank {
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.width + "px"};
    padding: 1px;
    transform: scaleY(-1);
  }
`;

ImageWrapper.defaultProps = {
  width: 125,
};
