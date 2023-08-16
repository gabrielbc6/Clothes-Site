import React from "react";
import styled from 'styled-components';

const Card = () => {
  return (
    <CardDiv className="card col-3">
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </CardDiv>
  );
};

export { Card };

const CardDiv = styled.div`
    margin: 10px;
`;