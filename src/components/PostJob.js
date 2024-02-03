import * as React from "react";
import styled from "styled-components";

function PostJobComponent(props) {
  return (
    <Form>
      <Div>
        <Div2>Post Job</Div2>
        <Div3 />
        <Div4>
          <Div5>
            <Label>Email</Label>
            <Input type="text" placeholder="Enter your email" />
          </Div5>
          <Div8>
            <Label>Shop name</Label>
            <Input type="text" placeholder="Enter shop name" />
          </Div8>
        </Div4>
        <Div11>
          <Div12>
            <Column>
              <Div13>
                <Label>Job Category</Label>
                <Select>
                  <option value="">Select a category</option>
                </Select>
                <Div22>
                <Div28>Make</Div28>
                <Input type="text" placeholder="Enter Make" />
                <Div28>Job</Div28>
                <Input2 type="text" placeholder="Enter Job Description" />
              </Div22>
              </Div13>
            </Column>
            <Column2>
              <Div17>
                <Label>Shop Address</Label>
                <Input type="text" placeholder="Enter shop address" />
              </Div17>
              <Div33>Model</Div33>
                <Input type="text" placeholder="Enter model" />
                <Div35>Year</Div35>
                <Input type="text" placeholder="Enter year" />
                <Div37>Bidding Deadline</Div37>
                <Input type="text" placeholder="Enter bidding deadline" />
                <Div39>Photo (optional)</Div39>
                <Div40>
                  <Div41>
                    <Img3
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c13c655c243c374f1f00e84cb6d8000835d96fc34d1df59e11d5f4d23d8eeaf?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
                    />
                  </Div41>
                  <Div42>
                    <Div43>Click to Upload</Div43>
                    <Div44>or drag and drop</Div44>
                  </Div42>
                  <Div45> (Max. File size: 25 MB)</Div45>
                </Div40>
            </Column2>
          </Div12>
        </Div11>
        <Div46>
        <SubmitText>Submit</SubmitText>
      </Div46>
      </Div>
    </Form>
  );
}

// The rest of the styled components remain unchanged


// The rest of the styled components remain unchanged

const Form = styled.form`
  align-self: stretch;
`;
// Define the Input2 styled component
const Input2 = styled.input`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 501px; /* You can adjust this value as needed */
  height: 200px; /* Set the desired height for the Job Description field */
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 11px;
  justify-content: center;
  align-items: start;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  margin-top: 11px;
  align-self: stretch;
`;

const Label = styled.label`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  margin-top: 15px;
  font: 400 14px Poppins, sans-serif;
`;

const Input = styled.input`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 501px; /* You can adjust this value as needed */
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 11px;
  justify-content: center;
  align-items: start;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
`;

const Select = styled.select`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 580px; /* You can adjust this value as needed */
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 11px;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
`;


const Div = styled.div`
  box-shadow: 10px 40px 50px 0px rgba(229, 233, 246, 0.4);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 47px 67px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  color: #000;
  align-self: start;
  margin-left: 21px;
  white-space: nowrap;
  font: 600 32px Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
    white-space: initial;
  }
`;

const Div3 = styled.div`
  background-color: #e7b31a;
  align-self: stretch;
  margin-top: 42px;
  height: 6px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div4 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 38px;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div5 = styled.div`
  justify-content: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div6 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div7 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 501px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  margin-top: 11px;
  justify-content: center;
  align-items: start;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div8 = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 11px;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div9 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div10 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 619px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  margin-top: 7px;
  justify-content: center;
  align-items: start;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div11 = styled.div`
  align-self: stretch;
  margin-top: 29px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div12 = styled.div`
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
  width: 46%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div13 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div14 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div15 = styled.div`
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  display: flex;
  margin-top: 7px;
  height: 60px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div16 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  justify-content: center;
  z-index: 1;
  margin-top: -35px;
  padding-bottom: 61px;
  font: 600 14px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 54%;
  margin-left: 110px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div17 = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div18 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div19 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 618px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  margin-top: 7px;
  justify-content: center;
  align-items: start;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div20 = styled.div`
  align-self: stretch;
  z-index: 1;
  margin-top: -8px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div21 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;


const Div22 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div23 = styled.div`
  disply: flex;
  flex-direction: column;
  fill: var(--darks-whites-white, #fffefb);
  stroke-width: 1px;
  stroke: var(--greys-500, #b4b4b4);
  filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.1));
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 218px;
  width: 100%;
  padding: 12px 13px 42px 18px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Img2 = styled.img`
  aspect-ratio: 1.4;
  object-fit: contain;
  object-position: center;
  width: 14px;
  fill: var(--temp-darks-lesser, #49485e);
  overflow: hidden;
  align-self: end;
  max-width: 100%;
`;

const Div24 = styled.div`
  position: relative;
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  font: 400 18px Inter, sans-serif;
`;

const Div25 = styled.div`
  position: relative;
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  margin-top: 22px;
  font: 400 18px Inter, sans-serif;
`;

const Div26 = styled.div`
  position: relative;
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  margin-top: 22px;
  font: 400 18px Inter, sans-serif;
`;

const Div27 = styled.div`
  position: relative;
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  margin-top: 22px;
  font: 400 18px Inter, sans-serif;
`;

const Div28 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  margin-top: 32px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div29 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 501px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  margin-top: 11px;
  justify-content: center;
  align-items: start;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div30 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  margin-top: 40px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div31 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 500px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  margin-top: 7px;
  align-items: start;
  padding: 19px 60px 171px 18px;
  font: 400 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px 40px 0;
  }
`;

const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 55%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div32 = styled.div`
  display: flex;
  margin-top: 17px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div33 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  align-self: stretch;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div34 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 619px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 11px;
  justify-content: center;
  align-items: start;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div35 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  align-self: stretch;
  margin-top: 39px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div36 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 619px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 11px;
  justify-content: center;
  align-items: start;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div37 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  align-self: stretch;
  margin-top: 31px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div38 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 619px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 7px;
  justify-content: center;
  align-items: start;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div39 = styled.div`
  color: #49485e;
  align-self: stretch;
  margin-top: 27px;
  font: 400 16px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div40 = styled.div`
  align-items: center;
  border-radius: 6px;
  border: 1px dashed #cacaca;
  background-color: #fff;
  align-self: start;
  display: flex;
  margin-top: 16px;
  width: 439px;
  max-width: 100%;
  flex-direction: column;
  padding: 16px 16px 50px;
`;

const Div41 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #f5f5f5;
  display: flex;
  aspect-ratio: 0.9772727272727273;
  flex-direction: column;
  width: 44px;
  height: 44px;
  padding: 0 10px;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Div42 = styled.div`
  justify-content: space-between;
  align-self: stretch;
  display: flex;
  margin-top: 12px;
  gap: 4px;
  padding: 0 80px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div43 = styled.div`
  color: var(--main-color, #e7b31a);
  white-space: nowrap;
  font: 500 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div44 = styled.div`
  color: #353535;
  white-space: nowrap;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div45 = styled.div`
  align-self: stretch;
  color: #353535;
  text-align: center;
  margin: 4px 0 6px;
  font: 400 12px Hind, sans-serif;
`;


const Div46 = styled.div`
  border-radius: 16px; /* Updated border radius */
  background-color: var(--main-color, #e7b31a);
  align-self: center;
  display: flex;
  margin-top: 62px;
  width: 439px;
  max-width: 100%;
  height: 64px;
  flex-direction: column;
  cursor: pointer; /* Add cursor pointer to indicate it's clickable */
  justify-content: center; /* Center the content vertically */
  align-items: center; /* Center the content horizontally */
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

// ... (existing code)

const SubmitText = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
`;



export default PostJobComponent