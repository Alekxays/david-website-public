export type Service = {
    title: string
    description: string
    icon: string
}

export const services: Service[] = [
    {
        title: 'Soins des ongles',
        description:
            'Coupe et traitement professionnel des ongles, prise en charge des ongles incarnés et pathologies unguéales.',
        icon: 'Scissors'
    },
    {
        title: 'Orthèses plantaires',
        description:
            'Conception et réalisation de semelles orthopédiques sur mesure pour corriger les troubles de la marche.',
        icon: 'Footprints'
    },
    {
        title: 'Cors et durillons',
        description: 'Traitement et élimination des cors, durillons et callosités pour un confort optimal.',
        icon: 'Shield'
    },
    {
        title: 'Podologie pédiatrique',
        description:
            'Suivi et soins spécialisés pour les pieds des enfants et adolescents avec bilan podologique détaillé.',
        icon: 'Baby'
    },
    {
        title: 'Podologie sportive',
        description:
            'Accompagnement des sportifs avec bilan podologique et conseils adaptés à votre pratique.',
        icon: 'Activity'
    },
    {
        title: 'Pédicurie médicale',
        description:
            'Soins d’hygiène et de confort pour des pieds sains et en bonne santé.',
        icon: 'HeartPulse'
    }
]
