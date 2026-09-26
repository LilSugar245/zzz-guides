// Dictionnaire de l'interface
export const ui = {
    fr: {
        searchPlaceholder: "Rechercher un agent...",
        noSignal: "Aucun signal trouvé",
        emptyStateDesc: "Aucun agent ne correspond à ces critères.",
        elements: "Éléments",
        roles: "Rôles",
        versions: "Mises à jour",
        all: "Tous",
        allVersions: "Toutes les versions",
        favorites: "Mes Favoris",
        activeFaction: "Faction active",
        allFactions: "Toutes les factions",
        return: "Retour",
        copied: "Lien copié",
        readyToShare: "Prêt à être partagé",
        statsLabel: "Stats recommandées",
        discSets: "Sets de Disques",
        skillPrio: "Priorité Compétences",
        statistics: "Statistiques",
        substatsPrio: "Priorité Sub-stats",
        engines: "Moteurs",
        teams: "Synergies & Équipes"
    },
    en: {
        searchPlaceholder: "Search an agent...",
        noSignal: "No signal found",
        emptyStateDesc: "No agent matches these criteria.",
        elements: "Elements",
        roles: "Roles",
        versions: "Updates",
        all: "All",
        allVersions: "All versions",
        favorites: "My Favorites",
        activeFaction: "Active faction",
        allFactions: "All factions",
        return: "Back",
        copied: "Link copied",
        readyToShare: "Ready to share",
        statsLabel: "Recommended Stats",
        discSets: "Drive Discs",
        skillPrio: "Skill Priority",
        statistics: "Statistics",
        substatsPrio: "Sub-stats Priority",
        engines: "W-Engines",
        teams: "Synergies & Teams"
    }
};

// Dictionnaire des Termes Fixes (Éléments, Rôles)
export const terms = {
    'Physical': { fr: 'Physique', en: 'Physical' },
    'Fire': { fr: 'Feu', en: 'Fire' },
    'Ice': { fr: 'Glace', en: 'Ice' },
    'Electric': { fr: 'Électrique', en: 'Electric' },
    'Ether': { fr: 'Éther', en: 'Ether' },
    'Wind': { fr: 'Vent', en: 'Wind' },
    'Lumiflux': { fr: 'Lumiflux', en: 'Lumiflux' },
    'Auric Ink': { fr: 'Encre aurique', en: 'Auric Ink' },
    'Honed Edge': { fr: 'Lame affûtée', en: 'Honed Edge' },
    'Frost': { fr: 'Givre', en: 'Frost' },
    
    'Attack': { fr: 'Attaque', en: 'Attack' },
    'Stun': { fr: 'Stun', en: 'Stun' },
    'Anomaly': { fr: 'Anomalie', en: 'Anomaly' },
    'Support': { fr: 'Soutien', en: 'Support' },
    'Defense': { fr: 'Défense', en: 'Defense' },
    'Armorer': { fr: 'Armurier', en: 'Armorer' },
    'Rupture': { fr: 'Rupture', en: 'Rupture' }
};

// Dictionnaire des Disques (EN strict -> FR)
export const discsDict = {
    "Fated Feathers": "Plumes du destin", "Thorny Rose": "Rose couverte d'épines", "Blazing Sky": "Le ciel ardent", "Turmoil's Salon": "Salon de tourmente",
    "Prisoner's Notes": "Notes d'une prisonnière", "Wonderland Bunny": "Lapine au pays des merveilles", "Radiant Aria": "Aria rayonnante", "White Water Ballad": "Mélopée des eaux blanches",
    "Moonlight Lullaby": "Berceuse au clair de lune", "Dawn's Bloom": "Floraison de l'aube", "King of the Summit": "Reine des cimes", "Yunkui Tales": "Contes de Yunkui",
    "Phaethon's Melody": "La mélodie de Phaéthon", "Shadow Harmony": "Harmonie dans l'ombre", "Branch and Blade Song": "Balade de l'épée de bois", "Astral Voice": "Voix astrale",
    "Chaos Jazz": "Jazz chaotique", "Proto Punk": "Protopunk", "Woodpecker Electro": "Électro pivert", "Puffer Electro": "Électro fugu",
    "Stellar Collision": "Discollision stellaire", "Freedom Blues": "Blues libre", "Hormone Punk": "Punk hormonal", "Soul Rock": "Soul rock",
    "Swing Jazz": "Jazz swing", "Inferno Metal": "Métal infernal", "Chaos Metal": "Métal chaotique", "Thunder Metal": "Métal tonitruant",
    "Polar Metal": "Métal polaire", "Fanged Metal": "Métal mordant"
};

// Dictionnaire des Moteurs (EN strict -> FR)
export const enginesDict = {
    "Street Superstar": "Superstar des rues", "The Brimstone": "Le Soufre", "The Restrained": "L'Entravé", "The Simmering Pot": "La Marmite frémissante",
    "The Vault": "Le Coffre-fort", "Thoughtbop": "Choc de pensée", "Tigerbane Bell": "Cloche fléau du tigre", "Timeweaver": "Tisseur de temps",
    "Tremor Trigram Vessel": "Récipient trigramme de secousse", "Tusks of Fury": "Défenses de la furie", "Unfettered Game Ball": "Balle de match libérée",
    "Weeping Cradle": "Berceau en pleurs", "Weeping Gemini": "Gémeaux en pleurs", "Wrathful Vajra": "Vajra courroucé", "Yesterday Calls": "L'appel d'hier",
    "Zanshin Herb Case": "Étui à herbes Zanshin", "Roaring Fur-nace": "Fournaise rugissante", "Roaring Ride": "Virée rugissante", "Serpentine Seeker": "Chercheur serpentin",
    "Severed Innocence": "Innocence tranchée", "Sharpened Stinger": "Dard aiguisé", "Six Shooter": "Six-coups", "Slice of Time": "Tranche de temps",
    "Sol Exuvia": "Sol Exuvia", "Spectral Gaze": "Regard spectral", "Spring Embrace": "Étreinte printanière", "Starlight Engine Replica": "Stellaire - Réplique",
    "Starlight Engine": "Stellaire", "Steam Oven": "Four à vapeur", "Steel Cushion": "Coussin d'acier", "Kraken's Cradle": "Berceau du Kraken",
    "Marcato Desire": "Désir marcato", "Metanukimorphosis": "Métanukimorphose", "Myriad Eclipse": "Éclipse myriade", "Neon Fantasies": "Fantaisies néon",
    "Ode of Resurrected Wings": "Ode aux ailes ressuscitées", "Original Transmorpher": "Transmorpheur original", "Peacekeeper - Specialized": "Pacificateur - Spécialisé",
    "Practiced Perfection": "Perfection de la pratique", "Precious Fossilized Core": "Noyau fossilisé précieux", "Puzzle Sphere": "Sphère puzzle",
    "Qingming Birdcage": "Cage à oiseaux Qingming", "Radiowave Journey": "Voyage hertzien", "Rainforest Gourmet": "Gourmet de la jungle", "Reel Projector": "Projecteur à bobines",
    "Riot Suppressor Mark VI": "Anti-émeute Mark VI", "Flamemaker Shaker": "Shaker enflammé", "Flight of Fancy": "Fantaisie volante", "Frostfall Sickle": "Faucille de givre",
    "Fusion Compiler": "Compilateur de fusion", "Gilded Blossom": "Fleur dorée", "Grill O'Wisp": "Grill follet", "Hailstorm Shrine": "Sanctuaire de grêle",
    "Half-Sugar Bunny": "Lapin mi-sucré", "Heartstring Nocturne": "Nocturne du cœur", "Hellfire Gears": "Engrenages infernaux", "Housekeeper": "Le Domestique",
    "Ice-Jade Teapot": "Théière de jade de glace", "Kaboom the Cannon": "Boum le canon", "Knight's Extolment": "Éloge du chevalier", "Bunny Band": "Bande de lapins",
    "Cannon Rotor": "Rotor de canon", "Catty Luck": "Chance féline", "Cauldron of Clarity": "Chaudron de clarté", "Chief Sidekick": "Super acolyte",
    "Cloudcleave Radiance": "Éclat fendeur de nuages", "Concealed Light": "Lumière dissimulée", "Cordis Germina": "Cordis Germina", "Crimson Thirst": "Soif écarlate",
    "Deep Sea Visitor": "Visiteur des abysses", "Demara Battery Mark II": "Batterie Demara Mark II", "Dreamlit Hearth": "Foyer onirique", "Drill Rig - Red Axis": "Foreuse - Axe rouge",
    "Electro-Lip Gloss": "Gloss électrique", "Elegant Vanity": "Vanité élégante", "Angel in the Shell": "Ange dans la carapace", "Bashful Demon": "Démon timide",
    "Bellicose Blaze": "Flamme belliqueuse", "Big Cylinder": "Gros cylindre", "Blazing Laurel": "Laurier ardent", "Bloodmarrow Coffer": "Reliquaire de moelle",
    "Boisterous Echoes": "Échos tumultueux", "Box Cutter": "Cutter"
};

// Gestion de la langue active
export let currentLang = localStorage.getItem('zzz_lang') || 'fr';

export function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('zzz_lang', lang);
    updateStaticUI();
}

// Fonction de traduction générique (pour les objets intelligents de la base de données)
export function tData(field) {
    if (!field) return '';
    if (typeof field === 'object') return field[currentLang] || field['fr'] || '';
    return field;
}

// Traducteurs automatiques par remplacement (Engines / Discs / Mots-clés)
export function tEngine(englishName) {
    if (currentLang === 'en') return englishName;
    return enginesDict[englishName] || englishName;
}

export function tDisc(name) {
    if (currentLang === 'en') {
        return name.replace("4-pièces", "4pc").replace("2-pièces", "2pc");
    }
    let translated = name;
    Object.keys(discsDict).forEach(enKey => {
        const regex = new RegExp(enKey, "gi");
        translated = translated.replace(regex, discsDict[enKey]);
    });
    return translated.replace("4pc", "4-pièces").replace("2pc", "2-pièces");
}

export function tTerm(termStr) {
    if (!terms[termStr]) return termStr;
    return terms[termStr][currentLang] || termStr;
}

export function tStats(statStr) {
    if (currentLang === 'fr') return statStr;
    // Traduction FR -> EN à la volée pour l'existant
    return statStr.replace(/Taux Crit/gi, "CRIT Rate").replace(/Dégât Crit/gi, "CRIT DMG")
                  .replace(/Attaque/gi, "Attack").replace(/Récup. d'énergie/gi, "Energy Regen")
                  .replace(/Prof. d'anomalie/gi, "Anomaly Prof.").replace(/Maîtrise d'anomalie/gi, "Anomaly Mastery");
}

// Mise à jour de l'interface statique (index.html)
export function updateStaticUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (ui[currentLang][key]) {
            if (el.tagName === 'INPUT') el.placeholder = ui[currentLang][key];
            else el.innerHTML = ui[currentLang][key];
        }
    });
}
