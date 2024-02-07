import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../config';

const ShopDashboardComponent = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/jobs/all`)
      .then((response) => setJobs(response.data))
      .catch((error) => console.error("Error fetching all jobs:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const numberOfSlides = Math.ceil(jobs.length / 3);

  const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    @media (max-width: 991px) {
      flex-direction: column;
      align-items: stretch;
    }
  `;

  const StyledCard = styled.div`
    align-items: end;
    box-shadow: -2px 4px 12px 0px rgba(24, 24, 24, 0.08);
    background-color: #fff;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    width: 85%;
    padding: 16px 24px 16px 16px;
    border-radius: 20px;
    @media (max-width: 991px) {
      margin-top: 40px;
      padding-right: 20px;
    }
  `;

  const CardHeading = styled.div`
    align-self: stretch;
    color: #181818;
    font: 600 24px/32px Inter, sans-serif;
  `;

  const CardText = styled.div`
    align-self: stretch;
    color: #474747;
    margin-top: 16px;
    font: 400 16px Poppins, sans-serif;
  `;

  const CardButton = styled.div`
    color: #fff;
    white-space: nowrap;
    justify-content: center;
    border-radius: 4px;
    background-color: var(--main-color, #e7b31a);
    margin-top: 20px;
    aspect-ratio: 1.5208333333333333;
    padding: 12px 24px;
    font: 500 16px/24px Inter, sans-serif;
    @media (max-width: 991px) {
      white-space: initial;
      padding: 0 20px;
    }
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
  `;

  return (
    <Slider {...settings}>
      {[...Array(numberOfSlides)].map((_, slideIndex) => (
        <div key={slideIndex}>
          <Row>
            {jobs.slice(slideIndex * 3, (slideIndex + 1) * 3).map((job, cardIndex) => (
              <StyledLink key={cardIndex} to="/placed-bid">
                <StyledCard>
                  <CardHeading>{job.category}</CardHeading>
                  <CardText>{job.description}</CardText>
                  <CardButton>Bid</CardButton>
                </StyledCard>
              </StyledLink>
            ))}
          </Row>
        </div>
      ))}
    </Slider>
  );
};

export default ShopDashboardComponent;
