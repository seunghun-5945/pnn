import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* 스크롤바 스타일 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  /* 파이어폭스 대응 */
  html {
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
  }
`;

export default GlobalStyle;
