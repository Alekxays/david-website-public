import { useEffect, useState } from 'react'

import semelle1 from '../assets/semelle_1.jpg'
import semelle2 from '../assets/semelle_2.jpg'
import semelle3 from '../assets/semelle_3.jpg'
import semelle4 from '../assets/semelle_4.jpg'
import semelle5 from '../assets/semelle_5.jpg'
import semelle6 from '../assets/semelle_6.jpg'
import semelle7 from '../assets/semelle_7.jpg'
import semelle8 from '../assets/semelle_8.jpg'
import semelle9 from '../assets/semelle_9.jpg'
import semelle10 from '../assets/semelle_10.jpg'
import semelle11 from '../assets/semelle_11.jpg'

const customInsoleSlides = [
    { src: semelle1, alt: 'Semelle personnalisée avec insert bleu et rouge' },
    { src: semelle2, alt: 'Semelle personnalisée avec rainures techniques' },
    { src: semelle3, alt: 'Semelle orthopédique sur mesure prête à être thermoformée' },
    { src: semelle4, alt: 'Détail de talon renforcé sur semelle personnalisée' },
    { src: semelle5, alt: 'Semelle personnalisée haut soutien de voûte plantaire' },
    { src: semelle6, alt: 'Semelle sportive avec renfort métatarsien' },
    { src: semelle7, alt: 'Semelle sur mesure prête pour la chaussure' },
    { src: semelle8, alt: 'Semelle personnalisée bicolore' },
    { src: semelle9, alt: 'Semelle orthopédique en finition' },
    { src: semelle10, alt: 'Semelle personnalisée pour pratique sportive' },
    { src: semelle11, alt: 'Semelle sur mesure avec correction ciblée' },
]

export function CustomInsoles() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides = customInsoleSlides.length

    useEffect(() => {
        const timer = window.setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides)
        }, 4000)

        return () => window.clearInterval(timer)
    }, [totalSlides])

    const showPreviousSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    const showNextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)

    return (
        <section id="semelles" className="relative isolate overflow-hidden bg-slate-950 py-20 text-white">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
                <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-sky-500/40 blur-3xl" />
                <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" />
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

            <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:min-h-[520px] lg:flex-row lg:items-center">
                <div className="max-w-xl">
                    <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                        Semelles personnalisées
                    </p>
                    <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">Des semelles pensées pour vos appuis</h2>
                    <p className="mt-4 text-base text-slate-100/80">
                        Chaque paire est moulée, découpée et finalisée au cabinet pour répondre à votre geste sportif ou à votre quotidien. Les
                        corrections sont intégrées à la main, couche après couche, pour renforcer la stabilité et guider le mouvement sans
                        contrainte.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-slate-100/80">
                        <li className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-sky-400" aria-hidden="true" />
                            Mousse et résines sélectionnées selon votre discipline ou votre pathologie
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-sky-400" aria-hidden="true" />
                            Contrôle précis des points d&apos;appui grâce à l&apos;usinage manuel
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-sky-400" aria-hidden="true" />
                            Ajustements en direct au cabinet pour valider sensations et performance
                        </li>
                    </ul>
                </div>

                <div className="relative w-full max-w-xl self-stretch">
                    <div className="absolute -inset-10 hidden rounded-[40px] border border-white/10 lg:block" aria-hidden="true" />
                    <div className="relative h-[420px] overflow-hidden rounded-[32px] bg-white/5 p-3 backdrop-blur">
                        <div className="relative h-full overflow-hidden rounded-[24px]">
                            <div
                                className="flex h-full w-full transition-transform duration-700 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                aria-live="polite"
                            >
                                {customInsoleSlides.map((slide, index) => (
                                    <figure key={slide.alt + index} className="relative h-full w-full flex-shrink-0">
                                        <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
                                        <figcaption className="absolute bottom-4 left-4 rounded-full bg-slate-900/70 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white">
                                            Atelier
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={showPreviousSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/20 p-2 text-white transition hover:bg-white/40"
                                aria-label="Image précédente"
                            >
                                <span aria-hidden="true">&lt;</span>
                            </button>
                            <button
                                type="button"
                                onClick={showNextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/20 p-2 text-white transition hover:bg-white/40"
                                aria-label="Image suivante"
                            >
                                <span aria-hidden="true">&gt;</span>
                            </button>

                            <div className="absolute top-4 right-4 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-semibold">
                                {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-center gap-2">
                        {customInsoleSlides.map((_, index) => (
                            <button
                                key={`semelle-dot-${index}`}
                                type="button"
                                onClick={() => setCurrentSlide(index)}
                                className={`h-1.5 w-8 rounded-full transition ${currentSlide === index ? 'bg-white' : 'bg-white/40'}`}
                                aria-label={`Aller à la photo ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
