import portrait from '../assets/portrait.webp'

export function About() {
    return (
        <section id="about" className="bg-gradient-to-b from-white to-slate-50 py-16">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="rounded-[40px] bg-white p-6 shadow-2xl shadow-slate-900/10">
                    <img src={portrait} alt="Basile David" className="h-[420px] w-full rounded-[28px] object-cover" />
                </div>
                <div>
                    <p className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
                        À propos
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold text-slate-900">Basile David, votre podologue à Paris</h2>
                    <p className="mt-4 text-base text-slate-600">
                        Pédicure-Podologue diplômé d’État, je vous accueille dans mon cabinet pour tous vos soins podologiques. Je traite tous types
                        de pathologies et m’adapte aux besoins spécifiques de chaque patient.
                    </p>
                    <div className="mt-6 grid gap-4 rounded-3xl bg-white p-6 shadow-lg shadow-slate-900/5">
                        <div>
                            <p className="text-sm font-semibold text-slate-900">Mon parcours</p>
                            <p className="mt-2 text-sm text-slate-600">
                                Passionné par la santé du pied, je pratique la podologie depuis plusieurs années à Paris. Mon objectif est de vous offrir
                                des soins de qualité dans un environnement professionnel et bienveillant.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl bg-slate-50 p-4">
                                <p className="text-xs uppercase tracking-wide text-slate-400">Qualifications & spécialités</p>
                                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                    <li>Diplôme d’État en Pédicurie-Podologie</li>
                                    <li>Spécialiste en orthèses plantaires</li>
                                    <li>Podologie sportive</li>
                                    <li>Soins diabétiques</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-4">
                                <p className="text-xs uppercase tracking-wide text-slate-400">Cabinet situé à</p>
                                <p className="mt-3 text-sm font-semibold text-slate-900">Paris, France</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
