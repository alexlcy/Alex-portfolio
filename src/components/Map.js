import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    max-width: 300px;
    width: 100%;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 2rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Hong Kong</PText>
          <a
            href="https://www.google.com/maps/place/香港/@22.3517641,113.5686477,9z/data=!3m1!4b1!4m5!3m4!1s0x3403e2eda332980f:0xf08ab3badbeac97c!8m2!3d22.3193039!4d114.1693611"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
