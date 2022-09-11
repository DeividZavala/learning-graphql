import Link from "next/link";
import Styled from "styled-components";

const NavStyles = Styled.nav``;

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </NavStyles>
  );
}
