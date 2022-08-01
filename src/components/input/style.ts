import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 19px 117px;
  background-color: #ffffff;
  border-radius: 30px;
  color: rgba(117, 108, 108, 0.6);
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  border: none;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (max-width: 576px) {
    padding: 19px 80px;
  }
`;
