export type Service = {
    title: string
    description: string
    icon: string
}

export const services: Service[] = [
    {
        title: 'Soins de pédicurie',
        description: 'Séance complète de 30 min pour traiter callosités, ongles incarnés et assurer un entretien impeccable.',
        icon: 'HandHeart'
    },
    {
        title: 'Bilan podologique & postural',
        description: 'Analyse globale de votre posture et conception de semelles orthopédiques parfaitement adaptées.',
        icon: 'Activity'
    },
    {
        title: 'Contrôle des semelles orthopédiques',
        description: 'Vérification après 6 semaines (30 min) pour ajuster vos orthèses et garantir un confort optimal.',
        icon: 'Footprints'
    },
    {
        title: 'Traitement des verrues plantaires',
        description: 'Protocole ciblé pour éliminer les verrues plantaires et prévenir les récidives.',
        icon: 'ShieldCheck'
    }
]
