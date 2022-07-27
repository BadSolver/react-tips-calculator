import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  background-color: #2ed2c9;
  padding: 13px 137.3px;
  border: none;
  color: #fff;
  margin-top: 45px;
  margin-bottom: 120px;
  cursor: pointer;
  & :disabled,
  &[disabled] {
    opacity: 50%;
    cursor: default;
  }

  @media (max-width: 576px) {
    padding: 13px 100px;
  }
`;
