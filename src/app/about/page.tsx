import Navibar from "@/components/Navbar";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Navibar />
            <h1>Tela sobre</h1><br /><br />
            <Link href="/" >Voltar</Link>
        </>
    )
}