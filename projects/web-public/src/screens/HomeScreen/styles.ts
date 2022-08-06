import styled, { css } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

export const Content = styled.div`
  flex: 1 0 auto;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    width: 100%;
    max-width: 1020px;
    margin-left: auto;
    margin-right: auto;
  `}
`;
