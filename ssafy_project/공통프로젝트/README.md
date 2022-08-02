## 22.08.22

### 🎨 컬러 팔레트 만들기

1. 색상을 뽑는다

![Untitled](C:\Users\multicampus\Desktop\공통프로젝트\프로젝트사용컬러표.png)

2. 파일에 뽑은 컬러를 파일에 ‘이름:컬러’ 형식으로 저장한다.

> 프로젝트에서 사용될 색상들이 많아서 변수명은 비슷한 계열의 컬러들은 묶어서 진한 정도를 이름 뒤에 숫자를 써서 표현하기로 했다.

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

3. import해서 사용하기
- 변수로 바로 사용하기
  
  ```tsx
  import { palette } from "../styles/palette";
  
  const ButtonBlue = styled.button`
    background: ${palette.gray_1};
  `;
  ```

- props사용시 type으로 컬러 제한하기
  
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
  
  - 저장했던 컬러들이 목록으로 보여진다.
  
  <img src="file:///C:/Users/multicampus/Desktop/공통프로젝트/목록.png" title="" alt="Untitled" width="320">

### ✏ css 상속하기

- 예시는 위에 ButtonBlue 스타일을 상속받았다.
- 이미 적용된 스타일도 재정의할 수 있고 추가 스타일도 가능하다.

```tsx
import { ButtonBlue } from "../components/ButtonStyled";

export const ButtonBlueStyled = styled(ButtonBlue)`
background: blue_1;
width:200px;
`;
```


