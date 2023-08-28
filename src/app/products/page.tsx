import Link from "next/link";

export default function Page() {
    return (
        <>
            <h1>Product Screen</h1><br /><br />
            <ul>
                <li>
                    <Link href="/products/shirt">
                        Camisa
                    </Link>
                </li>
                <li>
                    <Link href="/products/blue-pant">
                        Calça Azul
                    </Link>
                </li>
                <li>
                    <Link href="/products/red-pant">
                        Calça Vermelha
                    </Link>
                </li>
            </ul><br /><br />
            <Link href="/" >Voltar</Link>
        </>
    )
}