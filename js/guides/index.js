import { generateTriggerGuide } from './trigger.js';
import { generateJaneDoeGuide } from './jane.js';
import { generateClaretGuide } from './claret.js';
import { generateYeShunguangGuide } from './yeshunguang.js';
import { generateYanagiGuide } from './yanagi.js';
import { generateNangongYuGuide } from './nangongyu.js';
import { generateBurniceGuide } from './burnice.js';
import { generateYidhariGuide } from './yidhari.js';
import { generateEllenGuide } from './ellen.js';
import { generateVivianGuide } from './vivian.js';
import { generateYuzuhaGuide } from './yuzuha.js';
import { generateSeedGuide } from './seed.js';
import { generateRemielleGuide } from './remielle.js';
import { generateVelinaGuide } from './velina.js';
import { generateCissiaGuide } from './cissia.js';
import { generateBanyueGuide } from './banyue.js';
import { generateNicoleGuide } from './nicole.js';
import { generateLycaonGuide } from './lycaon.js';
import { generateKoledaGuide } from './koleda.js';
import { generateGenericGuide } from './generic.js';

// NOUVEAU SYSTEME DE TEMPLATE
import { agentDatabase } from '../data/agent_database.js';
import { generateGuideFromData } from './template.js';

const oldGuides = {
    'trigger': generateTriggerGuide,
    'jane': generateJaneDoeGuide,
    'claret': generateClaretGuide,
    'ye shunguang': generateYeShunguangGuide,
    'yanagi': generateYanagiGuide,
    'nangong yu': generateNangongYuGuide,
    'burnice': generateBurniceGuide,
    'yidhari': generateYidhariGuide,
    'ellen': generateEllenGuide,
    'vivian': generateVivianGuide,
    'yuzuha': generateYuzuhaGuide,
    'seed': generateSeedGuide,
    'remielle': generateRemielleGuide,
    'velina': generateVelinaGuide,
    'cissia': generateCissiaGuide,
    'banyue': generateBanyueGuide,
    'nicole': generateNicoleGuide,
    'lycaon': generateLycaonGuide,
    'koleda': generateKoledaGuide
};

// Fonction universelle appelée par app.js
export function getGuideHTML(agentName) {
    // 1. Cherche dans la nouvelle base de données JSON
    if (agentDatabase[agentName]) {
        return generateGuideFromData(agentName, agentDatabase[agentName]);
    } 
    // 2. Sinon, cherche dans les vieux fichiers hardcodés
    else if (oldGuides[agentName.toLowerCase()]) {
        return oldGuides[agentName.toLowerCase()]();
    } 
    // 3. Sinon, génère une fiche vide par défaut
    else {
        return generateGenericGuide(agentName);
    }
}
