import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';  // Import axios for API calls
import { baseURL } from '../config';  // Assuming baseURL is correctly imported


const VendorDashboardComponent = ({ userInfo }) => {
  console.log(userInfo)
  const [jobs, setJobs] = React.useState([]);
  const [submittedBids, setSubmittedBids] = React.useState([]);
  const [bidCount, setBidCount] = React.useState(1);

  React.useEffect(() => {
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

// ...

const handleBidSubmission = async (job) => {
  try {
    // Include the user ID in the job data
    const bidDataWithUserId = {
      ...job,
      userId: userInfo.id,
    };

    // Make a POST request to the /submit-bid endpoint with the updated job data
    const response = await axios.post(`${baseURL}/submit-bid`, bidDataWithUserId);

    // If the bid is submitted successfully, update the state
    if (response.data && response.data.bidId) {
      setSubmittedBids([...submittedBids, job]);
      setBidCount(submittedBids.length + 1);
      console.log('Bid submitted successfully:', response.data.bidId);
    } else {
      console.error('Failed to submit bid:', response.data.error);
    }
  } catch (error) {
    console.error('Error submitting bid:', error.message);
  }
};

// ...


  const numberOfSlides = Math.ceil(jobs.length / 3);

  return (
    <div>
      <Slider {...settings}>
        {[...Array(numberOfSlides)].map((_, slideIndex) => (
          <div key={slideIndex}>
            <div style={{ display: "flex" }}>
              {[...Array(3)].map((_, cardIndex) => {
                const jobIndex = slideIndex * 3 + cardIndex;
                const job = jobs[jobIndex];

                return (
                  <div
                    key={jobIndex}
                    style={{
                      flex: "1",
                      border: "1px solid transparent",
                      padding: "20px",
                      margin: "10px",
                    }}
                  >
                    {job && (
                      <Card>
                        <CardUpper>
                          <Time>{job.biddingDeadline}</Time>
                          <Category>{job.category}</Category>
                          <Service>{job.shopAddress}</Service>
                          <Make>{job.make}</Make>
                        </CardUpper>
                        <CardLower>
                          <DescHeading>Description</DescHeading>
                          <Desc>{formatDescription(job.description)}</Desc>
                          <ImagesContainer>
                            {[100, 200, 400, 800].map((width) => (
                              <Img
                                key={width}
                                loading="lazy"
                                srcSet={`${job.jobPicture}?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=${width} ${width}w`}
                              />
                            ))}
                          </ImagesContainer>
                          <BtnArea>
                            <SbtBtnContainer>
                              {/* Attach the handleBidSubmission function to the onClick event */}
                              <SbtBtn onClick={() => handleBidSubmission(job)}>Submit Bid</SbtBtn>
                            </SbtBtnContainer>
                            <InfoBtnContainer>
                              <InfoBtn>More Info</InfoBtn>
                            </InfoBtnContainer>
                          </BtnArea>
                        </CardLower>
                      </Card>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Slider>
      <SeeBtn>See more</SeeBtn>
      <BidArea>
        <Div49>
          <Space />
          <BidsHeading>
            <span style={{color:"rgba(255,193,3,1)"}}>Submitted Bids</span>
            <span style={{color:"rgba(55,53,44,1)"}}> ({bidCount})</span>
          </BidsHeading>
        </Div49>
        {submittedBids.map((bid, index) => (
          <Div52 key={index}>
            <BidTime>
              {/* Assuming bidding time is part of the job object */}
              Initiated {bid.biddingDeadline}
              <br />
              {/* Update the time calculation based on your requirements */}
              {/* 16 days ago */}
            </BidTime>
            <BidService>{bid.category}</BidService>
            <AnotherSpace>
              <Column>
                <Img12
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9541edeaaeb7411c29b47b8494f3fb4ad5fa8fc395c1121d88e1b3b5feb4bee2?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
                />
                <Viewed>Viewed by client</Viewed>
              </Column>
            </AnotherSpace>
          </Div52>
        ))}
      </BidArea>
      <SeeBtn>See more</SeeBtn>
    </div>
  );
};

function formatDescription(description) {
  if (!description) {
    return '';
  }

  if (description.length > 20) {
    const truncated = description.substring(0, 20);
    const remaining = description.substring(20);
    return (
      <>
        {truncated}
        <br />
        {remaining}
      </>
    );
  }
  return description;
}


const CardUpper = styled.div`
  display: grid;
  text-align: center;  // Center the content
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-right: 22px;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const Time = styled.div`
  color: rgba(49, 48, 45, 0.8);
  font-feature-settings: "salt" on, "clig" off, "liga" off;
  white-space: nowrap;
  font: 400 12px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Category = styled.div`
  color: #000;
  white-space: nowrap;
  font: 600 24px Poppins, sans-serif;
`;

const Service = styled.div`
  color: #000;
  white-space: nowrap;
  font: 500 20px Poppins, sans-serif;
`;

const Make = styled.div`
  color: rgba(0, 0, 0, 0.8);
  white-space: nowrap;
  font: 200 16px Poppins, sans-serif;
`;

// ... (rest of the components)


const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 10px;  // Adjust margin as needed
  line-height: normal;
  width: 36%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Card = styled.div`
  border-radius: 25px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: flex;
  height:705px
  margin-top: 7px;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 14px 0 31px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

// Existing styles...



// ... (rest of the components)


// ... (rest of the components)

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); // Adjust the minmax values as needed
  gap: 20px;
  padding: 0 1px;
`;



const CardLower = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 46px;
  flex-direction: column;
  padding: 0 23px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const DescHeading = styled.div`
  color: #181818;
  font: 600 24px/32px Inter, sans-serif;
`;

const Desc = styled.div`
  color: #474747;
  margin-top: 24px;
  font: 400 16px Poppins, sans-serif;
`;

// const ImagesContainer = styled.div`
//   display: flex;
//   margin-top: 39px;
//   justify-content: space-between;
//   gap: 20px;
//   padding: 0 1px;
// `;

const Img = styled.img`
  aspect-ratio: 1.42;
  object-fit: contain;
  object-position: center;
  width: 156px;
  overflow: hidden;
  max-width: 100%;
`;

const BtnArea = styled.div`
  display: flex;
  margin-top: 14px;
  justify-content: space-between;
  gap: 20px;
`;

const SbtBtnContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
`;



const SbtBtn = styled.div`
  color: #fff;
  white-space: nowrap;
  justify-content: center;
  border-radius: 4px;
  background-color: var(--main-color, #e7b31a);
  margin-top: 45px;
  padding: 12px 24px;
  font: 500 16px/24px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const InfoBtnContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
`;


const InfoBtn = styled.div`
  color: #fff;
  white-space: nowrap;
  justify-content: center;
  border-radius: 4px;
  background-color: var(--main-color, #e7b31a);
  margin-top: 47px;
  padding: 12px 25px;
  font: 500 16px/24px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 36%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;


const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 28%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;


const Div47 = styled.div`
  color: var(--white, #fff);
  white-space: nowrap;
  justify-content: center;
  align-items: start;
  border-radius: 111px;
  background-color: var(--main-color, #e7b31a);
  align-self: center;
  margin-top: 109px;
  width: 207px;
  max-width: 100%;
  padding: 20px 60px;
  font: 700 16px/24px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const BidArea = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 59px;
  width: 100%;
  flex-direction: column;
  align-items: start;
  padding: 0 59px 0 11px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
    margin-top: 40px;
  }
`;

const SubmittedBids = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

const Space = styled.div`
  background-color: #fccd3d;
  display: flex;
  width: 75px;
  height: 4px;
  flex-direction: column;
  margin: auto 0;
`;

const BidsHeading = styled.div`
  color: #37352c;
  font-feature-settings: "salt" on, "clig" off, "liga" off;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 700 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const AnotherSpace = styled.div`
  border-radius: 15px;
  border: 1px solid transparent;
  align-self: stretch;
  align-items: center;  // Corrected spelling here
  display: flex;
  margin-top: 30px;
  justify-content: center;
  gap: 20px;
  padding: 4px 5px;
  @media (max-width: 900px) {
    max-width: 70%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 20px;
  }
`;


const BidTime = styled.div`
  color: #181818;
  flex-grow: 1;
  flex-basis: auto;
  font: 600 24px/32px Inter, sans-serif;
`;

const BidService = styled.div`
  color: var(--main-color, #e7b31a);
  margin-top: 22px;
  margin-right: 373px;
  font: 600 24px/32px Inter, sans-serif;
`;

const Eye = styled.div`
  align-self: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
`;

const Img12 = styled.img`
  aspect-ratio: 1.35;
  object-fit: contain;
  object-position: center;
  width: 23px;
  overflow: hidden;
  max-width: 100%;
`;

const Viewed = styled.div`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 9px;
  white-space: nowrap;
  font: 700 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SeeBtn = styled.div`
  color: var(--white, #fff);
  white-space: nowrap;
  justify-content: center;
  align-items: start;
  border-radius: 111px;
  background-color: var(--main-color, #e7b31a);
  align-self: center;
  margin-top: 53px;
  width: 207px;
  max-width: 100%;
  padding: 20px 59px;
  font: 700 16px/24px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px;
  }
`;



const Div48 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 59px;
  width: 100%;
  flex-direction: column;
  align-items: start;
  padding: 0 59px 0 11px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
    margin-top: 40px;
  }
`;
const Div49 = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;
const Div55 = styled.div`
  align-self: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
`;
const Div52 = styled.div`
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  align-self: stretch;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  gap: 20px;
  padding: 42px 25px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 20px;
  }
`;


export default VendorDashboardComponent