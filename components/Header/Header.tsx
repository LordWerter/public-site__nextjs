import { Menu } from "@chakra-ui/react";
import { CWrap } from "./Header.styles";

export default function Header() {
  const { Root, Item } = Menu;

  return (
    <CWrap>
      <Root>
        <Item value={"About"} />
      </Root>
    </CWrap>
  );
}
