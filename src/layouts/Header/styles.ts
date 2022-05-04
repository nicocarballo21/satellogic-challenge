import styled from 'styled-components';

export const HeaderContainer = styled.header<{ bgColor: string }>`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  padding: 20px 30px;
  transition: all 0.6s linear;
`;

export const HeaderTitle = styled.h1<{ color: string }>`
  color: ${({ color }) => color};
`;

export const HeaderLinks = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a<{ color: string }>`
  margin: 0 10px;
  height: 50%;
  color: ${({ color }) => color};
  cursor: pointer;
  transition: 0.4s;

  &:hover:after {
    content: '';
    display: block;
    width: 15px;
    height: 5px;
    border-bottom: 1px solid;
    margin: 0 auto;
  }

  &:hover {
    box-shadow: 0px 0px 13px 7px lightsteelblue;
    font-size: 20px;
    border-radius: 8px;
    padding: 6px;
  }
`;

export const HeaderThemeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  & > * {
    margin: 0 0.5rem;
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ThemeStateText = styled.p<{ color: string }>`
  color: ${({ color }) => color};
`;

export const DropdownLinksBox = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
  align-items: center;
  transition: all 0.6s linear;

  & > * {
    margin-bottom: 30px;
  }

  & > *:first-child {
    margin-top: 20px;
  }
`;
