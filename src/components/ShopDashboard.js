import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function ShopDashboardCompnent(props) {
  return (
    <Div>
      <Div2>
        <Div3>
          <Column>
          <StyledLink  to="/placed-bid">
          <StyledCard>
              <CardHeading>Car Repair</CardHeading>
              <CardText>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </CardText>
              <CardButton>Bid</CardButton>
            </StyledCard>
          </StyledLink>
          <StyledLink  to="/placed-bid">
          <StyledCard>
              <CardHeading>Car Repair</CardHeading>
              <CardText>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </CardText>
              <CardButton>Bid</CardButton>
            </StyledCard>
          </StyledLink>
          <StyledLink  to="/placed-bid">
          <StyledCard>
              <CardHeading>Car Repair</CardHeading>
              <CardText>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </CardText>
              <CardButton>Bid</CardButton>
            </StyledCard>
          </StyledLink>
          </Column>
          <Column2>
          <StyledCard>
              <CardHeading>Car Repair</CardHeading>
              <CardText>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </CardText>
              <CardButton>Bid</CardButton>
            </StyledCard>
            <StyledCard>
              <CardHeading>Car Repair</CardHeading>
              <CardText>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </CardText>
              <CardButton>Bid</CardButton>
            </StyledCard>
            <StyledCard>
              <CardHeading>Car Repair</CardHeading>
              <CardText>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </CardText>
              <CardButton>Bid</CardButton>
            </StyledCard>
          </Column2>
          <Column3>
          <StyledCard>
              <CardHeading>Car Repair</CardHeading>
              <CardText>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </CardText>
              <CardButton>Bid</CardButton>
            </StyledCard>
            
            <StyledCard>
              <CardHeading>Car Repair</CardHeading>
              <CardText>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </CardText>
              <CardButton>Bid</CardButton>
            </StyledCard>
            <StyledCard>
              <CardHeading>Car Repair</CardHeading>
              <CardText>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </CardText>
              <CardButton>Bid</CardButton>
            </StyledCard>
          </Column3>
        </Div3>
      </Div2>
      <SeeMoreButton to="/sliding-page">See more</SeeMoreButton>

    </Div>
  );
}




const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Div2 = styled.div`
  align-self: stretch;
  width: 100%;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 35%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
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
const SeeMoreButton = styled(Link)`
  color: var(--white, #fff);
  white-space: nowrap;
  border-radius: 111px;
  background-color: var(--main-color, #e7b31a);
  margin-top: 41px;
  width: 207px;
  max-width: 100%;
  padding: 20px 60px;
  font: 700 16px/24px Poppins, sans-serif;
  text-align: center; /* Center text horizontally */
  text-decoration: none; /* Remove default link underline */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px 0 28px;
  }

  &:hover {
    background-color: #c19315; /* Change the color as needed */
  }
`;




export default ShopDashboardCompnent