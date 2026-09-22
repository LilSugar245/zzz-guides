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
import { generateGenericGuide } from './generic.js';

export const guides = {
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
    'remielle': generateRemielleGuide
};

export { generateGenericGuide };
