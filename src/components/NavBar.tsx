import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { BalanceButton } from "./BalanceButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import AddressLink from "./AddressLink";
export default function NavBar() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent className="sm:flex gap-4" justify="start">
        <NavbarItem>
          <BalanceButton />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/" size="lg" color="foreground" as={NextLink}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <AddressLink />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ConnectButton
            showBalance={false}
            chainStatus={{ smallScreen: "none" }}
            accountStatus={{ largeScreen: "address", smallScreen: "address" }}
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
