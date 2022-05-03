import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 20px 30px;
`;

export const HeaderTitle = styled.h1``;

export const HeaderLinks = styled.div`
  display: flex;
`;

export const HeaderLink = styled.a`
  margin: 0 10px;
`;

export const HeaderThemeSection = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin: 0 10px;
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
