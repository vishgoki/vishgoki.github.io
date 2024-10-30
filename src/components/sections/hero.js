import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Vishwa Gopal.</h2>;
  const three = <h1 className="big-heading">I develop cutting-edge scalable software and machine learning models that<br /> solve complex problems and power intelligent applications.</h1>;
  const four = (
    <>
      <p>
        I am an AI and full-stack engineer with expertise in machine learning, data analysis, and scalable software development, specializing in transforming complex data into intelligent, 
        user-focused applications. Using tools like Python, TensorFlow, AWS, and Spring Boot, I create solutions that drive impactful results and enhance user experiences. Explore my projects 
        to see how I blend data, design, and development to build solutions for the future. Currently, I’m pursuing my Master’s in Computer Science at {' '}
        <a href="https://www.nyu.edu/" target="_blank" rel="noreferrer">
          New York University
        </a>
        , set to graduate in May 2025.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="http://www.linkedin.com/in/vishgoki/"
      target="_blank"
      rel="noreferrer">
      Find me on LinkedIn!
    </a>
  );
  const six = (
    <a
      className="email-link"
      href="https://github.com/vishgoki"
      target="_blank"
      rel="noreferrer">
      Checkout my GitHub!
    </a>
  );


  const items = [one, two, three, four, five, six];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
