import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Hello World Next.js</h1><br /><br />

      <ul>
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
    </>
  )
}
