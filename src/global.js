import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
        body {
            margin: 0; line-height: normal;
        }
:root {

/* fonts */
--font-pretendard: Pretendard;
--font-noto-sans: 'Noto Sans';

/* font sizes */
--font-size-xs: 12px;
--font-size-base: 16px;
--font-size-sm: 14px;
--font-size-3xs: 10px;

/* Colors */
--sub-text2: #b0b0b0;
--color-black: #000;
--color-gray-100: #929292;
--sub-text: #797979;
--line: #e4e4e4;
--main: #85d6d1;

/* Border radiuses */
--br-3xs: 10px;

}
`;