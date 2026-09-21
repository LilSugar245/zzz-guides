import { generateTriggerGuide } from './trigger.js';
import { generateJaneDoeGuide } from './jane.js';
import { generateClaretGuide } from './claret.js';
import { generateYeShunguangGuide } from './yeshunguang.js';
import { generateGenericGuide } from './generic.js';

export const guides = {
    'trigger': generateTriggerGuide,
    'jane': generateJaneDoeGuide,
    'claret': generateClaretGuide,
    'ye shunguang': generateYeShunguangGuide
};

export { generateGenericGuide };