import styles from "./orders.module.css";
import Link from "next/link";
import React from "react";

const Orders = () => {
  return (
    <main>
      <h1>Orders</h1>
      <ul className={styles.ul}>
        <li>
          <Link href="/orders/1">Order 1</Link>
        </li>
        <li>
          <Link href="/orders/2">Order 2</Link>
        </li>
        <li>
          <Link href="/orders/3">Order 3</Link>
        </li>
        <li>
          <Link href="/orders/4">Order 4</Link>
        </li>

        <li>
          <Link href="/products/5">Produto 5</Link>
        </li>
      </ul>
    </main>
  );
};

export default Orders;
