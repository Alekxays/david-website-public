export function Footer() {
    return (
        <footer className="bg-slate-950 py-10 text-slate-300">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-lg font-semibold text-white">Basile David</p>
                    <p className="text-sm">Pédicure-Podologue D.E.</p>
                </div>
                <div className="text-sm">
                    <p>© {new Date().getFullYear()} Cabinet Podologie. Tous droits réservés.</p>
                </div>
                <div className="flex gap-4 text-sm">
                    <a href="#">Mentions légales</a>
                    <a href="#">Politique de confidentialité</a>
                </div>
            </div>
        </footer>
    )
}
