import * as React from "react";
import styled from "styled-components";
import FileUploadButton from "../Utils/FileUpload";


function VendorsLoginComponent(props) {
  return (
    <Div>
      <Div2>
        <Column>
          <Img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9440c43f26bc3084ea30e8d9eb778c09ad3efbf9f4502a0fb59fdf23645dea69?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9440c43f26bc3084ea30e8d9eb778c09ad3efbf9f4502a0fb59fdf23645dea69?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9440c43f26bc3084ea30e8d9eb778c09ad3efbf9f4502a0fb59fdf23645dea69?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9440c43f26bc3084ea30e8d9eb778c09ad3efbf9f4502a0fb59fdf23645dea69?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9440c43f26bc3084ea30e8d9eb778c09ad3efbf9f4502a0fb59fdf23645dea69?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9440c43f26bc3084ea30e8d9eb778c09ad3efbf9f4502a0fb59fdf23645dea69?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9440c43f26bc3084ea30e8d9eb778c09ad3efbf9f4502a0fb59fdf23645dea69?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9440c43f26bc3084ea30e8d9eb778c09ad3efbf9f4502a0fb59fdf23645dea69?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
          />
        </Column>
        <Column2>
          <Div3>
            <Div4>Login Account</Div4>
            <Div5>
              Lorem Ipsum is simply dummy text of the andtypesetting
              industry.Lorem{" "}
            </Div5>
            <Form>
              <FormRow>
                <Label htmlFor="fullName">Full Name</Label>
                <Input type="text" id="fullName" placeholder="Name here" />
              </FormRow>
              <FormRow>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="email here" />
              </FormRow>
              <FormRow>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="password here" />
              </FormRow>
              <FormRow>
                <Label htmlFor="preferences">Preferences</Label>
                <Select id="preferences">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  {/* Add more options as needed */}
                </Select>
              </FormRow>
              
              <Label>Upload Tax ID</Label>
              <FileUploadButton onFileSelect={(selectedFile) => console.log(selectedFile)} />

              <FormRow>
                <Label htmlFor="businessName">Business Name</Label>
                <Input type="text" id="businessName" placeholder="Business Name" />
              </FormRow>
              <FormRow>
                <CheckboxLabel>
                  <Checkbox type="checkbox" id="agreeTerms" />
                  I agree to terms & conditions
                </CheckboxLabel>
              </FormRow>
            </Form>
            <Div27>Login Account</Div27>
          </Div3>
        </Column2>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  background-color: #fff;
`;

// ... (Existing styled components)

const Form = styled.form`
  align-self: stretch;
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
  max-width: 382px;
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
  max-width: 382px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 11px;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
`;

const CheckboxLabel = styled.label`
  color: #696f79;
  align-self: start;
  margin-top: 4px;
  flex-grow: 1;
  white-space: nowrap;
  font: 500 16px Poppins, sans-serif;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const Div2 = styled.div`
  gap: 10px;
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
  width: 56%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img = styled.img`
  aspect-ratio: 0.46;
  object-fit: contain;
  object-position: center;
  width: 746px;
  overflow: hidden;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 55%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div3 = styled.div`
  display: flex;
  margin-top: 86px;
  flex-direction: column;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div4 = styled.div`
  color: #000;
  align-self: center;
  white-space: nowrap;
  width:439px;
  font: 700 40px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div5 = styled.div`
  color: #2b2525;
  align-self: stretch;
  margin-top: 23px;
  font: 400 20px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div6 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  align-self: stretch;
  margin-top: 60px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div7 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 382px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 11px;
  justify-content: center;
  align-items: start;
  padding: 24px 60px 24px 18px;
  font: 400 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div8 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  align-self: stretch;
  margin-top: 15px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div9 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 382px;
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

const Div10 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  align-self: stretch;
  margin-top: 16px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div11 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 382px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 11px;
  justify-content: center;
  align-items: start;
  padding: 21px 60px 21px 18px;
  font: 400 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div12 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  align-self: stretch;
  margin-top: 15px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div13 = styled.div`
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  display: flex;
  margin-top: 11px;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 80px 20px 18px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

const Div14 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  flex-grow: 1;
  flex-basis: auto;
  font: 400 18px Poppins, sans-serif;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
`;

const Div15 = styled.div`
  justify-content: space-between;
  align-self: stretch;
  display: flex;
  margin-top: 11px;
  padding-right: 20px;
  gap: 7px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div16 = styled.div`
  color: #353535;
  flex-grow: 1;
  flex-basis: auto;
  font: 500 16px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 11px;
  fill: #cacaca;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

const Div17 = styled.div`
  align-items: center;
  border-radius: 6px;
  border: 1px dashed #cacaca;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  margin-top: 18px;
  flex-direction: column;
  padding: 16px 22px 50px 16px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div18 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #f5f5f5;
  display: flex;
  width: 129px;
  max-width: 100%;
  flex-direction: column;
  padding: 10px 37px 10px 7px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Img4 = styled.img`
  aspect-ratio: 3.54;
  object-fit: contain;
  object-position: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Div19 = styled.div`
  justify-content: space-between;
  align-self: stretch;
  display: flex;
  margin-top: 12px;
  gap: 4px;
  padding: 0 80px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const Div20 = styled.div`
  color: var(--main-color, #e7b31a);
  white-space: nowrap;
  font: 500 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div21 = styled.div`
  color: #353535;
  white-space: nowrap;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div22 = styled.div`
  align-self: stretch;
  color: #353535;
  text-align: center;
  margin: 4px 0 6px;
  font: 400 12px Hind, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div23 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  align-self: stretch;
  margin-top: 41px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div24 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 382px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 11px;
  justify-content: center;
  align-items: start;
  padding: 24px 60px 24px 18px;
  font: 400 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div25 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 79px;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const Img5 = styled.img`
  aspect-ratio: 1.05;
  object-fit: contain;
  object-position: center;
  width: 21px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
`;

const Div26 = styled.div`
  color: #696f79;
  align-self: start;
  margin-top: 4px;
  flex-grow: 1;
  white-space: nowrap;
  font: 500 16px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const Div27 = styled.div`
  color: #fff;
  text-align: center;
  white-space: nowrap;
  border-radius: 6px;
  width:439px;
  background-color: var(--main-color, #e7b31a);
  margin-top: 38px;
  justify-content: center;
  align-items: center;
  padding: 25px 60px;
  font: 500 16px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding: 0 20px;
  }
`;

export default VendorsLoginComponent