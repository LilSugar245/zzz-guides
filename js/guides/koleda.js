export function generateKoledaGuide() {
    return `
    <div class="max-w-[1400px] w-full mx-auto pb-20 pt-4 text-zinc-100">
        <div class="flex items-end justify-between mb-8 border-b-2 border-zinc-800 pb-6 stagger-anim delay-1">
            <div class="flex flex-col">
                <span class="text-zinc-500 font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-2">Belobog Heavy Industries</span>
                <h2 class="text-5xl sm:text-7xl md:text-8xl font-display font-black italic text-white leading-none uppercase drop-shadow-[0_0_20px_rgba(240,84,50,0.2)] hover:text-[#f05432] transition-colors duration-500 cursor-default">KOLEDA</h2>
            </div>
            <div class="flex gap-2">
                <div class="bg-[#1a1a1a] rounded-xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg border border-white/5">
                    <img src="assets/Icone/feu.png" class="w-7 h-7 sm:w-9 sm:h-9 object-contain filter drop-shadow-[0_0_8px_rgba(240,84,50,1)]">
                </div>
                <div class="bg-[#f05432] rounded-xl text-black w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center font-black text-2xl sm:text-3xl shadow-[0_0_15px_rgba(240,84,50,0.3)]">S</div>
            </div>
        </div>

        <div class="bg-[#111] text-white rounded-2xl p-5 sm:p-6 mb-10 shadow-2xl border border-zinc-800 relative overflow-hidden group stagger-anim delay-2">
            <div class="absolute -right-10 -top-10 w-48 h-48 bg-[#f05432]/5 rounded-full blur-3xl group-hover:bg-[#f05432]/15 transition-all duration-700"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-5 relative z-10 gap-2 border-b border-zinc-800/50 pb-4">
                <h3 class="text-[#f05432] font-display font-black uppercase text-xl sm:text-2xl tracking-wide">Stats recommandées</h3>
            </div>
            <div class="flex flex-col sm:flex-row items-center gap-4 relative z-10">
                <div class="bg-black/50 p-4 rounded-xl border border-zinc-800 w-full sm:flex-1 shadow-inner flex justify-between items-center">
                    <span class="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1.5">Impact</span>
                    <span class="text-white font-black text-xl drop-shadow-md">≥ 190</span>
                </div>
                <div class="bg-black/50 p-4 rounded-xl border border-zinc-800 w-full sm:flex-1 shadow-inner flex justify-between items-center">
                    <span class="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1.5">Energie</span>
                    <span class="text-white font-black text-xl drop-shadow-md">≥ 1.2</span>
                </div>
                <div class="bg-black/50 p-4 rounded-xl border border-zinc-800 w-full sm:flex-1 shadow-inner flex justify-between items-center">
                    <span class="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1.5">Attaque</span>
                    <span class="text-white font-black text-xl drop-shadow-md">≥ 2400</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div class="flex flex-col gap-10 stagger-anim delay-3">
                <div>
                    <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 border-[#f05432] pl-4 leading-none tracking-wide mb-6">Sets de Disques</h3>
                    <div class="flex flex-col gap-5">
                        <div class="bg-[#121212] border border-zinc-700 rounded-xl p-5 hover:border-[#f05432]/50 transition-all duration-300 relative shadow-xl group">
                            <div class="absolute -top-3 -right-3 bg-[#f05432] text-black text-[10px] font-black px-3 py-1.5 rounded-lg border-2 border-black uppercase shadow-[0_0_15px_rgba(240,84,50,0.4)]">Stun Build 👑</div>
                            <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                                <div class="flex -space-x-4">
                                    <div class="relative w-16 h-16 rounded-full border-2 border-zinc-800 bg-black z-10 overflow-hidden shadow-lg group-hover:scale-105 transition-transform"><img src="assets/Disque/Shockstar_Disco.png" onerror="this.src='https://placehold.co/100/111/f05432?text=SD';" class="w-full h-full object-cover"></div>
                                    <div class="relative w-14 h-14 rounded-full border-2 border-zinc-800 bg-black z-0 opacity-80 overflow-hidden"><img src="assets/Disque/Inferno_Metal.png" onerror="this.src='https://placehold.co/100/111/fff?text=IM';" class="w-full h-full object-cover"></div>
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-black text-sm uppercase text-white tracking-wide">4pc Shockstar Disco</span>
                                    <span class="font-bold text-xs text-zinc-500">+ 2pc Inferno Metal</span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#0f0f0f] border border-zinc-800 rounded-xl p-4 hover:border-zinc-600 transition-colors duration-300 relative">
                            <div class="absolute -top-2 -right-2 bg-zinc-800 text-zinc-300 text-[10px] font-black px-2 py-1 rounded-md uppercase border border-zinc-700">Stun Build II</div>
                            <div class="flex items-center gap-4 mb-2">
                                <div class="flex -space-x-3">
                                    <div class="relative w-12 h-12 rounded-full border border-zinc-800 bg-black z-10 overflow-hidden"><img src="assets/Disque/Shockstar_Disco.png" onerror="this.src='https://placehold.co/100/111/f05432?text=SD';" class="w-full h-full object-cover"></div>
                                    <div class="relative w-10 h-10 rounded-full border border-zinc-800 bg-black z-0 opacity-80 overflow-hidden"><img src="assets/Disque/Swing_Jazz.png" onerror="this.src='https://placehold.co/100/111/fff?text=SJ';" class="w-full h-full object-cover"></div>
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-black text-xs uppercase text-zinc-200">4pc Shockstar Disco</span>
                                    <span class="font-bold text-[10px] text-zinc-500">+ 2pc Swing Jazz</span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#0f0f0f] border border-zinc-800 rounded-xl p-4 hover:border-zinc-600 transition-colors duration-300 relative">
                            <div class="absolute -top-2 -right-2 bg-zinc-800 text-zinc-300 text-[10px] font-black px-2 py-1 rounded-md uppercase border border-zinc-700">Stun / DPS Build</div>
                            <div class="flex items-center gap-4 mb-2">
                                <div class="flex -space-x-3">
                                    <div class="relative w-12 h-12 rounded-full border border-zinc-800 bg-black z-10 overflow-hidden"><img src="assets/Disque/Shockstar_Disco.png" onerror="this.src='https://placehold.co/100/111/f05432?text=SD';" class="w-full h-full object-cover"></div>
                                    <div class="relative w-10 h-10 rounded-full border border-zinc-800 bg-black z-0 opacity-80 overflow-hidden"><img src="assets/Disque/Woodpecker_Electro.png" onerror="this.src='https://placehold.co/100/111/fff?text=WE';" class="w-full h-full object-cover"></div>
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-black text-xs uppercase text-zinc-200">4pc Shockstar Disco</span>
                                    <span class="font-bold text-[10px] text-zinc-500">+ 2pc Woodpecker Electro</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 border-[#f05432] pl-4 leading-none tracking-wide mb-6">Priorité Compétences</h3>
                    <div class="flex flex-wrap items-center justify-between sm:justify-start gap-3 md:gap-5 bg-[#0f0f0f] p-5 rounded-2xl border border-zinc-800 shadow-inner">
                        <div class="flex flex-col items-center gap-2 group cursor-default">
                            <div class="relative">
                                <div class="absolute inset-0 bg-[#f05432] rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                                <div class="w-12 h-12 rounded-full border-2 border-[#f05432] bg-black relative z-10 overflow-hidden"><img src="assets/Skills/Attaque_basic.png" onerror="this.src='https://placehold.co/100/111/f05432?text=ATK';" class="w-full h-full object-cover"></div>
                            </div>
                            <span class="text-[10px] font-black uppercase text-[#f05432] tracking-wider">Basic</span>
                        </div>
                        <svg class="w-5 h-5 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                        <div class="flex flex-col items-center gap-2 hover:opacity-100 opacity-80 transition-opacity">
                            <div class="w-12 h-12 rounded-full border-2 border-zinc-700 bg-black overflow-hidden"><img src="assets/Skills/Ex.png" onerror="this.src='https://placehold.co/100/111/fff?text=EX';" class="w-full h-full object-cover"></div>
                            <span class="text-[10px] font-bold uppercase text-zinc-400 tracking-wider">Ex</span>
                        </div>
                        <svg class="w-5 h-5 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                        <div class="flex flex-col items-center gap-2 hover:opacity-100 opacity-80 transition-opacity">
                            <div class="w-12 h-12 rounded-full border-2 border-zinc-700 bg-black overflow-hidden"><img src="assets/Skills/Assist.png" onerror="this.src='https://placehold.co/100/111/fff?text=AST';" class="w-full h-full object-cover"></div>
                            <span class="text-[10px] font-bold uppercase text-zinc-400 tracking-wider">Assist</span>
                        </div>
                        <svg class="w-5 h-5 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                        <div class="flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity">
                            <div class="w-10 h-10 rounded-full border border-zinc-800 bg-black overflow-hidden"><img src="assets/Skills/Ultime.png" onerror="this.src='https://placehold.co/100/111/fff?text=ULT';" class="w-full h-full object-cover"></div>
                            <span class="text-[9px] font-bold uppercase text-zinc-500 tracking-wider">Ult</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-10 stagger-anim delay-4">
                <div>
                    <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 border-[#f05432] pl-4 leading-none tracking-wide mb-6">Statistiques</h3>
                    <div class="flex flex-col gap-2.5 mb-5">
                        <div class="flex items-center gap-4 bg-[#121212] p-3.5 rounded-xl border border-zinc-700 shadow-lg">
                            <span class="text-[#f05432] font-black text-xl w-6 text-center drop-shadow-md">6</span>
                            <span class="font-bold uppercase tracking-wider text-sm flex-1 text-white">Impact</span>
                        </div>
                        <div class="flex items-center gap-4 bg-[#0f0f0f] p-3.5 rounded-xl border border-zinc-800">
                            <span class="text-red-500 font-black text-xl w-6 text-center">5</span>
                            <span class="font-bold uppercase tracking-wider text-sm flex-1 text-zinc-300">Fire DMG</span>
                        </div>
                        <div class="flex items-center gap-4 bg-[#0f0f0f] p-3.5 rounded-xl border border-zinc-800">
                            <span class="text-zinc-500 font-black text-xl w-6 text-center">4</span>
                            <span class="font-bold uppercase tracking-wider text-sm flex-1 text-zinc-400">CRIT Rate</span>
                        </div>
                    </div>
                    <div class="bg-[#0f0f0f] p-4 rounded-xl border border-zinc-800/80">
                        <span class="text-[10px] font-black text-zinc-600 uppercase tracking-widest block mb-3">Priorité Sub-stats</span>
                        <div class="flex flex-wrap items-center gap-2 text-xs font-bold text-white uppercase">
                            <span class="bg-[#1a1a1a] px-2.5 py-1.5 rounded-md border border-zinc-700 text-[#f05432]">CRIT DMG / Rate</span>
                            <span class="text-zinc-700">&gt;&gt;</span>
                            <span class="bg-[#121212] px-2.5 py-1.5 rounded-md border border-zinc-800">ATK %</span>
                            <span class="text-zinc-700">&gt;&gt;</span>
                            <span class="bg-[#121212] px-2.5 py-1.5 rounded-md border border-zinc-800">PEN</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 border-[#f05432] pl-4 leading-none tracking-wide mb-6">Moteurs</h3>
                    <div class="flex flex-col gap-3">
                        <div class="flex gap-4 p-3.5 rounded-xl border border-[#f05432]/30 bg-[#121212] shadow-[0_0_15px_rgba(240,84,50,0.05)] hover:border-[#f05432]/80 transition-colors group">
                            <div class="w-16 h-16 bg-black rounded-lg border border-zinc-700 overflow-hidden"><img src="assets/W-Engine/W-Engine_Hellfire_Gears.png" onerror="this.onerror=null; this.src='assets/W-Engine/Hellfire_Gears.png';" class="w-full h-full object-cover group-hover:scale-110 transition-transform"></div>
                            <div class="flex flex-col justify-center">
                                <span class="text-[10px] bg-[#f05432]/10 text-[#f05432] border border-[#f05432]/20 px-2 py-0.5 rounded uppercase font-black w-fit mb-1.5">Baseline 100%</span>
                                <span class="font-black text-sm uppercase text-white tracking-wide">Hellfire Gears</span>
                            </div>
                        </div>
                        <div class="flex gap-4 p-3.5 rounded-xl border border-zinc-800 bg-[#0f0f0f] hover:bg-[#151515] transition-colors">
                            <div class="w-14 h-14 bg-black rounded-lg border border-zinc-800 overflow-hidden"><img src="assets/W-Engine/W-Engine_The_Restrained.png" onerror="this.onerror=null; this.src='assets/W-Engine/The_Restrained.png';" class="w-full h-full object-cover"></div>
                            <div class="flex flex-col justify-center">
                                <span class="text-[10px] text-zinc-500 uppercase font-bold mb-1">Moteur S</span>
                                <span class="font-black text-xs uppercase text-zinc-300 tracking-wide">The Restrained</span>
                            </div>
                        </div>
                        <div class="flex gap-4 p-3.5 rounded-xl border border-zinc-800 bg-[#0f0f0f] hover:bg-[#151515] transition-colors">
                            <div class="w-14 h-14 bg-black rounded-lg border border-zinc-800 overflow-hidden"><img src="assets/W-Engine/W-Engine_Six_Shooter.png" onerror="this.onerror=null; this.src='assets/W-Engine/Six_Shooter.png';" class="w-full h-full object-cover"></div>
                            <div class="flex flex-col justify-center">
                                <span class="text-[10px] text-zinc-500 uppercase font-bold mb-1">Moteur A</span>
                                <span class="font-black text-xs uppercase text-zinc-300 tracking-wide">Six Shooter</span>
                            </div>
                        </div>
                        <div class="flex gap-4 p-3.5 rounded-xl border border-zinc-800 bg-[#0f0f0f] hover:bg-[#151515] transition-colors">
                            <div class="w-14 h-14 bg-black rounded-lg border border-zinc-800 overflow-hidden"><img src="assets/W-Engine/Precious_Fossilized.png" onerror="this.onerror=null; this.src='assets/W-Engine/Precious_Fossilized.png';" class="w-full h-full object-cover"></div>
                            <div class="flex flex-col justify-center">
                                <span class="text-[10px] text-zinc-500 uppercase font-bold mb-1">Moteur A</span>
                                <span class="font-black text-xs uppercase text-zinc-300 tracking-wide">Precious Fossilized</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-14 border-t border-zinc-800/80 pt-10 stagger-anim delay-5">
            <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 border-[#f05432] pl-4 leading-none tracking-wide mb-8">Synergies & Équipes</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div class="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-[#f05432]/50 transition-colors">
                    <div class="absolute -right-12 -top-12 text-[100px] font-display font-black text-zinc-800/20 italic transform group-hover:scale-110 group-hover:text-[#f05432]/5 transition-all duration-700 pointer-events-none">01</div>
                    <div class="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-3 relative z-10">
                        <span class="text-white font-display font-black italic text-2xl tracking-widest drop-shadow-md">TEAM 01</span>
                        <span class="text-[10px] text-[#f05432] font-bold uppercase bg-[#f05432]/10 border border-[#f05432]/20 px-3 py-1 rounded tracking-wide shadow-sm">Fire-Stun</span>
                    </div>
                    <div class="flex items-center justify-between gap-2 relative z-10">
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#f05432] bg-black overflow-hidden relative shadow-[0_0_15px_rgba(240,84,50,0.3)]">
                                <img src="assets/Agents/Evelyn.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/f05432?text=E'">
                            </div>
                        </div>
                        <div class="w-6 h-px bg-zinc-700"></div>
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#f05432] bg-black overflow-hidden relative">
                                <img src="assets/Agents/Koleda.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/f05432?text=K'">
                            </div>
                        </div>
                        <div class="w-6 h-px bg-zinc-700"></div>
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#f05432] bg-black overflow-hidden relative">
                                <img src="assets/Agents/Ben.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/f05432?text=B'">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-[#f05432]/50 transition-colors">
                    <div class="absolute -right-12 -top-12 text-[100px] font-display font-black text-zinc-800/20 italic transform group-hover:scale-110 transition-all duration-700 pointer-events-none">02</div>
                    <div class="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-3 relative z-10">
                        <span class="text-white font-display font-black italic text-2xl tracking-widest drop-shadow-md">TEAM 02</span>
                        <span class="text-[10px] text-zinc-400 font-bold uppercase bg-zinc-800 border border-zinc-700 px-3 py-1 rounded tracking-wide shadow-sm">Fire-Stun II</span>
                    </div>
                    <div class="flex items-center justify-between gap-2 relative z-10">
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#f05432] bg-black overflow-hidden relative shadow-[0_0_15px_rgba(240,84,50,0.1)]">
                                <img src="assets/Agents/Soldier 11.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/f05432?text=S11'">
                            </div>
                        </div>
                        <div class="w-6 h-px bg-zinc-700"></div>
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#e8a838] bg-black overflow-hidden relative">
                                <img src="assets/Agents/Caesar.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/e8a838?text=C'">
                            </div>
                        </div>
                        <div class="w-6 h-px bg-zinc-700"></div>
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#f05432] bg-black overflow-hidden relative">
                                <img src="assets/Agents/Koleda.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/f05432?text=K'">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-[#f05432]/50 transition-colors">
                    <div class="absolute -right-12 -top-12 text-[100px] font-display font-black text-zinc-800/20 italic transform group-hover:scale-110 transition-all duration-700 pointer-events-none">03</div>
                    <div class="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-3 relative z-10">
                        <span class="text-white font-display font-black italic text-2xl tracking-widest drop-shadow-md">TEAM 03</span>
                        <span class="text-[10px] text-zinc-400 font-bold uppercase bg-zinc-800 border border-zinc-700 px-3 py-1 rounded tracking-wide shadow-sm">Débutant</span>
                    </div>
                    <div class="flex items-center justify-between gap-2 relative z-10">
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#f05432] bg-black overflow-hidden relative shadow-[0_0_15px_rgba(240,84,50,0.1)]">
                                <img src="assets/Agents/Ben.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/f05432?text=B'">
                            </div>
                        </div>
                        <div class="w-6 h-px bg-zinc-700"></div>
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#e8a838] bg-black overflow-hidden relative">
                                <img src="assets/Agents/Corin.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/e8a838?text=C'">
                            </div>
                        </div>
                        <div class="w-6 h-px bg-zinc-700"></div>
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#f05432] bg-black overflow-hidden relative">
                                <img src="assets/Agents/Koleda.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/f05432?text=K'">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}
