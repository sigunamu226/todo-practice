import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLodo";

export const Header: React.FC = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">ログアウト</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
