import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi I am <span>Alex Lo</span>
            </p>
            <h2 className="about__heading">
              A Cloud Machine Learning Engineer
            </h2>
            <div className="about__info">
              <PText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                finibus mi aliquam libero finibus, a feugiat ligula eleifend.
                Cras elementum eget libero vel viverra.
                <br />
                <br />
                Aliquam scelerisque finibus leo, ac tristique mi. Phasellus
                porttitor nulla nec est dapibus egestas.
                <br />
                <br />
                Aliquam erat volutpat. Integer interdum lobortis dolor, sed
                gravida metus feugiat at.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem title="Bachlor School" items={['PolyU']} />
            <AboutInfoItem title="Master School" items={['HKUST']} />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'React']}
            />
            <AboutInfoItem title="BackEnd" items={['Python', 'SQL']} />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem
              title="2021-Now"
              items={['Data and Analytics Team Manager in HSBC']}
            />
            <AboutInfoItem
              title="2019-2021"
              items={['Machine Learning Engineer in HSBC']}
            />
            <AboutInfoItem
              title="2018-2019"
              items={['Data Engineer Intern in OOCL']}
            />
            <AboutInfoItem
              title="2017-2018"
              items={['Data Anlyst in AIESEC']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
