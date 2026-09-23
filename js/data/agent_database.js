export const agentDatabase = {
    "Piper": {
        color: "#e8a838", element: "Physical", rank: "A", factionTitle: "Sons of Calydon",
        stats: [ { label: "Adresse Ano.", value: "≥ 384" }, { label: "Maitrise Ano.", value: "≥ 150" }, { label: "Attaque", value: "≥ 2800" } ],
        discs: [
            { tag: "Support Build 1 👑", set1: "Freedom_Blues", set2: "Swing_Jazz", set1Name: "4pc Freedom Blues", set2Name: "+ 2pc Swing Jazz", note: "" },
            { tag: "General DPS Build", set1: "Fanged_Metal", set2: "Freedom_Blues", set1Name: "4pc Fanged Metal", set2Name: "+ 2pc Freedom Blues", note: "" },
            { tag: "Support Build 2", set1: "Freedom_Blues", set2: "Hormone_Punk", set1Name: "4pc Freedom Blues", set2Name: "+ 2pc Hormone Punk", note: "" }
        ],
        skills: [
            { name: "Ex", level: "11", icon: "Ex.png" }, { name: "Basic", level: "11", icon: "Attaque_basic.png" }, { name: "Assist", level: "11", icon: "Assist.png" }, { name: "Ult", level: "10", icon: "Ultime.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Anomaly" }, { slot: "5", label: "Physical DMG" }, { slot: "4", label: "Anomaly" } ], sub: [ { label: "Anomaly Proficiency", highlight: true }, { label: "ATK %", highlight: false }, { label: "PEN", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Roaring Ride", img: "W-Engine_Roaring_Ride.png" }, { tag: "Moteur A", name: "Electro-Lip Gloss", img: "W-Engine_Electro-Lip_Gloss.png" }, { tag: "Moteur A", name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" }, { tag: "Moteur A", name: "Rainforest Gourmet", img: "W-Engine_Rainforest_Gourmet.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Premium Team", members: [ { img: "Burnice.png", color: "#f05432", initial: "B" }, { img: "Caesar.png", color: "#e8a838", initial: "C" }, { img: "Piper.png", color: "#e8a838", initial: "P" } ] },
            { name: "TEAM 02", tag: "Premium Team II", members: [ { img: "Nekomata.png", color: "#e8a838", initial: "N" }, { img: "Pulchra.png", color: "#e8a838", initial: "P" }, { img: "Piper.png", color: "#e8a838", initial: "P" } ] },
            { name: "TEAM 03", tag: "Débutant", members: [ { img: "Nicole.png", color: "#f23c8a", initial: "N" }, { img: "Corin.png", color: "#e8a838", initial: "C" }, { img: "Piper.png", color: "#e8a838", initial: "P" } ] }
        ]
    },
    "Jane": {
        color: "#e8a838", element: "Physical", rank: "S", factionTitle: "Criminal Behavior Specialist",
        stats: [ { label: "Adresse Anomalie", value: "420" }, { label: "Attaque", value: "2600" } ],
        discs: [
            { tag: "Set 1 👑", set1: "Fanged_Metal", set2: "Puffer_Electro", set1Name: "4pc Fanged Metal", set2Name: "+ 2pc Puffer Electro", note: "Le meilleur choix d'appoint si vous utilisez du Taux de Pénétration (PEN Ratio) sur le disque 5." },
            { tag: "Set 2 (99.90%)", set1: "Fanged_Metal", set2: "Phaethon_Melody", set1Name: "4pc Fanged Metal", set2Name: "+ 2pc Phaethon's Melody", note: "" }
        ],
        skills: [
            { name: "Ult", level: "11", icon: "Ultime.png" }, { name: "Assist", level: "11", icon: "Assist.png" }, { name: "Ex", level: "10", icon: "Ex.png" }, { name: "Basic", level: "8", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Anomalie" }, { slot: "5", label: "PEN Ratio" }, { slot: "4", label: "Anomalie" } ], sub: [ { label: "Adre. Anomalie", highlight: true }, { label: "Attaque %", highlight: false }, { label: "Flat PEN / Flat ATK", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Sharpened Stinger", img: "W-Engine_Sharpened_Stinger.png" }, { tag: "Alt 5★ (100%)", name: "Practiced Perfection", img: "W-Engine_Practiced_Perfection.png" }, { tag: "Alt F2P (89.12%)", name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Double Anomalie", members: [ { img: "Jane.png", color: "#e8a838", initial: "JD" }, { img: "Velina.png", color: "#3bbedb", initial: "V" }, { img: "Remielle.png", color: "#fba2d0", initial: "R" } ] },
            { name: "TEAM 02", tag: "Synergie Éther", members: [ { img: "Jane.png", color: "#e8a838", initial: "JD" }, { img: "Nangong Yu.png", color: "#f23c8a", initial: "N" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" } ] },
            { name: "TEAM 03", tag: "Désordre Brûlure", members: [ { img: "Jane.png", color: "#e8a838", initial: "JD" }, { img: "Burnice.png", color: "#f05432", initial: "B" }, { img: "Remielle.png", color: "#fba2d0", initial: "R" } ] }
        ]
    },
    "Claret": {
        color: "#3182eb", element: "Electric", rank: "S", factionTitle: "Member of the Flint Workshop",
        stats: [ { label: "Taux Crit", value: "200% en combat" }, { label: "Objectif Disques", value: "14 rolls TC / 12 rolls DC" } ],
        discs: [
            { tag: "Set 1 👑", set1: "Thorned_Rose", set2: "Puffer_Electro", set1Name: "4pc Thorned Rose", set2Name: "+ 2pc Puffer Electro", note: "Son set signature est strictement incontournable. Meilleure option pour le gain de PEN Ratio." },
            { tag: "Set 2 (100%)", set1: "Thorned_Rose", set2: "Woodpecker_Electro", set1Name: "4pc Thorned Rose", set2Name: "+ 2pc Woodpecker Electro", note: "Très bonne alternative TC." }
        ],
        skills: [
            { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "12", icon: "Ultime.png" }, { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Assist", level: "10", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "DÉF %" }, { slot: "5", label: "PEN Ratio" }, { slot: "4", label: "Taux CRIT" } ], sub: [ { label: "Taux CRIT", highlight: true }, { label: "DÉF %", highlight: false }, { label: "DGT CRIT", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Crimson Thirst", img: "W-Engine_Crimson_Thirst.png" }, { tag: "Alt F2P (80.55%)", name: "Catty Luck", img: "W-Engine_Catty_Luck.png" }, { tag: "Alt (77.48%)", name: "Bloodmarrow Coffer", img: "W-Engine_Bloodmarrow_Coffer.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Classique", members: [ { img: "Claret.png", color: "#3182eb", initial: "C" }, { img: "Norma.png", color: "#f05432", initial: "N" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] },
            { name: "TEAM 02", tag: "Double Élec", members: [ { img: "Claret.png", color: "#3182eb", initial: "C" }, { img: "Velina.png", color: "#3bbedb", initial: "V" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] }
        ]
    },
    "Ye Shunguang": {
        color: "#e8a838", element: "Physical", rank: "S", factionTitle: "Void Hunter",
        stats: [ { label: "Attaque", value: "Max" }, { label: "PEN Ratio ou ATQ", value: "Max" }, { label: "Dégât Crit", value: "Max" } ],
        discs: [
            { tag: "Meilleur Set 👑", set1: "White_Water_Ballad", set2: "Branch_Blade_Song", set1Name: "4pc White Water Ballad", set2Name: "+ 2pc Branch and Blade Song", note: "White Water Ballad est le set signature de Ye Shunguang, augmentant son Taux CRIT et son ATQ. Le buff devient plus puissant lorsqu'elle active le Voile d'Ether. Vu qu'elle gagne beaucoup de Taux CRIT via ce set et son Core Skill, utilisez le 2-pc Branch and Blade Song pour les DGT CRIT." },
            { tag: "2ème Choix", set1: "White_Water_Ballad", set2: "Woodpecker_Electro", set1Name: "4pc White Water Ballad", set2Name: "+ 2pc Woodpecker Electro", note: "Vous pouvez utiliser Woodpecker Electro si vous avez de meilleures sous-stats sur ces pièces. Assurez-vous simplement de ne pas dépasser la limite de Taux CRIT et privilégiez les sous-stats DGT CRIT." }
        ],
        skills: [
            { name: "Core", level: "12", icon: "Core.webp" }, { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ex", level: "11", icon: "Ex.png" }, { name: "Ult", level: "11", icon: "Ultime.png" }, { name: "Assist", level: "8", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Attaque %" }, { slot: "5", label: "PEN Ratio / ATQ / DGT Physique" }, { slot: "4", label: "Dégât CRIT" } ], sub: [ { label: "Taux CRIT", highlight: true }, { label: "DGT CRIT", highlight: false }, { label: "Attaque %", highlight: false } ] },
        engines: [
            { tag: "Meilleur Moteur", name: "Cloudcleave Radiance", img: "W-Engine_Cloudcleave_Radiance.png" }, { tag: "Alternative 5★", name: "The Brimstone", img: "W-Engine_The_Brimstone.png" }, { tag: "Alternative 5★", name: "Steel Cushion", img: "W-Engine_Steel_Cushion.png" }, { tag: "Alternative F2P", name: "Gilded Blossom", img: "Gilded_Blossom.png" }, { tag: "Alternative A", name: "Marcato Desire", img: "Marcato_Desire.png" }, { tag: "Alternative A", name: "Street Superstar", img: "Street_Superstar.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Team Premium", members: [ { img: "Ye Shunguang.png", color: "#e8a838", initial: "YS" }, { img: "Dialyn.png", color: "#e8a838", initial: "D" }, { img: "Sunna.png", color: "#e8a838", initial: "S" } ] },
            { name: "TEAM 02", tag: "Team F2P", members: [ { img: "Ye Shunguang.png", color: "#e8a838", initial: "YS" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" } ] },
            { name: "TEAM 03", tag: "Double Attaque", members: [ { img: "Ye Shunguang.png", color: "#e8a838", initial: "YS" }, { img: "Seed.png", color: "#3182eb", initial: "S" }, { img: "", color: "#52525b", role: "Agent<br>Support" } ] }
        ]
    },
    "Yanagi": {
        color: "#3182eb", element: "Electric", rank: "S", factionTitle: "Deputy Chief of H.A.N.D",
        stats: [ { label: "Adresse d'Anomalie", value: "370+" }, { label: "Attaque", value: "3000+" } ],
        discs: [
            { tag: "Set 1 👑", set1: "Chaos_Jazz", set2: "Freedom_Blues", set1Name: "4pc Chaos Jazz", set2Name: "+ 2pc Blues Libres", note: "Le meilleur set pour Yanagi. Scaling démesuré en AP." },
            { tag: "Set 2 (100%)", set1: "Hormone_Punk", set2: "Freedom_Blues", set1Name: "4pc Hormone Punk", set2Name: "+ 2pc Blues Libres", note: "Envisageable avec Rina, mais moins régulier." }
        ],
        skills: [
            { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "12", icon: "Ultime.png" }, { name: "Assist", level: "10", icon: "Assist.png" }, { name: "Basic", level: "5", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Maîtrise d'Anomalie" }, { slot: "5", label: "Attaque %" }, { slot: "4", label: "Adresse d'Anomalie" } ], sub: [ { label: "Adresse d'Anomalie", highlight: true }, { label: "Attaque %", highlight: false }, { label: "PEN / ATQ Flat", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Timeweaver", img: "W-Engine_Timeweaver.png" }, { tag: "Alt Craftable", name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" }, { tag: "Alt Standard", name: "Fusion Compiler", img: "W-Engine_Fusion_Compiler.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Désordre", members: [ { img: "Yanagi.png", color: "#3182eb", initial: "Y" }, { img: "Nangong Yu.png", color: "#f23c8a", initial: "N" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" } ] },
            { name: "TEAM 02", tag: "Mono-Élec", members: [ { img: "Yanagi.png", color: "#3182eb", initial: "Y" }, { img: "Trigger.png", color: "#e8a838", initial: "T" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] }
        ]
    },
    "Nangong Yu": {
        color: "#f23c8a", element: "Ether", rank: "S", factionTitle: "Angels of Delusion",
        stats: [ { label: "Adre. d'anomalie", value: "350+" }, { label: "Maî. d'Anomalie", value: "150+" }, { label: "Attaque", value: "2800+" } ],
        discs: [
            { tag: "Set 1 👑", set1: "Phaethon_Melody", set2: "Freedom_Blues", set1Name: "4pc Phaethon's Melody", set2Name: "+ 2pc Freedom Blues", note: "Set idéal." },
            { tag: "Alternatives", set1: "Shining_Aria", set2: "Swing_Jazz", set1Name: "2pc Shining Aria", set2Name: "+ 2pc Swing Jazz", note: "" }
        ],
        skills: [
            { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ult", level: "12", icon: "Ultime.png" }, { name: "Assist", level: "10", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Anomalie" }, { slot: "5", label: "DGT Éther > ATQ" }, { slot: "4", label: "Anomalie" } ], sub: [ { label: "Anomalie", highlight: true }, { label: "ATQ %", highlight: false }, { label: "PEN", highlight: false } ] },
        engines: [
            { tag: "Signature S", name: "Neon Fantasies", img: "W-Engine_Neon_Fantasies.png" }, { tag: "Alternative S", name: "Roaring Fur-nace", img: "W-Engine_Roaring_Fur-nace.png" }, { tag: "Alternative A", name: "Precious Fossilized", img: "W-Engine_Precious_Fossilized.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Angels of Delusion", members: [ { img: "Nangong Yu.png", color: "#f23c8a", initial: "N" }, { img: "Sunna.png", color: "#e8a838", initial: "S" }, { img: "Aria.png", color: "#f23c8a", initial: "A" } ] },
            { name: "TEAM 02", tag: "Synergie Yanagi", members: [ { img: "Nangong Yu.png", color: "#f23c8a", initial: "N" }, { img: "Yanagi.png", color: "#3182eb", initial: "Y" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" } ] }
        ]
    },
    "Burnice": {
        color: "#f05432", element: "Fire", rank: "S", factionTitle: "Mixologist",
        stats: [ { label: "Réc. d'énergie", value: "2,8" }, { label: "Attaque", value: "2900" }, { label: "Adr. d'anomalie", value: "400" } ],
        discs: [
            { tag: "Set 1 👑", set1: "Chaos_Jazz", set2: "Swing_Jazz", set1Name: "4pc Chaos Jazz", set2Name: "+ 2pc Swing J. / Moonlight", note: "Le meilleur set pour Burnice. Booste ses EX Spéciaux." },
            { tag: "Set 2 (100%)", set1: "Chaos_Jazz", set2: "Puffer_Electro", set1Name: "4pc Chaos Jazz", set2Name: "+ 2pc Puffer Electro", note: "" },
            { tag: "Set 3 (90%)", set1: "Freedom_Blues", set2: "Swing_Jazz", set1Name: "4pc Blues Libres", set2Name: "+ 2pc Swing J. / Moonlight", note: "Plus intéressant que Chaos Jazz dans la Team Remielle + Velina." }
        ],
        skills: [
            { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "12", icon: "Ultime.png" }, { name: "Assist", level: "11", icon: "Assist.png" }, { name: "Basic", level: "11", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Récupération d'énergie" }, { slot: "5", label: "Pen Ratio" }, { slot: "4", label: "Adresse d'anomalie" } ], sub: [ { label: "Adresse d'anomalie", highlight: true }, { label: "Attaque %", highlight: false }, { label: "PEN / ATQ Flat", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Flamemaker Shaker", img: "W-Engine_Flamemaker_Shaker.png" }, { tag: "Alt 5★ (98.21%)", name: "Fusion Compiler", img: "W-Engine_Fusion_Compiler.png" }, { tag: "Alt Craftable", name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Burnice Hyper", members: [ { img: "Burnice.png", color: "#f05432", initial: "B" }, { img: "Remielle.png", color: "#fba2d0", initial: "R" }, { img: "Velina.png", color: "#3bbedb", initial: "V" } ] },
            { name: "TEAM 02", tag: "Flexible", members: [ { img: "Burnice.png", color: "#f05432", initial: "B" }, { img: "", color: "#52525b", role: "Agents<br>Anomalie" }, { img: "", color: "#52525b", role: "Agents<br>Support" } ] },
            { name: "TEAM 03", tag: "Fils de Calydon", members: [ { img: "Burnice.png", color: "#f05432", initial: "B" }, { img: "Piper.png", color: "#e8a838", initial: "P" }, { img: "Lucy.png", color: "#f05432", initial: "L" } ] }
        ]
    },
    "Yidhari": {
        color: "#3bbedb", element: "Ice", rank: "S", factionTitle: "Spook Shack",
        stats: [ { label: "DGT CRIT", value: "≥ 150 %" }, { label: "Taux Crit", value: "≥ 68 %" }, { label: "Force transperçante", value: "≥ 2500" } ],
        discs: [
            { tag: "Set 1 👑", set1: "Woodpecker_Electro", set2: "Polar_Metal", set1Name: "4pc Woodpecker Electro", set2Name: "+ 2pc Polar Metal", note: "" },
            { tag: "Set 2", set1: "Branch_Blade_Song", set2: "Polar_Metal", set1Name: "4pc Branch Blade Song", set2Name: "+ 2pc Polar Metal", note: "" },
            { tag: "Set 3", set1: "Polar_Metal", set2: "Woodpecker_Electro", set1Name: "4pc Polar Metal", set2Name: "+ 2pc Woodpecker Electro", note: "" }
        ],
        skills: [
            { name: "Basic", level: "", icon: "Attaque_basic.png" }, { name: "Ex", level: "", icon: "Ex.png" }, { name: "Ult", level: "", icon: "Ultime.png" }, { name: "Assist", level: "", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "HP %" }, { slot: "5", label: "ICE DMG %" }, { slot: "4", label: "TC / DC" } ], sub: [ { label: "TC / DC", highlight: true }, { label: "HP %", highlight: false } ] },
        engines: [
            { tag: "Moteur S", name: "Kraken's Cradle", img: "W-Engine_Krakens_Cradle.png" }, { tag: "Moteur S", name: "Qingming Birdcage", img: "W-Engine_Qingming_Birdcage.png" }, { tag: "Moteur A", name: "Radiowave Journey", img: "W-Engine_Radiowave_Journey.png" }, { tag: "Moteur A", name: "Grill O'Wisp", img: "W-Engine_Grill_O_Wisp.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Premium", members: [ { img: "Yidhari.png", color: "#3bbedb", initial: "Y" }, { img: "Ju Fufu.png", color: "#f05432", initial: "J" }, { img: "Lucia.png", color: "#f23c8a", initial: "L" } ] },
            { name: "TEAM 02", tag: "Double Feu", members: [ { img: "Yidhari.png", color: "#3bbedb", initial: "Y" }, { img: "Lighter.png", color: "#f05432", initial: "L" }, { img: "Lucy.png", color: "#f05432", initial: "L" } ] },
            { name: "TEAM 03", tag: "Free To Play", members: [ { img: "Yidhari.png", color: "#3bbedb", initial: "Y" }, { img: "Pulchra.png", color: "#e8a838", initial: "P" }, { img: "Pan Yinhu.png", color: "#e8a838", initial: "P" } ] }
        ]
    },
    "Ellen": {
        color: "#3bbedb", element: "Ice", rank: "S", factionTitle: "Maid",
        stats: [ { label: "Taux Crit", value: "100% IG" }, { label: "Attaque", value: "à maximiser" }, { label: "Dégât Crit", value: "à maximiser" } ],
        discs: [
            { tag: "Set 1 👑", set1: "Woodpecker_Electro", set2: "Puffer_Electro", set1Name: "4pc Electro Pivert", set2Name: "+ 2pc Puffer Electro", note: "Le meilleur choix universel par défaut. Il surpasse nettement les autres options." },
            { tag: "Set 2 (100%)", set1: "Puffer_Electro", set2: "Woodpecker_Electro", set1Name: "4pc Puffer Electro", set2Name: "+ 2pc Electro Pivert", note: "À égalité ou légèrement supérieur si Ellen est jouée avec Dialyn." },
            { tag: "Set 3 (92.52%)", set1: "Polar_Metal", set2: "Puffer_Electro", set1Name: "4pc Métal Polaire", set2Name: "+ 2pc Puffer Electro", note: "" }
        ],
        skills: [
            { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "11", icon: "Ultime.png" }, { name: "Assist", level: "11", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Attaque %" }, { slot: "5", label: "Pen Ratio (DGT Glace)" }, { slot: "4", label: "Dégât Crit (TC)" } ], sub: [ { label: "Taux Crit", highlight: true }, { label: "Attaque % = Dégât Crit", highlight: false }, { label: "Pen / ATQ Flat", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Deep Sea Visitor", img: "W-Engine_Deep_Sea_Visitor.png" }, { tag: "Alt 5★ (99.16%)", name: "Cordis Germina", img: "W-Engine_Cordis_Germina.png" }, { tag: "Alt Battle Pass", name: "Cannon Rotor", img: "W-Engine_Cannon_Rotor.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Premium", members: [ { img: "Ellen.png", color: "#3bbedb", initial: "E" }, { img: "Lighter.png", color: "#f05432", initial: "L" }, { img: "Astra.png", color: "#f23c8a", initial: "A" } ] },
            { name: "TEAM 02", tag: "Double Stun", members: [ { img: "Ellen.png", color: "#3bbedb", initial: "E" }, { img: "", color: "#52525b", role: "Agent<br>Stun" }, { img: "", color: "#52525b", role: "Agent<br>Stun" } ] },
            { name: "TEAM 03", tag: "Victoria", members: [ { img: "Ellen.png", color: "#3bbedb", initial: "E" }, { img: "Koleda.png", color: "#f05432", initial: "K" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] }
        ]
    },
    "Vivian": {
        color: "#f23c8a", element: "Ether", rank: "S", factionTitle: "Megadere",
        stats: [ { label: "Ad. d'Anomalie", value: "400+" }, { label: "Attaque", value: "2300+" }, { label: "Ma. d'Anomalie", value: "= 198" } ],
        discs: [
            { tag: "Set 1 👑", set1: "Phaethon_Melody", set2: "Freedom_Blues", set1Name: "4pc Phaethon Melody", set2Name: "+ 2pc Blues Libres", note: "Non négociable. Indispensable pour récupérer +30 d'AP." },
            { tag: "Set 2 (100%)", set1: "Phaethon_Melody", set2: "Chaotic_Metal", set1Name: "4pc Phaethon Melody", set2Name: "+ 2pc Métal Chaotique", note: "" },
            { tag: "Set 3 (99.53%)", set1: "Phaethon_Melody", set2: "Puffer_Electro", set1Name: "4pc Phaethon Melody", set2Name: "+ 2pc Puffer Electro", note: "" }
        ],
        skills: [
            { name: "Ult", level: "12", icon: "Ultime.png" }, { name: "Assist", level: "12", icon: "Assist.png" }, { name: "Basic", level: "11", icon: "Attaque_basic.png" }, { name: "Ex", level: "11", icon: "Ex.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Maîtrise d'Anomalie" }, { slot: "5", label: "DGT Éther %" }, { slot: "4", label: "Adresse d'Anomalie" } ], sub: [ { label: "Adresse d'anomalie", highlight: true }, { label: "Attaque %", highlight: false }, { label: "Pen Flat", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Flight of Fancy", img: "W-Engine_Flight_of_Fancy.png" }, { tag: "Alt 4★ (93.06%)", name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" }, { tag: "Alt (91.12%)", name: "Electro-Lip Gloss", img: "W-Engine_Electro-Lip_Gloss.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Classique", members: [ { img: "Vivian.png", color: "#f23c8a", initial: "V" }, { img: "Remielle.png", color: "#fba2d0", initial: "R" }, { img: "Promeia.png", color: "#3bbedb", initial: "P" } ] },
            { name: "TEAM 02", tag: "Jane Combo", members: [ { img: "Vivian.png", color: "#f23c8a", initial: "V" }, { img: "Jane.png", color: "#e8a838", initial: "J" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" } ] },
            { name: "TEAM 03", tag: "Flexible", members: [ { img: "Vivian.png", color: "#f23c8a", initial: "V" }, { img: "", color: "#52525b", role: "Agents<br>Anomalie" }, { img: "", color: "#52525b", role: "3ème<br>Agent" } ] }
        ]
    },
    "Yuzuha": {
        color: "#e8a838", element: "Physical", rank: "S", factionTitle: "Member of the Spook Shack",
        stats: [ { label: "Attaque", value: "3000" }, { label: "Maitrise d'Anomalie", value: "171" }, { label: "Adresse d'Anomalie", value: "200-250+" } ],
        discs: [
            { tag: "Set 1 👑", set1: "Moonlight_Lullaby", set2: "Phaethon_Melody", set1Name: "4pc Moonlight Lullaby", set2Name: "+ 2pc Phaethon melody", note: "Le set standard obligatoire pour appliquer les buffs d'équipe." },
            { tag: "Set 2 (100%)", set1: "Astral_Voice", set2: "Phaethon_Melody", set1Name: "4pc Astral Voice", set2Name: "+ 2pc Phaethon melody", note: "À équiper uniquement si elle est jouée avec Sunna." }
        ],
        skills: [
            { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ex", level: "10", icon: "Ex.png" }, { name: "Ult", level: "10", icon: "Ultime.png" }, { name: "Assist", level: "10", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Maîtrise d'Anomalie" }, { slot: "5", label: "Attaque %" }, { slot: "4", label: "Adresse d'Anomalie" } ], sub: [ { label: "Attaque %", highlight: true }, { label: "Adresse d'Anomalie", highlight: false }, { label: "Attaque Flat", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Metanukimorphosis", img: "W-Engine_Metanukimorphosis.png" }, { tag: "Alt 5★ (102.07%)", name: "Thoughtbop", img: "W-Engine_Thoughtbop.png" }, { tag: "Alt 4★ (93.28%)", name: "Kaboom the Cannon", img: "W-Engine_Kaboom_the_Cannon.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Premium", members: [ { img: "Yuzuha.png", color: "#e8a838", initial: "Y" }, { img: "Aria.png", color: "#f23c8a", initial: "A" }, { img: "Velina.png", color: "#3bbedb", initial: "V" } ] },
            { name: "TEAM 02", tag: "Synergie", members: [ { img: "Yuzuha.png", color: "#e8a838", initial: "Y" }, { img: "Miyabi.png", color: "#3bbedb", initial: "M" }, { img: "Nangong Yu.png", color: "#f23c8a", initial: "N" } ] },
            { name: "TEAM 03", tag: "Flexible", members: [ { img: "Yuzuha.png", color: "#e8a838", initial: "Y" }, { img: "", color: "#52525b", role: "Agents<br>Anomalie" }, { img: "", color: "#52525b", role: "Agents<br>Anomalie" } ] }
        ]
    },
    "Seed": {
        color: "#3182eb", element: "Electric", rank: "S", factionTitle: "Heavy Weapons Specialist",
        stats: [ { label: "Taux Crit", value: "= 85%" }, { label: "Attaque", value: "2800" }, { label: "Dégât Crit", value: "120% - 150%+" } ],
        discs: [
            { tag: "Set 1 👑", set1: "Puffer_Electro", set2: "Branch_Blade_Song", set1Name: "4pc Puffer Electro", set2Name: "+ 2pc Branch & Blade Song", note: "Best-in-Slot si tu la joues dans une équipe avec Dialyn." },
            { tag: "Set 2 (100%)", set1: "Puffer_Electro", set2: "Woodpecker_Electro", set1Name: "4pc Puffer Electro", set2Name: "+ 2pc Woodpecker Electro", note: "" },
            { tag: "Set 3 (98.03%)", set1: "Dawn_Bloom", set2: "Branch_Blade_Song", set1Name: "4pc Dawn's Bloom", set2Name: "+ 2pc Branch & Blade Song", note: "Son meilleur choix si tu la joues sans Dialyn." }
        ],
        skills: [
            { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ult", level: "12", icon: "Ultime.png" }, { name: "Ex", level: "11", icon: "Ex.png" }, { name: "Assist", level: "11", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Attaque" }, { slot: "5", label: "PEN Ratio" }, { slot: "4", label: "Taux Crit" } ], sub: [ { label: "Taux Crit", highlight: true }, { label: "Dégât Crit", highlight: false }, { label: "Attaque %", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Cordis Germina", img: "W-Engine_Cordis_Germina.png" }, { tag: "Alt 5★ (91.15%)", name: "Zanshin Herb Case", img: "W-Engine_Zanshin_Herb_Case.png" }, { tag: "Alt 4★ (90.52%)", name: "Marcato Desire", img: "Marcato_Desire.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Synergie", members: [ { img: "Seed.png", color: "#3182eb", initial: "S" }, { img: "Cissia.png", color: "#3182eb", initial: "C" }, { img: "Sunna.png", color: "#e8a838", initial: "S" } ] },
            { name: "TEAM 02", tag: "Double Élec", members: [ { img: "Seed.png", color: "#3182eb", initial: "S" }, { img: "Banyue.png", color: "#f05432", initial: "B" }, { img: "Dialyn.png", color: "#e8a838", initial: "D" } ] },
            { name: "TEAM 03", tag: "Flexible", members: [ { img: "Seed.png", color: "#3182eb", initial: "S" }, { img: "", color: "#52525b", role: "Agents<br>Attaques" }, { img: "", color: "#52525b", role: "Agents<br>Support" } ] }
        ]
    },
    "Remielle": {
        color: "#fba2d0", element: "Lumiflux", rank: "S", factionTitle: "Void Hunter",
        stats: [ { label: "Attaque", value: "4000" }, { label: "Adre. Anomalie", value: "400" } ],
        discs: [
            { tag: "Set 1 👑", set1: "Feathered_Fate", set2: "Freedom_Blues", set1Name: "4pc Feathered Fate", set2Name: "+ 2pc Freedom Blues", note: "Temps d'activité moyen (Uptime) : 100%" },
            { tag: "Set 2 (100%)", set1: "Feathered_Fate", set2: "Chaos_Jazz", set1Name: "4pc Feathered Fate", set2Name: "+ 2pc Chaos Jazz", note: "" },
            { tag: "Set 3 (99.20%)", set1: "Feathered_Fate", set2: "Astral_Voice", set1Name: "4pc Feathered Fate", set2Name: "+ 2pc Astral Voice", note: "Okay si cela t'aide à atteindre les 4000 d'attaque." }
        ],
        skills: [
            { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Assist", level: "12", icon: "Assist.png" }, { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "12", icon: "Ultime.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Attaque" }, { slot: "5", label: "Attaque" }, { slot: "4", label: "Anomalie" } ], sub: [ { label: "Attaque", highlight: true }, { label: "Anomalie", highlight: false }, { label: "Flat PEN / Flat ATK", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Poem of the Empty Feather", img: "W-Engine_Ode_of_Resurrected_Wings.png" }, { tag: "Alt F2P", name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" }, { tag: "Alt Anomalie", name: "Timeweaver", img: "W-Engine_Timeweaver.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Double Anomalie", members: [ { img: "Remielle.png", color: "#fba2d0", initial: "R" }, { img: "", color: "#52525b", role: "Agents<br>Anomalies" }, { img: "", color: "#52525b", role: "Agents<br>Anomalies" } ] },
            { name: "TEAM 02", tag: "Flexible", members: [ { img: "Remielle.png", color: "#fba2d0", initial: "R" }, { img: "Burnice.png", color: "#f05432", initial: "B" }, { img: "Velina.png", color: "#3bbedb", initial: "V" } ] },
            { name: "TEAM 03", tag: "Alternative", members: [ { img: "Remielle.png", color: "#fba2d0", initial: "R" }, { img: "Promeia.png", color: "#3bbedb", initial: "P" }, { img: "Vivian.png", color: "#f23c8a", initial: "V" } ] }
        ]
    },
    "Velina": {
        color: "#3bbedb", element: "Wind", rank: "S", factionTitle: "Administrative Director of the E.S.D",
        stats: [ { label: "Adresse d'Anomalie", value: "356" }, { label: "Attaque", value: "2500" }, { label: "Energie Regen", value: "2.88" } ],
        discs: [
            { tag: "Set 1 👑", set1: "Wuthering_Salon", set2: "Moonlight_Lullaby", set1Name: "4pc Wuthering Salon", set2Name: "+ 2pc Moonlight Lullaby", note: "Efficacité avec Promeia + Yuzuha : 100% (Énergie Regen +6%)." },
            { tag: "Set 2 (97.4%)", set1: "Wuthering_Salon", set2: "Phaethon_Melody", set1Name: "4pc Wuthering Salon", set2Name: "+ 2pc Phaethon's Melody", note: "" },
            { tag: "Set 3 (97.39%)", set1: "Wuthering_Salon", set2: "Chaos_Jazz", set1Name: "4pc Wuthering Salon", set2Name: "+ 2pc Chaos Jazz", note: "" }
        ],
        skills: [
            { name: "Ex", level: "", icon: "Ex.png" }, { name: "Assist", level: "", icon: "Assist.png" }, { name: "Ult", level: "", icon: "Ultime.png" }, { name: "Basic", level: "", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Énergie Regen" }, { slot: "5", label: "Wind DMG %" }, { slot: "4", label: "Adresse d'Anomalie" } ], sub: [ { label: "Adresse d'Anomalie", highlight: true }, { label: "ATK %", highlight: false }, { label: "Flat PEN = Flat ATK", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Joyau Doré", img: "W-Engine_Joyau_Dore.png" }, { tag: "Alt 5★ (90.88%)", name: "Serpentine Seeker", img: "W-Engine_Serpentine_Seeker.png" }, { tag: "Alt 4★ (87.16%)", name: "Kaboom the Cannon", img: "W-Engine_Kaboom_the_Cannon.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Hugo", members: [ { img: "Velina.png", color: "#3bbedb", initial: "V" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" }, { img: "Promeia.png", color: "#3bbedb", initial: "P" } ] },
            { name: "TEAM 02", tag: "Ellen", members: [ { img: "Velina.png", color: "#3bbedb", initial: "V" }, { img: "Jane.png", color: "#e8a838", initial: "J" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" } ] },
            { name: "TEAM 03", tag: "Débutant", members: [ { img: "Velina.png", color: "#3bbedb", initial: "V" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" }, { img: "", color: "#52525b", role: "Agents<br>Anomalies" } ] }
        ]
    },
    "Cissia": {
        color: "#3182eb", element: "Electric", rank: "S", factionTitle: "Metropolitan Order Division - N.E.P.S.",
        stats: [ { label: "Taux Crit", value: "Jusqu'à 100% IG" }, { label: "Dégât Crit", value: "Plus possible" }, { label: "Attaque", value: "Plus possible" } ],
        discs: [
            { tag: "Set 1 👑", set1: "Astral_Voice", set2: "Swing_Jazz", set1Name: "4pc Astral Voice", set2Name: "+ 2pc Swing Jazz", note: "" },
            { tag: "Set 2", set1: "Dawn_Bloom", set2: "Branch_Blade_Song", set1Name: "4pc Dawn's Bloom", set2Name: "+ 2pc Branch & Blade Song", note: "" },
            { tag: "Set 3", set1: "Dawn_Bloom", set2: "Swing_Jazz", set1Name: "4pc Dawn's Bloom", set2Name: "+ 2pc Swing Jazz", note: "" }
        ],
        skills: [
            { name: "Basic", level: "", icon: "Attaque_basic.png" }, { name: "Ex", level: "", icon: "Ex.png" }, { name: "Ult", level: "", icon: "Ultime.png" }, { name: "Assist", level: "", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Energie Regen" }, { slot: "5", label: "Dmg Elec > ATQ" }, { slot: "4", label: "Taux Crit" } ], sub: [ { label: "TC (Jusqu'à 100% IG)", highlight: true }, { label: "DC %", highlight: false }, { label: "ATK %", highlight: false } ] },
        engines: [
            { tag: "Moteur S", name: "Serpentine Seeker", img: "W-Engine_Serpentine_Seeker.png" }, { tag: "Moteur S", name: "Bellicose Blaze", img: "W-Engine_Bellicose_Blaze.png" }, { tag: "Moteur A", name: "Drill Rig - Red Axis", img: "W-Engine_Drill_Rig_-_Red_Axis.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Premium", members: [ { img: "Cissia.png", color: "#3182eb", initial: "C" }, { img: "Seed.png", color: "#3182eb", initial: "S" }, { img: "Trigger.png", color: "#e8a838", initial: "T" } ] },
            { name: "TEAM 02", tag: "Alternative", members: [ { img: "Cissia.png", color: "#3182eb", initial: "C" }, { img: "Seed.png", color: "#3182eb", initial: "S" }, { img: "Sunna.png", color: "#e8a838", initial: "S" } ] },
            { name: "TEAM 03", tag: "Flexible", members: [ { img: "Cissia.png", color: "#3182eb", initial: "C" }, { img: "", color: "#52525b", role: "Agent<br>Support" }, { img: "", color: "#52525b", role: "Agent<br>Stun" } ] }
        ]
    },
    "Banyue": {
        color: "#f05432", element: "Fire", rank: "S", factionTitle: "Autorité de conformité Krampus",
        stats: [ { label: "DGT CRIT", value: "≥ 160 %" }, { label: "Taux Crit", value: "≥ 60 %" }, { label: "Force transperçante", value: "≥ 2400" } ],
        discs: [
            { tag: "Stun Build 👑", set1: "Woodpecker_Electro", set2: "Hormone_Punk", set1Name: "4pc Woodpecker Electro", set2Name: "+ 2pc Hormone Punk", note: "" },
            { tag: "Set 2", set1: "Inferno_Metal", set2: "Woodpecker_Electro", set1Name: "4pc Inferno Metal", set2Name: "+ 2pc Woodpecker Electro", note: "" },
            { tag: "Set 3", set1: "Inferno_Metal", set2: "Hormone_Punk", set1Name: "4pc Inferno Metal", set2Name: "+ 2pc Hormone Punk", note: "" }
        ],
        skills: [
            { name: "Ult", level: "", icon: "Ultime.png" }, { name: "Basic", level: "", icon: "Attaque_basic.png" }, { name: "Ex", level: "", icon: "Ex.png" }, { name: "Assist", level: "", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "HP" }, { slot: "5", label: "DMG / HP" }, { slot: "4", label: "TC / DC" } ], sub: [ { label: "TC / DC", highlight: true }, { label: "HP %", highlight: false } ] },
        engines: [
            { tag: "Moteur S", name: "Wrathful Vajra", img: "W-Engine_Wrathful_Vajra.png" }, { tag: "Moteur S", name: "Qingming Birdcage", img: "W-Engine_Qingming_Birdcage.png" }, { tag: "Moteur A", name: "Grill O'Wisp", img: "W-Engine_Grill_O_Wisp.png" }, { tag: "Moteur A", name: "Radiowave Journey", img: "W-Engine_Radiowave_Journey.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Premium", members: [ { img: "Banyue.png", color: "#f05432", initial: "B" }, { img: "Dialyn.png", color: "#e8a838", initial: "D" }, { img: "Lucia.png", color: "#f23c8a", initial: "L" } ] },
            { name: "TEAM 02", tag: "Alternative", members: [ { img: "Banyue.png", color: "#f05432", initial: "B" }, { img: "Pan Yinhu.png", color: "#e8a838", initial: "P" }, { img: "Ju Fufu.png", color: "#f05432", initial: "J" } ] },
            { name: "TEAM 03", tag: "Free To Play", members: [ { img: "Banyue.png", color: "#f05432", initial: "B" }, { img: "Pan Yinhu.png", color: "#e8a838", initial: "P" }, { img: "Pulchra.png", color: "#e8a838", initial: "P" } ] }
        ]
    },
    "Nicole": {
        color: "#f23c8a", element: "Ether", rank: "A", factionTitle: "Lièvres rusés",
        stats: [ { label: "Maîtrise d'Anomalie", value: "117+" }, { label: "Adresse d'Anomalie", value: "320 à 350+" }, { label: "Energie", value: "2.6 à 3" } ],
        discs: [
            { tag: "Support 👑", set1: "Swing_Jazz", set2: "Freedom_Blues", set1Name: "4pc Swing Jazz", set2Name: "+ 2pc Freedom Blues", note: "" },
            { tag: "Anomaly Build", set1: "Freedom_Blues", set2: "Swing_Jazz", set1Name: "4pc Freedom Blues", set2Name: "+ 2pc Swing Jazz", note: "" },
            { tag: "Support Build II", set1: "Astral_Voice", set2: "Swing_Jazz", set1Name: "4pc Astral Voice", set2Name: "+ 2pc Swing Jazz", note: "" }
        ],
        skills: [
            { name: "Assist", level: "", icon: "Assist.png" }, { name: "Ex", level: "", icon: "Ex.png" }, { name: "Ult", level: "", icon: "Ultime.png" }, { name: "Basic", level: "", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Anomalie" }, { slot: "5", label: "Ether DMG" }, { slot: "4", label: "Energy Regen" } ], sub: [ { label: "Anomaly Mastery", highlight: true }, { label: "PEN", highlight: false }, { label: "ATK %", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "The Vault", img: "W-Engine_The_Vault.png" }, { tag: "Option Anomalie", name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" }, { tag: "Option Soutien", name: "Kaboom the Cannon", img: "W-Engine_Kaboom_the_Cannon.png" }, { tag: "Alternative", name: "Slice of Time", img: "W-Engine_Slice_of_Time.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Miyabi", members: [ { img: "Nicole.png", color: "#f23c8a", initial: "N" }, { img: "Astra.png", color: "#f23c8a", initial: "A" }, { img: "Miyabi.png", color: "#3bbedb", initial: "M" } ] },
            { name: "TEAM 02", tag: "Zhu Yuan", members: [ { img: "Nicole.png", color: "#f23c8a", initial: "N" }, { img: "Qingyi.png", color: "#3182eb", initial: "Q" }, { img: "Zhu Yuan.png", color: "#f23c8a", initial: "Z" } ] },
            { name: "TEAM 03", tag: "Débutant", members: [ { img: "Nicole.png", color: "#f23c8a", initial: "N" }, { img: "Corin.png", color: "#e8a838", initial: "C" }, { img: "Billy.png", color: "#e8a838", initial: "B" } ] }
        ]
    },
    "Lycaon": {
        color: "#3bbedb", element: "Ice", rank: "S", factionTitle: "Victoria Housekeeping",
        stats: [ { label: "Impact", value: "180 à 194+" }, { label: "Attaque", value: "= 2200" }, { label: "Taux Crit", value: "= 60%" } ],
        discs: [
            { tag: "Stun Build 👑", set1: "Shockstar_Disco", set2: "Swing_Jazz", set1Name: "4pc Shockstar Disco", set2Name: "+ 2pc Swing Jazz", note: "" },
            { tag: "Stun Build II", set1: "Shockstar_Disco", set2: "Polar_Metal", set1Name: "4pc Shockstar Disco", set2Name: "+ 2pc Polar Metal", note: "" },
            { tag: "Crit Build", set1: "Shockstar_Disco", set2: "Woodpecker_Electro", set1Name: "4pc Shockstar Disco", set2Name: "+ 2pc Woodpecker Electro", note: "" }
        ],
        skills: [
            { name: "Basic", level: "", icon: "Attaque_basic.png" }, { name: "Ex", level: "", icon: "Ex.png" }, { name: "Ult", level: "", icon: "Ultime.png" }, { name: "Assist", level: "", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Impact" }, { slot: "5", label: "Ice DMG" }, { slot: "4", label: "Crit Rate / DMG" } ], sub: [ { label: "Crit Rate", highlight: true }, { label: "Crit DMG", highlight: false }, { label: "ATK %", highlight: false }, { label: "PEN", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "The Restrained", img: "W-Engine_The_Restrained.png" }, { tag: "Moteur A", name: "Precious Fossilized", img: "W-Engine_Precious_Fossilized.png" }, { tag: "Moteur A", name: "Six Shooter", img: "W-Engine_Six_Shooter.png" }, { tag: "Moteur B", name: "Vortex - Arrow", img: "Vortex_Arrow.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Hugo", members: [ { img: "Lycaon.png", color: "#3bbedb", initial: "L" }, { img: "Lighter.png", color: "#f05432", initial: "L" }, { img: "Hugo.png", color: "#3bbedb", initial: "H" } ] },
            { name: "TEAM 02", tag: "Ellen", members: [ { img: "Lycaon.png", color: "#3bbedb", initial: "L" }, { img: "Soukaku.png", color: "#3bbedb", initial: "S" }, { img: "Ellen.png", color: "#3bbedb", initial: "E" } ] },
            { name: "TEAM 03", tag: "Débutant", members: [ { img: "Lycaon.png", color: "#3bbedb", initial: "L" }, { img: "Soukaku.png", color: "#3bbedb", initial: "S" }, { img: "Corin.png", color: "#e8a838", initial: "C" } ] }
        ]
    },
    "Koleda": {
        color: "#f05432", element: "Fire", rank: "S", factionTitle: "Belobog Heavy Industries",
        stats: [ { label: "Impact", value: "≥ 190" }, { label: "Energie", value: "≥ 1.2" }, { label: "Attaque", value: "≥ 2400" } ],
        discs: [
            { tag: "Stun Build 👑", set1: "Shockstar_Disco", set2: "Inferno_Metal", set1Name: "4pc Shockstar Disco", set2Name: "+ 2pc Inferno Metal", note: "" },
            { tag: "Stun Build II", set1: "Shockstar_Disco", set2: "Swing_Jazz", set1Name: "4pc Shockstar Disco", set2Name: "+ 2pc Swing Jazz", note: "" },
            { tag: "Stun / DPS Build", set1: "Shockstar_Disco", set2: "Woodpecker_Electro", set1Name: "4pc Shockstar Disco", set2Name: "+ 2pc Woodpecker Electro", note: "" }
        ],
        skills: [
            { name: "Basic", level: "", icon: "Attaque_basic.png" }, { name: "Ex", level: "", icon: "Ex.png" }, { name: "Assist", level: "", icon: "Assist.png" }, { name: "Ult", level: "", icon: "Ultime.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Impact" }, { slot: "5", label: "Fire DMG" }, { slot: "4", label: "CRIT Rate" } ], sub: [ { label: "CRIT DMG / Rate", highlight: true }, { label: "ATK %", highlight: false }, { label: "PEN", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Hellfire Gears", img: "W-Engine_Hellfire_Gears.png" }, { tag: "Moteur S", name: "The Restrained", img: "W-Engine_The_Restrained.png" }, { tag: "Moteur A", name: "Six Shooter", img: "W-Engine_Six_Shooter.png" }, { tag: "Moteur A", name: "Precious Fossilized", img: "W-Engine_Precious_Fossilized.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Fire-Stun", members: [ { img: "Evelyn.png", color: "#f05432", initial: "E" }, { img: "Koleda.png", color: "#f05432", initial: "K" }, { img: "Ben.png", color: "#f05432", initial: "B" } ] },
            { name: "TEAM 02", tag: "Fire-Stun II", members: [ { img: "Soldier 11.png", color: "#f05432", initial: "S11" }, { img: "Caesar.png", color: "#e8a838", initial: "C" }, { img: "Koleda.png", color: "#f05432", initial: "K" } ] },
            { name: "TEAM 03", tag: "Débutant", members: [ { img: "Ben.png", color: "#f05432", initial: "B" }, { img: "Corin.png", color: "#e8a838", initial: "C" }, { img: "Koleda.png", color: "#f05432", initial: "K" } ] }
        ]
    },
    "Trigger": {
        color: "#3182eb", element: "Electric", rank: "S", factionTitle: "Sniper",
        stats: [ { label: "Taux Crit", value: "90%" }, { label: "Impact", value: "131" }, { label: "Attaque", value: "750" } ],
        discs: [
            { tag: "Set 1 👑", set1: "King_of_the_Summit", set2: "Woodpecker_Electro", set1Name: "4pc King of the Summit", set2Name: "+ 2pc Woodpecker Electro", note: "Le meilleur choix absolu pour maximiser ses dégâts et son impact sur l'équipe. Le choix le plus pratique pour atteindre le palier des 90% de Taux CRIT." },
            { tag: "Set 2", set1: "Shadow_Harmony", set2: "King_of_the_Summit", set1Name: "4pc Shadow Harmony", set2Name: "+ 2pc King of the Summit", note: "La meilleure alternative sans son Moteur Signature pour compenser le manque de Taux CRIT et se rapprocher du cap des 90%." },
            { tag: "Set 3", set1: "Astral_Voice", set2: "Woodpecker_Electro", set1Name: "4pc Astral Voice", set2Name: "+ 2pc Woodpecker Electro", note: "Très performant si tu maîtrises la mécanique de double switch assist, ou si elle est jouée aux côtés d'Astra Yao." }
        ],
        skills: [
            { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ex", level: "10", icon: "Ex.png" }, { name: "Ult", level: "10", icon: "Ultime.png" }, { name: "Assist", level: "7", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Impact %" }, { slot: "5", label: "DGT Électrique %" }, { slot: "4", label: "Taux CRIT" } ], sub: [ { label: "Taux CRIT", highlight: true }, { label: "ATQ %", highlight: false }, { label: "DGT CRIT", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Spectral Gaze", img: "W-Engine_Spectral_Gaze.png" }, { tag: "Alternatives 5★", name: "Blazing Laurel", img: "W-Engine_Blazing_Laurel.png" }, { tag: "Alternatives 4★ F2P", name: "Precious Fossilized", img: "W-Engine_Precious_Fossilized.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Premium", members: [ { img: "Trigger.png", color: "#3182eb", initial: "T" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Astra.png", color: "#f23c8a", initial: "A" } ] },
            { name: "TEAM 02", tag: "Double Élec", members: [ { img: "Trigger.png", color: "#3182eb", initial: "T" }, { img: "Seed.png", color: "#3182eb", initial: "S" }, { img: "Nekomata.png", color: "#e8a838", initial: "N" } ] },
            { name: "TEAM 03", tag: "Flexible", members: [ { img: "Trigger.png", color: "#3182eb", initial: "T" }, { img: "Hugo.png", color: "#3bbedb", initial: "H" }, { img: "", color: "#52525b", role: "N'importe quel<br>Support" } ] }
        ]
    },
    "Miyabi": {
        color: "#3bbedb", element: "Ice", rank: "S", factionTitle: "Section 6",
        stats: [ { label: "DGT Glace", value: "Max" }, { label: "Taux CRIT", value: "Max" }, { label: "Attaque", value: "Max" } ],
        discs: [
            { tag: "Meilleur Set 👑", set1: "Branch_Blade_Song", set2: "Woodpecker_Electro", set1Name: "4pc Branch and Blade Song", set2Name: "+ 2pc Woodpecker Electro", note: "Branch & Blade Song est le meilleur disque pour Miyabi car il lui donne du DGT CRIT et augmente ses propres DGT quand un membre de l'équipe applique Gel. Woodpecker Electro est son choix de prédilection en 2 pièces puisqu'elle a besoin de Taux CRIT." },
            { tag: "Alternative", set1: "Branch_Blade_Song", set2: "Polar_Metal", set1Name: "4pc Branch and Blade Song", set2Name: "+ 2pc Polar Metal", note: "Si vous avez déjà beaucoup de Taux CRIT sur Miyabi, vous pouvez envisager Polar Metal comme alternative pour obtenir plus de DGT Glace." }
        ],
        skills: [
            { name: "Core", level: "12", icon: "Core.webp" }, { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ult", level: "11", icon: "Ultime.png" }, { name: "Ex", level: "11", icon: "Ex.png" }, { name: "Assist", level: "8", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Attaque %" }, { slot: "5", label: "DGT Glace %" }, { slot: "4", label: "Taux CRIT" } ], sub: [ { label: "DGT CRIT", highlight: true }, { label: "Taux CRIT", highlight: false }, { label: "ATQ %", highlight: false }, { label: "PEN", highlight: false } ] },
        engines: [
            { tag: "Meilleur Moteur", name: "Hailstorm Shrine", img: "W-Engine_Hailstorm_Shrine.png" }, { tag: "Alternative 5★", name: "Fusion Compiler", img: "W-Engine_Fusion_Compiler.png" }, { tag: "Alternative BP", name: "Electro-Lip Gloss", img: "W-Engine_Electro-Lip_Gloss.png" }, { tag: "Alternative", name: "Roaring Ride", img: "W-Engine_Roaring_Ride.png" }, { tag: "F2P", name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Team F2P", members: [ { img: "Miyabi.png", color: "#3bbedb", initial: "M" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Soukaku.png", color: "#3bbedb", initial: "S" } ] },
            { name: "TEAM 02", tag: "Team Désordre", members: [ { img: "Miyabi.png", color: "#3bbedb", initial: "M" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" }, { img: "Yanagi.png", color: "#3182eb", initial: "Y" } ] },
            { name: "TEAM 03", tag: "Team Généraliste", members: [ { img: "Miyabi.png", color: "#3bbedb", initial: "M" }, { img: "Lighter.png", color: "#f05432", initial: "L" }, { img: "Lucy.png", color: "#f05432", initial: "L" } ] }
        ]
    },
    "Anby": {
        color: "#3182eb", element: "Electric", rank: "A", factionTitle: "Lièvres Rusés",
        stats: [ { label: "Impact", value: "≥ 189" }, { label: "Taux Crit", value: "≥ 50%" }, { label: "Attaque", value: "≥ 2400" } ],
        discs: [
            { tag: "Impact Build 👑", set1: "Shockstar_Disco", set2: "Swing_Jazz", set1Name: "4pc Shockstar Disco", set2Name: "+ 2pc Swing Jazz", note: "Shockstar Disco augmente l'Impact d'Anby et permet à ses Attaques de Base d'infliger plus de Choc. Le 2-pièces Swing Jazz augmente sa Réc. d'Énergie pour lui permettre d'utiliser plus d'EX Spéciaux." },
            { tag: "Impact Build II", set1: "King_of_the_Summit", set2: "Swing_Jazz", set1Name: "4pc King of the Summit", set2Name: "+ 2pc Swing Jazz", note: "King of the Summit offre un buff de DGT CRIT à toute l'équipe lorsqu'Anby utilise un EX Spécial ou un Enchaînement." }
        ],
        skills: [
            { name: "Core", level: "12", icon: "Core.webp" }, { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ex", level: "11", icon: "Ex.png" }, { name: "Ult", level: "10", icon: "Ultime.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Impact %" }, { slot: "5", label: "DGT Électrique %" }, { slot: "4", label: "Taux CRIT / DGT CRIT" } ], sub: [ { label: "Taux CRIT / DGT CRIT", highlight: true }, { label: "ATQ %", highlight: false }, { label: "ATQ Flat", highlight: false } ] },
        engines: [
            { tag: "Meilleur Moteur", name: "The Restrained", img: "W-Engine_The_Restrained.png" }, { tag: "Alternative S", name: "Hellfire Gears", img: "W-Engine_Hellfire_Gears.png" }, { tag: "Alternative A", name: "Steam Oven", img: "W-Engine_Steam_Oven.png" }, { tag: "Alternative A", name: "Precious Fossilized Core", img: "W-Engine_Precious_Fossilized.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Mono-Électrique", members: [ { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Astra.png", color: "#f23c8a", initial: "A" }, { img: "Harumasa.png", color: "#3182eb", initial: "H" } ] },
            { name: "TEAM 02", tag: "Team F2P", members: [ { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" }, { img: "Billy.png", color: "#e8a838", initial: "B" } ] },
            { name: "TEAM 03", tag: "Flexible", members: [ { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "", color: "#52525b", role: "Support" }, { img: "", color: "#52525b", role: "DPS" } ] }
        ]
    },
    "Corin": {
        color: "#e8a838", element: "Physical", rank: "A", factionTitle: "Victoria Housekeeping",
        stats: [ { label: "Taux Crit", value: "≥ 80%" }, { label: "Dégât Crit", value: "≥ 160%" }, { label: "Attaque", value: "≥ 3000" } ],
        discs: [
            { tag: "Physical DPS Build 👑", set1: "Fanged_Metal", set2: "Woodpecker_Electro", set1Name: "4pc Fanged Metal", set2Name: "+ 2pc Woodpecker Electro", note: "Fanged Metal augmente les DGT Physiques de Corin et ses dégâts contre les ennemis sous Assaut. Le 2-pc Woodpecker augmente son Taux CRIT de 8%." },
            { tag: "Alternative", set1: "Puffer_Electro", set2: "Woodpecker_Electro", set1Name: "4pc Puffer Electro", set2Name: "+ 2pc Woodpecker Electro", note: "Excellente alternative puisque Corin inflige énormément de dégâts avec son Ultime. Cela augmente aussi son ATK après l'Ultime." }
        ],
        skills: [
            { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "11", icon: "Ultime.png" }, { name: "Core", level: "10", icon: "Core.webp" }, { name: "Basic", level: "8", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Attaque %" }, { slot: "5", label: "DGT Physique %" }, { slot: "4", label: "Taux CRIT / DGT CRIT" } ], sub: [ { label: "DGT CRIT", highlight: true }, { label: "Taux CRIT", highlight: false }, { label: "ATQ %", highlight: false } ] },
        engines: [
            { tag: "Meilleur Moteur", name: "Housekeeper", img: "W-Engine_Housekeeper.png" }, { tag: "Alternative 5★", name: "Steel Cushion", img: "W-Engine_Steel_Cushion.png" }, { tag: "Alternative BP", name: "Cannon Rotor", img: "W-Engine_Cannon_Rotor.png" }, { tag: "Alternative F2P", name: "Lunar - Noviluna", img: "[Lunar] Noviluna.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Premium Team", members: [ { img: "Corin.png", color: "#e8a838", initial: "C" }, { img: "Dialyn.png", color: "#e8a838", initial: "D" }, { img: "Caesar.png", color: "#e8a838", initial: "C" } ] },
            { name: "TEAM 02", tag: "F2P Team", members: [ { img: "Corin.png", color: "#e8a838", initial: "C" }, { img: "Billy.png", color: "#e8a838", initial: "B" }, { img: "Anby.png", color: "#3182eb", initial: "A" } ] },
            { name: "TEAM 03", tag: "Flexible", members: [ { img: "Corin.png", color: "#e8a838", initial: "C" }, { img: "", color: "#52525b", role: "Agent<br>Stun" }, { img: "", color: "#52525b", role: "Agent<br>Support" } ] }
        ]
    },
    "Soldier 0 Anby": {
        color: "#3182eb", element: "Electric", rank: "S", factionTitle: "Forces de défense - Escouade Argent",
        stats: [ { label: "Taux Crit", value: "≥ 60 %" }, { label: "Dégât Crit", value: "≥ 170 %" }, { label: "Attaque", value: "≥ 2800" } ],
        discs: [
            { tag: "DPS Build 👑", set1: "Shadow_Harmony", set2: "Woodpecker_Electro", set1Name: "4pc Shadow Harmony", set2Name: "+ 2pc Woodpecker Electro", note: "Shadow of Harmony est le meilleur set de Soldier 0 Anby puisqu'il augmente les DGT de son Aftershock et son Taux CRIT. Utilisez un 2-pc Woodpecker Electro pour obtenir encore plus de Taux CRIT." },
            { tag: "Alternative", set1: "Shadow_Harmony", set2: "Thunder_Metal", set1Name: "4pc Shadow Harmony", set2Name: "+ 2pc Thunder Metal", note: "Un 2-pc Thunder Metal peut être envisagé si Soldier 0 Anby possède déjà énormément de Taux CRIT." }
        ],
        skills: [
            { name: "Core", level: "", icon: "Core.webp" }, { name: "Ex", level: "", icon: "Ex.png" }, { name: "Basic", level: "", icon: "Attaque_basic.png" }, { name: "Ult", level: "", icon: "Ultime.png" }, { name: "Assist", level: "", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "ATQ %" }, { slot: "5", label: "DGT Électrique %" }, { slot: "4", label: "Taux CRIT / DGT CRIT" } ], sub: [ { label: "Taux CRIT", highlight: true }, { label: "ATQ %", highlight: false }, { label: "PEN", highlight: false }, { label: "ATQ", highlight: false } ] },
        engines: [
            { tag: "Meilleur Moteur", name: "Severed Innocence", img: "W-Engine_Severed_Innocence.png" }, { tag: "Alternative 5★", name: "Zanshin Herb Case", img: "W-Engine_Zanshin_Herb_Case.png" }, { tag: "Alternative 4★", name: "Marcato Desire", img: "Marcato_Desire.png" }, { tag: "Alternative BP", name: "Cannon Rotor", img: "W-Engine_Cannon_Rotor.png" }, { tag: "Alternative A", name: "Drill Rig - Red Axis", img: "W-Engine_Drill_Rig_-_Red_Axis.png" }, { tag: "F2P", name: "Starlight Engine", img: "Starlight_Engine.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Hypercarry", members: [ { img: "Soldier 0 Anby.png", color: "#3182eb", initial: "S0A" }, { img: "Trigger.png", color: "#3182eb", initial: "T" }, { img: "Orphie and Magus.png", color: "#f05432", initial: "OM" } ] },
            { name: "TEAM 02", tag: "F2P Team", members: [ { img: "Soldier 0 Anby.png", color: "#3182eb", initial: "S0A" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" } ] },
            { name: "TEAM 03", tag: "Alternative", members: [ { img: "Soldier 0 Anby.png", color: "#3182eb", initial: "S0A" }, { img: "Pulchra.png", color: "#e8a838", initial: "P" }, { img: "", color: "#52525b", role: "Support" } ] }
        ]
    },
    "Zhu Yuan": {
        color: "#f23c8a", element: "Ether", rank: "S", factionTitle: "Division de l'Ordre urbain",
        stats: [ { label: "DGT CRIT", value: "≥ 250 %" }, { label: "Taux Crit", value: "≥ 44 %" }, { label: "Attaque", value: "≥ 2700" } ],
        discs: [
            { tag: "Set 1 👑", set1: "Woodpecker_Electro", set2: "Chaotic_Metal", set1Name: "4pc Woodpecker Electro", set2Name: "+ 2pc Chaotic Metal", note: "" },
            { tag: "Set 2", set1: "Woodpecker_Electro", set2: "Puffer_Electro", set1Name: "4pc Woodpecker Electro", set2Name: "+ 2pc Puffer Electro", note: "" },
            { tag: "Set 3", set1: "Chaotic_Metal", set2: "Woodpecker_Electro", set1Name: "4pc Chaotic Metal", set2Name: "+ 2pc Woodpecker Electro", note: "" }
        ],
        skills: [
            { name: "Core", level: "", icon: "Core.webp" }, { name: "Ex", level: "", icon: "Ex.png" }, { name: "Ult", level: "", icon: "Ultime.png" }, { name: "Basic", level: "", icon: "Attaque_basic.png" }, { name: "Assist", level: "", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "ATQ" }, { slot: "5", label: "Ether DMG" }, { slot: "4", label: "TC / DC" } ], sub: [ { label: "TC / DC", highlight: true }, { label: "ATQ %", highlight: false } ] },
        engines: [
            { tag: "Moteur S", name: "Riot Suppressor", img: "W-Engine_Riot_Suppressor_Mark_VI.png" }, { tag: "Moteur S", name: "The Brimstone", img: "W-Engine_The_Brimstone.png" }, { tag: "Moteur A", name: "Cannon Rotor", img: "W-Engine_Cannon_Rotor.png" }, { tag: "Moteur A", name: "Starlight Engine", img: "Starlight_Engine.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Premium", members: [ { img: "Zhu Yuan.png", color: "#f23c8a", initial: "ZY" }, { img: "Qingyi.png", color: "#3182eb", initial: "Q" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" } ] },
            { name: "TEAM 02", tag: "Alternative", members: [ { img: "Zhu Yuan.png", color: "#f23c8a", initial: "ZY" }, { img: "Trigger.png", color: "#3182eb", initial: "T" }, { img: "Astra.png", color: "#f23c8a", initial: "A" } ] },
            { name: "TEAM 03", tag: "Free To Play", members: [ { img: "Zhu Yuan.png", color: "#f23c8a", initial: "ZY" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" } ] }
        ]
    },
    "Lucy": {
        color: "#f05432", element: "Fire", rank: "A", factionTitle: "Sons of Calydon",
        stats: [ { label: "Taux Crit", value: "≈ 60.2 %" }, { label: "Dégât Crit", value: "≈ 157.2 %" }, { label: "Attaque", value: "2725" } ],
        discs: [
            { tag: "Support 👑", set1: "Swing_Jazz", set2: "Woodpecker_Electro", set1Name: "4pc Swing Jazz", set2Name: "+ 2pc Woodpecker Electro", note: "" },
            { tag: "DPS", set1: "Swing_Jazz", set2: "Woodpecker_Electro", set1Name: "4pc Swing Jazz", set2Name: "+ 2pc Woodpecker Electro", note: "" },
            { tag: "Support AP", set1: "Swing_Jazz", set2: "Freedom_Blues", set1Name: "4pc Swing Jazz", set2Name: "+ 2pc Freedom Blues", note: "" }
        ],
        skills: [
            { name: "Ex", level: "", icon: "Ex.png" }, { name: "Assist", level: "", icon: "Assist.png" }, { name: "Ult", level: "", icon: "Ultime.png" }, { name: "Basic", level: "", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Energy Regen / ATK%" }, { slot: "5", label: "ATK% / Fire DMG" }, { slot: "4", label: "ATK% / Crit Rate / DMG" } ], sub: [ { label: "ATK%", highlight: true }, { label: "Crit Rate = Crit DMG", highlight: false }, { label: "PEN", highlight: false }, { label: "ATK", highlight: false } ] },
        engines: [
            { tag: "Meilleur Moteur", name: "Kaboom the Cannon", img: "W-Engine_Kaboom_the_Cannon.png" }, { tag: "Alternative A", name: "Elegant Vanity", img: "W-Engine_Elegant_Vanity.png" }, { tag: "Alternative A", name: "Bashful Demon", img: "W-Engine_Bashful_Demon.png" }, { tag: "Alternative A", name: "Unfettered Game Ball", img: "W-Engine_Unfettered_Game_Ball.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Equipe Rupture", members: [ { img: "Lucia.png", color: "#f23c8a", initial: "L" }, { img: "Pan Yinhu.png", color: "#e8a838", initial: "P" }, { img: "Yixuan.png", color: "#e8a838", initial: "Y" } ] },
            { name: "TEAM 02", tag: "Equipe Anomalie", members: [ { img: "Caesar.png", color: "#e8a838", initial: "C" }, { img: "Burnice.png", color: "#f05432", initial: "B" }, { img: "Yanagi.png", color: "#3182eb", initial: "Y" } ] },
            { name: "TEAM 03", tag: "Team débutant", members: [ { img: "Lighter.png", color: "#f05432", initial: "L" }, { img: "Koleda.png", color: "#f05432", initial: "K" }, { img: "Ben.png", color: "#f05432", initial: "B" } ] }
        ]
    },
    "Hugo": {
        color: "#3bbedb", element: "Ice", rank: "S", factionTitle: "Oiseaux-moqueurs",
        stats: [ { label: "Attaque", value: "Max" }, { label: "Taux Crit", value: "Max" }, { label: "Dégât Crit", value: "Max" } ],
        discs: [
            { tag: "DPS Build 👑", set1: "Puffer_Electro", set2: "Woodpecker_Electro", set1Name: "4pc Puffer Electro", set2Name: "+ 2pc Woodpecker Electro", note: "Fonctionne le mieux avec Dialyn pour lancer plus d'Ultimes. Augmente le Taux CRIT et les DGT CRIT nécessaires pour optimiser la 'Totalisation'." },
            { tag: "Alternative Build", set1: "Hormone_Punk", set2: "Woodpecker_Electro", set1Name: "4pc Hormone Punk", set2Name: "+ 2pc Woodpecker Electro", note: "Excellent set si Hugo n'est pas joué avec Dialyn. Fournit une tonne d'ATQ% à chaque fois qu'il entre sur le terrain." }
        ],
        skills: [
            { name: "Core", level: "12", icon: "Core.webp" }, { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "11", icon: "Ultime.png" }, { name: "Basic", level: "8", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Attaque %" }, { slot: "5", label: "DGT Glace %" }, { slot: "4", label: "Taux CRIT / DGT CRIT" } ], sub: [ { label: "Taux CRIT", highlight: true }, { label: "DGT CRIT", highlight: false }, { label: "ATQ %", highlight: false } ] },
        engines: [
            { tag: "Meilleur Moteur", name: "Myriad Eclipse", img: "W-Engine_Myriad_Eclipse.png" }, { tag: "Alternative 5★", name: "Deep Sea Visitor", img: "W-Engine_Deep_Sea_Visitor.png" }, { tag: "Alternative 4★", name: "Severed Innocence", img: "W-Engine_Severed_Innocence.png" }, { tag: "Alternative F2P", name: "Marcato Desire", img: "Marcato_Desire.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Double Stun", members: [ { img: "Hugo.png", color: "#3bbedb", initial: "H" }, { img: "Norma.png", color: "#f05432", initial: "N" }, { img: "Dialyn.png", color: "#e8a838", initial: "D" } ] },
            { name: "TEAM 02", tag: "F2P Team", members: [ { img: "Hugo.png", color: "#3bbedb", initial: "H" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" } ] },
            { name: "TEAM 03", tag: "Flexible", members: [ { img: "Hugo.png", color: "#3bbedb", initial: "H" }, { img: "", color: "#52525b", role: "Agent<br>Stun" }, { img: "", color: "#52525b", role: "Agent<br>Stun" } ] }
        ]
    }
};
