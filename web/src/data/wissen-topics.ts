export const knowledgeTopics = {
  ersatzfelsen: {
    eyebrow: "Herkunft & Verhalten",
    title: "Warum Stadttauben die Stadt brauchen.",
    text: "Stadttauben sind Nachkommen der Felsentaube und gezüchteter Haus- und Brieftauben. Gebäude ersetzen ihnen Felsen – deshalb brauchen sie in Städten verantwortungsvolle Lösungen.",
    image: "/images/projects/startbild-wissen-taubenhaus.jpg",
    imageAlt: "Treppenaufgang und betreuter Bereich im Taubenhaus mit vielen Tauben",
    points: ["Felsentauben brüten in Nischen, Höhlen und an geschützten Vorsprüngen.", "Mauern, Dächer, Brücken und Parkhäuser bieten Stadttauben vergleichbare Strukturen.", "In Wäldern fehlen passende Brutplätze und die an die Stadt angepasste Versorgung.", "Betreute Taubenhäuser schaffen einen festen, sauberen Ort für Schwarm und Stadt."]
  },
  mythen: {
    eyebrow: "Mythen & Fakten",
    title: "Vorurteile lösen kein Problem.",
    text: "Vergrämung verschiebt einen Schwarm meist nur. Mit Taubenhaus, Eiertausch, Reinigung und Aufklärung wird aus einem Konflikt eine praktische Lösung.",
    image: "/images/projects/startbild-oeffentlichkeitsarbeit.jpg",
    imageAlt: "Aufklärungsarbeit der Stadttaubenhilfe Bernau",
    points: ["Stadttauben sind verwilderte Haustiere, keine Wildvögel.", "Nichtfüttern verhindert weder Brutdruck noch Krankheiten.", "Vergrämung verschiebt den Schwarm, statt den Konflikt zu lösen.", "Eiertausch verhindert Nachwuchs, ohne Tiere zu töten.", "Alltagshygiene mit Händewaschen und Reinigen reicht – Panik hilft nicht."]
  },
  versorgung: {
    eyebrow: "Versorgung",
    title: "Brot hilft nicht. Betreuung schon.",
    text: "Gutes Futter allein ist keine Lösung. Erst der feste Ort mit Wasser, Nistplätzen, Reinigung und Eiertausch schafft dauerhafte Entlastung für Tauben und Stadt.",
    image: "/images/projects/startbild-taubenhaus.jpg",
    imageAlt: "Betreuter Taubenhaus-Bereich im Fahrradparkhaus Bernau",
    points: ["Geeignet sind Körner, Sämereien und Hülsenfrüchte – Brot versorgt Tauben schlecht.", "Ein fester Standort ermöglicht Futter, Wasser, Nistplätze und tägliche Beobachtung.", "Regelmäßige Reinigung entfernt Kot dort, wo er anfällt.", "Eiertausch begrenzt Nachwuchs tiergerecht.", "Tauben, die still sitzen oder nicht wegfliegen, brauchen schnelle Hilfe."]
  }
} as const;

export type KnowledgeTopic = (typeof knowledgeTopics)[keyof typeof knowledgeTopics];
