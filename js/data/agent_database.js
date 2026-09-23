export const agentDatabase = {
    "Piper": {
        color: "#e8a838",
        element: "Physical",
        factionTitle: "Sons of Calydon",
        rank: "A",
        stats: [
            { label: "Adresse Ano.", value: "≥ 384" },
            { label: "Maitrise Ano.", value: "≥ 150" },
            { label: "Attaque", value: "≥ 2800" }
        ],
        discs: [
            {
                tag: "Support Build 1 👑",
                set1: "Freedom_Blues", set2: "Swing_Jazz",
                set1Name: "4pc Freedom Blues", set2Name: "+ 2pc Swing Jazz",
                note: ""
            },
            {
                tag: "General DPS Build",
                set1: "Fanged_Metal", set2: "Freedom_Blues",
                set1Name: "4pc Fanged Metal", set2Name: "+ 2pc Freedom Blues",
                note: ""
            },
            {
                tag: "Support Build 2",
                set1: "Freedom_Blues", set2: "Hormone_Punk",
                set1Name: "4pc Freedom Blues", set2Name: "+ 2pc Hormone Punk",
                note: ""
            }
        ],
        skills: [
            { name: "Ex", level: "12", icon: "Ex.png" },
            { name: "Basic", level: "11", icon: "Attaque_basic.png" },
            { name: "Assist", level: "11", icon: "Assist.png" },
            { name: "Ult", level: "10", icon: "Ultime.png" }
        ],
        statPriority: {
            main: [
                { slot: "6", label: "Anomaly" },
                { slot: "5", label: "Physical DMG" },
                { slot: "4", label: "Anomaly" }
            ],
            sub: [
                { label: "Anomaly Proficiency", highlight: true },
                { label: "ATK %", highlight: false },
                { label: "PEN", highlight: false }
            ]
        },
        engines: [
            { tag: "Baseline 100%", name: "Roaring Ride", img: "Roaring_Ride.png" },
            { tag: "Moteur A", name: "Electro-Lip Gloss", img: "Electro-Lip_Gloss.png" },
            { tag: "Moteur A", name: "Weeping Gemini", img: "Weeping_Gemini.png" },
            { tag: "Moteur A", name: "Rainforest Gourmet", img: "Rainforest_Gourmet.png" }
        ],
        teams: [
            {
                name: "TEAM 01", tag: "Premium Team",
                members: [
                    { img: "Burnice.png", color: "#f05432", initial: "B" },
                    { img: "Caesar.png", color: "#e8a838", initial: "C" },
                    { img: "Piper.png", color: "#e8a838", initial: "P" }
                ]
            },
            {
                name: "TEAM 02", tag: "Premium Team II",
                members: [
                    { img: "Nekomata.png", color: "#e8a838", initial: "N" },
                    { img: "Pulchra.png", color: "#e8a838", initial: "P" },
                    { img: "Piper.png", color: "#e8a838", initial: "P" }
                ]
            },
            {
                name: "TEAM 03", tag: "Débutant",
                members: [
                    { img: "Nicole.png", color: "#f23c8a", initial: "N" },
                    { img: "Corin.png", color: "#e8a838", initial: "C" },
                    { img: "Piper.png", color: "#e8a838", initial: "P" }
                ]
            }
        ]
    }
};
