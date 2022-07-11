import { StyledButton } from "./styled";

export default function Button({
  handlerClick,
  blue,
  width,
  quadrado,
  title,
  children,
}) {
  return (
    <>
      <StyledButton
        quadrado={quadrado}
        width={width}
        blue={blue}
        onClick={() => handlerClick()}
      >
        {children}
        {title}
      </StyledButton>
    </>
  );
}
