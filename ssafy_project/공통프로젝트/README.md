## 22.08.22

### ๐จ ์ปฌ๋ฌ ํ๋ ํธ ๋ง๋ค๊ธฐ

1. ์์์ ๋ฝ๋๋ค

![ํ๋ก์ ํธ์ฌ์ฉ์ปฌ๋ฌํ](https://user-images.githubusercontent.com/83412032/182373666-62e83c4c-27af-466c-8814-1df31cd39937.png)

2. ํ์ผ์ ๋ฝ์ ์ปฌ๋ฌ๋ฅผ ํ์ผ์ โ์ด๋ฆ:์ปฌ๋ฌโ ํ์์ผ๋ก ์ ์ฅํ๋ค.

> ํ๋ก์ ํธ์์ ์ฌ์ฉ๋  ์์๋ค์ด ๋ง์์ ๋ณ์๋ช์ ๋น์ทํ ๊ณ์ด์ ์ปฌ๋ฌ๋ค์ ๋ฌถ์ด์ ์งํ ์ ๋๋ฅผ ์ด๋ฆ ๋ค์ ์ซ์๋ฅผ ์จ์ ํํํ๊ธฐ๋ก ํ๋ค.

- **src/styles/palette.ts**

```tsx
export const palette = {
    main_grBlue: "linear-gradient(135deg, #9dceff 0% ,#92a3fd 100%);",
    main_grPurple: "linear-gradient(135deg, #eea4ce 0%,#c58bf2 100%)",
    grRed: "linear-gradient(135deg, #FAA7B7 0%,#FB7A8E 100%)",
    red: "#FF0909",
    pink_1: "#FFE6E6",
    pink_2:"#FFA9A9",
    pink_3: "#ED8687",
    pink_4: "#DB2777",
    yellow_1:"FFFCE1",
    yellow_2:"FFEBD4",
    yellow_3:"FFD688",
    yellow_4:"FFB850",
    blue_1:"#DBEAFE",
    blue_2:"#96C3FF",
    blue_3:"#92A7FD",
    blue_4:"#2563EB",
    purple_1:"#E4CCFF",
    purlue_2:"#DF9ADA",
    purlue_3:"#CDA0FF",
    purlue_4:"#7E22CE",
    gray_1: "#F7F8F8",
    gray_2: "#CFD1DC",
    gray_3: "#8795A7",
    gray_4: "#7A7C87",
    gray_5: "#474A57",
    white: "#FFFFFF",
    black: "#000000",
  };

  export type PaletteKeyTypes = keyof typeof palette;
```

3. importํด์ ์ฌ์ฉํ๊ธฐ
- ๋ณ์๋ก ๋ฐ๋ก ์ฌ์ฉํ๊ธฐ
  
  ```tsx
  import { palette } from "../styles/palette";
  
  const ButtonBlue = styled.button`
    background: ${palette.gray_1};
  `;
  ```

- props์ฌ์ฉ์ type์ผ๋ก ์ปฌ๋ฌ ์ ํํ๊ธฐ
  
  - **src/components/Button.tsx**
  
  ```tsx
  import React, { ReactElement } from "react";
  import styled, { css } from "styled-components";
  import { palette, PaletteKeyTypes } from "../styles/palette";
  
  interface ButtonStyle {
    hasBorder?: boolean;
    buttonColor?: PaletteKeyTypes;
    borderColor?: PaletteKeyTypes;
    fontColor?: PaletteKeyTypes;
  }
  
  function Button({ ...rest }: ButtonStyle): ReactElement {
    return <ButtonStyled {...rest}>Button</ButtonStyled>;
  }
  
  const ButtonStyled = styled.button<ButtonStyle>`
  ${({
    buttonColor = "white",
    hasBorder = false,
    borderColor = "white",
    fontColor = "black",
  }) => css`
    background-color: ${palette[buttonColor]};
    border: ${hasBorder ? `1px solid ${palette[borderColor]}` : "none"};
    color: ${palette[fontColor]};
  `}
  `;
  
  export default Button;
  ```
  
  - ์ ์ฅํ๋ ์ปฌ๋ฌ๋ค์ด ๋ชฉ๋ก์ผ๋ก ๋ณด์ฌ์ง๋ค.
  
![๋ชฉ๋ก](https://user-images.githubusercontent.com/83412032/182373705-4f7ae41b-f127-467f-9068-aa47c5a3b85d.png)

### โ css ์์ํ๊ธฐ

- ์์๋ ์์ ButtonBlue ์คํ์ผ์ ์์๋ฐ์๋ค.
- ์ด๋ฏธ ์ ์ฉ๋ ์คํ์ผ๋ ์ฌ์ ์ํ  ์ ์๊ณ  ์ถ๊ฐ ์คํ์ผ๋ ๊ฐ๋ฅํ๋ค.

```tsx
import { ButtonBlue } from "../components/ButtonStyled";

export const ButtonBlueStyled = styled(ButtonBlue)`
background: blue_1;
width:200px;
`;
```


