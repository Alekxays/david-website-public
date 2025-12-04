import { engagements } from '../data/engagements'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export function Engagements() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-center text-3xl font-semibold text-slate-900">Mes engagements</h2>
                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                    {engagements.map((item) => {
                        const Icon = Icons[item.icon as keyof typeof Icons] as LucideIcon | undefined
                        return (
                            <div key={item.title} className="rounded-3xl bg-slate-50 p-6 text-center shadow-sm">
                                {Icon && <Icon className="mx-auto mb-4 h-8 w-8 text-sky-500" />}
                                <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
