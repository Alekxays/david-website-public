import { useEffect, useState } from 'react'

import { highlights } from '../data/highlights'
import cabinetDetail from '../assets/cabinet_1.jpg'
import cabinet from '../assets/cabinet.webp'

const heroSlides = [
    { src: cabinet, alt: 'Cabinet Basile David' },
    { src: cabinetDetail, alt: 'Salle de soins Basile David' },
]

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides = heroSlides.length

    useEffect(() => {
        const timer = window.setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides)
        }, 5000)

        return () => window.clearInterval(timer)
    }, [totalSlides])

    const showPreviousSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    const showNextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)

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
                        <div className="relative h-[400px] w-full overflow-hidden rounded-[24px] sm:h-[480px] lg:h-[600px]">
                            <div
                                className="flex h-full w-full transition-transform duration-700 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                aria-live="polite"
                            >
                                {heroSlides.map((slide, index) => (
                                    <img
                                        key={slide.alt + index}
                                        src={slide.src}
                                        alt={slide.alt}
                                        className="h-[400px] w-full flex-shrink-0 object-cover sm:h-[480px] lg:h-[600px]"
                                    />
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={showPreviousSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white/70 p-2 text-slate-800 backdrop-blur transition hover:bg-white"
                                aria-label="Image précédente"
                            >
                                <span aria-hidden="true">&lt;</span>
                            </button>
                            <button
                                type="button"
                                onClick={showNextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white/70 p-2 text-slate-800 backdrop-blur transition hover:bg-white"
                                aria-label="Image suivante"
                            >
                                <span aria-hidden="true">&gt;</span>
                            </button>

                            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                                {heroSlides.map((_, index) => (
                                    <button
                                        key={`hero-indicator-${index}`}
                                        type="button"
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-1.5 w-6 rounded-full transition ${currentSlide === index ? 'bg-white' : 'bg-white/40'}`}
                                        aria-label={`Aller à l'image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
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
