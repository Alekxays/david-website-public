import { services } from '../data/services'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export function Services() {
    return (
        <section id="services" className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-12 text-center">
                    <p className="mx-auto inline-flex items-center rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
                        Mes services
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                        Des soins complets pour vos pieds
                    </h2>
                    <p className="mt-3 text-base text-slate-600">
                        Une gamme complète de soins podologiques adaptés à tous les âges et besoins.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = Icons[service.icon as keyof typeof Icons] as LucideIcon | undefined
                        return (
                            <div
                                key={service.title}
                                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                {Icon && <Icon className="mb-4 h-8 w-8 text-sky-500" />}
                                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
