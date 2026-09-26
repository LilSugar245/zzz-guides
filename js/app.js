import { factionsData } from './data/factions.js';
import { agentsData, colorMap, iconMap, filterGroups } from './data/agents.js';
import { getGuideHTML } from './guides/index.js'; 
import { updateStaticUI, setLanguage, currentLang, tTerm, tData } from './i18n.js';

// ==========================================
// 1. ÉTAT DE L'APPLICATION (STATE)
// ==========================================
const State = {
    mode: 'elements',
    filters: { element: 'All', role: 'All', version: 'All' },
    search: '',
    faction: null,
    showFavorites: false,
    favorites: JSON.parse(localStorage.getItem('zzz_favorites')) || [],
    filteredAgents: [],
    modalIndex: -1
};

// ==========================================
// 2. CACHE DU DOM (Performances)
// ==========================================
const DOM = {
    grid: document.getElementById('agents-grid'),
    empty: document.getElementById('empty-state'),
    scrollArea: document.querySelector('main'),
    
    sidebar: document.getElementById('sidebar'),
    mobileOverlay: document.getElementById('mobileOverlay'),
    mobileFilterBtn: document.getElementById('mobileFilterBtn'),
    closeSidebarBtn: document.getElementById('closeSidebarBtn'),
    
    tabContainer: document.getElementById('mainTabContainer'),
    tabs: {
        elements: { btn: document.getElementById('tabElements'), group: document.getElementById('groupElements') },
        roles: { btn: document.getElementById('tabRoles'), group: document.getElementById('groupRoles') },
        versions: { btn: document.getElementById('tabVersions'), group: document.getElementById('groupVersions') }
    },
    
    searchInputs: [document.getElementById('searchInput'), document.getElementById('searchInputMobile')],
    clearBtns: [document.getElementById('clearSearchBtn'), document.getElementById('clearSearchBtnMobile')],
    dropdowns: [document.getElementById('searchDropdown'), document.getElementById('searchDropdownMobile')],
    
    favBtn: document.getElementById('favoriteFilterBtn'),
    favBadge: document.getElementById('favCountBadge'),
    
    openModalBtn: document.getElementById('openModalBtn'),
    clearFactionBtn: document.getElementById('clearFactionBtn')
};

// ==========================================
// 3. INITIALISATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    updateStaticUI();
    initTabs();
    initFilters('.filter-elem-btn', 'element');
    initFilters('.filter-role-btn', 'role');
    initFilters('.filter-version-btn', 'version');
    initSearch();
    initFavorites();
    initLanguageSwitcher();
    initKeyboardNavigation();
    initMobileSidebar();
    initModals();
    initFactions();
    
    renderFactions();
    renderAgents();
    
    setTimeout(() => updateSliderPosition(DOM.tabs.elements.btn), 100);
    window.addEventListener('resize', () => {
        const activeTab = document.querySelector('.tab-pill.active');
        if (activeTab) updateSliderPosition(activeTab);
    });

    checkUrlForAgent();
});

// ==========================================
// 4. LOGIQUE DU PANNEAU MOBILE
// ==========================================
function initMobileSidebar() {
    if (DOM.mobileFilterBtn) DOM.mobileFilterBtn.addEventListener('click', openMobileSidebar);
    if (DOM.closeSidebarBtn) DOM.closeSidebarBtn.addEventListener('click', closeMobileSidebar);
    if (DOM.mobileOverlay) DOM.mobileOverlay.addEventListener('click', closeMobileSidebar);
}

function openMobileSidebar() {
    DOM.sidebar.classList.remove('-translate-x-full');
    DOM.mobileOverlay.classList.remove('hidden');
    setTimeout(() => DOM.mobileOverlay.classList.remove('opacity-0'), 10);
}

function closeMobileSidebar() {
    DOM.sidebar.classList.add('-translate-x-full');
    DOM.mobileOverlay.classList.add('opacity-0');
    setTimeout(() => DOM.mobileOverlay.classList.add('hidden'), 300);
}

// ==========================================
// 5. ONGLETS ET FILTRES
// ==========================================
function scrollToTop() { DOM.scrollArea.scrollTo({ top: 0, behavior: 'smooth' }); }

function updateSliderPosition(activeTabElement) {
    if (!DOM.tabContainer || !activeTabElement) return;
    const containerRect = DOM.tabContainer.getBoundingClientRect();
    const tabRect = activeTabElement.getBoundingClientRect();
    DOM.tabContainer.style.setProperty('--slide-left', `${tabRect.left - containerRect.left}px`);
    DOM.tabContainer.style.setProperty('--slide-width', `${tabRect.width}px`);
}

function initTabs() {
    Object.keys(DOM.tabs).forEach(mode => {
        DOM.tabs[mode].btn.addEventListener('click', () => {
            State.mode = mode;
            Object.keys(DOM.tabs).forEach(m => {
                DOM.tabs[m].btn.classList.toggle('active', m === mode);
                DOM.tabs[m].group.classList.toggle('hidden', m !== mode);
            });
            updateSliderPosition(DOM.tabs[mode].btn);
            renderAgents();
            scrollToTop();
        });
    });
}

function initFilters(selector, filterType) {
    const btns = document.querySelectorAll(selector);
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            State.filters[filterType] = btn.getAttribute(`data-${filterType === 'element' ? 'filter' : filterType}`);
            renderAgents();
            scrollToTop();
            if (window.innerWidth < 768) closeMobileSidebar();
        });
    });
}

// ==========================================
// 6. RECHERCHE (Unifiée PC/Mobile)
// ==========================================
function initSearch() {
    DOM.searchInputs.forEach(input => {
        if(!input) return;
        input.addEventListener('input', (e) => handleSearch(e.target.value));
        input.addEventListener('focus', (e) => handleSearch(e.target.value));
        input.addEventListener('blur', () => setTimeout(() => DOM.dropdowns.forEach(d => d && d.classList.add('hidden')), 300));
    });
    DOM.clearBtns.forEach(btn => { if(btn) btn.addEventListener('click', clearSearch); });
}

function handleSearch(query) {
    State.search = query;
    DOM.searchInputs.forEach(input => { if(input) input.value = query; });
    const isHidden = query.length === 0;
    DOM.clearBtns.forEach(btn => { if(btn) btn.classList.toggle('hidden', isHidden); });
    DOM.dropdowns.forEach(drop => { if(drop) drop.classList.remove('hidden'); });

    updateDropdownUI(query);
    renderAgents();
}

function clearSearch() {
    State.search = '';
    DOM.searchInputs.forEach(input => { if(input) input.value = ''; });
    DOM.clearBtns.forEach(btn => { if(btn) btn.classList.add('hidden'); });
    DOM.dropdowns.forEach(drop => { if(drop) drop.classList.add('hidden'); });
    renderAgents();
}

function updateDropdownUI(query) {
    let filtered = query 
        ? agentsData.filter(a => a.name.toLowerCase().startsWith(query.toLowerCase()))
        : [...agentsData];
    
    filtered.sort((a, b) => a.name.localeCompare(b.name));

    const html = filtered.length === 0 
        ? `<div class="p-5 text-zinc-500 text-sm text-center italic font-bold">Aucun signal trouvé</div>`
        : filtered.map((agent, delay) => {
            const iconFile = iconMap[agent.element] || 'physique.png';
            return `
            <div class="dropdown-item-anim flex items-center gap-4 p-4 hover:bg-[#1a1a1a] cursor-pointer transition-colors group" style="animation-delay: ${delay * 15}ms" onmousedown="window.triggerSearchSelect('${agent.name.replace(/'/g, "\\'")}')">
                <div class="w-12 h-12 rounded-xl bg-[#121212] border border-zinc-700 overflow-hidden flex-shrink-0 relative shadow-inner">
                    <img src="assets/Agents/${agent.name}.png" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300" onerror="this.src='https://placehold.co/100x100/222222/ffffff?text=${agent.name.charAt(0)}'">
                </div>
                <div class="flex flex-col">
                    <span class="text-white text-sm font-black tracking-widest group-hover:text-yellow-400 transition-colors uppercase">${agent.name}</span>
                    <div class="flex items-center gap-1.5 mt-1"><img src="assets/Icone/${iconFile}" class="w-3.5 h-3.5 object-contain opacity-80"><span class="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">${tTerm(agent.element)}</span></div>
                </div>
            </div>`;
        }).join('');

    DOM.dropdowns.forEach(drop => { if(drop) drop.innerHTML = html; });
}

window.triggerSearchSelect = function(agentName) {
    handleSearch(agentName);
    DOM.dropdowns.forEach(drop => { if(drop) drop.classList.add('hidden'); });
};

// ==========================================
// 7. FAVORIS
// ==========================================
function updateFavBadge() { if(DOM.favBadge) DOM.favBadge.textContent = State.favorites.length; }

function initFavorites() {
    updateFavBadge();
    if(DOM.favBtn) {
        DOM.favBtn.addEventListener('click', () => {
            State.showFavorites = !State.showFavorites;
            const svg = DOM.favBtn.querySelector('svg');
            
            if(State.showFavorites) {
                DOM.favBtn.classList.replace('border-zinc-800', 'border-red-500'); DOM.favBtn.classList.replace('text-zinc-400', 'text-white'); DOM.favBtn.classList.add('bg-red-500/10'); svg.classList.add('text-red-500');
            } else {
                DOM.favBtn.classList.replace('border-red-500', 'border-zinc-800'); DOM.favBtn.classList.replace('text-white', 'text-zinc-400'); DOM.favBtn.classList.remove('bg-red-500/10'); svg.classList.remove('text-red-500');
            }
            renderAgents(); scrollToTop();
            if (window.innerWidth < 768) closeMobileSidebar();
        });
    }
}

window.toggleFavorite = function(btn, agentName, event) {
    event.stopPropagation(); 
    const svg = btn.querySelector('svg');
    if(State.favorites.includes(agentName)) {
        State.favorites = State.favorites.filter(f => f !== agentName);
        svg.classList.remove('text-red-500', 'fill-red-500'); svg.classList.add('text-zinc-500', 'fill-transparent');
    } else {
        State.favorites.push(agentName);
        svg.classList.add('text-red-500', 'fill-red-500'); svg.classList.remove('text-zinc-500', 'fill-transparent');
    }
    localStorage.setItem('zzz_favorites', JSON.stringify(State.favorites)); 
    updateFavBadge();
    if(State.showFavorites) renderAgents();
};

// ==========================================
// 8. FACTIONS ET MODALES DE SÉLECTION
// ==========================================
function initFactions() {
    if(DOM.clearFactionBtn) {
        DOM.clearFactionBtn.addEventListener('click', (e) => {
            e.stopPropagation(); State.faction = null;
            const tag = document.getElementById('activeFactionTag');
            if(tag) { tag.classList.add('hidden'); tag.classList.remove('flex'); }
            renderAgents(); scrollToTop();
        });
    }
}

function initModals() {
    if(DOM.openModalBtn) DOM.openModalBtn.addEventListener('click', () => { 
        const m = document.getElementById('factionModal'); 
        m.classList.remove('hidden'); void m.offsetWidth; m.classList.add('opacity-100'); 
    });
}

function renderFactions() {
    const generateFactionHTML = (faction, isSidebar) => {
        const imgPath = `assets/Faction/${faction}.png`; 
        const fallbackImg = `https://placehold.co/300x300/181818/d7f70c?text=${faction.substring(0,3).toUpperCase()}&font=montserrat`;
        let displayName = faction === "Équipe d'intervention spéciale des Enquêtes criminelles" ? "N.E.P.S." : faction;
        let subName = faction === "Équipe d'intervention spéciale des Enquêtes criminelles" ? "Équipe d'intervention spéciale" : '';

        if(isSidebar) {
            return `
            <div class="mb-5 px-1 transform-gpu hidden md:block">
                <div class="faction-box rounded-[1.5rem] p-4 flex flex-col items-center gap-4 cursor-pointer w-full group bg-gradient-to-br from-[#121212] to-[#050505] border-2 border-zinc-800 hover:border-yellow-400/50 transition-colors transform-gpu" onclick="window.setFactionFilter('${faction.replace(/'/g, "\\'")}')">
                    <div class="w-40 h-40 md:w-44 md:h-44 bg-black rounded-[1.2rem] overflow-hidden flex items-center justify-center p-2 shadow-inner group-hover:bg-[#0a0a0a] transition-colors relative transform-gpu"><img src="${imgPath}" loading="eager" decoding="sync" alt="${faction}" class="w-full h-full object-contain scale-110 drop-shadow-xl relative z-10 transform-gpu" style="backface-visibility: hidden;" onerror="this.onerror=null; this.src='${fallbackImg}'"></div>
                    <div class="bg-black/95 px-3 py-2.5 rounded-xl text-xs font-black text-center w-full border border-zinc-700/80 text-zinc-400 group-hover:text-white group-hover:border-yellow-400/80 transition-colors shadow-lg uppercase leading-tight transform-gpu flex-1 flex flex-col justify-center">${displayName}${subName ? `<span class="block text-[8px] text-zinc-500 mt-0.5 tracking-wider">${subName}</span>` : ''}</div>
                </div>
            </div>`;
        } else {
            return `
            <div class="bg-[#121212] border-2 border-zinc-800 rounded-[2rem] p-4 sm:p-6 flex flex-col items-center justify-between gap-4 sm:gap-6 cursor-pointer hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 group shadow-2xl relative overflow-hidden" onclick="window.setFactionFilter('${faction.replace(/'/g, "\\'")}', true)">
                <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 transition-all duration-500 group-hover:scale-110 relative z-10 flex-shrink-0"><img src="${imgPath}" loading="lazy" class="w-full h-full object-contain" onerror="this.onerror=null; this.src='${fallbackImg}'"></div>
                <div class="bg-black/80 px-3 py-2 sm:px-5 sm:py-3 rounded-xl text-[10px] sm:text-xs md:text-sm font-black w-full text-center border border-zinc-800 group-hover:border-yellow-400 text-zinc-300 shadow-inner group-hover:text-yellow-400 transition-colors duration-300 uppercase tracking-wider relative z-10 flex-1 flex flex-col justify-center items-center">${displayName}${subName ? `<span class="block text-[8px] sm:text-[10px] text-zinc-500 mt-1">${subName}</span>` : ''}</div>
            </div>`;
        }
    };
    
    const modalGrid = document.getElementById('modalFactionsGrid'); if (modalGrid) modalGrid.innerHTML = factionsData.map(f => generateFactionHTML(f, false)).join('');
    const sidebarList = document.getElementById('sidebarFactionsList'); if (sidebarList) { const sidebarHTML = factionsData.map(f => generateFactionHTML(f, true)).join(''); sidebarList.innerHTML = sidebarHTML + sidebarHTML; }
}

window.setFactionFilter = function(faction, fromModal = false) {
    State.faction = faction; 
    const tag = document.getElementById('activeFactionTag');
    const nameLabel = document.getElementById('activeFactionName');
    if (tag && nameLabel) {
        nameLabel.textContent = faction === "Équipe d'intervention spéciale des Enquêtes criminelles" ? "N.E.P.S." : faction;
        tag.classList.remove('hidden'); tag.classList.add('flex');
    }
    if(fromModal) window.closeModal('factionModal');
    renderAgents(); scrollToTop();
    if (window.innerWidth < 768) closeMobileSidebar();
};

// ==========================================
// 9. MOTEUR DE RENDU (La Grille)
// ==========================================
function renderAgents() {
    DOM.grid.innerHTML = ''; State.filteredAgents = []; const agentsByVersion = {};

    agentsData.forEach((agent) => {
        const matchSearch = agent.name.toLowerCase().startsWith(State.search.toLowerCase());
        let matchFilter = true;
        if (State.mode === 'elements') matchFilter = State.filters.element === 'All' || filterGroups[State.filters.element]?.includes(agent.element);
        else if (State.mode === 'roles') matchFilter = State.filters.role === 'All' || agent.role === State.filters.role;
        else if (State.mode === 'versions') matchFilter = State.filters.version === 'All' || agent.version === State.filters.version;
        
        const matchFaction = !State.faction || agent.faction === State.faction; 
        const matchFav = !State.showFavorites || State.favorites.includes(agent.name);
        
        if (matchSearch && matchFilter && matchFaction && matchFav) {
            State.filteredAgents.push(agent); const v = agent.version || 'Inconnu'; if (!agentsByVersion[v]) agentsByVersion[v] = []; agentsByVersion[v].push(agent);
        }
    });

    if (State.filteredAgents.length > 0) {
        DOM.empty.classList.add('hidden'); DOM.empty.classList.remove('opacity-100'); let globalDelay = 0;
        
        if (State.mode === 'versions' && State.filters.version === 'All') {
            Object.keys(agentsByVersion).sort().forEach(version => {
                DOM.grid.insertAdjacentHTML('beforeend', `<div class="col-span-full relative mt-16 mb-12 flex items-center justify-center group/sep perspective-1000"><div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-[80%] h-px bg-gradient-to-r from-transparent via-zinc-700/80 to-transparent relative overflow-hidden"><div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#d7f70c] to-transparent -translate-x-full laser-beam"></div></div></div><div class="relative bg-[#050505] px-8 py-3 border border-zinc-800/80 rounded-full flex items-center gap-4 shadow-[0_0_40px_rgba(0,0,0,0.6)] transform transition-transform duration-700 hover:scale-110 hover:border-[#d7f70c]/50 hover:shadow-[0_0_50px_rgba(215,247,12,0.2)] z-10 cursor-default"><div class="w-2.5 h-2.5 bg-[#d7f70c] rounded-full animate-pulse shadow-[0_0_10px_#d7f70c]"></div><span class="font-display font-black italic text-2xl tracking-[0.3em] text-white uppercase drop-shadow-md">Version <span class="text-[#d7f70c]">${version.replace('V', '')}</span></span><div class="w-2.5 h-2.5 bg-[#d7f70c] rounded-full animate-pulse shadow-[0_0_10px_#d7f70c]"></div><div class="absolute inset-0 bg-[#d7f70c]/5 blur-xl rounded-full -z-10 group-hover/sep:bg-[#d7f70c]/15 transition-colors duration-500"></div></div></div>`);
                agentsByVersion[version].forEach(agent => DOM.grid.insertAdjacentHTML('beforeend', createCardHTML(agent, globalDelay++)));
            });
        } else { State.filteredAgents.forEach(agent => DOM.grid.insertAdjacentHTML('beforeend', createCardHTML(agent, globalDelay++))); }
        setTimeout(init3DParallax, 50);
    } else { DOM.empty.classList.remove('hidden'); setTimeout(() => DOM.empty.classList.add('opacity-100'), 10); }
    
    updateModalNavigation();
}

function createCardHTML(agent, delayIndex) {
    const hexColor = colorMap[agent.element] || '#ffffff'; const cleanHex = hexColor.replace('#', ''); 
    const isFav = State.favorites.includes(agent.name); 
    const heartClass = isFav ? 'text-red-500 fill-red-500' : 'text-zinc-500 fill-transparent'; 
    const displayName = agent.name === 'Jane' ? 'Jane Doe' : agent.name;

    return `
    <div class="agent-card-container flex flex-col cursor-pointer w-full group animate-fade-in-up" style="--elem-color: ${hexColor}; animation-delay: ${Math.min(delayIndex * 40, 800)}ms;" onclick="window.openAgentDetail('${agent.name.replace(/'/g, "\\'")}')">
        <div class="agent-shape-wrapper w-full aspect-square bg-zinc-800 relative">
            <div class="agent-shape-inner relative overflow-hidden flex items-end justify-center h-full w-full">
                <img src="assets/Agents/${agent.name}.png" loading="lazy" class="agent-image absolute bottom-0 w-full h-auto min-h-full object-cover object-bottom" onerror="this.onerror=null; this.src='https://placehold.co/400x400/181818/${cleanHex}?text=${agent.name.charAt(0)}&font=montserrat'">
                <div class="absolute inset-0 shadow-[inset_0_-35px_50px_rgba(0,0,0,0.95)] pointer-events-none transition-shadow duration-300 group-hover:shadow-[inset_0_-10px_20px_rgba(0,0,0,0.4)]"></div>
                <button onclick="window.toggleFavorite(this, '${agent.name.replace(/'/g, "\\'")}', event)" class="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-[#111]/80 backdrop-blur border border-zinc-700 flex items-center justify-center z-30 transition-all hover:scale-110 shadow-lg group/fav"><svg class="w-5 h-5 transition-colors duration-300 ${heartClass} group-hover/fav:text-red-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button>
            </div>
        </div>
        <div class="mt-3 mx-1 bg-[#151515] p-2 skew-x-[-15deg] border-b-[4px] shadow-lg transition-all duration-300 group-hover:bg-[#1a1a1a]" style="border-bottom-color: ${hexColor};">
            <div class="skew-x-[15deg] text-center w-full px-1 overflow-hidden flex items-center justify-center gap-2"><span class="text-white font-display font-black uppercase text-xs sm:text-[15px] tracking-[0.2em] truncate block drop-shadow-md transition-colors pointer-events-none">${displayName}</span></div>
        </div>
    </div>`;
}

// ==========================================
// 10. MODALE GUIDE DE L'AGENT ET ÉVÉNEMENTS GLOBAUX
// ==========================================
window.openAgentDetail = function(agentName) {
    const modal = document.getElementById('agentDetailModal');
    const splashImg = document.getElementById('agentSplashImage');
    const giantName = document.getElementById('modalGiantNameText');
    const guideContainer = document.getElementById('agentGuideContainer');
    
    guideContainer.scrollTo(0, 0); 
    State.modalIndex = State.filteredAgents.findIndex(a => a.name === agentName); 
    updateModalNavigation();
    window.history.pushState({}, '', '?' + new URLSearchParams({ agent: agentName }).toString());
    
    splashImg.style.opacity = '0';
    splashImg.onerror = function() { this.onerror = null; this.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; };
    splashImg.src = `assets/splash/${agentName}.png`; 
    giantName.textContent = agentName;
    guideContainer.innerHTML = getGuideHTML(agentName, agentsData.find(a => a.name === agentName));

    modal.classList.remove('hidden'); void modal.offsetWidth; modal.classList.add('opacity-100');
    
    setTimeout(() => {
        splashImg.style.opacity = '1'; splashImg.style.transform = agentName.toLowerCase() === 'remielle' ? 'translateY(0) scale(1.4)' : 'translateY(0) scale(1)';
        guideContainer.style.opacity = '1'; guideContainer.style.transform = 'translateX(0)';
    }, 50);
};

window.closeModal = function(id) {
    const m = document.getElementById(id);
    if(id === 'agentDetailModal') {
        document.getElementById('agentSplashImage').style.opacity = '0'; document.getElementById('agentSplashImage').style.transform = 'translateY(20px) scale(0.9)'; 
        document.getElementById('agentGuideContainer').style.opacity = '0'; document.getElementById('agentGuideContainer').style.transform = 'translateX(20px)';
        window.history.pushState({}, '', window.location.pathname); State.modalIndex = -1;
    }
    m.classList.remove('opacity-100'); setTimeout(() => m.classList.add('hidden'), 300);
};

function updateModalNavigation() {
    const prevBtn = document.getElementById('prevAgentBtn'); const nextBtn = document.getElementById('nextAgentBtn');
    if(!prevBtn || !nextBtn) return;
    const hasPrev = State.modalIndex > 0; const hasNext = State.modalIndex < State.filteredAgents.length - 1 && State.modalIndex !== -1;

    prevBtn.classList.toggle('opacity-0', !hasPrev); prevBtn.classList.toggle('pointer-events-none', !hasPrev); prevBtn.classList.toggle('-translate-x-10', !hasPrev);
    nextBtn.classList.toggle('opacity-0', !hasNext); nextBtn.classList.toggle('pointer-events-none', !hasNext); nextBtn.classList.toggle('translate-x-10', !hasNext);

    if (hasPrev) prevBtn.onclick = (e) => { e.stopPropagation(); window.openAgentDetail(State.filteredAgents[State.modalIndex - 1].name); };
    if (hasNext) nextBtn.onclick = (e) => { e.stopPropagation(); window.openAgentDetail(State.filteredAgents[State.modalIndex + 1].name); };
}

function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const modalAgent = document.getElementById('agentDetailModal');
        if (e.key === 'Escape') { 
            if(!modalAgent.classList.contains('hidden')) window.closeModal('agentDetailModal'); 
            else if(!document.getElementById('factionModal').classList.contains('hidden')) window.closeModal('factionModal'); 
        }
        if (!modalAgent.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft' && State.modalIndex > 0) window.openAgentDetail(State.filteredAgents[State.modalIndex - 1].name);
            if (e.key === 'ArrowRight' && State.modalIndex < State.filteredAgents.length - 1 && State.modalIndex !== -1) window.openAgentDetail(State.filteredAgents[State.modalIndex + 1].name);
        }
    });
}

window.shareCurrentAgent = function() {
    if (State.modalIndex === -1) return;
    const url = window.location.origin + window.location.pathname + '?agent=' + encodeURIComponent(State.filteredAgents[State.modalIndex].name);
    navigator.clipboard.writeText(url).then(() => {
        const toast = document.getElementById('toastNotification');
        toast.classList.remove('-translate-y-32', 'opacity-0'); toast.classList.add('translate-y-0', 'opacity-100');
        setTimeout(() => { toast.classList.remove('translate-y-0', 'opacity-100'); toast.classList.add('-translate-y-32', 'opacity-0'); }, 3000);
    });
};

function checkUrlForAgent() {
    const agentParam = new URLSearchParams(window.location.search).get('agent'); const fastMask = document.getElementById('fast-mask');
    if (agentParam) {
        const agent = agentsData.find(a => a.name.toLowerCase() === agentParam.toLowerCase());
        if (agent) { window.openAgentDetail(agent.name); setTimeout(() => { if(fastMask) { fastMask.style.opacity = '0'; setTimeout(() => fastMask.remove(), 400); } }, 100); } 
        else if (fastMask) fastMask.remove();
    } else if (fastMask) fastMask.remove();
}

function initLanguageSwitcher() {
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.setAttribute('data-active', currentLang);
        langSwitcher.addEventListener('click', () => {
            const newLang = langSwitcher.getAttribute('data-active') === 'fr' ? 'en' : 'fr'; 
            langSwitcher.setAttribute('data-active', newLang); setLanguage(newLang);
            document.querySelectorAll('.dyn-term').forEach(el => { const term = el.getAttribute('data-term'); if (term) el.textContent = tTerm(term); });
            renderAgents(); scrollToTop();
            if (State.modalIndex !== -1 && !document.getElementById('agentDetailModal').classList.contains('hidden')) { 
                document.getElementById('agentGuideContainer').innerHTML = getGuideHTML(State.filteredAgents[State.modalIndex].name, State.filteredAgents[State.modalIndex]); 
            }
        });
    }
}

function init3DParallax() {
    if (window.matchMedia("(hover: none)").matches) return; 
    document.querySelectorAll('.agent-card-container').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect(); const x = e.clientX - rect.left; const y = e.clientY - rect.top;
            card.classList.remove('reset-transition'); card.style.transform = `rotateX(${(((y - (rect.height / 2)) / (rect.height / 2)) * -12)}deg) rotateY(${(((x - (rect.width / 2)) / (rect.width / 2)) * 12)}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        card.addEventListener('mouseleave', () => { card.classList.add('reset-transition'); card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`; });
    });
}
