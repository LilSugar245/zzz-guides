import { iconMap } from '../data/agents.js';
import { skinsData } from '../data/skins.js';
import { mindscapesData } from '../data/mindscapes.js';
import { currentLang, ui, tData, tEngine, tDisc, tTerm, tStats } from '../i18n.js';

// --- BLOCS DE CONSTRUCTION (COMPOSANTS) ---

function buildHeader(agentName, data, c, iconName) {
    return `
    <div class="flex items-end justify-between mb-8 stagger-anim delay-1">
        <div class="flex flex-col">
            <span class="text-zinc-400 font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-2">${tData(data.factionTitle)}</span>
            <h2 class="text-5xl sm:text-7xl md:text-8xl font-display font-black italic text-white leading-none uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-colors duration-500 cursor-default" style="text-shadow: 0 0 20px ${c}40;" onmouseover="this.style.color='${c}'" onmouseout="this.style.color='white'">${agentName}</h2>
        </div>
        <div class="flex gap-2">
            <div class="bg-[#1a1a1a] rounded-xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg border border-white/5"><img src="assets/Icone/${iconName}" loading="lazy" class="w-7 h-7 sm:w-9 sm:h-9 object-contain filter" style="drop-shadow: 0 0 8px ${c};"></div>
            <div class="rounded-xl text-black w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center font-black text-2xl sm:text-3xl" style="background-color: ${c}; box-shadow: 0 0 15px ${c}40;">${data.rank}</div>
        </div>
    </div>`;
}

function buildTabs(c, hasMindscapes) {
    if (!hasMindscapes) return '';
    return `
    <div class="flex items-center gap-6 mb-10 border-b border-zinc-800 pb-px relative stagger-anim delay-2 z-30">
        <button onclick="window.switchTab('guide')" id="tab-btn-guide" class="agent-modal-tab active text-white font-display font-black uppercase tracking-widest pb-3 transition-colors text-sm sm:text-base" style="color: ${c};">⚔️ Guide de Combat</button>
        <button onclick="window.switchTab('mindscapes')" id="tab-btn-mindscapes" class="agent-modal-tab text-zinc-500 font-display font-black uppercase tracking-widest pb-3 hover:text-white transition-colors text-sm sm:text-base">🧠 Cinéma Mental</button>
    </div>`;
}

function buildStats(data, c, txt) {
    return `
    <div class="bg-[#111] text-white rounded-2xl p-5 sm:p-6 mb-10 shadow-2xl border border-zinc-800 relative overflow-hidden group stagger-anim delay-2">
        <div class="absolute -right-10 -top-10 w-48 h-48 rounded-full blur-3xl transition-all duration-700" style="background-color: ${c}10; group-hover:background-color: ${c}20;"></div>
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-5 relative z-10 gap-2 border-b border-zinc-800/50 pb-4">
            <h3 class="font-display font-black uppercase text-xl sm:text-2xl tracking-wide" style="color: ${c};">${txt.statsLabel}</h3>
        </div>
        <div class="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            ${data.stats.map(stat => `
            <div class="bg-black/50 p-4 rounded-xl border border-zinc-800 w-full sm:flex-1 shadow-inner flex justify-between items-center">
                <span class="block text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">${tStats(stat.label)}</span>
                <span class="text-white font-black text-xl drop-shadow-md">${stat.value}</span>
            </div>`).join('')}
        </div>
    </div>`;
}

function buildDiscs(data, c, txt) {
    return `
    <div>
        <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 pl-4 leading-none tracking-wide mb-6" style="border-color: ${c};">${txt.discSets}</h3>
        <div class="flex flex-col gap-5">
            ${data.discs.map((disc, index) => `
            <div class="bg-[#121212] border border-zinc-700 rounded-xl p-5 transition-all duration-300 relative shadow-xl group">
                <div class="absolute -top-3 -right-3 text-black text-[10px] font-black px-3 py-1.5 rounded-lg border-2 border-black uppercase" style="background-color: ${index === 0 ? c : '#27272a'}; color: ${index === 0 ? '#000' : '#fff'}; box-shadow: 0 0 15px ${index === 0 ? c+'60' : 'transparent'};">${tData(disc.tag)}</div>
                <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
                    <div class="flex -space-x-4">
                        <div class="relative w-14 h-14 rounded-full border-2 border-zinc-800 bg-black z-10 overflow-hidden shadow-lg"><img src="assets/Disque/${disc.set1}.png" loading="lazy" class="w-full h-full object-cover"></div>
                        <div class="relative w-12 h-12 rounded-full border-2 border-zinc-800 bg-black z-0 opacity-80 overflow-hidden"><img src="assets/Disque/${disc.set2}.png" loading="lazy" class="w-full h-full object-cover"></div>
                    </div>
                    <div class="flex flex-col"><span class="font-black text-sm uppercase text-white tracking-wide">${tDisc(disc.set1Name)}</span><span class="font-bold text-xs text-zinc-400">${tDisc(disc.set2Name)}</span></div>
                </div>
                ${disc.note ? `<p class="text-[10px] text-zinc-400 mt-2">${tData(disc.note)}</p>` : ''}
            </div>`).join('')}
        </div>
    </div>`;
}

function buildSkillsAndSkins(agentName, data, skins, c, txt) {
    let skillsHtml = `
    <div>
        <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 pl-4 leading-none tracking-wide mb-6" style="border-color: ${c};">${txt.skillPrio}</h3>
        <div class="flex flex-wrap items-center justify-between sm:justify-start gap-3 md:gap-5 bg-[#0f0f0f] p-5 rounded-2xl border border-zinc-800 shadow-inner">
            ${data.skills.map((skill, index) => `
            <div class="flex flex-col items-center gap-2 ${index === 0 ? 'group cursor-default' : 'opacity-80'}">
                <div class="${index === 0 ? 'relative' : 'w-12 h-12 rounded-full border-2 border-zinc-700 bg-black overflow-hidden'}">
                    ${index === 0 ? `<div class="absolute inset-0 rounded-full blur-md opacity-40" style="background-color: ${c};"></div><div class="w-12 h-12 rounded-full border-2 bg-black relative z-10 overflow-hidden" style="border-color: ${c};">` : ''}
                    <img src="assets/Skills/${skill.icon}" loading="lazy" class="w-full h-full object-cover">
                    ${index === 0 ? `</div>` : ''}
                </div>
                <span class="text-[10px] font-black uppercase tracking-wider" style="color: ${index === 0 ? c : '#a1a1aa'};">${skill.name}${skill.level ? `(${skill.level})` : ''}</span>
            </div>
            ${index < data.skills.length - 1 ? `<svg class="w-5 h-5 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>` : ''}
            `).join('')}
        </div>
    </div>`;

    let skinsHtml = skins ? `
    <div class="mt-auto bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-4 sm:p-5 flex flex-col gap-4 relative overflow-hidden group shadow-xl">
        <div class="absolute -top-10 -right-10 w-40 h-40 blur-[50px] opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-40" style="background-color: ${c};"></div>
        <div class="flex items-center justify-between relative z-10 border-b border-zinc-800/80 pb-3">
            <h4 class="text-white font-display font-black text-lg uppercase tracking-widest flex items-center gap-2"><svg class="w-5 h-5" style="color: ${c};" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>Fashion</h4>
            <span id="skin-id-badge" class="text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-400 shadow-inner">ID: ${skins[0].id}</span>
        </div>
        <div class="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden bg-gradient-to-b from-black to-[#111] border border-zinc-800 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] z-10 flex items-center justify-center">
            <img id="skin-main-img" src="assets/Skins/${skins[0].img}" class="w-full h-full object-contain transform transition-all duration-700 hover:scale-105" onerror="this.src='https://placehold.co/400x400/111/444?text=SKIN'">
        </div>
        <div class="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1 z-10">
            ${skins.map((skin, idx) => `
            <button onclick="window.changeSkin('${agentName}', ${idx})" id="skin-thumb-${idx}" class="skin-thumb shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${idx === 0 ? 'opacity-100 scale-100 shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'opacity-50 scale-90 border-transparent hover:opacity-80'}" style="border-color: ${idx === 0 ? c : 'transparent'};">
                <img src="assets/Skins/${skin.img}" class="w-full h-full object-cover object-top">
            </button>`).join('')}
        </div>
        <div class="bg-[#121212] p-4 rounded-xl border border-zinc-800 z-10 relative mt-2 shadow-inner">
            <h5 id="skin-title" class="text-xs font-black uppercase tracking-wider text-white mb-2" style="color: ${c};">${tData(skins[0].name)}</h5>
            <p id="skin-desc" class="text-[11px] text-zinc-400 leading-relaxed italic border-l-2 pl-3 border-zinc-700 transition-opacity duration-300">${tData(skins[0].desc)}</p>
        </div>
    </div>` : `<div class="mt-auto h-2"></div>`;

    return `<div class="flex flex-col h-full gap-8">${skillsHtml}${skinsHtml}</div>`;
}

function buildStatPriority(data, c, txt) {
    return `
    <div>
        <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 pl-4 leading-none tracking-wide mb-6" style="border-color: ${c};">${txt.statistics}</h3>
        <div class="flex flex-col gap-2.5 mb-5">
            ${data.statPriority.main.map((m, index) => `
            <div class="flex items-center gap-4 bg-[#121212] p-3.5 rounded-xl border ${index === 0 ? 'border-zinc-600 shadow-lg' : 'border-zinc-800'}">
                <span class="font-black text-xl w-6 text-center" style="color: ${index === 0 ? c : (index === 1 ? '#ef4444' : '#71717a')};">${m.slot}</span>
                <span class="font-bold uppercase tracking-wider text-sm flex-1 ${index === 0 ? 'text-white' : 'text-zinc-300'}">${tStats(m.label)}</span>
            </div>`).join('')}
        </div>
        <div class="bg-[#0f0f0f] p-4 rounded-xl border border-zinc-800/80">
            <span class="text-[10px] font-black text-zinc-500 uppercase tracking-widest block mb-3">${txt.substatsPrio}</span>
            <div class="flex flex-wrap items-center gap-2 text-xs font-bold uppercase">
                ${data.statPriority.sub.map((s, index) => `
                <span class="bg-[#1a1a1a] px-2.5 py-1.5 rounded-md border border-zinc-700" style="color: ${s.highlight ? c : '#d4d4d8'};">${tStats(s.label)}</span>${index < data.statPriority.sub.length - 1 ? `<span class="text-zinc-700">&gt;&gt;</span>` : ''}
                `).join('')}
            </div>
        </div>
    </div>`;
}

function buildEngines(data, c, txt) {
    return `
    <div>
        <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 pl-4 leading-none tracking-wide mb-6" style="border-color: ${c};">${txt.engines}</h3>
        <div class="flex flex-col gap-3">
            ${data.engines.map((eng, index) => `
            <div class="flex gap-4 p-3.5 rounded-xl border bg-[#121212]" style="border-color: ${index === 0 ? c+'40' : '#27272a'}; box-shadow: ${index === 0 ? '0 0 15px '+c+'10' : 'none'};">
                <div class="w-14 h-14 bg-black rounded-lg border border-zinc-800 overflow-hidden"><img src="assets/W-Engine/${eng.img}" loading="lazy" class="w-full h-full object-cover"></div>
                <div class="flex flex-col justify-center">
                    <span class="text-[10px] uppercase font-bold mb-1 px-2 py-0.5 rounded w-fit" style="background-color: ${index === 0 ? c+'20' : 'transparent'}; color: ${index === 0 ? c : '#a1a1aa'};">${tData(eng.tag)}</span>
                    <span class="font-black text-xs uppercase tracking-wide" style="color: ${index === 0 ? '#fff' : '#d4d4d8'};">${tEngine(eng.name)}</span>
                </div>
            </div>`).join('')}
        </div>
    </div>`;
}

function buildTeams(data, c, txt) {
    return `
    <div class="border-t border-zinc-800/80 pt-10">
        <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 pl-4 leading-none tracking-wide mb-8" style="border-color: ${c};">${txt.teams}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${data.teams.map((team, index) => `
            <div class="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden group transition-colors" style="hover:border-color: ${c}80;">
                <div class="absolute right-4 -top-5 text-[85px] font-display font-black text-zinc-800/20 italic tracking-tighter leading-none pointer-events-none select-none transform group-hover:scale-110 transition-all duration-700">0${index+1}</div>
                <div class="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-3 relative z-10">
                    <span class="text-white font-display font-black italic text-2xl tracking-widest drop-shadow-md">${tData(team.name)}</span>
                    <span class="text-[10px] font-bold uppercase border px-3 py-1 rounded tracking-wide shadow-sm" style="background-color: ${index===0 ? c+'20' : '#27272a'}; color: ${index===0 ? c : '#a1a1aa'}; border-color: ${index===0 ? c+'40' : '#3f3f46'};">${tData(team.tag)}</span>
                </div>
                <div class="flex items-center justify-between gap-2 relative z-10">
                    ${team.members.map((m, i) => `
                    <div class="flex flex-col items-center gap-3">
                        <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 bg-black overflow-hidden relative" style="border-color: ${m.color || '#52525b'}; box-shadow: ${i===0 ? '0 0 15px '+m.color+'40' : 'none'};">
                            ${m.img ? `<img src="assets/Agents/${m.img}" loading="lazy" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/${m.color.replace('#','')}?text=${m.initial}'">` : `<span class="text-xs font-bold text-center text-zinc-400 px-2 flex h-full items-center justify-center leading-tight">${tTerm(m.role)}</span>`}
                        </div>
                    </div>
                    ${i < team.members.length - 1 ? `<div class="w-6 h-px bg-zinc-700"></div>` : ''}
                    `).join('')}
                </div>
            </div>`).join('')}
        </div>
    </div>`;
}

function buildMindscapesTab(agentName, mindscapes, c) {
    if (!mindscapes) return '';
    return `
    <div id="tab-content-mindscapes" class="hidden opacity-0 transition-all duration-500 transform translate-y-4 absolute top-40 left-0 right-0 px-6 md:px-10 lg:px-14 pb-20">
        <div class="bg-[#111] border border-zinc-800 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col xl:flex-row gap-10">
            <div class="absolute -bottom-20 -right-20 w-64 h-64 blur-[80px] opacity-10 pointer-events-none" style="background-color: ${c};"></div>
            
            <div class="w-full xl:w-[45%] flex flex-col justify-center items-center relative z-10 border-r border-zinc-800/80 pr-0 xl:pr-10">
                <div class="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-black overflow-hidden relative shadow-[0_0_40px_rgba(0,0,0,1)] mb-8">
                    <img id="ms-visual-img" src="assets/Mindscapes/${agentName}_M0.png" class="w-full h-full object-cover transition-all duration-700 ease-in-out" onerror="this.src='https://placehold.co/400x400/111/444?text=LORE'">
                    <div class="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,1)] pointer-events-none"></div>
                </div>
                <div class="w-full px-4">
                    <div class="relative w-full h-2 bg-zinc-900 rounded-full shadow-inner">
                        <div id="mindscapeProgressLine" class="absolute top-0 left-0 h-full rounded-full mindscape-line" style="background-color: ${c}; width: 16.66%;"></div>
                        <div class="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-0">
                            ${mindscapes.map((ms, idx) => `
                                <div onclick="window.selectMindscape('${agentName}', ${idx})" id="ms-node-${idx}" class="mindscape-node w-6 h-6 rounded-full border-[5px] border-[#111] flex items-center justify-center text-[10px] font-black z-10 ${idx === 0 ? 'active' : ''}" style="background-color: ${idx === 0 ? c : '#27272a'}; color: ${idx === 0 ? '#000' : '#888'}; box-shadow: ${idx === 0 ? '0 0 15px ' + c : 'none'}; cursor: pointer;">
                                    ${idx + 1}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full xl:w-[55%] flex flex-col justify-center relative z-10">
                <div class="flex items-center gap-3 mb-6">
                    <span id="ms-rank-badge" class="font-display font-black text-xl sm:text-2xl italic px-3 py-1 rounded-lg border shadow-[0_0_15px_rgba(0,0,0,0.5)]" style="color: ${c}; border-color: ${c}40; background-color: ${c}10;">M1</span>
                    <h4 id="ms-title-text" class="text-white font-display font-black uppercase tracking-widest text-2xl sm:text-3xl drop-shadow-md">${tData(mindscapes[0].title)}</h4>
                </div>
                <div class="bg-black/50 border border-zinc-800/80 p-6 rounded-2xl shadow-inner min-h-[150px]">
                    <p id="ms-desc-text" class="text-sm sm:text-base text-zinc-400 leading-relaxed transition-opacity duration-300">${tData(mindscapes[0].desc)}</p>
                </div>
            </div>
        </div>
    </div>`;
}

// --- FONCTION PRINCIPALE (ASSEMBLAGE) ---

export function generateGuideFromData(agentName, data) {
    const iconName = data.elementIcon || iconMap[data.element] || 'physique.png';
    const c = data.color;
    const txt = ui[currentLang];
    
    // Récupération des données externes (si elles existent)
    const mindscapes = mindscapesData ? mindscapesData[agentName] : null;
    const skins = skinsData ? skinsData[agentName] : null;

    return `
    <div class="max-w-[1400px] w-full mx-auto pb-20 pt-4 text-zinc-100" style="--agent-color: ${c};">
        ${buildHeader(agentName, data, c, iconName)}
        ${buildTabs(c, mindscapes)}
        
        <!-- ONGLET 1 : LE GUIDE -->
        <div id="tab-content-guide" class="block opacity-100 transition-all duration-500 transform translate-y-0">
            ${buildStats(data, c, txt)}
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-10 mb-14">
                <div class="flex flex-col gap-10">
                    ${buildDiscs(data, c, txt)}
                    ${buildSkillsAndSkins(agentName, data, skins, c, txt)}
                </div>
                <div class="flex flex-col gap-10">
                    ${buildStatPriority(data, c, txt)}
                    ${buildEngines(data, c, txt)}
                </div>
            </div>
            ${buildTeams(data, c, txt)}
        </div>

        <!-- ONGLET 2 : LES MINDSCAPES -->
        ${buildMindscapesTab(agentName, mindscapes, c)}
    </div>
    `;
}
