import { generateGenericGuide } from './generic.js';
import { agentDatabase } from '../data/agent_database.js';
import { generateGuideFromData } from './template.js';

export function getGuideHTML(agentName) {
    if (agentDatabase[agentName]) {
        return generateGuideFromData(agentName, agentDatabase[agentName]);
    } else {
        // Au cas où tu cliques sur un perso pas encore fait
        return generateGenericGuide(agentName);
    }
}

export { generateGenericGuide };
