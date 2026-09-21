export function generateGenericGuide(agentName) {
    return `
    <div class="flex flex-col items-center justify-center h-full opacity-80 stagger-anim w-full">
        <svg class="w-24 h-24 text-zinc-700 mb-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        <h2 class="text-4xl md:text-5xl font-display font-black uppercase text-zinc-400 text-center leading-tight drop-shadow-md">Signal <br><span class="text-zinc-600">En cours d'analyse</span></h2>
        <p class="text-zinc-600 font-medium mt-6 text-center max-w-sm text-sm">Les archives de New Eridu pour <span class="text-zinc-400 font-bold">${agentName}</span> sont actuellement cryptées.</p>
    </div>
    `;
}