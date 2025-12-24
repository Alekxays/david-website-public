export function Contact() {
    return (
        <section id="contact" className="bg-slate-950 py-16 text-white">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
                <div>
                    <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
                        Contact
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold">Prenez rendez-vous</h2>
                    <p className="mt-4 text-slate-200">
                        Contactez-moi pour prendre rendez-vous ou pour toute question. Je vous répondrai rapidement.
                    </p>
                    <a
                        href="https://www.doctolib.fr/pedicure-podologue/paris/basile-david/booking/motives?specialityId=8&telehealth=false&placeId=practice-702024&bookingFunnelSource=profile"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                    >
                        Prendre rendez-vous sur Doctolib
                    </a>
                    <div className="mt-8 space-y-4">
                        <div className="rounded-2xl bg-white/5 p-4">
                            <p className="text-sm text-slate-300">Téléphone</p>
                            <p className="text-lg font-semibold">09 53 40 05 11</p>
                        </div>
                        <div className="rounded-2xl bg-white/5 p-4">
                            <p className="text-sm text-slate-300">Email</p>
                            <p className="text-lg font-semibold">contact@cabinet-podologie.fr</p>
                        </div>
                        <div className="rounded-2xl bg-white/5 p-4">
                            <p className="text-sm text-slate-300">Adresse</p>
                            <p className="text-lg font-semibold">4 Rue Saint-Vincent de Paul, 75010 Paris</p>
                        </div>
                        <div className="rounded-2xl bg-white/5 p-4">
                            <p className="text-sm text-slate-300">Horaires</p>
                            <p className="text-lg font-semibold">Lun-Ven · 9h-13h / 14h-19h & Samedi · 9h-14h</p>
                        </div>
                    </div>
                </div>
                <form className="rounded-3xl bg-white p-6 shadow-2xl shadow-slate-950/10">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col text-sm font-medium text-slate-600">
                            Nom complet*
                            <input className="mt-2 rounded-2xl border border-slate-200 px-4 py-3 text-slate-900" placeholder="Votre nom" required />
                        </label>
                        <label className="flex flex-col text-sm font-medium text-slate-600">
                            Email*
                            <input className="mt-2 rounded-2xl border border-slate-200 px-4 py-3 text-slate-900" placeholder="votre.email@exemple.com" required />
                        </label>
                        <label className="flex flex-col text-sm font-medium text-slate-600">
                            Téléphone
                            <input className="mt-2 rounded-2xl border border-slate-200 px-4 py-3 text-slate-900" placeholder="06 12 34 56 78" />
                        </label>
                        <label className="flex flex-col text-sm font-medium text-slate-600 sm:col-span-2">
                            Message*
                            <textarea
                                className="mt-2 min-h-[140px] rounded-2xl border border-slate-200 px-4 py-3 text-slate-900"
                                placeholder="Décrivez votre demande..."
                                required
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        Envoyer le message
                    </button>
                </form>
            </div>
        </section>
    )
}
