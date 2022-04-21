import Link from 'next/link';
import styled from 'styled-components';
import { CartIcon, UserIcon, WishlistIcon } from './../assert/icons';
import ActiveLink from './ActiveLink';
//style
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 8vh;
`;
const Logo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4rem;
  cursor: pointer;
  h2 {
    font-size: 3rem;
    position: absolute;
  }
  .border {
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
  }
  .wave {
    color: var(--main-bn-color);
    animation: shift 3s ease-in-out infinite;
    background-image: linear-gradient(45deg, #5bd4ad, #7b74f7);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @keyframes shift {
    0%,
    100% {
      clip-path: polygon(
        0% 47%,
        10% 48%,
        33% 54%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
`;
const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    margin-left: 1rem;
    transition: all 0.3s;
  }
  a {
    &:focus {
      svg {
        fill: var(--main-bn-color);
        color: white;
      }
    }
  }
`;
export default function Navbar() {
  return (
    <Nav>
      <Link href="/" passHref>
        <Logo>
          <h2 className="border">SHOP</h2>
          <h2 className="wave">SHOP</h2>
        </Logo>
      </Link>
      <Tabs>
        <ActiveLink href="/Cart">
          <CartIcon />
        </ActiveLink>
        <ActiveLink href="/Wishlist">
          <WishlistIcon />
        </ActiveLink>
        <div>
          <UserIcon />
        </div>
      </Tabs>
    </Nav>
  );
}
