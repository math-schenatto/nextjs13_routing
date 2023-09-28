import styles from "./products.module.css";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <main>
      <h1>Products</h1>
      <ul className={styles.ul}>
        <li>
          <Link href="/products/1">Produto 1</Link>
        </li>
        <li>
          <Link href="/products/2">Produto 2</Link>
        </li>
        <li>
          <Link href="/products/3">Produto 3</Link>
        </li>
        <li>
          <Link href="/products/4">Produto 4</Link>
        </li>

        <li>
          <Link href="/products/5">Produto 5</Link>
        </li>
      </ul>
    </main>
  );
};

export default Products;
