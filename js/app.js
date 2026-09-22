import { factionsData } from './data/factions.js';
import { agentsData, colorMap, iconMap, filterGroups } from './data/agents.js';
import { guides, generateGenericGuide } from './guides/index.js';

let currentElement = 'All';
let searchQuery = '';
let activeFactionFilter = null;
let showFavoritesOnly = false;
let favorites = JSON.parse(localStorage.getItem('zzz_favorites')) || [];

let filteredAgentsList = []; 
let currentModalAgentIndex = -1;

const gridContainer = document.getElementById('agents-grid');
const emptyState = document.getElementById('empty-state');
const elementBtns = document.querySelectorAll('#elementFilters button');
const favFilterBtn = document.getElementById('favoriteFilterBtn');

// Éléments de recherche Bureau & Mobile
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const searchDropdown = document.getElementById('searchDropdown');

const searchInputMobile = document.getElementById('searchInputMobile');
const clearSearchBtnMobile = document.getElementById('clearSearchBtnMobile');
const searchDropdownMobile = document.getElementById('searchDropdownMobile');

function updateFavBadge() { document.getElementById('favCountBadge').textContent = favorites.length; }

window.toggleFavorite = function(btn, agentName, event) {
    event.stopPropagation(); 
    const svg = btn.querySelector('svg');
    if(favorites.includes(agentName)) {
        favorites = favorites.filter(f => f !== agentName);
        svg.classList.remove('text-red-500', 'fill-red-500');
        svg.classList.add('text-zinc-400', 'fill-transparent');
    } else {
        favorites.push(agentName);
        svg.classList.add('text-red-500', 'fill-red-500');
        svg.classList.remove('text-zinc-400', 'fill-transparent');
    }
    localStorage.setItem('zzz_favorites', JSON.stringify(favorites));
    updateFavBadge();
    if(showFavoritesOnly) renderAgents();
};

favFilterBtn.addEventListener('click', function() {
    showFavoritesOnly = !showFavoritesOnly;
    if(showFavoritesOnly) {
        this.classList.replace('border-zinc-800', 'border-red-500');
        this.classList.replace('text-zinc-400', 'text-white');
        this.classList.add('bg-red-500/10');
        this.querySelector('svg').classList.add('text-red-500');
    } else {
        this.classList.replace('border-red-500', 'border-zinc-800');
        this.classList.replace('text-white', 'text-zinc-400');
        this.classList.remove('bg-red-500/10');
        this.querySelector('svg').classList.remove('text-red-500');
    }
    renderAgents();
});

updateFavBadge();

function renderFactions() {
    const generateFactionHTML = (faction, isSidebar) => {
        const imgPath = `assets/Faction/${faction}.png`;
        const fallbackImg = `https://placehold.co/300x300/181818/d7f70c?text=${faction.substring(0,3).toUpperCase()}&font=montserrat`;
        
        if(isSidebar) {
            return `
            <div class="mb-5 px-1">
                <div class="faction-box rounded-[1.5rem] p-4 flex flex-col items-center gap-4 cursor-pointer w-full group bg-gradient-to-br from-[#121212] to-[#050505] border-2 border-zinc-800 hover:border-yellow-400/50 transition-colors" onclick="setFactionFilter('${faction.replace(/'/g, "\\'")}')">
                    <div class="w-32 h-32 md:w-36 md:h-36 bg-black rounded-[1.2rem] overflow-hidden flex items-center justify-center p-3 shadow-inner group-hover:bg-[#0a0a0a] transition-colors relative">
                        <img src="${imgPath}" alt="${faction}" class="w-full h-full object-contain drop-shadow-xl relative z-10" onerror="this.onerror=null; this.src='${fallbackImg}'">
                    </div>
                    <div class="bg-black/95 px-3 py-2.5 rounded-xl text-xs font-black text-center w-full border border-zinc-700/80 text-zinc-400 group-hover:text-white group-hover:border-yellow-400/80 transition-colors shadow-lg line-clamp-2 leading-snug tracking-wide uppercase">${faction}</div>
                </div>
            </div>`;
        } else {
            return `
            <div class="bg-[#121212] border-2 border-zinc-800 rounded-[2rem] p-6 flex flex-col items-center justify-between gap-6 cursor-pointer hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 group shadow-2xl relative overflow-hidden" onclick="setFactionFilter('${faction.replace(/'/g, "\\'")}', true)">
                <div class="w-32 h-32 sm:w-48 sm:h-48 transition-all duration-500 group-hover:scale-110 relative z-10">
                    <img src="${imgPath}" alt="${faction}" class="w-full h-full object-contain" onerror="this.onerror=null; this.src='${fallbackImg}'">
                </div>
                <div class="bg-black/80 px-5 py-3 rounded-xl text-xs sm:text-sm font-black w-full text-center border border-zinc-800 group-hover:border-yellow-400 text-zinc-300 shadow-inner group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2 uppercase tracking-wider relative z-10">${faction}</div>
            </div>`;
        }
    };
    document.getElementById('modalFactionsGrid').innerHTML = factionsData.map(f => generateFactionHTML(f, false)).join('');
    const sidebarHTML = factionsData.map(f => generateFactionHTML(f, true)).join('');
    document.getElementById('sidebarFactionsList').innerHTML = sidebarHTML + sidebarHTML;
}

window.setFactionFilter = function(faction, fromModal = false) {
    activeFactionFilter = faction;
    document.getElementById('activeFactionName').textContent = faction;
    document.getElementById('activeFactionTag').classList.remove('hidden');
    document.getElementById('activeFactionTag').classList.add('flex');
    if(fromModal) window.closeModal('factionModal');
    renderAgents();
    document.querySelector('main').scrollTo({top: 0, behavior: 'smooth'});
};

document.getElementById('clearFactionBtn').addEventListener('click', (e) => {
    e.stopPropagation(); activeFactionFilter = null;
    document.getElementById('activeFactionTag').classList.add('hidden');
    document.getElementById('activeFactionTag').classList.remove('flex');
    renderAgents();
});

// LOGIQUE DE RECHERCHE COMBINÉE BUREAU & MOBILE
function updateBothDropdowns(query) {
    searchDropdown.innerHTML = '';
    searchDropdownMobile.innerHTML = '';
    let filtered = [];
    
    if (query) {
        filtered = agentsData.filter(a => a.name.toLowerCase().startsWith(query.toLowerCase()));
        clearSearchBtn.classList.remove('hidden');
        clearSearchBtnMobile.classList.remove('hidden');
    } else {
        filtered = [...agentsData];
        clearSearchBtn.classList.add('hidden');
        clearSearchBtnMobile.classList.add('hidden');
    }
    
    filtered.sort((a, b) => a.name.localeCompare(b.name));
    
    if (filtered.length === 0) {
        const emptyStateHTML = `<div class="p-5 text-zinc-500 text-sm text-center italic font-bold">Aucun signal trouvé</div>`;
        searchDropdown.innerHTML = emptyStateHTML;
        searchDropdownMobile.innerHTML = emptyStateHTML;
    } else {
        let delay = 0;
        filtered.forEach(agent => {
            const iconFile = iconMap[agent.element] || 'physique.png';
            const htmlContent = `
                <div class="w-12 h-12 rounded-xl bg-[#121212] border border-zinc-700 overflow-hidden flex-shrink-0 relative shadow-inner">
                    <img src="assets/Agents/${agent.name}.png" alt="${agent.name}" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300" onerror="this.src='https://placehold.co/100x100/222222/ffffff?text=${agent.name.charAt(0)}'">
                </div>
                <div class="flex flex-col">
                    <span class="text-white text-sm font-black tracking-widest group-hover:text-yellow-400 transition-colors uppercase">${agent.name}</span>
                    <div class="flex items-center gap-1.5 mt-1">
                        <img src="assets/Icone/${iconFile}" class="w-3.5 h-3.5 object-contain opacity-80">
                        <span class="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">${agent.element}</span>
                    </div>
                </div>
            `;

            const onMouseDownLogic = (e) => {
                e.preventDefault(); 
                searchInput.value = agent.name; 
                searchInputMobile.value = agent.name; 
                searchQuery = agent.name;
                searchDropdown.classList.add('hidden'); 
                searchDropdownMobile.classList.add('hidden'); 
                clearSearchBtn.classList.remove('hidden'); 
                clearSearchBtnMobile.classList.remove('hidden'); 
                renderAgents();
            };

            // Setup Bureau Div
            const divD = document.createElement('div');
            divD.className = "dropdown-item-anim flex items-center gap-4 p-4 hover:bg-[#1a1a1a] cursor-pointer transition-colors group";
            divD.style.animationDelay = `${delay}ms`; 
            divD.innerHTML = htmlContent;
            divD.onmousedown = onMouseDownLogic;
            searchDropdown.appendChild(divD);

            // Setup Mobile Div
            const divM = document.createElement('div');
            divM.className = "dropdown-item-anim flex items-center gap-4 p-4 hover:bg-[#1a1a1a] cursor-pointer transition-colors group";
            divM.style.animationDelay = `${delay}ms`; 
            divM.innerHTML = htmlContent;
            divM.onmousedown = onMouseDownLogic;
            searchDropdownMobile.appendChild(divM);

            delay += 15;
        });
    }
}

// Events Desktop
searchInput.addEventListener('input', (e) => { 
    searchQuery = e.target.value; 
    searchInputMobile.value = searchQuery;
    searchDropdown.classList.remove('hidden'); 
    updateBothDropdowns(searchQuery); 
    renderAgents(); 
});
searchInput.addEventListener('focus', () => { 
    searchDropdown.classList.remove('hidden'); 
    updateBothDropdowns(searchInput.value); 
});
searchInput.addEventListener('blur', () => { setTimeout(() => { searchDropdown.classList.add('hidden'); }, 200); });
clearSearchBtn.addEventListener('click', clearSearch);

// Events Mobile
searchInputMobile.addEventListener('input', (e) => { 
    searchQuery = e.target.value; 
    searchInput.value = searchQuery;
    searchDropdownMobile.classList.remove('hidden'); 
    updateBothDropdowns(searchQuery); 
    renderAgents(); 
});
searchInputMobile.addEventListener('focus', () => { 
    searchDropdownMobile.classList.remove('hidden'); 
    updateBothDropdowns(searchInputMobile.value); 
});
searchInputMobile.addEventListener('blur', () => { setTimeout(() => { searchDropdownMobile.classList.add('hidden'); }, 200); });
clearSearchBtnMobile.addEventListener('click', clearSearch);

function clearSearch() {
    searchInput.value = ''; 
    searchInputMobile.value = ''; 
    searchQuery = ''; 
    clearSearchBtn.classList.add('hidden'); 
    clearSearchBtnMobile.classList.add('hidden'); 
    searchDropdown.classList.add('hidden'); 
    searchDropdownMobile.classList.add('hidden'); 
    renderAgents();
}

elementBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        elementBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active');
        currentElement = btn.getAttribute('data-filter'); renderAgents();
    });
});

function updateModalNavigation() {
    const prevBtn = document.getElementById('prevAgentBtn');
    const nextBtn = document.getElementById('nextAgentBtn');

    if (currentModalAgentIndex > 0) {
        prevBtn.classList.remove('opacity-0', 'pointer-events-none', '-translate-x-10');
        prevBtn.onclick = (e) => {
            e.stopPropagation();
            const prev = filteredAgentsList[currentModalAgentIndex - 1];
            window.openAgentDetail(prev.name, prev.rank, prev.element);
        };
    } else {
        prevBtn.classList.add('opacity-0', 'pointer-events-none', '-translate-x-10');
    }

    if (currentModalAgentIndex < filteredAgentsList.length - 1 && currentModalAgentIndex !== -1) {
        nextBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-x-10');
        nextBtn.onclick = (e) => {
            e.stopPropagation();
            const next = filteredAgentsList[currentModalAgentIndex + 1];
            window.openAgentDetail(next.name, next.rank, next.element);
        };
    } else {
        nextBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-x-10');
    }
}

window.openAgentDetail = function(agentName, rank, element) {
    const modal = document.getElementById('agentDetailModal');
    const splashImg = document.getElementById('agentSplashImage');
    const giantName = document.getElementById('modalGiantNameText');
    const guideContainer = document.getElementById('agentGuideContainer');
    
    currentModalAgentIndex = filteredAgentsList.findIndex(a => a.name === agentName);
    updateModalNavigation();
    
    splashImg.style.opacity = '0';
    
    splashImg.onerror = function() {
        this.onerror = null; 
        this.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; 
    };
    
    splashImg.src = `assets/splash/${agentName}.png`; 
    giantName.textContent = agentName;
    
    const guideGenerator = guides[agentName.toLowerCase()];
    if (guideGenerator) {
        guideContainer.innerHTML = guideGenerator();
    } else {
        guideContainer.innerHTML = generateGenericGuide(agentName);
    }

    modal.classList.remove('hidden');
    void modal.offsetWidth;
    modal.classList.add('opacity-100');
    
    setTimeout(() => {
        splashImg.style.opacity = '1'; 
        splashImg.style.transform = 'translateY(0) scale(1)';
        guideContainer.style.opacity = '1'; 
        guideContainer.style.transform = 'translateX(0)';
    }, 50);
};

function init3DParallax() {
    // MODIFICATION : Désactive la parallaxe 3D sur les mobiles pour empêcher les lags lourds
    if (window.matchMedia("(hover: none)").matches) return; 

    document.querySelectorAll('.agent-card-container').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect(); const x = e.clientX - rect.left; const y = e.clientY - rect.top;
            const rotateX = (((y - (rect.height / 2)) / (rect.height / 2)) * -12); 
            const rotateY = (((x - (rect.width / 2)) / (rect.width / 2)) * 12);
            card.classList.remove('reset-transition'); card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        card.addEventListener('mouseleave', () => {
            card.classList.add('reset-transition'); card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });
}

function renderAgents() {
    gridContainer.innerHTML = '';
    filteredAgentsList = [];
    let delayIndex = 0;

    agentsData.forEach((agent) => {
        const matchSearch = agent.name.toLowerCase().startsWith(searchQuery.toLowerCase());
        const matchElement = currentElement === 'All' || filterGroups[currentElement]?.includes(agent.element);
        const matchFaction = !activeFactionFilter || agent.faction === activeFactionFilter;
        const isFav = favorites.includes(agent.name);
        const matchFav = !showFavoritesOnly || isFav;

        if (matchSearch && matchElement && matchFaction && matchFav) {
            filteredAgentsList.push(agent);
            const hexColor = colorMap[agent.element] || '#ffffff';
            const cleanHex = hexColor.replace('#', '');
            const fallbackImg = `https://placehold.co/400x400/181818/${cleanHex}?text=${agent.name.charAt(0)}&font=montserrat`;
            const staggerDelay = Math.min(delayIndex * 40, 800);
            delayIndex++;

            const heartClass = isFav ? 'text-red-500 fill-red-500' : 'text-zinc-500 fill-transparent';
            const displayName = agent.name === 'Jane' ? 'Jane Doe' : agent.name;

            const cardHTML = `
                <div class="agent-card-container flex flex-col cursor-pointer w-full group animate-fade-in-up" 
                     style="--elem-color: ${hexColor}; animation-delay: ${staggerDelay}ms;"
                     onclick="openAgentDetail('${agent.name.replace(/'/g, "\\'")}', '${agent.rank}', '${agent.element}')">
                    <div class="agent-shape-wrapper w-full aspect-square bg-zinc-800">
                        <div class="agent-shape-inner relative overflow-hidden flex items-end justify-center">
                            <img src="assets/Agents/${agent.name}.png" alt="${displayName}" class="agent-image absolute bottom-0 w-full h-auto min-h-full object-cover object-bottom" onerror="this.onerror=null; this.src='${fallbackImg}'">
                            <div class="absolute inset-0 shadow-[inset_0_-35px_50px_rgba(0,0,0,0.95)] pointer-events-none transition-shadow duration-300 group-hover:shadow-[inset_0_-10px_20px_rgba(0,0,0,0.4)]"></div>
                            <button onclick="toggleFavorite(this, '${agent.name.replace(/'/g, "\\'")}', event)" class="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-[#111]/80 backdrop-blur border border-zinc-700 flex items-center justify-center z-30 transition-all hover:scale-110 shadow-lg group/fav">
                                <svg class="w-5 h-5 transition-colors duration-300 ${heartClass} group-hover/fav:text-red-400" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="mt-3 mx-1 bg-[#151515] p-2 skew-x-[-15deg] border-b-[4px] shadow-lg transition-all duration-300 group-hover:bg-[#1a1a1a]" style="border-bottom-color: ${hexColor};">
                        <div class="skew-x-[15deg] text-center w-full px-1 overflow-hidden flex items-center justify-center gap-2">
                            <span class="text-white font-display font-black uppercase text-xs sm:text-[15px] tracking-[0.2em] truncate block drop-shadow-md transition-colors pointer-events-none">${displayName}</span>
                        </div>
                    </div>
                </div>`;
            gridContainer.insertAdjacentHTML('beforeend', cardHTML);
        }
    });

    if (filteredAgentsList.length > 0) {
        emptyState.classList.add('hidden'); emptyState.classList.remove('opacity-100');
        setTimeout(init3DParallax, 50);
    } else {
        emptyState.classList.remove('hidden'); setTimeout(() => { emptyState.classList.add('opacity-100'); }, 10);
    }
    if (!document.getElementById('agentDetailModal').classList.contains('hidden')) updateModalNavigation();
}

document.getElementById('openModalBtn').addEventListener('click', () => {
    const m = document.getElementById('factionModal');
    m.classList.remove('hidden'); void m.offsetWidth; m.classList.add('opacity-100');
});

window.closeModal = function(id) {
    const m = document.getElementById(id);
    if(id === 'agentDetailModal') {
        document.getElementById('agentSplashImage').style.opacity = '0';
        document.getElementById('agentSplashImage').style.transform = 'translateY(20px)';
        document.getElementById('agentGuideContainer').style.opacity = '0';
        document.getElementById('agentGuideContainer').style.transform = 'translateX(20px)';
    }
    m.classList.remove('opacity-100');
    setTimeout(() => { m.classList.add('hidden'); }, 300);
};

document.addEventListener('keydown', (e) => {
    const modalAgent = document.getElementById('agentDetailModal');
    if (e.key === 'Escape') {
        if(!modalAgent.classList.contains('hidden')) window.closeModal('agentDetailModal');
        else if(!document.getElementById('factionModal').classList.contains('hidden')) window.closeModal('factionModal');
    }
    if (!modalAgent.classList.contains('hidden')) {
        if (e.key === 'ArrowLeft' && currentModalAgentIndex > 0) {
            const prev = filteredAgentsList[currentModalAgentIndex - 1];
            window.openAgentDetail(prev.name, prev.rank, prev.element);
        }
        if (e.key === 'ArrowRight' && currentModalAgentIndex < filteredAgentsList.length - 1 && currentModalAgentIndex !== -1) {
            const next = filteredAgentsList[currentModalAgentIndex + 1];
            window.openAgentDetail(next.name, next.rank, next.element);
        }
    }
});

renderFactions();
renderAgents();
