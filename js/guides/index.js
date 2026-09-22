import { generateTriggerGuide } from './trigger.js';
import { generateJaneDoeGuide } from './jane.js';
import { generateClaretGuide } from './claret.js';
import { generateYeShunguangGuide } from './yeshunguang.js';
import { generateYanagiGuide } from './yanagi.js';
import { generateNangongYuGuide } from './nangongyu.js';
import { generateBurniceGuide } from './burnice.js';
import { generateYidhariGuide } from './yidhari.js';
import { generateGenericGuide } from './generic.js';

export const guides = {
    'trigger': generateTriggerGuide,
    'jane': generateJaneDoeGuide,
    'claret': generateClaretGuide,
    'ye shunguang': generateYeShunguangGuide,
    'yanagi': generateYanagiGuide,
    'nangong yu': generateNangongYuGuide,
    'burnice': generateBurniceGuide,
    'yidhari': generateYidhariGuide
};

export { generateGenericGuide };
