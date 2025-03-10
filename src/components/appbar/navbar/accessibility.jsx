import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin: 1rem auto 1rem auto;
`;


const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 20px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #2B0032;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  text-align: center;
  ${'' /* position: center; */}

  &:hover {
    color: #F6F6F6;
    background-color: #2B0032;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <a href ="https://x8w3um95iuy.typeform.com/to/ySi2YwpF"><LoginButton>Join Us</LoginButton></a>
    </AccessibilityContainer>
  );
}
