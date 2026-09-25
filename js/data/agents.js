export const colorMap = {
    'Physical': '#e8a838', 'Fire': '#f05432', 'Ice': '#3bbedb', 'Wind': '#3bbedb',
    'Electric': '#3182eb', 'Ether': '#f23c8a', 'Lumiflux': '#fba2d0', 'Auric Ink': '#5d57a6'
};

export const iconMap = {
    'Physical': 'physique.png', 'Fire': 'feu.png', 'Ice': 'Ice.png', 'Wind': 'Vent.png',
    'Electric': 'electrique.png', 'Ether': 'Ether.png', 'Lumiflux': 'Lumiflux.png', 'Auric Ink': 'Ether.png'
};

export const filterGroups = {
    'Ice': ['Ice'], 'Wind': ['Wind'], 'Ether': ['Ether', 'Auric Ink'], 'Lumiflux': ['Lumiflux'],
    'Physical': ['Physical'], 'Fire': ['Fire'], 'Electric': ['Electric'],
    'All': ['Ice', 'Wind', 'Ether', 'Auric Ink', 'Lumiflux', 'Physical', 'Fire', 'Electric']
};

export const agentsData = [
    { name: 'Piper', element: 'Physical', rank: 'A', faction: 'Fils de Calydon', role: 'Anomaly' },
    { name: 'Lucy', element: 'Fire', rank: 'A', faction: 'Fils de Calydon', role: 'Support' },
    { name: 'Zhu Yuan', element: 'Ether', rank: 'S', faction: "Division de l'Ordre urbain", role: 'Attack' },
    { name: 'Rina', element: 'Electric', rank: 'S', faction: "Société d'entretien Victoria", role: 'Support' },
    { name: 'Ellen', element: 'Ice', rank: 'S', faction: "Société d'entretien Victoria", role: 'Attack' },
    { name: 'Grace', element: 'Electric', rank: 'S', faction: 'Usines Belobog', role: 'Anomaly' },
    { name: 'Koleda', element: 'Fire', rank: 'S', faction: 'Usines Belobog', role: 'Stun' },
    { name: 'Soukaku', element: 'Ice', rank: 'A', faction: 'Section 6', role: 'Support' },
    { name: 'Soldier 11', element: 'Fire', rank: 'S', faction: 'Escouade Obole', role: 'Attack' },
    { name: 'Ben', element: 'Fire', rank: 'A', faction: 'Usines Belobog', role: 'Defense' },
    { name: 'Lycaon', element: 'Ice', rank: 'S', faction: "Société d'entretien Victoria", role: 'Stun' },
    { name: 'Corin', element: 'Physical', rank: 'A', faction: "Société d'entretien Victoria", role: 'Attack' },
    { name: 'Anton', element: 'Electric', rank: 'A', faction: 'Usines Belobog', role: 'Attack' },
    { name: 'Nekomata', element: 'Physical', rank: 'S', faction: 'Lièvres rusés', role: 'Attack' },
    { name: 'Nicole', element: 'Ether', rank: 'A', faction: 'Lièvres rusés', role: 'Support' },
    { name: 'Billy', element: 'Physical', rank: 'A', faction: 'Lièvres rusés', role: 'Attack' },
    { name: 'Anby', element: 'Electric', rank: 'A', faction: 'Lièvres rusés', role: 'Stun' },
    { name: 'Jane', element: 'Physical', rank: 'S', faction: "Équipe d'intervention spéciale des Enquêtes criminelles", role: 'Anomaly' },
    { name: 'Seth', element: 'Electric', rank: 'A', faction: "Division de l'Ordre urbain", role: 'Defense' },
    { name: 'Qingyi', element: 'Electric', rank: 'S', faction: "Division de l'Ordre urbain", role: 'Stun' },
    { name: 'Burnice', element: 'Fire', rank: 'S', faction: 'Fils de Calydon', role: 'Anomaly' },
    { name: 'Caesar', element: 'Physical', rank: 'S', faction: 'Fils de Calydon', role: 'Defense' },
    { name: 'Lighter', element: 'Fire', rank: 'S', faction: 'Fils de Calydon', role: 'Stun' },
    { name: 'Yanagi', element: 'Electric', rank: 'S', faction: 'Section 6', role: 'Anomaly' },
    { name: 'Harumasa', element: 'Electric', rank: 'S', faction: 'Section 6', role: 'Attack' },
    { name: 'Miyabi', element: 'Ice', rank: 'S', faction: 'Section 6', role: 'Anomaly' },
    { name: 'Evelyn', element: 'Fire', rank: 'S', faction: 'Étoiles de la Lyre', role: 'Attack' },
    { name: 'Astra', element: 'Ether', rank: 'S', faction: 'Étoiles de la Lyre', role: 'Support' },
    { name: 'Trigger', element: 'Electric', rank: 'S', faction: 'Escouade Obole', role: 'Stun' },
    { name: 'Pulchra', element: 'Physical', rank: 'A', faction: 'Fils de Calydon', role: 'Stun' },
    { name: 'Soldier 0 Anby', element: 'Electric', rank: 'S', faction: 'Forces de défense - Escouade Argent', role: 'Attack' },
    { name: 'Hugo', element: 'Ice', rank: 'S', faction: 'Oiseaux-moqueurs', role: 'Attack' },
    { name: 'Vivian', element: 'Ether', rank: 'S', faction: 'Oiseaux-moqueurs', role: 'Anomaly' },
    { name: 'Ju Fufu', element: 'Fire', rank: 'S', faction: 'Cimes de Yunkui', role: 'Stun' },
    { name: 'Yixuan', element: 'Auric Ink', rank: 'S', faction: 'Cimes de Yunkui', role: 'Rupture' },
    { name: 'Pan Yinhu', element: 'Physical', rank: 'A', faction: 'Cimes de Yunkui', role: 'Defense' },
    { name: 'Alice', element: 'Physical', rank: 'S', faction: 'Maison hantée', role: 'Anomaly' },
    { name: 'Yuzuha', element: 'Physical', rank: 'S', faction: 'Maison hantée', role: 'Support' },
    { name: 'Orphie and Magus', element: 'Fire', rank: 'S', faction: "Équipe d'intervention spéciale des Enquêtes criminelles", role: 'Attack' },
    { name: 'Seed', element: 'Electric', rank: 'S', faction: 'Escouade Obole', role: 'Attack' },
    { name: 'Yidhari', element: 'Ice', rank: 'S', faction: 'Maison hantée', role: 'Rupture' },
    { name: 'Manato', element: 'Fire', rank: 'A', faction: 'Maison hantée', role: 'Rupture' },
    { name: 'Lucia', element: 'Ether', rank: 'S', faction: 'Maison hantée', role: 'Support' },
    { name: 'Banyue', element: 'Fire', rank: 'S', faction: 'Autorité de conformité Krampus', role: 'Rupture' },
    { name: 'Dialyn', element: 'Physical', rank: 'S', faction: 'Autorité de conformité Krampus', role: 'Stun' },
    { name: 'Ye Shunguang', element: 'Physical', rank: 'S', faction: 'Cimes de Yunkui', role: 'Attack' },
    { name: 'Zhao', element: 'Ice', rank: 'S', faction: 'Autorité de conformité Krampus', role: 'Defense' },
    { name: 'Aria', element: 'Ether', rank: 'S', faction: "Anges de l'illusion", role: 'Anomaly' },
    { name: 'Sunna', element: 'Physical', rank: 'S', faction: "Anges de l'illusion", role: 'Support' },
    { name: 'Cissia', element: 'Electric', rank: 'S', faction: "Division de l'Ordre urbain", role: 'Attack' },
    { name: 'Nangong Yu', element: 'Ether', rank: 'S', faction: "Anges de l'illusion", role: 'Stun' },
    { name: 'Starlight Billy', element: 'Physical', rank: 'S', faction: 'Lièvres rusés', role: 'Rupture' },
    { name: 'Promeia', element: 'Ice', rank: 'S', faction: 'Autorité de conformité Krampus', role: 'Anomaly' },
    { name: 'Norma', element: 'Fire', rank: 'S', faction: 'Département de stratégie externe', role: 'Stun' },
    { name: 'Velina', element: 'Wind', rank: 'S', faction: 'Département de stratégie externe', role: 'Anomaly' },
    { name: 'Pyrois', element: 'Ether', rank: 'S', faction: 'Phaéthon', role: 'Attack' },
    { name: 'Sigrid', element: 'Ice', rank: 'S', faction: 'Département de la patrouille aérienne', role: 'Attack' },
    { name: 'Remielle', element: 'Lumiflux', rank: 'S', faction: 'Entente de Dayat', role: 'Anomaly' },
    { name: 'Claret', element: 'Electric', rank: 'S', faction: 'Atelier Flint', role: 'Armorer' },
    { name: 'Roxy', element: 'Wind', rank: 'S', faction: 'Atelier Flint', role: 'Stun' }
];
