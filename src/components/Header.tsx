import { Menu } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo1.png'

const links = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'À propos', href: '#about' },
    { label: 'Contact', href: '#contact' }
]

export function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#hero" className="flex items-center gap-3">
                    <img src={logo} alt="Basile David Logo" className="h-10 w-10 items-center justify-center rounded-2xl" />
                    <div>
                        <p className="text-sm font-semibold text-slate-900">Basile David</p>
                        <p className="text-xs text-slate-500">Pédicure-Podologue D.E.</p>
                    </div>
                </a>
                <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
                    {links.map((link) => (
                        <a key={link.label} href={link.href} className="transition hover:text-slate-900">
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="hidden lg:block">
                    <a
                        href="#contact"
                        className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        Prendre RDV
                    </a>
                </div>
                <button
                    aria-label="Ouvrir le menu"
                    className="rounded-full border border-slate-200 p-2 text-slate-800 lg:hidden"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <Menu className="h-5 w-5" />
                </button>
            </div>
            {open && (
                <div className="border-t border-slate-100 bg-white px-6 py-4 lg:hidden">
                    <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
                        {links.map((link) => (
                            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
                                {link.label}
                            </a>
                        ))}
                        <a href="#contact" className="rounded-full bg-slate-900 px-4 py-2 text-center text-white">
                            Prendre RDV
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
