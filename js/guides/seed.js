export function generateSeedGuide() {
    return `
    <div class="max-w-[1400px] w-full mx-auto pb-20 pt-4 text-zinc-100">
        <div class="flex items-end justify-between mb-8 border-b-2 border-zinc-800 pb-6 stagger-anim delay-1">
            <div class="flex flex-col">
                <span class="text-zinc-500 font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-2">Heavy Weapons Specialist</span>
                <h2 class="text-5xl sm:text-7xl md:text-8xl font-display font-black italic text-white leading-none uppercase drop-shadow-[0_0_20px_rgba(49,130,235,0.2)] hover:text-[#3182eb] transition-colors duration-500 cursor-default">SEED</h2>
            </div>
            <div class="flex gap-2">
                <div class="bg-[#1a1a1a] rounded-xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg border border-white/5">
                    <img src="assets/Icone/electrique.png" class="w-7 h-7 sm:w-9 sm:h-9 object-contain filter drop-shadow-[0_0_8px_rgba(49,130,235,1)]">
                </div>
                <div class="bg-[#3182eb] rounded-xl text-black w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center font-black text-2xl sm:text-3xl shadow-[0_0_15px_rgba(49,130,235,0.3)]">S</div>
            </div>
        </div>

        <div class="bg-[#111] text-white rounded-2xl p-5 sm:p-6 mb-10 shadow-2xl border border-zinc-800 relative overflow-hidden group stagger-anim delay-2">
            <div class="absolute -right-10 -top-10 w-48 h-48 bg-[#3182eb]/5 rounded-full blur-3xl group-hover:bg-[#3182eb]/15 transition-all duration-700"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-5 relative z-10 gap-2 border-b border-zinc-800/50 pb-4">
                <h3 class="text-[#3182eb] font-display font-black uppercase text-xl sm:text-2xl tracking-wide">Stats recommandées</h3>
            </div>
            <div class="flex flex-col sm:flex-row items-center gap-4 relative z-10">
                <div class="bg-black/50 p-4 rounded-xl border border-zinc-800 w-full sm:flex-1 shadow-inner flex justify-between items-center">
                    <span class="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1.5">Taux Crit</span>
                    <span class="text-white font-black text-xl drop-shadow-md">= 85%</span>
                </div>
                <div class="bg-black/50 p-4 rounded-xl border border-zinc-800 w-full sm:flex-1 shadow-inner flex justify-between items-center">
                    <span class="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1.5">Attaque</span>
                    <span class="text-white font-black text-xl drop-shadow-md">2800</span>
                </div>
                <div class="bg-black/50 p-4 rounded-xl border border-zinc-800 w-full sm:flex-1 shadow-inner flex justify-between items-center">
                    <span class="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1.5">Dégât Crit</span>
                    <span class="text-white font-black text-xl drop-shadow-md">120% - 150%+</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div class="flex flex-col gap-10 stagger-anim delay-3">
                <div>
                    <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 border-[#3182eb] pl-4 leading-none tracking-wide mb-6">Sets de Disques</h3>
                    <div class="flex flex-col gap-5">
                        <div class="bg-[#121212] border border-zinc-700 rounded-xl p-5 hover:border-[#3182eb]/50 transition-all duration-300 relative shadow-xl group">
                            <div class="absolute -top-3 -right-3 bg-[#3182eb] text-black text-[10px] font-black px-3 py-1.5 rounded-lg border-2 border-black uppercase shadow-[0_0_15px_rgba(49,130,235,0.4)]">Set 1 👑</div>
                            <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                                <div class="flex -space-x-4">
                                    <div class="relative w-16 h-16 rounded-full border-2 border-zinc-800 bg-black z-10 overflow-hidden shadow-lg group-hover:scale-105 transition-transform"><img src="assets/Disque/Puffer_Electro.png" onerror="this.src='https://placehold.co/100/111/3182eb?text=PE';" class="w-full h-full object-cover"></div>
                                    <div class="relative w-14 h-14 rounded-full border-2 border-zinc-800 bg-black z-0 opacity-80 overflow-hidden"><img src="assets/Disque/Branch_Blade_Song.png" onerror="this.src='https://placehold.co/100/111/fff?text=BB';" class="w-full h-full object-cover"></div>
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-black text-sm uppercase text-white tracking-wide">4pc Puffer Electro</span>
                                    <span class="font-bold text-xs text-zinc-500">+ 2pc Branch & Blade Song</span>
                                </div>
                            </div>
                            <p class="text-xs font-semibold bg-black/40 p-3 rounded-lg border border-zinc-800 text-zinc-300">Devient son Best-in-Slot (<span class="text-[#3182eb] font-black">meilleur choix absolu</span>) si tu la joues dans une équipe avec Dialyn.</p>
                        </div>
                        <div class="bg-[#0f0f0f] border border-zinc-800 rounded-xl p-4 hover:border-zinc-600 transition-colors duration-300 relative">
                            <div class="absolute -top-2 -right-2 bg-zinc-800 text-zinc-300 text-[10px] font-black px-2 py-1 rounded-md uppercase border border-zinc-700">Set 2 (100%)</div>
                            <div class="flex items-center gap-4 mb-2">
                                <div class="flex -space-x-3">
                                    <div class="relative w-12 h-12 rounded-full border border-zinc-800 bg-black z-10 overflow-hidden"><img src="assets/Disque/Puffer_Electro.png" onerror="this.src='https://placehold.co/100/111/3182eb?text=PE';" class="w-full h-full object-cover"></div>
                                    <div class="relative w-10 h-10 rounded-full border border-zinc-800 bg-black z-0 opacity-80 overflow-hidden"><img src="assets/Disque/Woodpecker_Electro.png" onerror="this.src='https://placehold.co/100/111/fff?text=WE';" class="w-full h-full object-cover"></div>
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-black text-xs uppercase text-zinc-200">4pc Puffer Electro</span>
                                    <span class="font-bold text-[10px] text-zinc-500">+ 2pc Woodpecker Electro</span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#0f0f0f] border border-zinc-800 rounded-xl p-4 hover:border-zinc-600 transition-colors duration-300 relative">
                            <div class="absolute -top-2 -right-2 bg-zinc-800 text-zinc-300 text-[10px] font-black px-2 py-1 rounded-md uppercase border border-zinc-700">Set 3 (98.03%)</div>
                            <div class="flex items-center gap-4 mb-2">
                                <div class="flex -space-x-3">
                                    <div class="relative w-12 h-12 rounded-full border border-zinc-800 bg-black z-10 overflow-hidden"><img src="assets/Disque/Dawn_Bloom.png" onerror="this.src='https://placehold.co/100/111/3182eb?text=DB';" class="w-full h-full object-cover"></div>
                                    <div class="relative w-10 h-10 rounded-full border border-zinc-800 bg-black z-0 opacity-80 overflow-hidden"><img src="assets/Disque/Branch_Blade_Song.png" onerror="this.src='https://placehold.co/100/111/fff?text=BB';" class="w-full h-full object-cover"></div>
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-black text-xs uppercase text-zinc-200">4pc Dawn's Bloom</span>
                                    <span class="font-bold text-[10px] text-zinc-500">+ 2pc Branch & Blade Song</span>
                                </div>
                            </div>
                            <p class="text-[10px] text-zinc-400 mt-2 font-bold">Son meilleur choix si tu la joues sans Dialyn (car les dégâts proviennent de ses attaques normales).</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 border-[#3182eb] pl-4 leading-none tracking-wide mb-6">Priorité Compétences</h3>
                    <div class="flex flex-wrap items-center justify-between sm:justify-start gap-3 md:gap-5 bg-[#0f0f0f] p-5 rounded-2xl border border-zinc-800 shadow-inner">
                        <div class="flex flex-col items-center gap-2 group cursor-default">
                            <div class="relative">
                                <div class="absolute inset-0 bg-[#3182eb] rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                                <div class="w-12 h-12 rounded-full border-2 border-[#3182eb] bg-black relative z-10 overflow-hidden"><img src="assets/Skills/Core.webp" onerror="this.src='https://placehold.co/100/111/3182eb?text=C';" class="w-full h-full object-cover"></div>
                            </div>
                            <span class="text-[10px] font-black uppercase text-[#3182eb] tracking-wider">Core</span>
                        </div>
                        <svg class="w-5 h-5 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                        <div class="flex flex-col items-center gap-2 hover:opacity-100 opacity-80 transition-opacity">
                            <div class="w-12 h-12 rounded-full border-2 border-zinc-700 bg-black overflow-hidden"><img src="assets/Skills/Attaque_basic.png" onerror="this.src='https://placehold.co/100/111/fff?text=ATK';" class="w-full h-full object-cover"></div>
                            <span class="text-[10px] font-bold uppercase text-zinc-400 tracking-wider">Basic (12)</span>
                        </div>
                        <svg class="w-5 h-5 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                        <div class="flex flex-col items-center gap-2 hover:opacity-100 opacity-80 transition-opacity">
                            <div class="w-12 h-12 rounded-full border-2 border-zinc-700 bg-black overflow-hidden"><img src="assets/Skills/Ultime.png" onerror="this.src='https://placehold.co/100/111/fff?text=ULT';" class="w-full h-full object-cover"></div>
                            <span class="text-[10px] font-bold uppercase text-zinc-400 tracking-wider">Ult (12)</span>
                        </div>
                        <svg class="w-5 h-5 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                        <div class="flex flex-col items-center gap-2 hover:opacity-100 opacity-80 transition-opacity">
                            <div class="w-12 h-12 rounded-full border-2 border-zinc-700 bg-black overflow-hidden"><img src="assets/Skills/Ex.png" onerror="this.src='https://placehold.co/100/111/fff?text=EX';" class="w-full h-full object-cover"></div>
                            <span class="text-[10px] font-bold uppercase text-zinc-400 tracking-wider">Ex (11)</span>
                        </div>
                        <svg class="w-5 h-5 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                        <div class="flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity">
                            <div class="w-10 h-10 rounded-full border border-zinc-800 bg-black overflow-hidden"><img src="assets/Skills/Assist.png" onerror="this.src='https://placehold.co/100/111/fff?text=AST';" class="w-full h-full object-cover"></div>
                            <span class="text-[9px] font-bold uppercase text-zinc-500 tracking-wider">Assist (11)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-10 stagger-anim delay-4">
                <div>
                    <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 border-[#3bbedb] pl-4 leading-none tracking-wide mb-6">Statistiques</h3>
                    <div class="flex flex-col gap-2.5 mb-5">
                        <div class="flex items-center gap-4 bg-[#121212] p-3.5 rounded-xl border border-zinc-700 shadow-lg">
                            <span class="text-[#3bbedb] font-black text-xl w-6 text-center drop-shadow-md">6</span>
                            <span class="font-bold uppercase tracking-wider text-sm flex-1 text-white">Attaque</span>
                        </div>
                        <div class="flex items-center gap-4 bg-[#0f0f0f] p-3.5 rounded-xl border border-zinc-800">
                            <span class="text-red-500 font-black text-xl w-6 text-center">5</span>
                            <span class="font-bold uppercase tracking-wider text-sm flex-1 text-zinc-300">PEN Ratio <span class="text-xs text-red-500/80 ml-1">(DMG Électrique)</span></span>
                        </div>
                        <div class="flex items-center gap-4 bg-[#0f0f0f] p-3.5 rounded-xl border border-zinc-800">
                            <span class="text-zinc-500 font-black text-xl w-6 text-center">4</span>
                            <span class="font-bold uppercase tracking-wider text-sm flex-1 text-zinc-400">Taux Crit <span class="text-xs text-zinc-600 ml-1">(DGT CRIT)</span></span>
                        </div>
                    </div>
                    <div class="bg-[#0f0f0f] p-4 rounded-xl border border-zinc-800/80">
                        <span class="text-[10px] font-black text-zinc-600 uppercase tracking-widest block mb-3">Priorité Sub-stats</span>
                        <div class="flex flex-wrap items-center gap-2 text-xs font-bold text-white uppercase">
                            <span class="bg-[#1a1a1a] px-2.5 py-1.5 rounded-md border border-zinc-700 text-[#3bbedb]">Taux Crit</span>
                            <span class="text-zinc-700">&gt;&gt;</span>
                            <span class="bg-[#121212] px-2.5 py-1.5 rounded-md border border-zinc-800">Dégât Crit</span>
                            <span class="text-zinc-700">&gt;&gt;</span>
                            <span class="bg-[#121212] px-2.5 py-1.5 rounded-md border border-zinc-800">Attaque %</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 border-[#3bbedb] pl-4 leading-none tracking-wide mb-6">Moteurs</h3>
                    <div class="flex flex-col gap-3">
                        <div class="flex gap-4 p-3.5 rounded-xl border border-[#3bbedb]/30 bg-[#121212] shadow-[0_0_15px_rgba(59,190,219,0.05)] hover:border-[#3bbedb]/80 transition-colors group">
                            <div class="w-16 h-16 bg-black rounded-lg border border-zinc-700 overflow-hidden"><img src="assets/W-Engine/W-Engine_Cordis_Germina.png" onerror="this.onerror=null; this.src='assets/W-Engine/Cordis_Germina.png';" class="w-full h-full object-cover group-hover:scale-110 transition-transform"></div>
                            <div class="flex flex-col justify-center">
                                <span class="text-[10px] bg-[#3bbedb]/10 text-[#3bbedb] border border-[#3bbedb]/20 px-2 py-0.5 rounded uppercase font-black w-fit mb-1.5">Baseline 100%</span>
                                <span class="font-black text-sm uppercase text-white tracking-wide">Cordis Germina</span>
                            </div>
                        </div>
                        <div class="flex gap-4 p-3.5 rounded-xl border border-zinc-800 bg-[#0f0f0f] hover:bg-[#151515] transition-colors">
                            <div class="w-14 h-14 bg-black rounded-lg border border-zinc-800 overflow-hidden"><img src="assets/W-Engine/W-Engine_Zanshin_Herb_Case.png" onerror="this.onerror=null; this.src='assets/W-Engine/Zanshin_Herb_Case.png';" class="w-full h-full object-cover"></div>
                            <div class="flex flex-col justify-center">
                                <span class="text-[10px] text-zinc-500 uppercase font-bold mb-1">Alt 5★ (91.15%)</span>
                                <span class="font-black text-xs uppercase text-zinc-300 tracking-wide">Zanshin Herb Case</span>
                            </div>
                        </div>
                        <div class="flex gap-4 p-3.5 rounded-xl border border-zinc-800 bg-[#0f0f0f] hover:bg-[#151515] transition-colors">
                            <div class="w-14 h-14 bg-black rounded-lg border border-zinc-800 overflow-hidden"><img src="assets/W-Engine/W-Engine_Marcato_Desire.png" onerror="this.onerror=null; this.src='assets/W-Engine/Marcato_Desire.png';" class="w-full h-full object-cover"></div>
                            <div class="flex flex-col justify-center">
                                <span class="text-[10px] text-zinc-500 uppercase font-bold mb-1">Alt 4★ (90.52%)</span>
                                <span class="font-black text-xs uppercase text-zinc-300 tracking-wide">Marcato Desire</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-14 border-t border-zinc-800/80 pt-10 stagger-anim delay-5">
            <h3 class="text-white font-display font-black text-2xl uppercase border-l-4 border-[#3bbedb] pl-4 leading-none tracking-wide mb-8">Synergies & Équipes</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div class="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-[#3bbedb]/50 transition-colors">
                    <div class="absolute -right-12 -top-12 text-[100px] font-display font-black text-zinc-800/20 italic transform group-hover:scale-110 group-hover:text-[#3bbedb]/5 transition-all duration-700 pointer-events-none">01</div>
                    <div class="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-3 relative z-10">
                        <span class="text-white font-display font-black italic text-2xl tracking-widest drop-shadow-md">TEAM 01</span>
                    </div>
                    <div class="flex items-center justify-between gap-2 relative z-10">
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#3bbedb] bg-black overflow-hidden relative shadow-[0_0_15px_rgba(59,190,219,0.3)]">
                                <img src="assets/Agents/Seed.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/3bbedb?text=S'">
                            </div>
                        </div>
                        <div class="w-6 h-px bg-zinc-700"></div>
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#3182eb] bg-black overflow-hidden relative">
                                <img src="assets/Agents/Cissia.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/3182eb?text=C'">
                            </div>
                        </div>
                        <div class="w-6 h-px bg-zinc-700"></div>
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#e8a838] bg-black overflow-hidden relative">
                                <img src="assets/Agents/Sunna.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/e8a838?text=S'">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-[#3bbedb]/50 transition-colors">
                    <div class="absolute -right-12 -top-12 text-[100px] font-display font-black text-zinc-800/20 italic transform group-hover:scale-110 transition-all duration-700 pointer-events-none">02</div>
                    <div class="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-3 relative z-10">
                        <span class="text-white font-display font-black italic text-2xl tracking-widest drop-shadow-md">TEAM 02</span>
                    </div>
                    <div class="flex items-center justify-between gap-2 relative z-10">
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#3bbedb] bg-black overflow-hidden relative shadow-[0_0_15px_rgba(59,190,219,0.1)]">
                                <img src="assets/Agents/Seed.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/3bbedb?text=S'">
                            </div>
                        </div>
                        <div class="w-6 h-px bg-zinc-700"></div>
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#f05432] bg-black overflow-hidden relative">
                                <img src="assets/Agents/Banyue.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/f05432?text=B'">
                            </div>
                        </div>
                        <div class="w-6 h-px bg-zinc-700"></div>
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#e8a838] bg-black overflow-hidden relative">
                                <img src="assets/Agents/Dialyn.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/e8a838?text=D'">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-[#3bbedb]/50 transition-colors">
                    <div class="absolute -right-12 -top-12 text-[100px] font-display font-black text-zinc-800/20 italic transform group-hover:scale-110 transition-all duration-700 pointer-events-none">03</div>
                    <div class="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-3 relative z-10">
                        <span class="text-white font-display font-black italic text-2xl tracking-widest drop-shadow-md">TEAM 03</span>
                        <span class="text-[10px] text-zinc-400 font-bold uppercase bg-zinc-800 border border-zinc-700 px-3 py-1 rounded tracking-wide shadow-sm">Flexible</span>
                    </div>
                    <div class="flex items-center justify-between gap-2 relative z-10">
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#3bbedb] bg-black overflow-hidden relative shadow-[0_0_15px_rgba(59,190,219,0.1)]">
                                <img src="assets/Agents/Seed.png" class="w-full h-full object-cover object-top scale-110" onerror="this.src='https://placehold.co/100/181818/3bbedb?text=S'">
                            </div>
                        </div>
                        <div class="w-6 h-px bg-zinc-700"></div>
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-zinc-600 bg-black overflow-hidden relative flex items-center justify-center">
                                <span class="text-xs font-bold text-center text-zinc-400 px-2 leading-tight">Agents<br>Attaques</span>
                            </div>
                        </div>
                        <div class="w-6 h-px bg-zinc-700"></div>
                        <div class="flex flex-col items-center gap-3">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-zinc-600 bg-black overflow-hidden relative flex items-center justify-center">
                                <span class="text-xs font-bold text-center text-zinc-400 px-2 leading-tight">Agents<br>Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}
