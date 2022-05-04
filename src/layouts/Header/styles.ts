import styled from "styled-components";

export const HeaderContainer = styled.div<{ bgColor: string }>`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  padding: 20px 30px;
`;

export const HeaderTitle = styled.h1<{ color: string }>`
  width: 20%;
  color: ${({ color }) => color};
`;

export const HeaderLinks = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

export const Link = styled.a<{ color: string }>`
  margin: 0 10px;
  color: ${({ color }) => color};
  height: 20px;
  cursor: pointer;

  &:hover:after {
    content: "";
    display: block;
    width: 15px;
    height: 5px;
    border-bottom: 1px solid;
    margin: 0 auto;
  }
`;

export const HeaderThemeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 20%;
  & > * {
    margin: 0 10px;
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ThemeStateText = styled.p<{ color: string }>`
  color: ${({ color }) => color};
`;
