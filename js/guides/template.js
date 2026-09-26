import { iconMap } from '../data/agents.js';
import { mindscapesData } from '../data/mindscapes.js'; // <-- IMPORT DU NOUVEAU FICHIER
import { currentLang, ui, tData, tEngine, tDisc, tTerm, tStats } from '../i18n.js';

export function generateGuideFromData(agentName, data) {
    const iconName = data.elementIcon || iconMap[data.element] || 'physique.png';
    const c = data.color;
    const txt = ui[currentLang];
    
    // Récupère les Mindscapes pour l'agent en cours s'ils existent
    const mindscapes = mindscapesData[agentName];

    return `
    <div class="max-w-[1400px] w-full mx-auto pb-20 pt-4 text-zinc-100">
        <!-- HEADER -->
        <div class="flex items-end justify-between mb-8 border-b-2 border-zinc-800 pb-6 stagger-anim delay-1">
            <div class="flex flex-col">
                <span class="text-zinc-400 font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-2">${tData(data.factionTitle)}</span>
                <h2 class="text-5xl sm:text-7xl md:text-8xl font-display font-black italic text-white leading-none uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-colors duration-500 cursor-default" style="text-shadow: 0 0 20px ${c}40;" onmouseover="this.style.color='${c}'" onmouseout="this.style.color='white'">${agentName}</h2>
            </div>
            <div class="flex gap-2">
                <div class="bg-[#1a1a1a] rounded-xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg border border-white/5">
                    <img src="assets/Icone/${iconName}" loading="lazy" class="w-7 h-7 sm:w-9 sm:h-9 object-contain filter" style="drop-shadow: 0 0 8px ${c};">
                </div>
                <div class="rounded-xl text-black w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center font-black text-2xl sm:text-3xl" style="background-color: ${c}; box-shadow: 0 0 15px ${c}40;">${data.rank}</div>
            </div>
        </div>

        <!-- STATS -->
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
                </div>
                `).join('')}
            </div>
        </div>

        <!-- GRID 2 COLS -->
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <!-- COL GAUCHE -->
            <div class="flex flex-col gap-10 stagger-anim delay-3">
                
                <!-- DISQUES -->
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
                                <div class="flex flex-col">
                                    <span class="font-black text-sm uppercase text-white tracking-wide">${tDisc(disc.set1Name)}</span>
                                    <span class="font-bold text-xs text-zinc-400">${tDisc(disc.set2Name)}</span>
                                </div>
                            </div>
                            ${disc.note ? `<p class="text-[10px] text-zinc-400 mt-2">${tData(disc.note)}</p>` : ''}
                        </div>
                        `).join('')}
                    </div>
                </div>

                <!-- SKILLS -->
                <div>
                    <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 pl-4 leading-none tracking-wide mb-6" style="border-color: ${c};">${txt.skillPrio}</h3>
                    <div class="flex flex-wrap items-center justify-between sm:justify-start gap-3 md:gap-5 bg-[#0f0f0f] p-5 rounded-2xl border border-zinc-800 shadow-inner">
                        ${data.skills.map((skill, index) => `
                        <div class="flex flex-col items-center gap-2 ${index === 0 ? 'group cursor-default' : 'opacity-80'}">
                            <div class="${index === 0 ? 'relative' : 'w-12 h-12 rounded-full border-2 border-zinc-700 bg-black overflow-hidden'}">
                                ${index === 0 ? `
                                <div class="absolute inset-0 rounded-full blur-md opacity-40" style="background-color: ${c};"></div>
                                <div class="w-12 h-12 rounded-full border-2 bg-black relative z-10 overflow-hidden" style="border-color: ${c};">
                                ` : ''}
                                <img src="assets/Skills/${skill.icon}" loading="lazy" class="w-full h-full object-cover">
                                ${index === 0 ? `</div>` : ''}
                            </div>
                            <span class="text-[10px] font-black uppercase tracking-wider" style="color: ${index === 0 ? c : '#a1a1aa'};">${skill.name}${skill.level ? `(${skill.level})` : ''}</span>
                        </div>
                        ${index < data.skills.length - 1 ? `<svg class="w-5 h-5 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>` : ''}
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- COL DROITE -->
            <div class="flex flex-col gap-10 stagger-anim delay-4">
                
                <!-- MAIN / SUB STATS -->
                <div>
                    <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 pl-4 leading-none tracking-wide mb-6" style="border-color: ${c};">${txt.statistics}</h3>
                    <div class="flex flex-col gap-2.5 mb-5">
                        ${data.statPriority.main.map((m, index) => `
                        <div class="flex items-center gap-4 bg-[#121212] p-3.5 rounded-xl border ${index === 0 ? 'border-zinc-600 shadow-lg' : 'border-zinc-800'}">
                            <span class="font-black text-xl w-6 text-center" style="color: ${index === 0 ? c : (index === 1 ? '#ef4444' : '#71717a')};">${m.slot}</span>
                            <span class="font-bold uppercase tracking-wider text-sm flex-1 ${index === 0 ? 'text-white' : 'text-zinc-300'}">${tStats(m.label)}</span>
                        </div>
                        `).join('')}
                    </div>
                    <div class="bg-[#0f0f0f] p-4 rounded-xl border border-zinc-800/80">
                        <span class="text-[10px] font-black text-zinc-500 uppercase tracking-widest block mb-3">${txt.substatsPrio}</span>
                        <div class="flex flex-wrap items-center gap-2 text-xs font-bold uppercase">
                            ${data.statPriority.sub.map((s, index) => `
                            <span class="bg-[#1a1a1a] px-2.5 py-1.5 rounded-md border border-zinc-700" style="color: ${s.highlight ? c : '#d4d4d8'};">${tStats(s.label)}</span>${index < data.statPriority.sub.length - 1 ? `<span class="text-zinc-700">&gt;&gt;</span>` : ''}
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- ENGINES -->
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
                        </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>

        <!-- TEAMS -->
        <div class="mt-14 border-t border-zinc-800/80 pt-10 stagger-anim delay-5">
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
                </div>
                `).join('')}
            </div>
        </div>

        <!-- MINDSCAPES (S'affiche uniquement si les données existent dans mindscapes.js) -->
        ${mindscapes ? `
        <div class="mt-14 border-t border-zinc-800/80 pt-10 stagger-anim delay-6">
            <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 pl-4 leading-none tracking-wide mb-8" style="border-color: ${c};">Mindscapes</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${mindscapes.map(ms => `
                <div class="bg-[#121212] border border-zinc-800 rounded-xl p-5 shadow-lg relative overflow-hidden group transition-colors hover:border-zinc-600">
                    <div class="flex items-center gap-3 mb-3">
                        <span class="bg-[#1a1a1a] font-black text-sm px-2.5 py-1 rounded-lg border shadow-sm" style="color: ${c}; border-color: ${c}40; box-shadow: 0 0 10px ${c}20;">${ms.rank}</span>
                        <h4 class="text-white font-black uppercase tracking-wide text-sm">${tData(ms.title)}</h4>
                    </div>
                    <p class="text-zinc-400 text-xs leading-relaxed">${tData(ms.desc)}</p>
                </div>
                `).join('')}
            </div>
        </div>
        ` : ''}

    </div>
    `;
}
