import styled from "styled-components";

export const StyledButton = styled.button`
  margin-top: 45px;
  padding: 13.1px 152.15px;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.3px;
  border: none;
  background-color: #2ed2c9;
  margin-bottom: 140px;
  color: #fff;
  cursor: pointer;
  &:disabled {
    opacity: 50%;
    cursor: default;
  }
  @media (max-width: 576px) {
    padding: 13px 115.65px;
  }
`;
