import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <p>Next.js</p>

        <ul className={styles.links}>
          <Link href="/">
            <li>Home 🏠</li>
          </Link>
          <Link href="/products/list">
            <li>Products 🐶</li>
          </Link>
          <Link href="/orders/list">
            <li>Orders ☎️</li>
          </Link>
          <Link href="/cart">
            <li>Cart ☎️</li>
          </Link>
          <Link href="/account">
            <li>Account ☎️</li>
          </Link>
          <Link href={{ pathname: "/search", query: { q: "source freeze" } }}>
            <li>Search ☎️</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
