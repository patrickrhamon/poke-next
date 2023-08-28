import Navibar from "@/components/Navbar";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Navibar />

            <h1>Calça Azul R$ 89,90</h1><br /><br />
            <Link href="/products" >Voltar</Link>
        </>
    )
}