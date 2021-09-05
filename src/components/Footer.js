import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyled = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2 {
    flex: 1;
  }
  .footer__col3 {
    flex: 1;
  }
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyled>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Alex Lo</h1>
          <PText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            finibus mi aliquam libero finibus, a feugiat ligula eleifend.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              { title: 'Home', path: '/', type: 'Link' },
              { title: 'About', path: '/about', type: 'Link' },
              { title: 'Projects', path: '/projects', type: 'Link' },
              { title: 'Contact', path: '/contact', type: 'Link' },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              { title: '+852 51392522', path: 'tel:+51392522' },
              {
                title: 'alexlocheungyu@gmail.com',
                path: 'mailto:alexlocheungyu@gmail.com',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Media"
            links={[
              {
                title: 'Facebook',
                path: '',
              },
              {
                title: 'Instagram',
                path: '',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/alex-lo-19528414a/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 | Designed by Alex Lo | Web Cifar</PText>
        </div>
      </div>
    </FooterStyled>
  );
}
