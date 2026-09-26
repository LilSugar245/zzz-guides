export const agentDatabase = {
    "Piper": {
        color: "#e8a838", element: "Physical", rank: "A", factionTitle: { fr: "Fils de Calydon", en: "Sons of Calydon" },
        stats: [
            { label: { fr: "Adresse d'Anomalie", en: "Anomaly Proficiency" }, value: "≥ 385 - 420+" },
            { label: { fr: "Attaque", en: "Attack" }, value: "≥ 2600 - 2800+" },
            { label: { fr: "Maîtrise d'Anomalie", en: "Anomaly Mastery" }, value: "≥ 120 - 150+" }
        ],
        discs: [
            { 
                tag: { fr: "Assaut / Carry (100 %) 👑", en: "Assault / Carry (100%) 👑" }, 
                set1: "Fanged_Metal", set2: "Freedom_Blues", 
                set1Name: "4pc Fanged Metal", set2Name: "+ 2pc Freedom Blues", 
                note: { 
                    fr: "Le meilleur choix pour maximiser les dégâts personnels d'Assaut (+35 % DGT Physiques) et alimenter de lourds dégâts de Désordre.", 
                    en: "Optimal set to maximize personal Assault damage (+35% Physical DMG) and trigger massive Disorder bursts." 
                } 
            },
            { 
                tag: { fr: "Support Anomalie", en: "Anomaly Support" }, 
                set1: "Freedom_Blues", set2: "Swing_Jazz", 
                set1Name: "4pc Freedom Blues", set2Name: "+ 2pc Swing Jazz", 
                note: { 
                    fr: "Réduit la résistance à l'anomalie ennemie de 20 % via l'EX Spécial ; idéal dans les compositions double anomalie (Burnice / Jane).", 
                    en: "Reduces enemy Anomaly Buildup RES by 20% on EX Special; ideal for dual anomaly setups (Burnice / Jane)." 
                } 
            },
            { 
                tag: { fr: "Hybride Énergie", en: "Energy Hybrid" }, 
                set1: "Freedom_Blues", set2: "Hormone_Punk", 
                set1Name: "4pc Freedom Blues", set2Name: "+ 2pc Hormone Punk", 
                note: { 
                    fr: "Alternative équilibrée combinant la réduction de résistance et un surcroît d'ATK brute.", 
                    en: "Balanced alternative combining anomaly shred with raw ATK boosts." 
                } 
            }
        ],
        skills: [
            { name: "Core", level: "F", icon: "Core.webp" },
            { name: "Ex", level: "12", icon: "Ex.png" },
            { name: "Ult", level: "11", icon: "Ultime.png" },
            { name: "Basic", level: "9", icon: "Attaque_basic.png" },
            { name: "Assist", level: "8", icon: "Assist.png" },
            { name: "Dodge", level: "6", icon: "Esquive.png" }
        ],
        statPriority: {
            main: [
                { slot: "6", label: { fr: "Maîtrise d'Anomalie / ATK %", en: "Anomaly Mastery / ATK%" } },
                { slot: "5", label: { fr: "DGT Physique % / PEN Ratio", en: "Physical DMG% / PEN Ratio" } },
                { slot: "4", label: { fr: "Adresse d'Anomalie", en: "Anomaly Proficiency" } }
            ],
            sub: [
                { label: { fr: "Adresse d'Anomalie", en: "Anomaly Proficiency" }, highlight: true },
                { label: { fr: "Attaque %", en: "ATK %" }, highlight: true },
                { label: { fr: "PEN Flat", en: "Flat PEN" }, highlight: false },
                { label: { fr: "Attaque Flat", en: "Flat ATK" }, highlight: false }
            ]
        },
        engines: [
            { tag: { fr: "Signature (100 %) 👑", en: "Signature (100%) 👑" }, name: "Roaring Ride", img: "W-Engine_Roaring_Ride.png" },
            { tag: { fr: "Alternative BP (95 %)", en: "BP Alternative (95%)" }, name: "Electro-Lip Gloss", img: "W-Engine_Electro-Lip_Gloss.png" },
            { tag: { fr: "F2P Craftable (S5)", en: "F2P Craftable (S5)" }, name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" },
            { tag: { fr: "Option Boutique", en: "Gadget Store Option" }, name: "Rainforest Gourmet", img: "W-Engine_Rainforest_Gourmet.png" }
        ],
        teams: [
            { 
                name: "TEAM 01", 
                tag: { fr: "Désordre Calydon 👑", en: "Calydon Disorder 👑" }, 
                members: [ 
                    { img: "Burnice.png", color: "#f05432", initial: "B" }, 
                    { img: "Caesar.png", color: "#e8a838", initial: "C" }, 
                    { img: "Piper.png", color: "#e8a838", initial: "P" } 
                ] 
            },
            { 
                name: "TEAM 02", 
                tag: { fr: "Mono Calydon F2P", en: "Mono Calydon F2P" }, 
                members: [ 
                    { img: "Lucy.png", color: "#f05432", initial: "L" }, 
                    { img: "Burnice.png", color: "#f05432", initial: "B" }, 
                    { img: "Piper.png", color: "#e8a838", initial: "P" } 
                ] 
            },
            { 
                name: "TEAM 03", 
                tag: { fr: "Lièvres rusés / F2P", en: "Cunning Hares / F2P" }, 
                members: [ 
                    { img: "Nicole.png", color: "#f23c8a", initial: "N" }, 
                    { img: "Corin.png", color: "#e8a838", initial: "C" }, 
                    { img: "Piper.png", color: "#e8a838", initial: "P" } 
                ] 
            }
        ],
        mindscapes: [
            { rank: "M1", desc: { fr: "Le nombre de cumuls de Puissance requis passe à 20 max et la vitesse de rotation de l'EX Spécial augmente nettement.", en: "Reduces max Power stacks needed to 20 and noticeably speeds up EX Special spin accumulation." } },
            { rank: "M2", desc: { fr: "Accélère la vitesse de démarrage du tourbillon et augmente l'Impact des coups continus.", en: "Accelerates tire spin startup speed and increases Daze inflicted during continuous hits." } },
            { rank: "M6", desc: { fr: "Prolonge la durée maximale de l'EX Spécial et augmente ses dégâts d'Assaut finaux.", en: "Extends max EX Special spin duration and significantly increases terminal Assault strike DMG." } }
        ],
        notes: [
            { fr: "Gestion de la Puissance : Atteindre rapidement 20 cumuls avec l'EX Spécial pour activer le buff d'équipe de +18 % de DGT.", en: "Power Management: Quickly build 20 Power stacks with EX Special to trigger the squad-wide +18% DMG bonus." },
            { fr: "Annulation d'animation : Après le coup lourd final de la rotation, changer d'agent immédiatement pour éviter l'animation d'essoufflement.", en: "Animation Cancel: Swap out immediately following the heavy slam finisher to cancel her exhaustion recovery animation." }
        ]
    },
    "Jane": {
        color: "#e8a838", element: "Physical", rank: "S", factionTitle: { fr: "Division de l'Ordre urbain", en: "Criminal Behavior Specialist" },
        stats: [ { label: "Adresse Anomalie", value: "420" }, { label: "Attaque", value: "2600" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Fanged_Metal", set2: "Puffer_Electro", set1Name: "4pc Fanged Metal", set2Name: "+ 2pc Puffer Electro", note: { fr: "Le meilleur choix d'appoint si vous utilisez du Taux de Pénétration (PEN Ratio) sur le disque 5.", en: "The best complementary choice if using PEN Ratio on slot 5." } },
            { tag: { fr: "Set 2 (99.90%)", en: "Set 2 (99.90%)" }, set1: "Fanged_Metal", set2: "Phaethon_Melody", set1Name: "4pc Fanged Metal", set2Name: "+ 2pc Phaethon's Melody", note: "" }
        ],
        skills: [
            { name: "Ult", level: "11", icon: "Ultime.png" }, { name: "Assist", level: "11", icon: "Assist.png" }, { name: "Ex", level: "10", icon: "Ex.png" }, { name: "Basic", level: "8", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Maitrise Anomalie" }, { slot: "5", label: "Taux de PEN" }, { slot: "4", label: "Adresse d'Anomalie" } ], sub: [ { label: "Adre. Anomalie", highlight: true }, { label: "Attaque %", highlight: false }, { label: "Flat PEN / Flat ATK", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Sharpened Stinger", img: "W-Engine_Sharpened_Stinger.png" }, { tag: "Alt 5★ (100%)", name: "Practiced Perfection", img: "W-Engine_Practiced_Perfection.png" }, { tag: "Alt F2P (89.12%)", name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Double Anomalie", en: "Dual Anomaly" }, members: [ { img: "Jane.png", color: "#e8a838", initial: "JD" }, { img: "Velina.png", color: "#3bbedb", initial: "V" }, { img: "Remielle.png", color: "#fba2d0", initial: "R" } ] },
            { name: "TEAM 02", tag: { fr: "Synergie Éther", en: "Ether Synergy" }, members: [ { img: "Jane.png", color: "#e8a838", initial: "JD" }, { img: "Nangong Yu.png", color: "#f23c8a", initial: "N" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" } ] },
            { name: "TEAM 03", tag: { fr: "Désordre Brûlure", en: "Burn Disorder" }, members: [ { img: "Jane.png", color: "#e8a838", initial: "JD" }, { img: "Burnice.png", color: "#f05432", initial: "B" }, { img: "Remielle.png", color: "#fba2d0", initial: "R" } ] }
        ]
    },
    "Claret": {
        color: "#3182eb", element: "Electric", rank: "S", factionTitle: { fr: "Atelier Flint", en: "Member of the Flint Workshop" },
        stats: [ { label: "Taux Crit", value: "200% en combat" }, { label: "Objectif Disques", value: "14 rolls TC / 12 rolls DC" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Thorned_Rose", set2: "Puffer_Electro", set1Name: "4pc Thorned Rose", set2Name: "+ 2pc Puffer Electro", note: { fr: "Son set signature est strictement incontournable. Meilleure option pour le gain de PEN Ratio.", en: "Her signature set is strictly mandatory. Best option for PEN Ratio gain." } },
            { tag: { fr: "Set 2 (100%)", en: "Set 2 (100%)" }, set1: "Thorned_Rose", set2: "Woodpecker_Electro", set1Name: "4pc Thorned Rose", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Très bonne alternative TC.", en: "Very solid CRIT Rate alternative." } }
        ],
        skills: [
            { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "12", icon: "Ultime.png" }, { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Assist", level: "10", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "DÉF %" }, { slot: "5", label: "PEN Ratio" }, { slot: "4", label: "Taux CRIT" } ], sub: [ { label: "Taux CRIT", highlight: true }, { label: "DÉF %", highlight: false }, { label: "DGT CRIT", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Crimson Thirst", img: "W-Engine_Crimson_Thirst.png" }, { tag: "Alt F2P (80.55%)", name: "Catty Luck", img: "W-Engine_Catty_Luck.png" }, { tag: "Alt (77.48%)", name: "Bloodmarrow Coffer", img: "W-Engine_Bloodmarrow_Coffer.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Classique", en: "Classic" }, members: [ { img: "Claret.png", color: "#3182eb", initial: "C" }, { img: "Norma.png", color: "#f05432", initial: "N" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] },
            { name: "TEAM 02", tag: { fr: "Double Élec", en: "Dual Shock" }, members: [ { img: "Claret.png", color: "#3182eb", initial: "C" }, { img: "Velina.png", color: "#3bbedb", initial: "V" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] }
        ]
    },
    "Ye Shunguang": {
        color: "#e8a838", element: "Honed Edge", elementIcon: "Honed_Edge.png", rank: "S", factionTitle: "Void Hunter",
        stats: [ { label: "Attaque", value: "3000+" }, { label: "Taux Crit", value: "max. 50%" }, { label: "Dégât Crit", value: "180 - 200%+" } ],
        discs: [
            { tag: { fr: "Meilleur Set 👑", en: "Best Set 👑" }, set1: "White_Water_Ballad", set2: "Branch_Blade_Song", set1Name: "4pc White Water Ballad", set2Name: "+ 2pc Branch and Blade Song", note: { fr: "Mélopée des eaux blanches est le set signature de Ye Shunguang, augmentant son Taux CRIT et son ATQ. Le buff devient plus puissant lorsqu'elle active le Voile d'Ether. Vu qu'elle gagne beaucoup de Taux CRIT via ce set et son Core Skill, utilisez le 2-pc Branch and Blade Song pour les DGT CRIT.", en: "White Water Ballad is Ye Shunguang's signature set, boosting her CRIT Rate and ATK. The buff grows stronger when activating Ether Veil. Since she gains plenty of CRIT Rate from this set and Core Skill, run 2pc Branch and Blade Song for CRIT DMG." } },
            { tag: { fr: "2ème Choix", en: "2nd Choice" }, set1: "White_Water_Ballad", set2: "Woodpecker_Electro", set1Name: "4pc White Water Ballad", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Vous pouvez utiliser Électro pivert si vous avez de meilleures sous-stats sur ces pièces. Assurez-vous simplement de ne pas dépasser la limite de Taux CRIT et privilégiez les sous-stats DGT CRIT.", en: "You can run Woodpecker Electro if you have superior sub-stats on those pieces. Just make sure not to exceed the CRIT Rate cap and prioritize CRIT DMG sub-stats." } }
        ],
        skills: [
            { name: "Core", level: "12", icon: "Core.webp" }, { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ex", level: "11", icon: "Ex.png" }, { name: "Ult", level: "11", icon: "Ultime.png" }, { name: "Assist", level: "8", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Attaque %" }, { slot: "5", label: "PEN Ratio / ATQ / DGT Physique" }, { slot: "4", label: "Dégât CRIT" } ], sub: [ { label: "Taux CRIT", highlight: true }, { label: "DGT CRIT", highlight: false }, { label: "Attaque %", highlight: false } ] },
        engines: [
            { tag: "Meilleur Moteur", name: "Cloudcleave Radiance", img: "W-Engine_Cloudcleave_Radiance.png" }, { tag: "Alternative 5★", name: "The Brimstone", img: "W-Engine_The_Brimstone.png" }, { tag: "Alternative 5★", name: "Steel Cushion", img: "W-Engine_Steel_Cushion.png" }, { tag: "Alternative F2P", name: "Gilded Blossom", img: "Gilded_Blossom.png" }, { tag: "Alternative A", name: "Marcato Desire", img: "Marcato_Desire.png" }, { tag: "Alternative A", name: "Street Superstar", img: "W-Engine_Street_Superstar.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Team Premium", en: "Premium Team" }, members: [ { img: "Ye Shunguang.png", color: "#e8a838", initial: "YS" }, { img: "Dialyn.png", color: "#e8a838", initial: "D" }, { img: "Sunna.png", color: "#e8a838", initial: "S" } ] },
            { name: "TEAM 02", tag: { fr: "Team F2P", en: "F2P Team" }, members: [ { img: "Ye Shunguang.png", color: "#e8a838", initial: "YS" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" } ] },
            { name: "TEAM 03", tag: { fr: "Double Attaque", en: "Dual Attack" }, members: [ { img: "Ye Shunguang.png", color: "#e8a838", initial: "YS" }, { img: "Seed.png", color: "#3182eb", initial: "S" }, { img: "", color: "#52525b", role: "Agent<br>Support" } ] }
        ]
    },
    "Yanagi": {
        color: "#3182eb", element: "Electric", rank: "S", factionTitle: { fr: "Section 6", en: "Deputy Chief of H.A.N.D" },
        stats: [ { label: "Adresse d'Anomalie", value: "370+" }, { label: "Attaque", value: "3000+" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Chaos_Jazz", set2: "Freedom_Blues", set1Name: "4pc Chaos Jazz", set2Name: "+ 2pc Freedom Blues", note: { fr: "Le meilleur set pour Yanagi. Scaling démesuré en AP.", en: "Best set for Yanagi. Insane Anomaly Proficiency scaling." } },
            { tag: { fr: "Set 2 (100%)", en: "Set 2 (100%)" }, set1: "Hormone_Punk", set2: "Freedom_Blues", set1Name: "4pc Hormone Punk", set2Name: "+ 2pc Freedom Blues", note: { fr: "Envisageable avec Rina, mais moins régulier.", en: "Viable when paired with Rina, though less consistent." } }
        ],
        skills: [
            { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "12", icon: "Ultime.png" }, { name: "Assist", level: "10", icon: "Assist.png" }, { name: "Basic", level: "5", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Maîtrise d'Anomalie" }, { slot: "5", label: "Attaque %" }, { slot: "4", label: "Adresse d'Anomalie" } ], sub: [ { label: "Adresse d'Anomalie", highlight: true }, { label: "Attaque %", highlight: false }, { label: "PEN / ATQ Flat", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Timeweaver", img: "W-Engine_Timeweaver.png" }, { tag: "Alt Craftable", name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" }, { tag: "Alt Standard", name: "Fusion Compiler", img: "W-Engine_Fusion_Compiler.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Désordre", en: "Disorder" }, members: [ { img: "Yanagi.png", color: "#3182eb", initial: "Y" }, { img: "Nangong Yu.png", color: "#f23c8a", initial: "N" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" } ] },
            { name: "TEAM 02", tag: { fr: "Mono-Élec", en: "Mono-Electric" }, members: [ { img: "Yanagi.png", color: "#3182eb", initial: "Y" }, { img: "Trigger.png", color: "#e8a838", initial: "T" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] }
        ]
    },
    "Nangong Yu": {
        color: "#f23c8a", element: "Ether", rank: "S", factionTitle: "Angels of Delusion",
        stats: [ { label: "Adre. d'anomalie", value: "350+" }, { label: "Maî. d'Anomalie", value: "150+" }, { label: "Attaque", value: "2800+" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Phaethon_Melody", set2: "Freedom_Blues", set1Name: "4pc Phaethon's Melody", set2Name: "+ 2pc Freedom Blues", note: { fr: "Set idéal.", en: "Ideal set." } },
            { tag: { fr: "Alternatives", en: "Alternatives" }, set1: "Shining_Aria", set2: "Swing_Jazz", set1Name: "2pc Shining Aria", set2Name: "+ 2pc Swing Jazz", note: "" }
        ],
        skills: [
            { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ult", level: "12", icon: "Ultime.png" }, { name: "Assist", level: "10", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Anomalie" }, { slot: "5", label: "DGT Éther > ATQ" }, { slot: "4", label: "Anomalie" } ], sub: [ { label: "Anomalie", highlight: true }, { label: "ATQ %", highlight: false }, { label: "PEN", highlight: false } ] },
        engines: [
            { tag: "Signature S", name: "Neon Fantasies", img: "W-Engine_Neon_Fantasies.png" }, { tag: "Alternative S", name: "Roaring Fur-nace", img: "W-Engine_Roaring_Fur-nace.png" }, { tag: "Alternative A", name: "Precious Fossilized Core", img: "W-Engine_Precious_Fossilized.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Angels of Delusion", members: [ { img: "Nangong Yu.png", color: "#f23c8a", initial: "N" }, { img: "Sunna.png", color: "#e8a838", initial: "S" }, { img: "Aria.png", color: "#f23c8a", initial: "A" } ] },
            { name: "TEAM 02", tag: { fr: "Synergie Yanagi", en: "Yanagi Synergy" }, members: [ { img: "Nangong Yu.png", color: "#f23c8a", initial: "N" }, { img: "Yanagi.png", color: "#3182eb", initial: "Y" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" } ] }
        ]
    },
    "Burnice": {
        color: "#f05432", element: "Fire", rank: "S", factionTitle: { fr: "Fils de Calydon", en: "Mixologist" },
        stats: [ { label: "Réc. d'énergie", value: "2,8" }, { label: "Attaque", value: "2900" }, { label: "Adr. d'anomalie", value: "350" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Chaos_Jazz", set2: "Swing_Jazz", set1Name: "4pc Chaos Jazz", set2Name: "+ 2pc Swing Jazz", note: { fr: "Le meilleur set pour Burnice. Booste ses EX Spéciaux.", en: "Best set for Burnice. Greatly buffs her EX Specials." } },
            { tag: { fr: "Set 2 (100%)", en: "Set 2 (100%)" }, set1: "Chaos_Jazz", set2: "Puffer_Electro", set1Name: "4pc Chaos Jazz", set2Name: "+ 2pc Puffer Electro", note: "" },
            { tag: { fr: "Set 3 (90%)", en: "Set 3 (90%)" }, set1: "Freedom_Blues", set2: "Swing_Jazz", set1Name: "4pc Freedom Blues", set2Name: "+ 2pc Swing Jazz", note: { fr: "Plus intéressant que Chaos Jazz dans la Team Remielle + Velina.", en: "More valuable than Chaos Jazz in the Remielle + Velina team." } }
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
            { name: "TEAM 02", tag: { fr: "Flexible", en: "Flexible" }, members: [ { img: "Burnice.png", color: "#f05432", initial: "B" }, { img: "", color: "#52525b", role: "Agents<br>Anomalie" }, { img: "", color: "#52525b", role: "Agents<br>Support" } ] },
            { name: "TEAM 03", tag: { fr: "Fils de Calydon", en: "Sons of Calydon" }, members: [ { img: "Burnice.png", color: "#f05432", initial: "B" }, { img: "Piper.png", color: "#e8a838", initial: "P" }, { img: "Lucy.png", color: "#f05432", initial: "L" } ] }
        ]
    },
    "Yidhari": {
        color: "#3bbedb", element: "Ice", rank: "S", factionTitle: { fr: "Maison hantée", en: "Spook Shack" },
        stats: [ { label: "DGT CRIT", value: "≥ 150 %" }, { label: "Taux Crit", value: "≥ 68 %" }, { label: "Force transperçante", value: "≥ 2500" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Yunkui_Tales", set2: "Woodpecker_Electro", set1Name: "4pc Yunkui Tales", set2Name: "+ 2pc Woodpecker Electro", note: "" },
            { tag: "Set 2", set1: "Yunkui_Tales", set2: "Dawn_Bloom", set1Name: "4pc Yunkui Tales", set2Name: "+ 2pc Dawn's Bloom", note: "" },
            { tag: "Set 3", set1: "Yunkui_Tales", set2: "Branch_Blade_Song", set1Name: "4pc Yunkui Tales", set2Name: "+ 2pc Branch and Blade Song", note: "" }
        ],
        skills: [
            { name: "Core", level: "", icon: "Core.webp" }, { name: "Basic", level: "", icon: "Attaque_basic.png" }, { name: "Ex", level: "", icon: "Ex.png" }, { name: "Ult", level: "", icon: "Ultime.png" }, { name: "Assist", level: "", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "HP %" }, { slot: "5", label: "ICE DMG %" }, { slot: "4", label: "TC / DC" } ], sub: [ { label: "TC / DC", highlight: true }, { label: "HP %", highlight: false } ] },
        engines: [
            { tag: "Moteur S", name: "Kraken's Cradle", img: "W-Engine_Krakens_Cradle.png" }, { tag: "Moteur S", name: "Qingming Birdcage", img: "W-Engine_Qingming_Birdcage.png" }, { tag: "Moteur A", name: "Radiowave Journey", img: "W-Engine_Radiowave_Journey.png" }, { tag: "Moteur A", name: "Grill O'Wisp", img: "W-Engine_Grill_O_Wisp.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Premium", members: [ { img: "Yidhari.png", color: "#3bbedb", initial: "Y" }, { img: "Ju Fufu.png", color: "#f05432", initial: "J" }, { img: "Lucia.png", color: "#f23c8a", initial: "L" } ] },
            { name: "TEAM 02", tag: { fr: "Double Feu", en: "Dual Fire" }, members: [ { img: "Yidhari.png", color: "#3bbedb", initial: "Y" }, { img: "Lighter.png", color: "#f05432", initial: "L" }, { img: "Lucy.png", color: "#f05432", initial: "L" } ] },
            { name: "TEAM 03", tag: "Free To Play", members: [ { img: "Yidhari.png", color: "#3bbedb", initial: "Y" }, { img: "Pulchra.png", color: "#e8a838", initial: "P" }, { img: "Pan Yinhu.png", color: "#e8a838", initial: "P" } ] }
        ]
    },
    "Ellen": {
        color: "#3bbedb", element: "Ice", rank: "S", factionTitle: { fr: "Société d'entretien Victoria", en: "Victoria Housekeeping" },
        stats: [ { label: "Taux Crit", value: "90 - 100%" }, { label: "Attaque", value: "2600 - 3000+" }, { label: "Dégât Crit", value: "120% - 180%+" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Woodpecker_Electro", set2: "Puffer_Electro", set1Name: "4pc Woodpecker Electro", set2Name: "+ 2pc Puffer Electro", note: { fr: "Le meilleur choix universel par défaut. Il surpasse nettement les autres options.", en: "Best universal default choice. Clearly outperforms all other options." } },
            { tag: { fr: "Set 2 (100%)", en: "Set 2 (100%)" }, set1: "Puffer_Electro", set2: "Woodpecker_Electro", set1Name: "4pc Puffer Electro", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "À égalité ou légèrement supérieur si Ellen est jouée avec Dialyn.", en: "Tied or slightly superior if Ellen is played alongside Dialyn." } },
            { tag: { fr: "Set 3 (92.52%)", en: "Set 3 (92.52%)" }, set1: "Polar_Metal", set2: "Puffer_Electro", set1Name: "4pc Polar Metal", set2Name: "+ 2pc Puffer Electro", note: "" }
        ],
        skills: [
            { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "11", icon: "Ultime.png" }, { name: "Assist", level: "11", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Attaque %" }, { slot: "5", label: "PEN Ratio (Ice DMG)" }, { slot: "4", label: "Dégât Crit" } ], sub: [ { label: "Taux Crit", highlight: true }, { label: "Attaque % = Dégât Crit", highlight: false }, { label: "PEN / Flat ATK", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Deep Sea Visitor", img: "W-Engine_Deep_Sea_Visitor.png" }, { tag: "Alt 5★ (99.16%)", name: "Cordis Germina", img: "W-Engine_Cordis_Germina.png" }, { tag: "Alt Battle Pass", name: "Cannon Rotor", img: "W-Engine_Cannon_Rotor.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Premium", members: [ { img: "Ellen.png", color: "#3bbedb", initial: "E" }, { img: "Lighter.png", color: "#f05432", initial: "L" }, { img: "Astra.png", color: "#f23c8a", initial: "A" } ] },
            { name: "TEAM 02", tag: { fr: "Double Stun", en: "Dual Stun" }, members: [ { img: "Ellen.png", color: "#3bbedb", initial: "E" }, { img: "", color: "#52525b", role: "Agent<br>Stun" }, { img: "", color: "#52525b", role: "Agent<br>Stun" } ] },
            { name: "TEAM 03", tag: "Victoria", members: [ { img: "Ellen.png", color: "#3bbedb", initial: "E" }, { img: "Koleda.png", color: "#f05432", initial: "K" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] }
        ]
    },
    "Vivian": {
        color: "#f23c8a", element: "Ether", rank: "S", factionTitle: { fr: "Oiseaux-moqueurs", en: "Megadere" },
        stats: [ { label: "Ad. d'Anomalie", value: "400+" }, { label: "Attaque", value: "2300+" }, { label: "Ma. d'Anomalie", value: "= 198" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Phaethon_Melody", set2: "Freedom_Blues", set1Name: "4pc Phaethon's Melody", set2Name: "+ 2pc Freedom Blues", note: { fr: "Non négociable. Indispensable pour récupérer +30 d'AP.", en: "Non-negotiable. Crucial to gain +30 Anomaly Proficiency." } },
            { tag: { fr: "Set 2 (100%)", en: "Set 2 (100%)" }, set1: "Phaethon_Melody", set2: "Chaos_Metal", set1Name: "4pc Phaethon's Melody", set2Name: "+ 2pc Chaos Metal", note: "" },
            { tag: { fr: "Set 3 (99.53%)", en: "Set 3 (99.53%)" }, set1: "Phaethon_Melody", set2: "Puffer_Electro", set1Name: "4pc Phaethon's Melody", set2Name: "+ 2pc Puffer Electro", note: "" }
        ],
        skills: [
            { name: "Ult", level: "12", icon: "Ultime.png" }, { name: "Assist", level: "12", icon: "Assist.png" }, { name: "Basic", level: "11", icon: "Attaque_basic.png" }, { name: "Ex", level: "11", icon: "Ex.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Maîtrise d'Anomalie" }, { slot: "5", label: "DGT Éther %" }, { slot: "4", label: "Adresse d'Anomalie" } ], sub: [ { label: "Adresse d'anomalie", highlight: true }, { label: "Attaque %", highlight: false }, { label: "Flat PEN", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Flight of Fancy", img: "W-Engine_Flight_of_Fancy.png" }, { tag: "Alt 4★ (93.06%)", name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" }, { tag: "Alt (91.12%)", name: "Electro-Lip Gloss", img: "W-Engine_Electro-Lip_Gloss.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Classique", en: "Classic" }, members: [ { img: "Vivian.png", color: "#f23c8a", initial: "V" }, { img: "Remielle.png", color: "#fba2d0", initial: "R" }, { img: "Promeia.png", color: "#3bbedb", initial: "P" } ] },
            { name: "TEAM 02", tag: { fr: "Jane Combo", en: "Jane Combo" }, members: [ { img: "Vivian.png", color: "#f23c8a", initial: "V" }, { img: "Jane.png", color: "#e8a838", initial: "J" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" } ] },
            { name: "TEAM 03", tag: { fr: "Flexible", en: "Flexible" }, members: [ { img: "Vivian.png", color: "#f23c8a", initial: "V" }, { img: "", color: "#52525b", role: "Agents<br>Anomalie" }, { img: "", color: "#52525b", role: "3ème<br>Agent" } ] }
        ]
    },
    "Yuzuha": {
        color: "#e8a838", element: "Physical", rank: "S", factionTitle: { fr: "Maison hantée", en: "Member of the Spook Shack" },
        stats: [ { label: "Attaque", value: "3000" }, { label: "Maitrise d'Anomalie", value: "171" }, { label: "Adresse d'Anomalie", value: "200-250+" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Moonlight_Lullaby", set2: "Phaethon_Melody", set1Name: "4pc Moonlight Lullaby", set2Name: "+ 2pc Phaethon's Melody", note: { fr: "Le set standard obligatoire pour appliquer les buffs d'équipe.", en: "The mandatory standard set to apply team-wide buffs." } },
            { tag: { fr: "Set 2 (100%)", en: "Set 2 (100%)" }, set1: "Astral_Voice", set2: "Phaethon_Melody", set1Name: "4pc Astral Voice", set2Name: "+ 2pc Phaethon's Melody", note: { fr: "À équiper uniquement si elle est jouée avec Sunna.", en: "Equip only if played alongside Sunna." } }
        ],
        skills: [
            { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ex", level: "10", icon: "Ex.png" }, { name: "Ult", level: "10", icon: "Ultime.png" }, { name: "Assist", level: "10", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Maîtrise d'Anomalie" }, { slot: "5", label: "Attaque %" }, { slot: "4", label: "Adresse d'Anomalie" } ], sub: [ { label: "Attaque %", highlight: true }, { label: "Adresse d'Anomalie", highlight: false }, { label: "Flat ATK", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Metanukimorphosis", img: "W-Engine_Metanukimorphosis.png" }, { tag: "Alt 5★ (102.07%)", name: "Thoughtbop", img: "W-Engine_Thoughtbop.png" }, { tag: "Alt 4★ (93.28%)", name: "Kaboom the Cannon", img: "W-Engine_Kaboom_the_Cannon.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Premium", members: [ { img: "Yuzuha.png", color: "#e8a838", initial: "Y" }, { img: "Aria.png", color: "#f23c8a", initial: "A" }, { img: "Velina.png", color: "#3bbedb", initial: "V" } ] },
            { name: "TEAM 02", tag: { fr: "Synergie", en: "Synergy" }, members: [ { img: "Yuzuha.png", color: "#e8a838", initial: "Y" }, { img: "Miyabi.png", color: "#3bbedb", initial: "M" }, { img: "Nangong Yu.png", color: "#f23c8a", initial: "N" } ] },
            { name: "TEAM 03", tag: { fr: "Flexible", en: "Flexible" }, members: [ { img: "Yuzuha.png", color: "#e8a838", initial: "Y" }, { img: "", color: "#52525b", role: "Agents<br>Anomalie" }, { img: "", color: "#52525b", role: "Agents<br>Anomalie" } ] }
        ]
    },
    "Seed": {
        color: "#3182eb", element: "Electric", rank: "S", factionTitle: { fr: "Escouade Obole", en: "Heavy Weapons Specialist" },
        stats: [ { label: "Taux Crit", value: "= 85%" }, { label: "Attaque", value: "2800" }, { label: "Dégât Crit", value: "120% - 150%+" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Puffer_Electro", set2: "Branch_Blade_Song", set1Name: "4pc Puffer Electro", set2Name: "+ 2pc Branch and Blade Song", note: { fr: "Best-in-Slot si tu la joues dans une équipe avec Dialyn.", en: "Best-in-Slot if played in a team with Dialyn." } },
            { tag: { fr: "Set 2 (100%)", en: "Set 2 (100%)" }, set1: "Puffer_Electro", set2: "Woodpecker_Electro", set1Name: "4pc Puffer Electro", set2Name: "+ 2pc Woodpecker Electro", note: "" },
            { tag: { fr: "Set 3 (98.03%)", en: "Set 3 (98.03%)" }, set1: "Dawn_Bloom", set2: "Branch_Blade_Song", set1Name: "4pc Dawn's Bloom", set2Name: "+ 2pc Branch and Blade Song", note: { fr: "Son meilleur choix si tu la joues sans Dialyn.", en: "Her best option if played without Dialyn." } }
        ],
        skills: [
            { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ult", level: "12", icon: "Ultime.png" }, { name: "Ex", level: "11", icon: "Ex.png" }, { name: "Assist", level: "11", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Attaque" }, { slot: "5", label: "PEN Ratio" }, { slot: "4", label: "Taux Crit" } ], sub: [ { label: "Taux Crit", highlight: true }, { label: "Dégât Crit", highlight: false }, { label: "Attaque %", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Cordis Germina", img: "W-Engine_Cordis_Germina.png" }, { tag: "Alt 5★ (91.15%)", name: "Zanshin Herb Case", img: "W-Engine_Zanshin_Herb_Case.png" }, { tag: "Alt 4★ (90.52%)", name: "Marcato Desire", img: "Marcato_Desire.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Synergie", en: "Synergy" }, members: [ { img: "Seed.png", color: "#3182eb", initial: "S" }, { img: "Cissia.png", color: "#3182eb", initial: "C" }, { img: "Sunna.png", color: "#e8a838", initial: "S" } ] },
            { name: "TEAM 02", tag: { fr: "Double Élec", en: "Dual Shock" }, members: [ { img: "Seed.png", color: "#3182eb", initial: "S" }, { img: "Banyue.png", color: "#f05432", initial: "B" }, { img: "Dialyn.png", color: "#e8a838", initial: "D" } ] },
            { name: "TEAM 03", tag: { fr: "Flexible", en: "Flexible" }, members: [ { img: "Seed.png", color: "#3182eb", initial: "S" }, { img: "", color: "#52525b", role: "Agents<br>Attaques" }, { img: "", color: "#52525b", role: "Agents<br>Support" } ] }
        ]
    },
    "Remielle": {
        color: "#fba2d0", element: "Lumiflux", rank: "S", factionTitle: { fr: "Entente de Dayat", en: "Void Hunter" },
        stats: [ { label: "Attaque", value: "4000" }, { label: "Adre. Anomalie", value: "400" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Feathered_Fate", set2: "Freedom_Blues", set1Name: "4pc Fated Feathers", set2Name: "+ 2pc Freedom Blues", note: { fr: "Temps d'activité moyen (Uptime) : 100%", en: "Average uptime: 100%" } },
            { tag: { fr: "Set 2 (100%)", en: "Set 2 (100%)" }, set1: "Feathered_Fate", set2: "Chaos_Jazz", set1Name: "4pc Fated Feathers", set2Name: "+ 2pc Chaos Jazz", note: "" },
            { tag: { fr: "Set 3 (99.20%)", en: "Set 3 (99.20%)" }, set1: "Feathered_Fate", set2: "Astral_Voice", set1Name: "4pc Fated Feathers", set2Name: "+ 2pc Astral Voice", note: { fr: "Okay si cela t'aide à atteindre les 4000 d'attaque.", en: "Decent if it helps you reach the 4000 ATK threshold." } }
        ],
        skills: [
            { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Assist", level: "12", icon: "Assist.png" }, { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "12", icon: "Ultime.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Attaque" }, { slot: "5", label: "Attaque" }, { slot: "4", label: "Anomalie" } ], sub: [ { label: "Attaque", highlight: true }, { label: "Anomalie", highlight: false }, { label: "Flat PEN / Flat ATK", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Ode of Resurrected Wings", img: "W-Engine_Ode_of_Resurrected_Wings.png" }, { tag: "Alt F2P", name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" }, { tag: "Alt Anomalie", name: "Timeweaver", img: "W-Engine_Timeweaver.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Double Anomalie", en: "Dual Anomaly" }, members: [ { img: "Remielle.png", color: "#fba2d0", initial: "R" }, { img: "", color: "#52525b", role: "Agents<br>Anomalies" }, { img: "", color: "#52525b", role: "Agents<br>Anomalies" } ] },
            { name: "TEAM 02", tag: { fr: "Flexible", en: "Flexible" }, members: [ { img: "Remielle.png", color: "#fba2d0", initial: "R" }, { img: "Burnice.png", color: "#f05432", initial: "B" }, { img: "Velina.png", color: "#3bbedb", initial: "V" } ] },
            { name: "TEAM 03", tag: { fr: "Alternative", en: "Alternative" }, members: [ { img: "Remielle.png", color: "#fba2d0", initial: "R" }, { img: "Promeia.png", color: "#3bbedb", initial: "P" }, { img: "Vivian.png", color: "#f23c8a", initial: "V" } ] }
        ]
    },
    "Velina": {
        color: "#3bbedb", element: "Wind", rank: "S", factionTitle: { fr: "Département de stratégie externe", en: "Administrative Director of the E.S.D" },
        stats: [ { label: "Adresse d'Anomalie", value: "356" }, { label: "Attaque", value: "2500" }, { label: "Energie Regen", value: "2.88" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Wuthering_Salon", set2: "Moonlight_Lullaby", set1Name: "4pc Turmoil's Salon", set2Name: "+ 2pc Moonlight Lullaby", note: { fr: "Efficacité avec Promeia + Yuzuha : 100% (Énergie Regen +6%).", en: "Efficiency with Promeia + Yuzuha: 100% (Energy Regen +6%)." } },
            { tag: { fr: "Set 2 (97.4%)", en: "Set 2 (97.4%)" }, set1: "Wuthering_Salon", set2: "Phaethon_Melody", set1Name: "4pc Turmoil's Salon", set2Name: "+ 2pc Phaethon's Melody", note: "" },
            { tag: { fr: "Set 3 (97.39%)", en: "Set 3 (97.39%)" }, set1: "Wuthering_Salon", set2: "Chaos_Jazz", set1Name: "4pc Turmoil's Salon", set2Name: "+ 2pc Chaos Jazz", note: "" }
        ],
        skills: [
            { name: "Ex", level: "", icon: "Ex.png" }, { name: "Assist", level: "", icon: "Assist.png" }, { name: "Ult", level: "", icon: "Ultime.png" }, { name: "Basic", level: "", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Énergie Regen" }, { slot: "5", label: "Wind DMG %" }, { slot: "4", label: "Adresse d'Anomalie" } ], sub: [ { label: "Adresse d'Anomalie", highlight: true }, { label: "ATK %", highlight: false }, { label: "Flat PEN = Flat ATK", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Joyau Dore", img: "W-Engine_Joyau_Dore.png" }, { tag: "Alt 5★ (90.88%)", name: "Serpentine Seeker", img: "W-Engine_Serpentine_Seeker.png" }, { tag: "Alt 4★ (87.16%)", name: "Kaboom the Cannon", img: "W-Engine_Kaboom_the_Cannon.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Hugo", members: [ { img: "Velina.png", color: "#3bbedb", initial: "V" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" }, { img: "Promeia.png", color: "#3bbedb", initial: "P" } ] },
            { name: "TEAM 02", tag: "Ellen", members: [ { img: "Velina.png", color: "#3bbedb", initial: "V" }, { img: "Jane.png", color: "#e8a838", initial: "J" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" } ] },
            { name: "TEAM 03", tag: { fr: "Débutant", en: "Starter" }, members: [ { img: "Velina.png", color: "#3bbedb", initial: "V" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" }, { img: "", color: "#52525b", role: "Agents<br>Anomalies" } ] }
        ]
    },
    "Cissia": {
        color: "#3182eb", element: "Electric", rank: "S", factionTitle: { fr: "Division de l'Ordre urbain", en: "Metropolitan Order Division - N.E.P.S." },
        stats: [ { label: "Taux Crit", value: "Jusqu'à 100% IG" }, { label: "Dégât Crit", value: "Plus possible" }, { label: "Attaque", value: "Plus possible" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Astral_Voice", set2: "Swing_Jazz", set1Name: "4pc Astral Voice", set2Name: "+ 2pc Swing Jazz", note: "" },
            { tag: "Set 2", set1: "Dawn_Bloom", set2: "Branch_Blade_Song", set1Name: "4pc Dawn's Bloom", set2Name: "+ 2pc Branch and Blade Song", note: "" },
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
            { name: "TEAM 02", tag: { fr: "Alternative", en: "Alternative" }, members: [ { img: "Cissia.png", color: "#3182eb", initial: "C" }, { img: "Seed.png", color: "#3182eb", initial: "S" }, { img: "Sunna.png", color: "#e8a838", initial: "S" } ] },
            { name: "TEAM 03", tag: { fr: "Flexible", en: "Flexible" }, members: [ { img: "Cissia.png", color: "#3182eb", initial: "C" }, { img: "", color: "#52525b", role: "Agent<br>Support" }, { img: "", color: "#52525b", role: "Agent<br>Stun" } ] }
        ]
    },
    "Banyue": {
        color: "#f05432", element: "Fire", rank: "S", factionTitle: "Autorité de conformité Krampus",
        stats: [ { label: "DGT CRIT", value: "≥ 160 %" }, { label: "Taux Crit", value: "≥ 60 %" }, { label: "Force transperçante", value: "≥ 2400" } ],
        discs: [
            { tag: { fr: "Stun Build 👑", en: "Stun Build 👑" }, set1: "Woodpecker_Electro", set2: "Hormone_Punk", set1Name: "4pc Woodpecker Electro", set2Name: "+ 2pc Hormone Punk", note: "" },
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
            { name: "TEAM 02", tag: { fr: "Alternative", en: "Alternative" }, members: [ { img: "Banyue.png", color: "#f05432", initial: "B" }, { img: "Pan Yinhu.png", color: "#e8a838", initial: "P" }, { img: "Ju Fufu.png", color: "#f05432", initial: "J" } ] },
            { name: "TEAM 03", tag: "Free To Play", members: [ { img: "Banyue.png", color: "#f05432", initial: "B" }, { img: "Pan Yinhu.png", color: "#e8a838", initial: "P" }, { img: "Pulchra.png", color: "#e8a838", initial: "P" } ] }
        ]
    },
    "Nicole": {
        color: "#f23c8a", element: "Ether", rank: "A", factionTitle: { fr: "Lièvres rusés", en: "Cunning Hares" },
        stats: [ { label: "Maîtrise d'Anomalie", value: "117+" }, { label: "Adresse d'Anomalie", value: "320 à 350+" }, { label: "Energie", value: "2.6 à 3" } ],
        discs: [
            { tag: { fr: "Support 👑", en: "Support 👑" }, set1: "Swing_Jazz", set2: "Freedom_Blues", set1Name: "4pc Swing Jazz", set2Name: "+ 2pc Freedom Blues", note: "" },
            { tag: { fr: "Build Anomalie", en: "Anomaly Build" }, set1: "Freedom_Blues", set2: "Swing_Jazz", set1Name: "4pc Freedom Blues", set2Name: "+ 2pc Swing Jazz", note: "" },
            { tag: { fr: "Support Build II", en: "Support Build II" }, set1: "Astral_Voice", set2: "Swing_Jazz", set1Name: "4pc Astral Voice", set2Name: "+ 2pc Swing Jazz", note: "" }
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
            { name: "TEAM 03", tag: { fr: "Débutant", en: "Starter" }, members: [ { img: "Nicole.png", color: "#f23c8a", initial: "N" }, { img: "Corin.png", color: "#e8a838", initial: "C" }, { img: "Billy.png", color: "#e8a838", initial: "B" } ] }
        ]
    },
    "Lycaon": {
        color: "#3bbedb", element: "Ice", rank: "S", factionTitle: { fr: "Société d'entretien Victoria", en: "Victoria Housekeeping" },
        stats: [ { label: "Impact", value: "180 à 194+" }, { label: "Attaque", value: "≈ 2200" }, { label: "Taux Crit", value: "≈ 60%" } ],
        discs: [
            { tag: { fr: "Stun Build 👑", en: "Stun Build 👑" }, set1: "King_of_the_Summit", set2: "Swing_Jazz", set1Name: "4pc King of the Summit", set2Name: "+ 2pc Swing Jazz", note: "" },
            { tag: "Stun Build II", set1: "King_of_the_Summit", set2: "Polar_Metal", set1Name: "4pc King of the Summit", set2Name: "+ 2pc Polar Metal", note: "" },
            { tag: "Crit Build", set1: "King_of_the_Summit", set2: "Woodpecker_Electro", set1Name: "4pc King of the Summit", set2Name: "+ 2pc Woodpecker Electro", note: "" }
        ],
        skills: [
            { name: "Basic", level: "", icon: "Attaque_basic.png" }, { name: "Ex", level: "", icon: "Ex.png" }, { name: "Ult", level: "", icon: "Ultime.png" }, { name: "Assist", level: "", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Impact" }, { slot: "5", label: "Ice DMG" }, { slot: "4", label: "Crit Rate / DMG" } ], sub: [ { label: "Crit Rate", highlight: true }, { label: "Crit DMG", highlight: false }, { label: "ATK %", highlight: false }, { label: "PEN", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "The Restrained", img: "W-Engine_The_Restrained.png" }, { tag: "Moteur A", name: "Precious Fossilized Core", img: "W-Engine_Precious_Fossilized.png" }, { tag: "Moteur A", name: "Six Shooter", img: "W-Engine_Six_Shooter.png" }, { tag: "Moteur B", name: "Vortex - Arrow", img: "W-Engine_Vortex_-_Arrow.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Hugo", members: [ { img: "Lycaon.png", color: "#3bbedb", initial: "L" }, { img: "Lighter.png", color: "#f05432", initial: "L" }, { img: "Hugo.png", color: "#3bbedb", initial: "H" } ] },
            { name: "TEAM 02", tag: "Ellen", members: [ { img: "Lycaon.png", color: "#3bbedb", initial: "L" }, { img: "Soukaku.png", color: "#3bbedb", initial: "S" }, { img: "Ellen.png", color: "#3bbedb", initial: "E" } ] },
            { name: "TEAM 03", tag: { fr: "Débutant", en: "Starter" }, members: [ { img: "Lycaon.png", color: "#3bbedb", initial: "L" }, { img: "Soukaku.png", color: "#3bbedb", initial: "S" }, { img: "Corin.png", color: "#e8a838", initial: "C" } ] }
        ]
    },
    "Koleda": {
        color: "#f05432", element: "Fire", rank: "S", factionTitle: { fr: "Usines Belobog", en: "Belobog Heavy Industries" },
        stats: [ { label: "Impact", value: "≥ 180" }, { label: "Taux Crit", value: "≥ 50 %" }, { label: "Attaque", value: "≈ 2000" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Astral_Voice", set2: "Moonlight_Lullaby", set1Name: "4pc Astral Voice", set2Name: "+ 2pc Moonlight Lullaby", note: { fr: "Configuration axée sur le soutien d'équipe et la régénération d'énergie.", en: "Build focused on team utility and energy regen." } },
            { tag: "Set 2", set1: "Shockstar_Disco", set2: "Moonlight_Lullaby", set1Name: "4pc Shockstar Disco", set2Name: "+ 2pc Moonlight Lullaby", note: { fr: "Optimise l'impact brut et l'étourdissement rapide des cibles.", en: "Optimizes raw impact and fast daze buildup on targets." } },
            { tag: "Set 3", set1: "King_of_the_Summit", set2: "Shockstar_Disco", set1Name: "4pc King of the Summit", set2Name: "+ 2pc Shockstar Disco", note: { fr: "Renforce les dégâts critiques d'équipe via les attaques EX et l'enchaînement.", en: "Boosts team CRIT DMG through EX Special attacks and Chain attacks." } }
        ],
        skills: [
            { name: "Core", level: "F", icon: "Core.webp" }, { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "12", icon: "Ultime.png" }, { name: "Assist", level: "12", icon: "Assist.png" }, { name: "Dodge", level: "10", icon: "Esquive.png" }, { name: "Basic", level: "9", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Impact" }, { slot: "5", label: "ATK% / PEN Ratio" }, { slot: "4", label: "Crit Rate" } ], sub: [ { label: "Crit Rate (min 50% avec KOTS)", highlight: true }, { label: "Crit DMG = ATK%", highlight: false }, { label: "Flat PEN", highlight: false }, { label: "Flat ATK", highlight: false } ] },
        engines: [
            { tag: "Signature 5★", name: "Hellfire Gears", img: "W-Engine_Hellfire_Gears.png" }, { tag: "Alternative 5★", name: "The Restrained", img: "W-Engine_The_Restrained.png" }, { tag: "Alternative A", name: "Precious Fossilized Core", img: "W-Engine_Precious_Fossilized.png" }, { tag: "Alternative A", name: "Six Shooter", img: "W-Engine_Six_Shooter.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Rupture Yunkui", en: "Yunkui Rupture" }, members: [ { img: "Koleda.png", color: "#f05432", initial: "K" }, { img: "Yixuan.png", color: "#e8a838", initial: "Y" }, { img: "Lucia.png", color: "#f23c8a", initial: "L" } ] },
            { name: "TEAM 02", tag: { fr: "Armurier Élec", en: "Electro Armorer" }, members: [ { img: "Koleda.png", color: "#f05432", initial: "K" }, { img: "Claret.png", color: "#3182eb", initial: "C" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] },
            { name: "TEAM 03", tag: { fr: "Double Stun", en: "Dual Stun" }, members: [ { img: "Koleda.png", color: "#f05432", initial: "K" }, { img: "Hugo.png", color: "#3bbedb", initial: "H" }, { img: "Lighter.png", color: "#f05432", initial: "L" } ] }
        ]
    },
    "Trigger": {
        color: "#3182eb", element: "Electric", rank: "S", factionTitle: { fr: "Escouade Obole", en: "Sniper" },
        stats: [ { label: "Taux Crit", value: "90%" }, { label: "Impact", value: "162 - 186 +" }, { label: "Attaque", value: "1700 - 2200+" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "King_of_the_Summit", set2: "Woodpecker_Electro", set1Name: "4pc King of the Summit", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Le meilleur choix absolu pour maximiser ses dégâts et son impact sur l'équipe. Le choix le plus pratique pour atteindre le palier des 90% de Taux CRIT.", en: "The absolute best choice to maximize personal damage and team impact. Most practical pick to hit the 90% CRIT Rate threshold." } },
            { tag: "Set 2", set1: "Shadow_Harmony", set2: "King_of_the_Summit", set1Name: "4pc Shadow Harmony", set2Name: "+ 2pc King of the Summit", note: { fr: "La meilleure alternative sans son Moteur Signature pour compenser le manque de Taux CRIT et se rapprocher du cap des 90%.", en: "Best alternative without her Signature W-Engine to compensate for missing CRIT Rate and reach the 90% cap." } },
            { tag: "Set 3", set1: "Astral_Voice", set2: "Woodpecker_Electro", set1Name: "4pc Astral Voice", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Très performant si tu maîtrises la mécanique de double switch assist, ou si elle est jouée aux côtés d'Astra Yao.", en: "Highly effective if mastering double switch assist mechanics, or when paired with Astra Yao." } }
        ],
        skills: [
            { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ex", level: "10", icon: "Ex.png" }, { name: "Ult", level: "10", icon: "Ultime.png" }, { name: "Assist", level: "7", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Impact %" }, { slot: "5", label: "DGT Électrique %" }, { slot: "4", label: "Taux CRIT" } ], sub: [ { label: "Taux CRIT", highlight: true }, { label: "ATQ %", highlight: false }, { label: "DGT CRIT", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Spectral Gaze", img: "W-Engine_Spectral_Gaze.png" }, { tag: "Alternatives 5★", name: "Blazing Laurel", img: "W-Engine_Blazing_Laurel.png" }, { tag: "Alternatives 4★ F2P", name: "Precious Fossilized Core", img: "W-Engine_Precious_Fossilized.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Premium", members: [ { img: "Trigger.png", color: "#3182eb", initial: "T" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Astra.png", color: "#f23c8a", initial: "A" } ] },
            { name: "TEAM 02", tag: { fr: "Double Élec", en: "Dual Shock" }, members: [ { img: "Trigger.png", color: "#3182eb", initial: "T" }, { img: "Seed.png", color: "#3182eb", initial: "S" }, { img: "Nekomata.png", color: "#e8a838", initial: "N" } ] },
            { name: "TEAM 03", tag: { fr: "Flexible", en: "Flexible" }, members: [ { img: "Trigger.png", color: "#3182eb", initial: "T" }, { img: "Hugo.png", color: "#3bbedb", initial: "H" }, { img: "", color: "#52525b", role: "N'importe quel<br>Support" } ] }
        ]
    },
    "Miyabi": {
        color: "#3bbedb", element: "Frost", elementIcon: "Frost.png", rank: "S", factionTitle: { fr: "Section 6", en: "Section 6" },
        stats: [ { label: "Taux CRIT", value: "75-95%" }, { label: "Dégat CRIT", value: "150-190%" }, { label: "Attaque", value: "2500 - 3600+" } ],
        discs: [
            { tag: { fr: "Meilleur Set 👑", en: "Best Set 👑" }, set1: "Branch_Blade_Song", set2: "Woodpecker_Electro", set1Name: "4pc Branch and Blade Song", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Branch & Blade Song est le meilleur disque pour Miyabi car il lui donne du DGT CRIT et augmente ses propres DGT quand un membre de l'équipe applique Gel. Woodpecker Electro est son choix de prédilection en 2 pièces puisqu'elle a besoin de Taux CRIT.", en: "Branch & Blade Song is the best disc set for Miyabi as it grants CRIT DMG and increases her own DMG when an ally inflicts Freeze. Woodpecker Electro is her ideal 2pc choice to secure essential CRIT Rate." } },
            { tag: { fr: "Alternative", en: "Alternative" }, set1: "Branch_Blade_Song", set2: "Polar_Metal", set1Name: "4pc Branch and Blade Song", set2Name: "+ 2pc Polar Metal", note: { fr: "Si vous avez déjà beaucoup de Taux CRIT sur Miyabi, vous pouvez envisager Polar Metal comme alternative pour obtenir plus de DGT Glace.", en: "If you already have high CRIT Rate on Miyabi, consider Polar Metal as an alternative for extra Ice DMG." } }
        ],
        skills: [
            { name: "Core", level: "12", icon: "Core.webp" }, { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ult", level: "11", icon: "Ultime.png" }, { name: "Ex", level: "11", icon: "Ex.png" }, { name: "Assist", level: "8", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Attaque %" }, { slot: "5", label: "DGT Glace %" }, { slot: "4", label: "Taux CRIT" } ], sub: [ { label: "DGT CRIT", highlight: true }, { label: "Taux CRIT", highlight: false }, { label: "ATQ %", highlight: false }, { label: "PEN", highlight: false } ] },
        engines: [
            { tag: "Meilleur Moteur", name: "Hailstorm Shrine", img: "W-Engine_Hailstorm_Shrine.png" }, { tag: "Alternative 5★", name: "Fusion Compiler", img: "W-Engine_Fusion_Compiler.png" }, { tag: "Alternative BP", name: "Electro-Lip Gloss", img: "W-Engine_Electro-Lip_Gloss.png" }, { tag: "Alternative", name: "Roaring Ride", img: "W-Engine_Roaring_Ride.png" }, { tag: "F2P", name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Meta Shiyu 👑", en: "Shiyu Meta 👑" }, members: [ { img: "Miyabi.png", color: "#3bbedb", initial: "M" }, { img: "Nangong Yu.png", color: "#f23c8a", initial: "NY" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" } ] },
            { name: "TEAM 02", tag: { fr: "Désordre Éther", en: "Ether Disorder" }, members: [ { img: "Miyabi.png", color: "#3bbedb", initial: "M" }, { img: "Vivian.png", color: "#f23c8a", initial: "V" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" } ] },
            { name: "TEAM 03", tag: { fr: "Duo Anomalie", en: "Dual Anomaly" }, members: [ { img: "Miyabi.png", color: "#3bbedb", initial: "M" }, { img: "Yanagi.png", color: "#3182eb", initial: "Y" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" } ] }
        ]
    },
    "Anby": {
        color: "#3182eb", element: "Electric", rank: "A", factionTitle: { fr: "Lièvres Rusés", en: "Cunning Hares" },
        stats: [ { label: "Impact", value: "≥ 189" }, { label: "Taux Crit", value: "≥ 50%" }, { label: "Attaque", value: "≥ 2400" } ],
        discs: [
            { tag: { fr: "Impact Build 👑", en: "Impact Build 👑" }, set1: "Shockstar_Disco", set2: "Swing_Jazz", set1Name: "4pc Shockstar Disco", set2Name: "+ 2pc Swing Jazz", note: { fr: "Shockstar Disco augmente l'Impact d'Anby et permet à ses Attaques de Base d'infliger plus de Choc. Le 2-pièces Swing Jazz augmente sa Réc. d'Énergie pour lui permettre d'utiliser plus d'EX Spéciaux.", en: "Shockstar Disco increases Anby's Impact and allows Basic Attacks to inflict more Daze. 2pc Swing Jazz provides Energy Regen to fuel frequent EX Specials." } },
            { tag: "Impact Build II", set1: "King_of_the_Summit", set2: "Swing_Jazz", set1Name: "4pc King of the Summit", set2Name: "+ 2pc Swing Jazz", note: { fr: "King of the Summit offre un buff de DGT CRIT à toute l'équipe lorsqu'Anby utilise un EX Spécial ou un Enchaînement.", en: "King of the Summit grants a team-wide CRIT DMG buff whenever Anby lands an EX Special or Chain Attack." } }
        ],
        skills: [
            { name: "Core", level: "12", icon: "Core.webp" }, { name: "Basic", level: "12", icon: "Attaque_basic.png" }, { name: "Ex", level: "11", icon: "Ex.png" }, { name: "Ult", level: "10", icon: "Ultime.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Impact %" }, { slot: "5", label: "DGT Électrique %" }, { slot: "4", label: "Taux CRIT / DGT CRIT" } ], sub: [ { label: "Taux CRIT / DGT CRIT", highlight: true }, { label: "ATQ %", highlight: false }, { label: "ATQ Flat", highlight: false } ] },
        engines: [
            { tag: "Meilleur Moteur", name: "The Restrained", img: "W-Engine_The_Restrained.png" }, { tag: "Alternative S", name: "Hellfire Gears", img: "W-Engine_Hellfire_Gears.png" }, { tag: "Alternative A", name: "Steam Oven", img: "W-Engine_Steam_Oven.png" }, { tag: "Alternative A", name: "Precious Fossilized Core", img: "W-Engine_Precious_Fossilized.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Mono-Électrique", en: "Mono-Electric" }, members: [ { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Astra.png", color: "#f23c8a", initial: "A" }, { img: "Harumasa.png", color: "#3182eb", initial: "H" } ] },
            { name: "TEAM 02", tag: { fr: "Team F2P", en: "F2P Team" }, members: [ { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" }, { img: "Billy.png", color: "#e8a838", initial: "B" } ] },
            { name: "TEAM 03", tag: { fr: "Flexible", en: "Flexible" }, members: [ { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "", color: "#52525b", role: "Support" }, { img: "", color: "#52525b", role: "DPS" } ] }
        ]
    },
    "Corin": {
        color: "#e8a838", element: "Physical", rank: "A", factionTitle: { fr: "Société d'entretien Victoria", en: "Victoria Housekeeping" },
        stats: [ { label: "Taux Crit", value: "≥ 80%" }, { label: "Dégât Crit", value: "≥ 160%" }, { label: "Attaque", value: "≥ 3000" } ],
        discs: [
            { tag: { fr: "Physical DPS Build 👑", en: "Physical DPS Build 👑" }, set1: "Fanged_Metal", set2: "Woodpecker_Electro", set1Name: "4pc Fanged Metal", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Fanged Metal augmente les DGT Physiques de Corin et ses dégâts contre les ennemis sous Assaut. Le 2-pc Woodpecker augmente son Taux CRIT de 8%.", en: "Fanged Metal boosts Corin's Physical DMG and damage dealt against Assaulted targets. 2pc Woodpecker provides a flat +8% CRIT Rate." } },
            { tag: { fr: "Alternative", en: "Alternative" }, set1: "Puffer_Electro", set2: "Woodpecker_Electro", set1Name: "4pc Puffer Electro", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Excellente alternative puisque Corin inflige énormément de dégâts avec son Ultime. Cela augmente aussi son ATK après l'Ultime.", en: "Excellent alternative as Corin dishes out huge burst damage with her Ultimate. Also buffs her ATK following her Ultimate." } }
        ],
        skills: [
            { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "11", icon: "Ultime.png" }, { name: "Core", level: "10", icon: "Core.webp" }, { name: "Basic", level: "8", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Attaque %" }, { slot: "5", label: "DGT Physique %" }, { slot: "4", label: "Taux CRIT / DGT CRIT" } ], sub: [ { label: "DGT CRIT", highlight: true }, { label: "Taux CRIT", highlight: false }, { label: "ATQ %", highlight: false } ] },
        engines: [
            { tag: "Meilleur Moteur", name: "Housekeeper", img: "W-Engine_Housekeeper.png" }, { tag: "Alternative 5★", name: "Steel Cushion", img: "W-Engine_Steel_Cushion.png" }, { tag: "Alternative BP", name: "Cannon Rotor", img: "W-Engine_Cannon_Rotor.png" }, { tag: "Alternative F2P", name: "Lunar - Noviluna", img: "[Lunar] Noviluna.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Team Premium", en: "Premium Team" }, members: [ { img: "Corin.png", color: "#e8a838", initial: "C" }, { img: "Dialyn.png", color: "#e8a838", initial: "D" }, { img: "Caesar.png", color: "#e8a838", initial: "C" } ] },
            { name: "TEAM 02", tag: { fr: "Team F2P", en: "F2P Team" }, members: [ { img: "Corin.png", color: "#e8a838", initial: "C" }, { img: "Billy.png", color: "#e8a838", initial: "B" }, { img: "Anby.png", color: "#3182eb", initial: "A" } ] },
            { name: "TEAM 03", tag: { fr: "Flexible", en: "Flexible" }, members: [ { img: "Corin.png", color: "#e8a838", initial: "C" }, { img: "", color: "#52525b", role: "Agent<br>Stun" }, { img: "", color: "#52525b", role: "Agent<br>Support" } ] }
        ]
    },
    "Soldier 0 Anby": {
        color: "#3182eb", element: "Electric", rank: "S", factionTitle: { fr: "Forces de défense - Escouade Argent", en: "Silver Squad" },
        stats: [ { label: "Taux Crit", value: "≥ 60 %" }, { label: "Dégât Crit", value: "≥ 170 %" }, { label: "Attaque", value: "≥ 2800" } ],
        discs: [
            { tag: { fr: "DPS Build 👑", en: "DPS Build 👑" }, set1: "Shadow_Harmony", set2: "Woodpecker_Electro", set1Name: "4pc Shadow Harmony", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Shadow of Harmony est le meilleur set de Soldier 0 Anby puisqu'il augmente les DGT de son Aftershock et son Taux CRIT. Utilisez un 2-pc Woodpecker Electro pour obtenir encore plus de Taux CRIT.", en: "Shadow Harmony is Soldier 0 Anby's best set, boosting Aftershock DMG and CRIT Rate. Run 2pc Woodpecker Electro to push her CRIT Rate further." } },
            { tag: { fr: "Alternative", en: "Alternative" }, set1: "Shadow_Harmony", set2: "Thunder_Metal", set1Name: "4pc Shadow Harmony", set2Name: "+ 2pc Thunder Metal", note: { fr: "Un 2-pc Thunder Metal peut être envisagé si Soldier 0 Anby possède déjà énormément de Taux CRIT.", en: "A 2pc Thunder Metal can be considered if Soldier 0 Anby already has abundant CRIT Rate." } }
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
            { name: "TEAM 02", tag: { fr: "Team F2P", en: "F2P Team" }, members: [ { img: "Soldier 0 Anby.png", color: "#3182eb", initial: "S0A" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" } ] },
            { name: "TEAM 03", tag: { fr: "Alternative", en: "Alternative" }, members: [ { img: "Soldier 0 Anby.png", color: "#3182eb", initial: "S0A" }, { img: "Pulchra.png", color: "#e8a838", initial: "P" }, { img: "", color: "#52525b", role: "Support" } ] }
        ]
    },
    "Zhu Yuan": {
        color: "#f23c8a", element: "Ether", rank: "S", factionTitle: { fr: "Division de l'Ordre urbain", en: "Public Security" },
        stats: [ { label: "DGT CRIT", value: "≥ 250 %" }, { label: "Taux Crit", value: "≥ 44 %" }, { label: "Attaque", value: "≥ 2700" } ],
        discs: [
            { tag: { fr: "Set 1 👑", en: "Set 1 👑" }, set1: "Woodpecker_Electro", set2: "Chaotic_Metal", set1Name: "4pc Woodpecker Electro", set2Name: "+ 2pc Chaos Metal", note: "" },
            { tag: "Set 2", set1: "Woodpecker_Electro", set2: "Puffer_Electro", set1Name: "4pc Woodpecker Electro", set2Name: "+ 2pc Puffer Electro", note: "" },
            { tag: "Set 3", set1: "Chaotic_Metal", set2: "Woodpecker_Electro", set1Name: "4pc Chaos Metal", set2Name: "+ 2pc Woodpecker Electro", note: "" }
        ],
        skills: [
            { name: "Core", level: "", icon: "Core.webp" }, { name: "Ex", level: "", icon: "Ex.png" }, { name: "Ult", level: "", icon: "Ultime.png" }, { name: "Basic", level: "", icon: "Attaque_basic.png" }, { name: "Assist", level: "", icon: "Assist.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "ATQ" }, { slot: "5", label: "Ether DMG" }, { slot: "4", label: "TC / DC" } ], sub: [ { label: "TC / DC", highlight: true }, { label: "ATQ %", highlight: false } ] },
        engines: [
            { tag: "Moteur S", name: "Riot Suppressor Mark VI", img: "W-Engine_Riot_Suppressor_Mark_VI.png" }, { tag: "Moteur S", name: "The Brimstone", img: "W-Engine_The_Brimstone.png" }, { tag: "Moteur A", name: "Cannon Rotor", img: "W-Engine_Cannon_Rotor.png" }, { tag: "Moteur A", name: "Starlight Engine", img: "Starlight_Engine.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Premium", members: [ { img: "Zhu Yuan.png", color: "#f23c8a", initial: "ZY" }, { img: "Qingyi.png", color: "#3182eb", initial: "Q" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" } ] },
            { name: "TEAM 02", tag: { fr: "Alternative", en: "Alternative" }, members: [ { img: "Zhu Yuan.png", color: "#f23c8a", initial: "ZY" }, { img: "Trigger.png", color: "#3182eb", initial: "T" }, { img: "Astra.png", color: "#f23c8a", initial: "A" } ] },
            { name: "TEAM 03", tag: "Free To Play", members: [ { img: "Zhu Yuan.png", color: "#f23c8a", initial: "ZY" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" } ] }
        ]
    },
    "Lucy": {
        color: "#f05432", element: "Fire", rank: "A", factionTitle: { fr: "Fils de Calydon", en: "Sons of Calydon" },
        stats: [ { label: "Taux Crit", value: "≈ 60.2 %" }, { label: "Dégât Crit", value: "≈ 157.2 %" }, { label: "Attaque", value: "2725" } ],
        discs: [
            { tag: { fr: "Support 👑", en: "Support 👑" }, set1: "Swing_Jazz", set2: "Woodpecker_Electro", set1Name: "4pc Swing Jazz", set2Name: "+ 2pc Woodpecker Electro", note: "" },
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
            { name: "TEAM 01", tag: { fr: "Équipe Rupture", en: "Rupture Team" }, members: [ { img: "Lucia.png", color: "#f23c8a", initial: "L" }, { img: "Pan Yinhu.png", color: "#e8a838", initial: "P" }, { img: "Yixuan.png", color: "#e8a838", initial: "Y" } ] },
            { name: "TEAM 02", tag: { fr: "Équipe Anomalie", en: "Anomaly Team" }, members: [ { img: "Caesar.png", color: "#e8a838", initial: "C" }, { img: "Burnice.png", color: "#f05432", initial: "B" }, { img: "Yanagi.png", color: "#3182eb", initial: "Y" } ] },
            { name: "TEAM 03", tag: { fr: "Team débutant", en: "Starter Team" }, members: [ { img: "Lighter.png", color: "#f05432", initial: "L" }, { img: "Koleda.png", color: "#f05432", initial: "K" }, { img: "Ben.png", color: "#f05432", initial: "B" } ] }
        ]
    },
    "Ben": {
        color: "#f05432", element: "Fire", rank: "A", factionTitle: { fr: "Usines Belobog", en: "Belobog Heavy Industries" },
        stats: [ { label: "Energie Regen", value: "≥ 2.8" }, { label: "Defense", value: "≥ 2013" }, { label: "Attaque", value: "≥ 3657" } ],
        discs: [
            { tag: { fr: "Defense Build 👑", en: "Defense Build 👑" }, set1: "Swing_Jazz", set2: "Soul_Rock", set1Name: "4pc Swing Jazz", set2Name: "+ 2pc Soul Rock", note: { fr: "Swing Jazz augmente la Réc. d'Énergie de Ben et lui permet de buffer les DGT de l'équipe via son Enchaînement. Complétez avec Soul Rock pour augmenter sa DÉF.", en: "Swing Jazz boosts Ben's Energy Regen and buffs squad DMG on Chain Attack. Pair with Soul Rock to maximize his DEF." } },
            { tag: { fr: "Alternative (DPS)", en: "Alternative (DPS)" }, set1: "Thorned_Rose", set2: "Swing_Jazz", set1Name: "4pc Thorned Rose", set2Name: "+ 2pc Swing Jazz", note: { fr: "Si vous jouez Ben en tant que DPS, équipez 4 pièces Thorned Rose pour augmenter ses DGT. Cependant, le buff de Taux CRIT sera moins utile si vous utilisez son Moteur Signature (car il garantit des coups critiques sur ses parades). Complétez avec Swing Jazz pour garder une bonne Réc. d'Énergie.", en: "If running Ben as a DPS, equip 4pc Thorned Rose to boost his DMG. However, the CRIT Rate buff is less impactful with his Signature W-Engine (guaranteed crits on parry). Pair with Swing Jazz for smooth Energy Regen." } }
        ],
        skills: [
            { name: "Core", level: "", icon: "Core.webp" }, { name: "Ex", level: "", icon: "Ex.png" }, { name: "Chain", level: "", icon: "Ultime.png" }, { name: "Assist", level: "", icon: "Assist.png" }, { name: "Basic", level: "", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Energy Regen ou Impact" }, { slot: "5", label: "DÉF %" }, { slot: "4", label: "DÉF %" } ], sub: [ { label: "DÉF %", highlight: true }, { label: "Taux CRIT", highlight: false }, { label: "DGT CRIT", highlight: false } ] },
        engines: [
            { tag: "Meilleur Moteur", name: "Spring Embrace", img: "W-Engine_Spring_Embrace.png" }, { tag: "Alternative 4★", name: "Original Transmorpher", img: "W-Engine_Original_Transmorpher.png" }, { tag: "Alternative 4★", name: "Big Cylinder", img: "W-Engine_Big_Cylinder.png" }, { tag: "Alternative B", name: "Identity Base", img: "Identity_Base.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Fire-Stun", members: [ { img: "Ben.png", color: "#f05432", initial: "B" }, { img: "Koleda.png", color: "#f05432", initial: "K" }, { img: "Soldier 11.png", color: "#f05432", initial: "S11" } ] },
            { name: "TEAM 02", tag: { fr: "Attaque", en: "Attack" }, members: [ { img: "Soldier 11.png", color: "#f05432", initial: "S11" }, { img: "Lucy.png", color: "#f05432", initial: "L" }, { img: "Ben.png", color: "#f05432", initial: "B" } ] },
            { name: "TEAM 03", tag: "Free To Play", members: [ { img: "Corin.png", color: "#e8a838", initial: "C" }, { img: "Lucy.png", color: "#f05432", initial: "L" }, { img: "Ben.png", color: "#f05432", initial: "B" } ] }
        ]
    },
    "Rina": {
        color: "#3182eb", element: "Electric", rank: "S", factionTitle: { fr: "Société d'entretien Victoria", en: "Victoria Housekeeping" },
        stats: [ { label: "Pen Ratio", value: "70%" }, { label: "Attaque", value: "2300" }, { label: "TC / DC", value: "un peu" } ],
        discs: [
            { tag: { fr: "Efficacité » 100 % 👑", en: "Efficiency » 100% 👑" }, set1: "Moonlight_Lullaby", set2: "Puffer_Electro", set1Name: "4pc Moonlight Lullaby", set2Name: "+ 2pc Puffer Electro", note: { fr: "Pour optimiser ses bonus. Yep rien de plus.", en: "To maximize her buffs. Yep, that's it." } },
            { tag: { fr: "Efficacité » 90 %", en: "Efficiency » 90%" }, set1: "Swing_Jazz", set2: "Puffer_Electro", set1Name: "4pc Swing Jazz", set2Name: "+ 2pc Puffer Electro", note: { fr: "Si Rina est utilisée dans une équipe classique en dehors de l'Anomalie, Swing Jazz est votre set de prédilection. Cela augmente la Réc. d'Énergie de Rina et augmente les dégâts de l'équipe.", en: "If Rina is used in a standard team outside of Anomaly, Swing Jazz is the go-to set. Boosts Rina's Energy Regen and increases squad damage." } }
        ],
        skills: [
            { name: "Core", level: "", icon: "Core.webp" }, { name: "Ex", level: "11", icon: "Ex.png" }, { name: "Ult", level: "11", icon: "Ultime.png" }, { name: "Assist", level: "11", icon: "Assist.png" }, { name: "Basic", level: "11", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Récup. d'énergie" }, { slot: "5", label: "PEN Ratio" }, { slot: "4", label: "Taux Crit / Attaque > Adre. d'anomalie" } ], sub: [ { label: "Taux Crit = Dégat Crit", highlight: true }, { label: "Attaque %", highlight: false }, { label: "Adresse d'anomalie", highlight: false } ] },
        engines: [
            { tag: "Baseline 100%", name: "Weeping Cradle", img: "W-Engine_Weeping_Cradle.png" }, { tag: "Alternative A", name: "Unfettered Game Ball", img: "W-Engine_Unfettered_Game_Ball.png" }, { tag: "Alternative A", name: "Slice of Time", img: "W-Engine_Slice_of_Time.png" }, { tag: "Alternative B", name: "Reverb - Mark II", img: "Reverb_Mark_II.png" }, { tag: "Alternative B", name: "Reverb - Mark III", img: "Reverb_Mark_III.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Flexible", en: "Flexible" }, members: [ { img: "Rina.png", color: "#3182eb", initial: "R" }, { img: "", color: "#52525b", role: "Tous les agents<br>Attaque" }, { img: "", color: "#52525b", role: "Tous les agents<br>Stunner" } ] },
            { name: "TEAM 02", tag: "Premium", members: [ { img: "Rina.png", color: "#3182eb", initial: "R" }, { img: "Harumasa.png", color: "#3182eb", initial: "H" }, { img: "Dialyn.png", color: "#e8a838", initial: "D" } ] },
            { name: "TEAM 03", tag: { fr: "Alternative", en: "Alternative" }, members: [ { img: "Rina.png", color: "#3182eb", initial: "R" }, { img: "Yanagi.png", color: "#3182eb", initial: "Y" }, { img: "Astra.png", color: "#f23c8a", initial: "A" } ] }
        ]
    },
    "Grace": {
        color: "#3182eb", element: "Electric", rank: "S", factionTitle: { fr: "Usines Belobog", en: "Belobog Heavy Industries" },
        stats: [ { label: "Adre. d'Anomalie", value: "410" }, { label: "Maî. d'Anomalie", value: "151" }, { label: "Attaque", value: "2600" } ],
        discs: [
            { tag: { fr: "Anomaly Build 👑", en: "Anomaly Build 👑" }, set1: "Freedom_Blues", set2: "Swing_Jazz", set1Name: "4pc Freedom Blues", set2Name: "+ 2pc Swing Jazz", note: { fr: "Ce build augmente l'Adresse et la Maîtrise d'Anomalie de Grace, ce qui profite à son style de jeu Choc. Les DGT Électriques ou le PEN Ratio sont équivalents en termes d'augmentation des dégâts.", en: "This build maximizes Grace's Anomaly Proficiency and Mastery for Shock playstyles. Electric DMG and PEN Ratio perform similarly in damage scaling." } },
            { tag: { fr: "Alternative", en: "Alternative" }, set1: "Thunder_Metal", set2: "Swing_Jazz", set1Name: "4pc Thunder Metal", set2Name: "+ 2pc Swing Jazz", note: { fr: "Thunder Metal augmente l'ATQ de Grace tant que l'ennemi est Choqué, ce qui sera toujours le cas puisque Grace fournit l'état Choc.", en: "Thunder Metal boosts Grace's ATK while enemies are Shocked, which boasts permanent uptime with Grace." } }
        ],
        skills: [
            { name: "Core", level: "12", icon: "Core.webp" }, { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "11", icon: "Ultime.png" }, { name: "Assist", level: "10", icon: "Assist.png" }, { name: "Basic", level: "8", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Maîtrise d'Anomalie" }, { slot: "5", label: "DGT Électrique / PEN Ratio" }, { slot: "4", label: "Adresse d'Anomalie" } ], sub: [ { label: "Adresse d'Anomalie", highlight: true }, { label: "ATQ %", highlight: false }, { label: "PEN", highlight: false } ] },
        engines: [
            { tag: "Meilleur Moteur", name: "Fusion Compiler", img: "W-Engine_Fusion_Compiler.png" }, { tag: "Alternative 5★", name: "Timeweaver", img: "W-Engine_Timeweaver.png" }, { tag: "Alternative 4★", name: "Electro-Lip Gloss", img: "W-Engine_Electro-Lip_Gloss.png" }, { tag: "Alternative F2P", name: "Weeping Gemini", img: "W-Engine_Weeping_Gemini.png" }, { tag: "Alternative B", name: "Magnetic Storm - Alpha", img: "Magnetic_Storm_Alpha.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Team F2P", en: "F2P Team" }, members: [ { img: "Grace.png", color: "#3182eb", initial: "G" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Soukaku.png", color: "#3bbedb", initial: "S" } ] },
            { name: "TEAM 02", tag: { fr: "Team Anomalie", en: "Anomaly Team" }, members: [ { img: "Grace.png", color: "#3182eb", initial: "G" }, { img: "Miyabi.png", color: "#3bbedb", initial: "M" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" } ] },
            { name: "TEAM 03", tag: { fr: "Team Premium", en: "Premium Team" }, members: [ { img: "Grace.png", color: "#3182eb", initial: "G" }, { img: "Harumasa.png", color: "#3182eb", initial: "H" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] }
        ]
    },
    "Roxy": {
        color: "#3bbedb", element: "Wind", rank: "S", factionTitle: { fr: "Atelier Flint", en: "Flint Workshop" },
        stats: [
            { label: "Taux Crit", value: "60 - 90%" },
            { label: "Récup. d'énergie", value: "3.12" },
            { label: "Attaque", value: "1800" }
        ],
        discs: [
            { tag: { fr: "Team Armurier 👑", en: "Armorer Team 👑" }, set1: "Astral_Voice", set2: "Swing_Jazz", set1Name: "4pc Astral Voice", set2Name: "+ 2pc Swing Jazz", note: { fr: "Optimisé pour Claret. Le bonus d'équipe se maintient via les assistances ou en encaissant volontairement un coup avant la phase d'étourdissement.", en: "Tailored for Claret. The squad buff is maintained via Quick Assists or taking a deliberate hit prior to stun phase." } },
            { tag: { fr: "Team Attaque / Rupture", en: "Attack / Rupture Team" }, set1: "King_of_the_Summit", set2: "Swing_Jazz", set1Name: "4pc King of the Summit", set2Name: "+ 2pc Swing Jazz", note: { fr: "Convertit son Taux CRIT très élevé en puissants buffs d'équipe pour vos attaquants (Sigrid, Orphie).", en: "Converts her extremely high CRIT Rate into massive team buffs for your main attackers (Sigrid, Orphie)." } },
            { tag: { fr: "Alternative Énergie", en: "Energy Alternative" }, set1: "Astral_Voice", set2: "Moonlight_Lullaby", set1Name: "4pc Astral Voice", set2Name: "+ 2pc Moonlight Lullaby", note: { fr: "Alternative identique à Swing Jazz pour alimenter ses longs EX Spéciaux très coûteux.", en: "Identical alternative to Swing Jazz to fuel her lengthy and costly EX Specials." } }
        ],
        skills: [
            { name: "Core", level: "F", icon: "Core.webp" },
            { name: "Ex", level: "12", icon: "Ex.png" },
            { name: "Ult", level: "12", icon: "Ultime.png" },
            { name: "Assist", level: "12", icon: "Assist.png" },
            { name: "Basic", level: "1", icon: "Attaque_basic.png" },
            { name: "Dodge", level: "1", icon: "Esquive.png" }
        ],
        statPriority: {
            main: [
                { slot: "6", label: "Energy Regeneration" },
                { slot: "5", label: "PEN Ratio% / ATK% / Wind DMG%" },
                { slot: "4", label: "Crit Rate" }
            ],
            sub: [
                { label: "Crit Rate (100% en combat)", highlight: true },
                { label: "Crit DMG = ATK %", highlight: false },
                { label: "Flat PEN", highlight: false },
                { label: "Flat ATK", highlight: false }
            ]
        },
        engines: [
            { tag: "Signature 5★", name: "Crimson Moon Casket", img: "W-Engine_Crimson_Moon_Casket.png" },
            { tag: "Alternative 4★ F2P", name: "Steam Oven", img: "W-Engine_Steam_Oven.png" },
            { tag: "Alternative 5★", name: "Hellfire Gears", img: "W-Engine_Hellfire_Gears.png" },
            { tag: "Alternative 4★", name: "Six Shooter", img: "W-Engine_Six_Shooter.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Team Armurier", en: "Armorer Team" }, members: [ { img: "Roxy.png", color: "#3bbedb", initial: "R" }, { img: "Claret.png", color: "#3182eb", initial: "C" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] },
            { name: "TEAM 02", tag: { fr: "Glace Burst", en: "Ice Burst" }, members: [ { img: "Roxy.png", color: "#3bbedb", initial: "R" }, { img: "Sigrid.png", color: "#3bbedb", initial: "S" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] },
            { name: "TEAM 03", tag: { fr: "Double Stun", en: "Dual Stun" }, members: [ { img: "Roxy.png", color: "#3bbedb", initial: "R" }, { img: "Orphie and Magus.png", color: "#f05432", initial: "OM" }, { img: "Norma.png", color: "#f05432", initial: "N" } ] }
        ]
    },
    "Sigrid": {
        color: "#3bbedb", element: "Ice", rank: "S", factionTitle: { fr: "Département de la patrouille aérienne", en: "Air Patrol Department" },
        stats: [
            { label: "Taux Crit", value: "6 rolls max (≤ 34%)" },
            { label: "Attaque", value: "Maximiser" },
            { label: "Dégât Crit", value: "Maximiser" }
        ],
        discs: [
            { tag: { fr: "Avec Dialyn (100 %) 👑", en: "With Dialyn (100%) 👑" }, set1: "Puffer_Electro", set2: "Polar_Metal", set1Name: "4pc Puffer Electro", set2Name: "+ 2pc Polar Metal", note: { fr: "Configuration indispensable avec Dialyn pour exploiter le double ultime sous étourdissement et combler le manque de DGT Glace.", en: "Mandatory setup with Dialyn to abuse the double Ultimate in stun and cover missing Ice DMG." } },
            { tag: { fr: "Sans Dialyn (98,16 %)", en: "Without Dialyn (98.16%)" }, set1: "Hormone_Punk", set2: "Puffer_Electro", set1Name: "4pc Hormone Punk", set2Name: "+ 2pc Puffer Electro", note: { fr: "Meilleure option en duo avec Norma ou Rina. Plus régulier que Dawn's Bloom qui sature les bonus avec Weeping Cradle.", en: "Best option paired with Norma or Rina. More consistent than Dawn's Bloom which oversaturates bonuses alongside Weeping Cradle." } },
            { tag: { fr: "Alternative (96,16 %)", en: "Alternative (96.16%)" }, set1: "Dawn_Bloom", set2: "Puffer_Electro", set1Name: "4pc Dawn's Bloom", set2Name: "+ 2pc Puffer Electro", note: { fr: "Troisième alternative viable mais moins performante pour renforcer les attaques normales et l'EX Spécial.", en: "Viable 3rd alternative to empower Basic Attacks and EX Special, though lagging slightly behind." } }
        ],
        skills: [
            { name: "Core", level: "F", icon: "Core.webp" },
            { name: "Basic", level: "12", icon: "Attaque_basic.png" },
            { name: "Ult", level: "12", icon: "Ultime.png" },
            { name: "Ex", level: "11", icon: "Ex.png" },
            { name: "Assist", level: "10", icon: "Assist.png" }
        ],
        statPriority: {
            main: [
                { slot: "6", label: "ATK %" },
                { slot: "5", label: "PEN Ratio" },
                { slot: "4", label: "DGT CRIT / ATK %" }
            ],
            sub: [
                { label: "Taux CRIT (6 rolls max)", highlight: true },
                { label: "ATK %", highlight: true },
                { label: "DGT CRIT", highlight: false },
                { label: "Flat PEN", highlight: false },
                { label: "Flat ATK", highlight: false }
            ]
        },
        engines: [
            { tag: "Signature 100 %", name: "Knight's Extolment", img: "W-Engine_Knights_Extolments.png" },
            { tag: "Alternative 5★", name: "The Brimstone", img: "W-Engine_The_Brimstone.png" },
            { tag: "Alternative F2P", name: "Starlight Engine", img: "Starlight_Engine.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Plafond Burst 👑", en: "Burst Ceiling 👑" }, members: [ { img: "Sigrid.png", color: "#3bbedb", initial: "S" }, { img: "Norma.png", color: "#f05432", initial: "N" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] },
            { name: "TEAM 02", tag: { fr: "Double Ultime", en: "Dual Ultimate" }, members: [ { img: "Sigrid.png", color: "#3bbedb", initial: "S" }, { img: "Dialyn.png", color: "#e8a838", initial: "D" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] },
            { name: "TEAM 03", tag: { fr: "Confort Stun", en: "Stun Comfort" }, members: [ { img: "Sigrid.png", color: "#3bbedb", initial: "S" }, { img: "Nangong Yu.png", color: "#f23c8a", initial: "NY" }, { img: "Sunna.png", color: "#e8a838", initial: "S" } ] }
        ],
        mindscapes: [
            { rank: "M1", desc: { fr: "+25 % ATK en combat, progression accélérée des niveaux d'EBA et coup bonus de 100 % de DGT.", en: "+25% in-combat ATK, faster EBA stage progression, and a bonus strike dealing 100% DMG." } },
            { rank: "M2", desc: { fr: "+10 % de décibels et gain de dégâts massif ; permet de caler un ultime additionnel par combat.", en: "+10% Decibels and massive damage amplification; enables an extra Ultimate per combat." } },
            { rank: "M4", desc: { fr: "Bonus permanent de +80 % de dégâts.", en: "Permanent +80% damage bonus." } }
        ],
        notes: [
            { fr: "Plafond CRIT : Ne pas dépasser 34 % sur la fiche de stats hors combat (85,4 % innés sous forme renforcée).", en: "CRIT Cap: Do not exceed 34% on out-of-combat stat sheet (85.4% innate in enhanced state)." },
            { fr: "Moteurs : Proscrire formellement les armes à sous-stat Taux CRIT (comme Myriad Eclipse).", en: "W-Engines: Strictly avoid weapons with CRIT Rate secondary stats (e.g. Myriad Eclipse)." },
            { fr: "Arme vs Mindscapes : Si The Brimstone R5 est déjà en ta possession, priorise directement le M1/M2 plutôt que son arme signature.", en: "Weapon vs Mindscapes: If you already own The Brimstone R5, prioritize her M1/M2 over signature W-Engine." }
        ]
    },
    "Soldier 11": {
        color: "#f05432", element: "Fire", rank: "S", factionTitle: { fr: "Escouade Obole", en: "Obol Squad" },
        stats: [
            { label: "Attaque", value: "2800 - 3000+" },
            { label: "Taux Crit", value: "≥ 80 %" },
            { label: "Dégât Crit", value: "≥ 140 %" }
        ],
        discs: [
            { tag: { fr: "Dialyn Burst (100 %) 👑", en: "Dialyn Burst (100%) 👑" }, set1: "Puffer_Electro", set2: "Woodpecker_Electro", set1Name: "4pc Puffer Electro", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Configuration optimale avec Dialyn pour convertir les attaques en chaîne en ultime dès l'ouverture.", en: "Optimal setup with Dialyn to convert Chain Attacks into an immediate opening Ultimate." } },
            { tag: { fr: "Polyvalent (98,82 %)", en: "All-Rounder (98.82%)" }, set1: "Woodpecker_Electro", set2: "Puffer_Electro", set1Name: "4pc Woodpecker Electro", set2Name: "+ 2pc Puffer Electro", note: { fr: "Set régulier profitant du spam d'attaques normales et des contre-attaques après esquive.", en: "Consistent all-rounder capitalizing on Basic Attack spam and frequent Dodge Counters." } },
            { tag: { fr: "Alternative (98,75 %)", en: "Alternative (98.75%)" }, set1: "Dawn_Bloom", set2: "Woodpecker_Electro", set1Name: "4pc Dawn's Bloom", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Augmente constamment les dégâts de son attaque normale 5 renforcée.", en: "Provides permanent DMG boost to her enhanced Basic 5." } }
        ],
        skills: [
            { name: "Basic", level: "12", icon: "Attaque_basic.png" },
            { name: "Ult", level: "11", icon: "Ultime.png" },
            { name: "Ex", level: "10", icon: "Ex.png" },
            { name: "Dodge", level: "8", icon: "Esquive.png" },
            { name: "Assist", level: "8", icon: "Assist.png" }
        ],
        statPriority: {
            main: [
                { slot: "6", label: "ATK %" },
                { slot: "5", label: "PEN Ratio% / ATK% / Fire DMG%" },
                { slot: "4", label: "Crit Rate% / ATK% / Crit DMG%" }
            ],
            sub: [
                { label: "Crit Rate = Crit DMG", highlight: true },
                { label: "ATK %", highlight: true },
                { label: "Anomaly Proficiency", highlight: false },
                { label: "Flat PEN", highlight: false },
                { label: "Flat ATK", highlight: false }
            ]
        },
        engines: [
            { tag: "Signature Evelyn (100 %)", name: "Heartstring Nocturne", img: "W-Engine_Heartstring_Nocturne.png" },
            { tag: "Alternative S (95,11 %)", name: "Cordis Germina", img: "W-Engine_Cordis_Germina.png" },
            { tag: "Stat Stick S (91,51 %)", name: "Myriad Eclipse", img: "W-Engine_Myriad_Eclipse.png" },
            { tag: "Signature Personnelle", name: "The Brimstone", img: "W-Engine_The_Brimstone.png" },
            { tag: "F2P (S5) (78,74 %)", name: "Starlight Engine", img: "Starlight_Engine.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Deadly Assault Top 👑", en: "Deadly Assault Top 👑" }, members: [ { img: "Soldier 11.png", color: "#f05432", initial: "S11" }, { img: "Norma.png", color: "#f05432", initial: "N" }, { img: "Astra.png", color: "#f23c8a", initial: "A" } ] },
            { name: "TEAM 02", tag: "Score 31k+", members: [ { img: "Soldier 11.png", color: "#f05432", initial: "S11" }, { img: "Norma.png", color: "#f05432", initial: "N" }, { img: "Sunna.png", color: "#e8a838", initial: "S" } ] },
            { name: "TEAM 03", tag: { fr: "Synergie Lighter", en: "Lighter Synergy" }, members: [ { img: "Soldier 11.png", color: "#f05432", initial: "S11" }, { img: "Lighter.png", color: "#f05432", initial: "L" }, { img: "Astra.png", color: "#f23c8a", initial: "A" } ] }
        ]
    },
    "Soukaku": {
        color: "#3bbedb", element: "Ice", rank: "A", factionTitle: { fr: "Section 6", en: "Section 6" },
        stats: [
            { label: "Attaque (Cap)", value: "2500 - 2777" },
            { label: "Taux Crit", value: "50 % - 60 %" },
            { label: "Dégât Crit", value: "100 % - 120 %" }
        ],
        discs: [
            { tag: { fr: "Support Anomalie 👑", en: "Anomaly Support 👑" }, set1: "Freedom_Blues", set2: "Phaethon_Melody", set1Name: "4pc Freedom Blues", set2Name: "+ 2pc Phaethon's Melody", note: { fr: "Applique 20 % de réduction de résistance à l'anomalie Glace via l'EX Spécial, parfait pour Miyabi.", en: "Applies 20% Ice Anomaly Buildup RES reduction on EX Special, ideal for Miyabi." } },
            { tag: { fr: "Support Généraliste", en: "General Support" }, set1: "Moonlight_Lullaby", set2: "Phaethon_Melody", set1Name: "4pc Moonlight Lullaby", set2Name: "+ 2pc Phaethon's Melody", note: { fr: "Fournit 20 % de régénération d'énergie et un buff de 18 % DGT d'équipe durant 25 s.", en: "Provides 20% Energy Regen and a massive 18% team DMG buff for 25s." } },
            { tag: "Quick Assist", set1: "Astral_Voice", set2: "Phaethon_Melody", set1Name: "4pc Astral Voice", set2Name: "+ 2pc Phaethon's Melody", note: { fr: "Confère jusqu'à 24 % de DGT aux équipiers entrant sur le terrain par assistance rapide.", en: "Buffs DMG of allies entering via Quick Assist by up to 24%." } }
        ],
        skills: [
            { name: "Ex", level: "12", icon: "Ex.png" },
            { name: "Ult", level: "11", icon: "Ultime.png" },
            { name: "Basic", level: "8", icon: "Attaque_basic.png" },
            { name: "Assist", level: "8", icon: "Assist.png" },
            { name: "Dodge", level: "6", icon: "Esquive.png" }
        ],
        statPriority: {
            main: [
                { slot: "6", label: "Energy Regen / ATK%" },
                { slot: "5", label: "ATK% / Ice DMG%" },
                { slot: "4", label: "ATK% / Crit Rate%" }
            ],
            sub: [
                { label: "ATK % (priorité cap passif)", highlight: true },
                { label: "Crit Rate = Crit DMG", highlight: false },
                { label: "PEN", highlight: false },
                { label: "Flat ATK", highlight: false }
            ]
        },
        engines: [
            { tag: "Signature (S5) 👑", name: "Bashful Demon", img: "W-Engine_Bashful_Demon.png" },
            { tag: "Alternative S", name: "Weeping Cradle", img: "W-Engine_Weeping_Cradle.png" },
            { tag: "Alternative Support (S5)", name: "Kaboom the Cannon", img: "W-Engine_Kaboom_the_Cannon.png" },
            { tag: "Option F2P", name: "Slice of Time", img: "W-Engine_Slice_of_Time.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Miyabi Carry (Rank 45) 👑", members: [ { img: "Miyabi.png", color: "#3bbedb", initial: "M" }, { img: "Yuzuha.png", color: "#e8a838", initial: "Y" }, { img: "Soukaku.png", color: "#3bbedb", initial: "S" } ] },
            { name: "TEAM 02", tag: "Mono Glace Stun (Rank 176)", members: [ { img: "Miyabi.png", color: "#3bbedb", initial: "M" }, { img: "Lycaon.png", color: "#3bbedb", initial: "L" }, { img: "Soukaku.png", color: "#3bbedb", initial: "S" } ] },
            { name: "TEAM 03", tag: { fr: "Classique Ellen", en: "Classic Ellen" }, members: [ { img: "Ellen.png", color: "#3bbedb", initial: "E" }, { img: "Lycaon.png", color: "#3bbedb", initial: "L" }, { img: "Soukaku.png", color: "#3bbedb", initial: "S" } ] }
        ]
    },
    "Nekomata": {
        color: "#e8a838", element: "Physical", rank: "S", factionTitle: { fr: "Lièvres rusés", en: "Cunning Hares" },
        stats: [
            { label: "Taux Crit", value: "70% - 80%+" },
            { label: "Attaque", value: "2500 - 3100+" },
            { label: "Dégât Crit", value: "140% - 160%+" }
        ],
        discs: [
            { tag: { fr: "Meilleur Set (100 %) 👑", en: "Best Set (100%) 👑" }, set1: "Woodpecker_Electro", set2: "Puffer_Electro", set1Name: "4pc Woodpecker Electro", set2Name: "+ 2pc Puffer Electro", note: { fr: "Configuration optimale (100 % DPS). Maintien constant des 3 cumuls grâce à l'enchaînement de l'EX et de la contre-esquive renforcée.", en: "Optimal setup (100% DPS). Sustains max 3 stacks effortlessly by chaining EX and Enhanced Dodge Counters." } },
            { tag: { fr: "Alternative DGT CRIT (99,55 %)", en: "CRIT DMG Alternative (99.55%)" }, set1: "Woodpecker_Electro", set2: "Branch_Blade_Song", set1Name: "4pc Woodpecker Electro", set2Name: "+ 2pc Branch and Blade Song", note: { fr: "Très performant si l'apport en pénétration d'équipe (Rina / Sunna M1) est déjà important.", en: "Highly potent if team PEN Ratio support (Rina / Sunna M1) is already high." } },
            { tag: { fr: "Alternative ATK % (99,33 %)", en: "ATK% Alternative (99.33%)" }, set1: "Woodpecker_Electro", set2: "Astral_Voice", set1Name: "4pc Woodpecker Electro", set2Name: "+ 2pc Astral Voice", note: { fr: "Option solide pour augmenter l'attaque brute (Hormone Punk et Fanged Metal restent également viables).", en: "Solid raw ATK alternative (Hormone Punk and Fanged Metal remain viable)." } }
        ],
        skills: [
            { name: "Core", level: "F", icon: "Core.webp" },
            { name: "Dodge", level: "12", icon: "Esquive.png" },
            { name: "Ult", level: "12", icon: "Ultime.png" },
            { name: "Ex", level: "11", icon: "Ex.png" },
            { name: "Basic", level: "7", icon: "Attaque_basic.png" },
            { name: "Assist", level: "1", icon: "Assist.png" }
        ],
        statPriority: {
            main: [
                { slot: "6", label: "ATK %" },
                { slot: "5", label: "PEN Ratio" },
                { slot: "4", label: "Crit Rate (M0-M3) / Crit DMG (M4-M5) / ATK% (M6)" }
            ],
            sub: [
                { label: "Crit Rate (jusqu'à 100% en combat)", highlight: true },
                { label: "Crit DMG = ATK %", highlight: true },
                { label: "Flat PEN", highlight: false },
                { label: "Flat ATK", highlight: false }
            ]
        },
        engines: [
            { tag: "Signature (100 %)", name: "Steel Cushion", img: "W-Engine_Steel_Cushion.png" },
            { tag: "Stat Stick S (99,67 %)", name: "Heartstring Nocturne", img: "W-Engine_Heartstring_Nocturne.png" },
            { tag: "Alternative S (96,57 %)", name: "Cordis Germina", img: "W-Engine_Cordis_Germina.png" },
            { tag: "Alternative S (95,23 %)", name: "The Brimstone", img: "W-Engine_The_Brimstone.png" },
            { tag: "Option F2P (86,93 %)", name: "Starlight Engine", img: "Starlight_Engine.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Best-in-Slot 👑", en: "Best-in-Slot 👑" }, members: [ { img: "Nekomata.png", color: "#e8a838", initial: "N" }, { img: "Dialyn.png", color: "#e8a838", initial: "D" }, { img: "Sunna.png", color: "#e8a838", initial: "S" } ] },
            { name: "TEAM 02", tag: { fr: "Pénétration", en: "Penetration" }, members: [ { img: "Nekomata.png", color: "#e8a838", initial: "N" }, { img: "Dialyn.png", color: "#e8a838", initial: "D" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] },
            { name: "TEAM 03", tag: { fr: "Classique F2P", en: "Classic F2P" }, members: [ { img: "Nekomata.png", color: "#e8a838", initial: "N" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" } ] }
        ],
        mindscapes: [
            { rank: "M1", desc: { fr: "La réduction de résistance physique ennemie est active en permanence grâce à la conversion totale en attaques arrière.", en: "Enemy Physical RES shred is permanently active thanks to 100% back-attack conversion." } },
            { rank: "M4", desc: { fr: "Confère jusqu'à +14 % Taux CRIT, permettant d'équiper un Disque 4 en DGT CRIT.", en: "Grants up to +14% CRIT Rate, allowing slot 4 disc to run CRIT DMG." } },
            { rank: "M6", desc: { fr: "Ajoute +54 % DGT CRIT supplémentaires, saturant le multiplicateur et justifiant le passage du Disque 4 en ATK %.", en: "Adds +54% CRIT DMG, saturating the stat and favoring ATK% on slot 4." } }
        ],
        notes: [
            { fr: "Énergie Ronronnante : Conserver 40 à 55 points avant le stun pour lancer directement la contre-esquive renforcée en maintenant l'attaque normale.", en: "Purr Energy: Pool 40-55 points prior to stun to unleash Enhanced Dodge Counter by holding Basic Attack." },
            { fr: "Attaques de dos : Le déclenchement de la contre-esquive confère 40 s où toutes les frappes sont comptabilisées comme des attaques arrière (+60 % DGT).", en: "Back-Attacks: Enhanced Dodge Counter activation grants 40s where all hits register as back-attacks (+60% DMG)." },
            { fr: "Maintien Woodpecker : Placer une attaque normale entre l'EX Spécial et la contre-esquive pour garantir les 3 cumuls du set.", en: "Woodpecker Upkeep: Insert a swift Basic Attack between EX Special and Dodge Counter to maintain 3 stacks." }
        ]
    },
    "Anton": {
        color: "#3182eb", element: "Electric", rank: "A", factionTitle: { fr: "Usines Belobog", en: "Belobog Heavy Industries" },
        stats: [
            { label: "Attaque", value: "2300 - 2800+" },
            { label: "Taux Crit", value: "70 % - 100 %" },
            { label: "Dégât Crit", value: "120 % - 160 %+" }
        ],
        discs: [
            { tag: { fr: "Meilleur Set (100 %) 👑", en: "Best Set (100%) 👑" }, set1: "Thunder_Metal", set2: "Woodpecker_Electro", set1Name: "4pc Thunder Metal", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Apporte +28 % d'ATK en combat tant qu'un ennemi subit l'état Électrocution, avec un maintien quasi permanent aux côtés de Grace.", en: "Grants +28% in-combat ATK against Shocked targets, with near 100% uptime alongside Grace." } },
            { tag: { fr: "Burst Ultime (88,93 %)", en: "Ultimate Burst (88.93%)" }, set1: "Puffer_Electro", set2: "Woodpecker_Electro", set1Name: "4pc Puffer Electro", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Maximise la fenêtre de burst après le déclenchement de l'ultime durant l'étourdissement du boss.", en: "Maximizes post-Ultimate burst windows during boss stun phases." } },
            { tag: { fr: "Polyvalent (85,59 %)", en: "All-Rounder (85.59%)" }, set1: "Woodpecker_Electro", set2: "Puffer_Electro", set1Name: "4pc Woodpecker Electro", set2Name: "+ 2pc Puffer Electro", note: { fr: "Option constante renforçant le taux critique et l'attaque via l'alternance d'attaques normales et de compétences.", en: "Solid all-rounder boosting CRIT Rate and ATK through steady skill rotations." } }
        ],
        skills: [
            { name: "Ult", level: "12", icon: "Ultime.png" },
            { name: "Basic", level: "11", icon: "Attaque_basic.png" },
            { name: "Ex", level: "10", icon: "Ex.png" },
            { name: "Assist", level: "8", icon: "Assist.png" },
            { name: "Dodge", level: "6", icon: "Esquive.png" }
        ],
        statPriority: {
            main: [
                { slot: "6", label: "ATK %" },
                { slot: "5", label: "Electric DMG %" },
                { slot: "4", label: "Crit Rate % / Crit DMG %" }
            ],
            sub: [
                { label: "Crit Rate = Crit DMG", highlight: true },
                { label: "ATK %", highlight: true },
                { label: "Flat PEN", highlight: false },
                { label: "Flat ATK", highlight: false }
            ]
        },
        engines: [
            { tag: "Top Tier S (105,84 %)", name: "Heartstring Nocturne", img: "W-Engine_Heartstring_Nocturne.png" },
            { tag: "Alternative S (102,61 %)", name: "Zanshin Herb Case", img: "W-Engine_Zanshin_Herb_Case.png" },
            { tag: "Alternative S (100 %)", name: "The Brimstone", img: "W-Engine_The_Brimstone.png" },
            { tag: "F2P Burst S5 (93,26 %)", name: "Street Superstar", img: "W-Engine_Street_Superstar.png" },
            { tag: "F2P Standard S5 (92,96 %)", name: "Starlight Engine", img: "Starlight_Engine.png" },
            { tag: "Signature A (86,56 %)", name: "Drill Rig - Red Axis", img: "W-Engine_Drill_Rig_-_Red_Axis.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Shock Team (Premium) 👑", en: "Shock Team (Premium) 👑" }, members: [ { img: "Anton.png", color: "#3182eb", initial: "A" }, { img: "Grace.png", color: "#3182eb", initial: "G" }, { img: "Rina.png", color: "#3182eb", initial: "R" } ] },
            { name: "TEAM 02", tag: { fr: "Alternative Stun", en: "Stun Alternative" }, members: [ { img: "Anton.png", color: "#3182eb", initial: "A" }, { img: "Qingyi.png", color: "#3182eb", initial: "Q" }, { img: "Grace.png", color: "#3182eb", initial: "G" } ] },
            { name: "TEAM 03", tag: { fr: "F2P Friendly", en: "F2P Friendly" }, members: [ { img: "Anton.png", color: "#3182eb", initial: "A" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" } ] }
        ]
    },
    "Billy": {
        color: "#e8a838", element: "Physical", rank: "A", factionTitle: { fr: "Lièvres rusés", en: "Cunning Hares" },
        stats: [
            { label: "Attaque", value: "2400 - 2800+" },
            { label: "Taux Crit", value: "70 % - 80 %" },
            { label: "Dégât Crit", value: "140 % - 160 %+" }
        ],
        discs: [
            { tag: { fr: "Meilleur Set (101,96 %) 👑", en: "Best Set (101.96%) 👑" }, set1: "Woodpecker_Electro", set2: "Branch_Blade_Song", set1Name: "4pc Woodpecker Electro", set2Name: "+ 2pc Branch and Blade Song", note: { fr: "Maintien très facile de 2 à 3 cumuls d'ATK via le tir accroupi, les tirs roulés et les contre-esquives.", en: "Effortlessly maintains 2-3 ATK stacks via Crouching Fire, Rolling Shots, and Dodge Counters." } },
            { tag: { fr: "Régularité (101,08 %)", en: "Consistency (101.08%)" }, set1: "Shadow_Harmony", set2: "Woodpecker_Electro", set1Name: "4pc Shadow Harmony", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "L'option la plus constante grâce à l'enchaînement des attaques de sprint à 360° pour cumuler le Taux CRIT sans gestion complexe.", en: "Most consistent set looping 360 Dash Attacks for effortless CRIT Rate upkeep." } },
            { tag: { fr: "Burst Ultime (98,52 %)", en: "Ultimate Burst (98.52%)" }, set1: "Puffer_Electro", set2: "Woodpecker_Electro", set1Name: "4pc Puffer Electro", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Excellent avec des soutiens comme Dialyn permettant de déclencher un ultime à chaque fenêtre d'étourdissement.", en: "Great option alongside supports like Dialyn to drop an Ultimate every stun rotation." } }
        ],
        skills: [
            { name: "Ult", level: "12", icon: "Ultime.png" },
            { name: "Ex", level: "11", icon: "Ex.png" },
            { name: "Dodge", level: "10", icon: "Esquive.png" },
            { name: "Basic", level: "8", icon: "Attaque_basic.png" },
            { name: "Assist", level: "6", icon: "Assist.png" }
        ],
        statPriority: {
            main: [
                { slot: "6", label: "ATK %" },
                { slot: "5", label: "PEN Ratio% / ATK% / Physical DMG%" },
                { slot: "4", label: "Crit Rate% / Crit DMG%" }
            ],
            sub: [
                { label: "Crit Rate = Crit DMG", highlight: true },
                { label: "ATK %", highlight: true },
                { label: "Flat PEN", highlight: false },
                { label: "Flat ATK", highlight: false }
            ]
        },
        engines: [
            { tag: "Best-in-Slot S5 (116,43 %)", name: "The Brimstone", img: "W-Engine_The_Brimstone.png" },
            { tag: "Stat Stick S (108,16 %)", name: "Cloudcleave Radiance", img: "W-Engine_Cloudcleave_Radiance.png" },
            { tag: "Alternative S (103,20 %)", name: "Heartstring Nocturne", img: "W-Engine_Heartstring_Nocturne.png" },
            { tag: "Signature A (100 %)", name: "Starlight Engine Replica", img: "W-Engine_Starlight_Engine_Replica.png" },
            { tag: "F2P Craftable (91,14 %)", name: "Starlight Engine", img: "Starlight_Engine.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: "Billy Premium 👑", members: [ { img: "Billy.png", color: "#e8a838", initial: "B" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" }, { img: "Dialyn.png", color: "#e8a838", initial: "D" } ] },
            { name: "TEAM 02", tag: { fr: "F2P Lièvres rusés", en: "F2P Cunning Hares" }, members: [ { img: "Billy.png", color: "#e8a838", initial: "B" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" }, { img: "Anby.png", color: "#3182eb", initial: "A" } ] },
            { name: "TEAM 03", tag: { fr: "Duo Faction / Stun", en: "Faction / Stun Duo" }, members: [ { img: "Billy.png", color: "#e8a838", initial: "B" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Seth.png", color: "#3182eb", initial: "S" } ] }
        ]
    },
    "Seth": {
        color: "#3182eb", element: "Electric", rank: "A", factionTitle: { fr: "Division de l'Ordre urbain", en: "Public Security" },
        stats: [
            { label: "Attaque (Bouclier)", value: "2600 - 3200+ (Cap 3750)" },
            { label: "PV", value: "≥ 11 000" },
            { label: "Prof. d'anomalie", value: "200 - 300+ (Optionnel)" }
        ],
        discs: [
            { tag: { fr: "Soutien Ultime 👑", en: "Ultimate Support 👑" }, set1: "Astral_Voice", set2: "Swing_Jazz", set1Name: "4pc Astral Voice", set2Name: "+ 2pc Swing Jazz", note: { fr: "Le meilleur set de soutien grâce aux aides rapides qui confèrent un buff d'équipe pouvant atteindre 24 % de DGT.", en: "Best support set triggering via Quick Assists for up to +24% team DMG." } },
            { tag: { fr: "Buff Dégâts d'équipe", en: "Team DMG Buff" }, set1: "Swing_Jazz", set2: "Proto_Punk", set1Name: "4pc Swing Jazz", set2Name: "+ 2pc Proto Punk", note: { fr: "Accorde 15 % de dégâts à l'escouade pendant 12 s après un enchaînement ou un ultime.", en: "Grants 15% team DMG for 12s following Chain Attacks or Ultimates." } },
            { tag: { fr: "Renfort de Bouclier", en: "Shield Reinforce" }, set1: "Proto_Punk", set2: "Swing_Jazz", set1Name: "4pc Proto Punk", set2Name: "+ 2pc Swing Jazz", note: { fr: "Augmente la valeur des boucliers de 15 % et confère 15 % de DGT d'équipe sur parade ou esquive défensive.", en: "Increases shield strength by 15% and grants 15% squad DMG upon defensive assists." } }
        ],
        skills: [
            { name: "Ult", level: "12", icon: "Ultime.png" },
            { name: "Ex", level: "11", icon: "Ex.png" },
            { name: "Assist", level: "11", icon: "Assist.png" },
            { name: "Basic", level: "8", icon: "Attaque_basic.png" },
            { name: "Dodge", level: "6", icon: "Esquive.png" }
        ],
        statPriority: {
            main: [
                { slot: "6", label: "Energy Regen / Anomaly Mastery" },
                { slot: "5", label: "ATK% / Electric DMG%" },
                { slot: "4", label: "ATK% / Anomaly Proficiency" }
            ],
            sub: [
                { label: "ATK % (priorité absorption bouclier)", highlight: true },
                { label: "Anomaly Proficiency", highlight: true },
                { label: "Flat ATK", highlight: false },
                { label: "Flat PEN", highlight: false }
            ]
        },
        engines: [
            { tag: "Signature (S5) 👑", name: "Peacekeeper - Specialized", img: "W-Engine_Peacekeeper_-_Specialized.png" },
            { tag: "Alternative Soutien", name: "Spring Embrace", img: "W-Engine_Spring_Embrace.png" },
            { tag: "Option Défensive", name: "Bunny Band", img: "W-Engine_Bunny_Band.png" },
            { tag: "Alternative Impact", name: "Original Transmorpher", img: "W-Engine_Original_Transmorpher.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Anomalie Jane / Vivian 👑", en: "Jane / Vivian Anomaly 👑" }, members: [ { img: "Jane.png", color: "#e8a838", initial: "J" }, { img: "Seth.png", color: "#3182eb", initial: "S" }, { img: "Vivian.png", color: "#f23c8a", initial: "V" } ] },
            { name: "TEAM 02", tag: { fr: "Désordre Burnice", en: "Burnice Disorder" }, members: [ { img: "Jane.png", color: "#e8a838", initial: "J" }, { img: "Seth.png", color: "#3182eb", initial: "S" }, { img: "Burnice.png", color: "#f05432", initial: "B" } ] },
            { name: "TEAM 03", tag: { fr: "F2P Ordre Urbain", en: "F2P Public Security" }, members: [ { img: "Billy.png", color: "#e8a838", initial: "B" }, { img: "Seth.png", color: "#3182eb", initial: "S" }, { img: "Anby.png", color: "#3182eb", initial: "A" } ] }
        ]
    },
    "Hugo": {
        color: "#3bbedb", element: "Ice", rank: "S", factionTitle: { fr: "Oiseaux-moqueurs", en: "Mockingbirds" },
        stats: [ { label: "Attaque", value: "Max" }, { label: "Taux Crit", value: "Max" }, { label: "Dégât Crit", value: "Max" } ],
        discs: [
            { tag: { fr: "DPS Build 👑", en: "DPS Build 👑" }, set1: "Puffer_Electro", set2: "Woodpecker_Electro", set1Name: "4pc Puffer Electro", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Fonctionne le mieux avec Dialyn pour lancer plus d'Ultimes. Augmente le Taux CRIT et les DGT CRIT nécessaires pour optimiser la 'Totalisation'.", en: "Synergizes best with Dialyn for frequent Ultimates. Builds CRIT Rate & CRIT DMG needed for 'Tally' optimization." } },
            { tag: { fr: "Alternative Build", en: "Alternative Build" }, set1: "Hormone_Punk", set2: "Woodpecker_Electro", set1Name: "4pc Hormone Punk", set2Name: "+ 2pc Woodpecker Electro", note: { fr: "Excellent set si Hugo n'est pas joué avec Dialyn. Fournit une tonne d'ATQ% à chaque fois qu'il entre sur le terrain.", en: "Terrific option when played without Dialyn. Supplies huge ATK% buffs upon taking the field." } }
        ],
        skills: [
            { name: "Core", level: "12", icon: "Core.webp" }, { name: "Ex", level: "12", icon: "Ex.png" }, { name: "Ult", level: "11", icon: "Ultime.png" }, { name: "Basic", level: "8", icon: "Attaque_basic.png" }
        ],
        statPriority: { main: [ { slot: "6", label: "Attaque %" }, { slot: "5", label: "DGT Glace %" }, { slot: "4", label: "Taux CRIT / DGT CRIT" } ], sub: [ { label: "Taux CRIT", highlight: true }, { label: "DGT CRIT", highlight: false }, { label: "ATQ %", highlight: false } ] },
        engines: [
            { tag: "Meilleur Moteur", name: "Myriad Eclipse", img: "W-Engine_Myriad_Eclipse.png" }, { tag: "Alternative 5★", name: "Deep Sea Visitor", img: "W-Engine_Deep_Sea_Visitor.png" }, { tag: "Alternative 4★", name: "Severed Innocence", img: "W-Engine_Severed_Innocence.png" }, { tag: "Alternative F2P", name: "Marcato Desire", img: "Marcato_Desire.png" }
        ],
        teams: [
            { name: "TEAM 01", tag: { fr: "Double Stun", en: "Dual Stun" }, members: [ { img: "Hugo.png", color: "#3bbedb", initial: "H" }, { img: "Norma.png", color: "#f05432", initial: "N" }, { img: "Dialyn.png", color: "#e8a838", initial: "D" } ] },
            { name: "TEAM 02", tag: { fr: "Team F2P", en: "F2P Team" }, members: [ { img: "Hugo.png", color: "#3bbedb", initial: "H" }, { img: "Anby.png", color: "#3182eb", initial: "A" }, { img: "Nicole.png", color: "#f23c8a", initial: "N" } ] },
            { name: "TEAM 03", tag: { fr: "Flexible", en: "Flexible" }, members: [ { img: "Hugo.png", color: "#3bbedb", initial: "H" }, { img: "", color: "#52525b", role: "Agent<br>Stun" }, { img: "", color: "#52525b", role: "Agent<br>Stun" } ] }
        ]
    }
};
