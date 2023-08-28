import Link from "next/link"

import styles from '../styles/components/Navbar.module.css'

export default function Navibar() {
    return (
        <ul className={styles.navbar}>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/products">
                    Produtos
                </Link>
            </li>
            <li>
                <Link href="/about">
                    Sobre
                </Link>
            </li>
        </ul>
    )
}