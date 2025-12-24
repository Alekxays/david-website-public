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
                        Pédicure-podologue diplômé et ancien basketteur professionnel, je suis spécialisé dans l’analyse du mouvement et la prise en
                        charge des douleurs liées au membre inférieur et de l’appareil locomoteur.
                    </p>
                    <p className="mt-4 text-base text-slate-600">
                        J’évalue précisément votre posture, vos appuis et votre dynamique de marche ou de course afin d’identifier l’origine des
                        douleurs et d’y apporter une solution durable, que vous soyez sportif ou non.
                    </p>
                </div>
            </div>
            <div className="mx-auto mt-10 grid max-w-6xl gap-4 rounded-3xl bg-white p-6 shadow-lg shadow-slate-900/5">
                <div>
                    <p className="text-sm font-semibold text-slate-900">Mon parcours</p>
                    <p className="mt-2 text-sm text-slate-600">
                        Les soins peuvent inclure le traitement des affections de la peau et des ongles, la correction des troubles statiques et
                        dynamiques, ainsi que la conception dans mon propre labo de semelles orthopédiques sur mesure adaptées au sport ou au
                        quotidien.
                    </p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                        <li>Conseils personnalisés de chaussage et de prévention</li>
                        <li>Optimisation de la stabilité, des appuis et du confort</li>
                        <li>Retour à l’activité dans les meilleures conditions</li>
                    </ul>
                    <p className="mt-3 text-sm text-slate-600">
                        Mon approche vise la performance et le bien-être: retrouver un corps plus efficace, plus confortable et pleinement
                        fonctionnel grâce à la prévention et à l’optimisation par les préférences motrices.
                    </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Diplômes nationaux et universitaires</p>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700">
                            <li>Diplôme d'État de pédicure-podologue · École d'Assas · Paris</li>
                        </ul>
                        <div className="mt-5 border-t border-slate-200 pt-4">
                            <p className="text-xs uppercase tracking-wide text-slate-400">Autres formations</p>
                            <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                <li>2025 · Podologie et Préférence Motrice Niveau 1 · Volodalen</li>
                            </ul>
                        </div>
                        <div className="mt-5 border-t border-slate-200 pt-4">
                            <p className="text-xs uppercase tracking-wide text-slate-400">Expérience</p>
                            <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                <li>Stagiaire · Hôpital Privé Cognacq-Jay · Paris · nutrition / lymphologie / oncologie / palliatif</li>
                                <li>Stagiaire · CRF de Villiers-sur-Marne · rééducation post-opératoire</li>
                                <li>Stagiaire · Centre Hospitalier de Gonesse · diabétologie</li>
                                <li>Stagiaire · Clinique Victor Hugo · Paris · chirurgie orthopédique</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Cabinet situé à</p>
                        <p className="mt-3 text-sm font-semibold text-slate-900">Paris, France</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
