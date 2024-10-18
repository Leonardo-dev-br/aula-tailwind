import Link from "next/link"

export const Header = () => {
    return(
        <header className="bg-purple-800 pt-4 pb-4">
            <div className="container mx-auto flex items-center justify-between">
                <span className="text-4xl text-yellow-400 font-bold">L O G O</span>
                <nav>
                    <ul>
                        <li className="inline-block px-4 hover:text-yellow-500 hover:underline py-4">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="inline-block px-4 hover:text-yellow-500 hover:underline py-4">
                            <Link href="/">Sobre</Link>
                        </li>
                        <li className="inline-block px-4 hover:text-yellow-500 hover:underline py-4">
                            <Link href="/">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}