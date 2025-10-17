import Link from 'next/link'
export default function Nav(){
    return(
        <nav>
        <ul>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/nosotros">Nosotros</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
        <li><Link href="/servicios">Servicios</Link></li>
        </ul>
        </nav>
    )
}