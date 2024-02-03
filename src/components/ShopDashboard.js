import * as React from "react";
import styled from "styled-components";

function ShopDashboardCompnent(props) {
  return (
    <Div>
      <Div2>
        <Div3>
          <Column>
            <Div4>
              <Div5>Car Repair</Div5>
              <Div6>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </Div6>
              <Div7>Bid</Div7>
            </Div4>
            <Div4>
              <Div5>Car Repair</Div5>
              <Div6>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </Div6>
              <Div7>Bid</Div7>
            </Div4>
            <Div4>
              <Div5>Car Repair</Div5>
              <Div6>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </Div6>
              <Div7>Bid</Div7>
            </Div4>
          </Column>
          <Column2>
            <Div8>
              <Div9>Car Repair</Div9>
              <Div10>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </Div10>
              <Div11>Bid</Div11>
            </Div8>
            <Div8>
              <Div9>Car Repair</Div9>
              <Div10>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </Div10>
              <Div11>Bid</Div11>
            </Div8>
            <Div8>
              <Div9>Car Repair</Div9>
              <Div10>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </Div10>
              <Div11>Bid</Div11>
            </Div8>
          </Column2>
          <Column3>
            <Div12>
              <Div13>Car Repair</Div13>
              <Div14>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </Div14>
              <Div15>Bid</Div15>
            </Div12>
            <Div12>
              <Div13>Car Repair</Div13>
              <Div14>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </Div14>
              <Div15>Bid</Div15>
            </Div12>
            <Div12>
              <Div13>Car Repair</Div13>
              <Div14>
                Lorem Ipsum is simply dummy text of the andtypesetting
                industry.Lorem Lorem Ipsum is simply dummy text of the
              </Div14>
              <Div15>Bid</Div15>
            </Div12>
          </Column3>
        </Div3>
      </Div2>
      <Div44>See more</Div44>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
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

const Div4 = styled.div`
  align-items: end;
  box-shadow: -2px 4px 12px 0px rgba(24, 24, 24, 0.08);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px 16px 16px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding-right: 20px;
  }
`;

const Div5 = styled.div`
  align-self: stretch;
  color: #181818;
  font: 600 24px/32px Inter, sans-serif;
`;

const Div6 = styled.div`
  align-self: stretch;
  color: #474747;
  margin-top: 16px;
  font: 400 16px Poppins, sans-serif;
`;

const Div7 = styled.div`
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

const Div8 = styled.div`
  align-items: end;
  box-shadow: -2px 4px 12px 0px rgba(24, 24, 24, 0.08);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px 16px 16px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding-right: 20px;
  }
`;

const Div9 = styled.div`
  align-self: stretch;
  color: #181818;
  font: 600 24px/32px Inter, sans-serif;
`;

const Div10 = styled.div`
  align-self: stretch;
  color: #474747;
  margin-top: 16px;
  font: 400 16px Poppins, sans-serif;
`;

const Div11 = styled.div`
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

const Div12 = styled.div`
  align-items: end;
  box-shadow: -2px 4px 12px 0px rgba(24, 24, 24, 0.08);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px 16px 16px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding-right: 20px;
  }
`;

const Div13 = styled.div`
  align-self: stretch;
  color: #181818;
  font: 600 24px/32px Inter, sans-serif;
`;

const Div14 = styled.div`
  align-self: stretch;
  color: #474747;
  margin-top: 16px;
  font: 400 16px Poppins, sans-serif;
`;

const Div15 = styled.div`
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

const Div16 = styled.div`
  align-self: stretch;
  margin-top: 41px;
  width: 100%;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div17 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div18 = styled.div`
  align-items: end;
  box-shadow: -2px 4px 12px 0px rgba(24, 24, 24, 0.08);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px 16px 16px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding-right: 20px;
  }
`;

const Div19 = styled.div`
  align-self: stretch;
  color: #181818;
  font: 600 24px/32px Inter, sans-serif;
`;

const Div20 = styled.div`
  align-self: stretch;
  color: #474747;
  margin-top: 16px;
  font: 400 16px Poppins, sans-serif;
`;

const Div21 = styled.div`
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

const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div22 = styled.div`
  align-items: end;
  box-shadow: -2px 4px 12px 0px rgba(24, 24, 24, 0.08);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px 16px 16px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding-right: 20px;
  }
`;

const Div23 = styled.div`
  align-self: stretch;
  color: #181818;
  font: 600 24px/32px Inter, sans-serif;
`;

const Div24 = styled.div`
  align-self: stretch;
  color: #474747;
  margin-top: 16px;
  font: 400 16px Poppins, sans-serif;
`;

const Div25 = styled.div`
  color: #fff;
  white-space: nowrap;
  justify-content: center;
  border-radius: 4px;
  background-color: var(--main-color, #e7b31a);
  margin-top: 20px;
  padding: 12px 20px 12px 28px;
  font: 500 16px/24px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Column6 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div26 = styled.div`
  align-items: end;
  box-shadow: -2px 4px 12px 0px rgba(24, 24, 24, 0.08);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px 16px 16px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding-right: 20px;
  }
`;

const Div27 = styled.div`
  align-self: stretch;
  color: #181818;
  font: 600 24px/32px Inter, sans-serif;
`;

const Div28 = styled.div`
  align-self: stretch;
  color: #474747;
  margin-top: 16px;
  font: 400 16px Poppins, sans-serif;
`;

const Div29 = styled.div`
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

const Div30 = styled.div`
  align-self: stretch;
  margin-top: 57px;
  width: 100%;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div31 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column7 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div32 = styled.div`
  align-items: end;
  box-shadow: -2px 4px 12px 0px rgba(24, 24, 24, 0.08);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px 16px 16px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding-right: 20px;
  }
`;

const Div33 = styled.div`
  align-self: stretch;
  color: #181818;
  font: 600 24px/32px Inter, sans-serif;
`;

const Div34 = styled.div`
  align-self: stretch;
  color: #474747;
  margin-top: 16px;
  font: 400 16px Poppins, sans-serif;
`;

const Div35 = styled.div`
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

const Column8 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div36 = styled.div`
  align-items: end;
  box-shadow: -2px 4px 12px 0px rgba(24, 24, 24, 0.08);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px 16px 16px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding-right: 20px;
  }
`;

const Div37 = styled.div`
  align-self: stretch;
  color: #181818;
  font: 600 24px/32px Inter, sans-serif;
`;

const Div38 = styled.div`
  align-self: stretch;
  color: #474747;
  margin-top: 16px;
  font: 400 16px Poppins, sans-serif;
`;

const Div39 = styled.div`
  color: #fff;
  white-space: nowrap;
  justify-content: center;
  border-radius: 4px;
  background-color: var(--main-color, #e7b31a);
  margin-top: 20px;
  padding: 12px 20px 12px 28px;
  font: 500 16px/24px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Column9 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div40 = styled.div`
  align-items: end;
  box-shadow: -2px 4px 12px 0px rgba(24, 24, 24, 0.08);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px 16px 16px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding-right: 20px;
  }
`;

const Div41 = styled.div`
  align-self: stretch;
  color: #181818;
  font: 600 24px/32px Inter, sans-serif;
`;

const Div42 = styled.div`
  align-self: stretch;
  color: #474747;
  margin-top: 16px;
  font: 400 16px Poppins, sans-serif;
`;

const Div43 = styled.div`
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

const Div44 = styled.div`
  color: var(--white, #fff);
  white-space: nowrap;
  justify-content: center;
  align-items: start;
  border-radius: 111px;
  background-color: var(--main-color, #e7b31a);
  align-self: center;
  margin-top: 41px;
  width: 207px;
  max-width: 100%;
  padding: 20px 60px;
  font: 700 16px/24px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px 0 28px;
  }
`;

export default ShopDashboardCompnent