import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { BalanceButton } from "./BalanceButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function NavBar() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <BalanceButton />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ConnectButton showBalance={false} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
