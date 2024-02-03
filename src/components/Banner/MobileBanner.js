import * as React from "react";
import styled from "styled-components";

function MobileBanner(props) {
  return (
    <Div>
      <Div2>
        <span style="color: rgba(240,244,245,1);">
          Multiple vendors at your fingertips competing for your business with
          the best{" "}
        </span>
        <span style="color: rgba(231,179,26,1);">
          Pricing and fastest completion time
        </span>
      </Div2>
      <Div3>
        <Div4>
          <p>Vendor Login</p>
        </Div4>
        <Div5>Shop Login</Div5>
      </Div3>
    </Div>
  );
}

const Div = styled.div`
  background: linear-gradient(
    199deg,
    rgba(0, 0, 0, 0) 15.31%,
    rgba(0, 0, 0, 0.84) 67.37%
  );
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: -3px;
  padding: 50px 80px 73px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  color: #e7b31a;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  margin-top: 124px;
  max-width: 914px;
  font: 600 40px/57px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div3 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 67px 0 151px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin: 40px 0;
  }
`;

const Div4 = styled.div`
  color: var(--white, #fff);
  white-space: nowrap;
  justify-content: center;
  border-radius: 111px;
  box-shadow: 0px 4px 47px 0px rgba(7, 128, 147, 0.16);
  background-color: var(--main-color, #e7b31a);
  flex-grow: 1;
  padding: 20px 47px;
  font: 700 16px/24px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div5 = styled.div`
  color: var(--main-color, #e7b31a);
  white-space: nowrap;
  justify-content: center;
  border-radius: 111px;
  border: 1px solid #f0f4f5;
  flex-grow: 1;
  padding: 20px 60px;
  font: 700 16px/24px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

export default MobileBanner