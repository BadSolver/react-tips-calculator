import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 453px;
  @media (max-width: 576px) {
    max-width: 380px;
  }
`;
export const Title = styled.h1`
  margin-top: 200px;
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  text-align: center;
  letter-spacing: -0.3px;
`;
export const Subtitle = styled.p`
  margin-top: 45px;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.3px;
  color: rgba(117, 108, 108, 0.57);
`;
export const Total = styled.h2`
  margin-top: 45px;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.3px;
  text-align: left;
  color: #000000;
  @media (max-width: 576px) {
    margin-left: 10px;
  }
`;
