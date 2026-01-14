export function Legal() {
    return (
        <section className="bg-slate-100 py-16 text-slate-800" id="mentions-legales">
            <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6">
                <div className="rounded-3xl bg-white p-8 shadow-sm" id="mentions">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Mentions légales</p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">Cabinet Basile David</h3>
                    <div className="mt-6 space-y-4 text-sm leading-relaxed">
                        <p>
                            <strong>Responsable de la publication :</strong> Basile David · Pédicure-Podologue D.E.
                        </p>
                        <p>
                            <strong>Adresse du cabinet :</strong> 4 Rue Saint-Vincent de Paul, 75010 Paris, France
                        </p>
                        <p>
                            <strong>RPPS :</strong> 10111240437 ·  <strong>ADELI :</strong> 758009070 · <strong>Téléphone :</strong> 09 53 40 05 11 · <strong>Email :</strong>{' '}
                            contact@cabinet-podologie.fr
                        </p>
                        <p>
                            <strong>Hébergement :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA
                        </p>
                        <p>
                            <strong>Propriété intellectuelle :</strong> L’ensemble du site et de son contenu (textes, photos, graphismes) est protégé par le Code
                            de la propriété intellectuelle. Toute reproduction ou diffusion non autorisée est interdite.
                        </p>
                    </div>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-sm" id="confidentialite">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Politique de confidentialité</p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">Traitement des données personnelles</h3>
                    <div className="mt-6 space-y-5 text-sm leading-relaxed">
                        <p>
                            Les données collectées via le formulaire de contact ou la prise de rendez-vous sont limitées aux informations nécessaires au suivi des
                            consultations (identité, coordonnées, motif de consultation). Elles sont traitées uniquement par le cabinet Basile David.
                        </p>
                        <p>
                            <strong>Base légale :</strong> exécution de la relation contractuelle patient-praticien et respect des obligations légales liées à la
                            santé. Les données sont conservées pour la durée strictement nécessaire au suivi médical et archivées conformément aux règles de santé.
                        </p>
                        <p>
                            <strong>Vos droits :</strong> accès, rectification, opposition, limitation, portabilité et effacement. Vous pouvez exercer vos droits en
                            écrivant à contact@cabinet-podologie.fr ou par courrier postal à l’adresse du cabinet. Une pièce d’identité pourra être demandée.
                        </p>
                        <p>
                            <strong>Destinataires :</strong> uniquement le praticien et, le cas échéant, les prestataires habilités (Doctolib pour la prise de
                            rendez-vous). Aucun transfert de données hors UE n’est réalisé.
                        </p>
                        <p>
                            Pour toute question relative à la protection des données ou pour déposer une réclamation, vous pouvez contacter la CNIL (www.cnil.fr).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
