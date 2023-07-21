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
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">DC</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <BalanceButton />
        </NavbarItem>
        <NavbarItem>
          <ConnectButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
