import { highlights } from '../data/highlights'
import cabinet from '../assets/cabinet.webp'

export function Hero() {
    return (
        <header className="bg-gradient-to-b from-sky-50/90 via-white to-white pt-16 pb-12">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-start lg:gap-16">
                <div className="max-w-xl space-y-6 text-center lg:text-left">
                    <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700">
                        Votre santé podologique
                    </p>
                    <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                        Prenez soin de vos pieds avec un expert
                    </h1>
                    <p className="text-lg text-slate-600">
                        Pédicure-Podologue diplômé d’État à Paris. Soins professionnels et personnalisés pour votre bien-être et votre santé podologique.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <a
                            href="#contact"
                            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
                        >
                            Prendre rendez-vous
                        </a>
                        <a
                            href="#services"
                            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
                        >
                            Mes services
                        </a>
                    </div>
                    <div className="grid gap-4 rounded-3xl bg-white p-5 shadow-xl shadow-slate-900/5 sm:grid-cols-2">
                        {highlights.map((item) => (
                            <div key={item.label} className="text-left">
                                <p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
                                <p className="text-sm font-semibold text-slate-800">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative w-full max-w-lg">
                    <div className="rounded-[32px] bg-white p-4 shadow-2xl shadow-slate-900/10">
                        <img
                            src={cabinet}
                            alt="Salle de podologie"
                            className="h-[420px] w-full rounded-[24px] object-cover"
                        />
                    </div>
                    {/* <div className="absolute -bottom-8 left-8 rounded-2xl bg-white px-6 py-4 shadow-xl shadow-slate-900/10">
                        <p className="text-4xl font-semibold text-slate-900">15+</p>
                        <p className="text-sm text-slate-500">Années d’expérience</p>
                    </div> */}
                </div>
            </div>
        </header>
    )
}
