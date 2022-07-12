import styled from "styled-components";

export const StyledContainer = styled.main`
  display: flex;
  justify-content: center;

  .formContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    height: 92vh;
    margin-top: 10vh;
  }

  .tabs {
    width: 300px;
    display: flex;
    justify-content: center;
    .css-1aquho2-MuiTabs-indicator {
      border: 2px solid var(--light-blue);
    }
    .Mui-selected {
      color: var(--light-blue);
      font-weight: 700;
      border: 2px solid var(--light-blue);
    }
  }
`;
