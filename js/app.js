import { factionsData } from './data/factions.js';
import { agentsData, colorMap, iconMap, filterGroups } from './data/agents.js';
import { getGuideHTML } from './guides/index.js'; 
import { updateStaticUI, setLanguage, currentLang, tTerm, tData } from './i18n.js';
import { mindscapesData } from './data/mindscapes.js';

// ==========================================
// 1. ÉTAT GLOBAL (STATE)
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
    tabContainer: document.getElementById('mainTabContainer'),
    
    // Nouveaux éléments pour la sidebar mobile
    sidebar: document.getElementById('mainSidebar'),
    sidebarMask: document.getElementById('mobileSidebarMask'),
    openSidebarBtn: document.getElementById('openMobileSidebarBtn'),
    closeSidebarBtn: document.getElementById('closeMobileSidebarBtn'),

    searchInputs: [document.getElementById('searchInput'), document.getElementById('searchInputMobile')],
    clearBtns: [document.getElementById('clearSearchBtn'), document.getElementById('clearSearchBtnMobile')],
    dropdowns: [document.getElementById('searchDropdown'), document.getElementById('searchDropdownMobile')],
    favBtn: document.getElementById('favoriteFilterBtn'),
    favBadge: document.getElementById('favCountBadge'),
    openModalBtn: document.getElementById('openModalBtn'),
    factionModal: document.getElementById('factionModal'),
    agentModal: document.getElementById('agentDetailModal')
};

// ==========================================
// 3. INITIALISATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    updateStaticUI();
    initTabs();
    initFilters();
    initSearch();
    initFavorites();
    initFactions();
    initModals();
    initLanguageSwitcher();
    initKeyboardNavigation();
    initMobileSidebar(); // Activation du menu mobile
    initMobileSwipe();   // Activation du swipe
    
    renderFactions();
    renderAgents();
    
    setTimeout(() => {
        const activeTab = document.querySelector('.tab-pill.active');
        if (activeTab) updateSliderPosition(activeTab);
    }, 100);

    window.addEventListener('resize', () => {
        const activeTab = document.querySelector('.tab-pill.active');
        if (activeTab) updateSliderPosition(activeTab);
    });

    checkUrlForAgent();
});

// ==========================================
// 4. ONGLETS ET FILTRES
// ==========================================
function scrollToTop() { DOM.scrollArea.scrollTo({ top: 0, behavior: 'smooth' }); }

function updateSliderPosition(activeTab) {
    if (!DOM.tabContainer || !activeTab) return;
    const containerRect = DOM.tabContainer.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();
    DOM.tabContainer.style.setProperty('--slide-left', `${tabRect.left - containerRect.left}px`);
    DOM.tabContainer.style.setProperty('--slide-width', `${tabRect.width}px`);
}

function initTabs() {
    const tabs = [
        { id: 'tabElements', mode: 'elements', group: 'groupElements' },
        { id: 'tabRoles', mode: 'roles', group: 'groupRoles' },
        { id: 'tabVersions', mode: 'versions', group: 'groupVersions' }
    ];

    tabs.forEach(tab => {
        const btn = document.getElementById(tab.id);
        if(btn) btn.addEventListener('click', () => {
            State.mode = tab.mode;
            tabs.forEach(t => {
                document.getElementById(t.id).classList.toggle('active', t.mode === State.mode);
                document.getElementById(t.group).classList.toggle('hidden', t.mode !== State.mode);
            });
            updateSliderPosition(btn);
            renderAgents(); scrollToTop();
        });
    });
}

function initFilters() {
    const setup = (selector, type) => {
        document.querySelectorAll(selector).forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll(selector).forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                State.filters[type] = btn.getAttribute(`data-${type === 'element' ? 'filter' : type}`);
                renderAgents(); scrollToTop();
            });
        });
    };
    setup('.filter-elem-btn', 'element');
    setup('.filter-role-btn', 'role');
    setup('.filter-version-btn', 'version');
}

// ==========================================
// 5. RECHERCHE UNIFIÉE & OPTIMISÉE (Debounce)
// ==========================================
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function initSearch() {
    const debouncedSearch = debounce((query) => handleSearch(query), 150);

    DOM.searchInputs.forEach(input => {
        if(input) {
            input.addEventListener('input', (e) => debouncedSearch(e.target.value));
            input.addEventListener('focus', (e) => handleSearch(e.target.value));
            input.addEventListener('blur', () => setTimeout(() => DOM.dropdowns.forEach(d => d && d.classList.add('hidden')), 300));
        }
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
    let filtered = query ? agentsData.filter(a => a.name.toLowerCase().startsWith(query.toLowerCase())) : [...agentsData];
    filtered.sort((a, b) => a.name.localeCompare(b.name));

    const html = filtered.length === 0 
        ? `<div class="p-5 text-zinc-500 text-sm text-center italic font-bold">Aucun signal trouvé</div>`
        : filtered.map((agent, delay) => {
            const iconFile = iconMap[agent.element] || 'physique.png';
            return `
            <div class="dropdown-item-anim flex items-center gap-4 p-4 hover:bg-[#1a1a1a] cursor-pointer transition-colors group" style="animation-delay: ${delay * 15}ms" onmousedown="window.triggerSearchSelect('${agent.name}')" ontouchstart="window.triggerSearchSelect('${agent.name}')">
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
// 6. FAVORIS
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
        });
    }
}

window.toggleFavorite = function(btn, agentName, event) {
    event.stopPropagation(); const svg = btn.querySelector('svg');
    if(State.favorites.includes(agentName)) {
        State.favorites = State.favorites.filter(f => f !== agentName);
        svg.classList.remove('text-red-500', 'fill-red-500'); svg.classList.add('text-zinc-500', 'fill-transparent');
    } else {
        State.favorites.push(agentName);
        svg.classList.add('text-red-500', 'fill-red-500'); svg.classList.remove('text-zinc-400', 'fill-transparent');
    }
    localStorage.setItem('zzz_favorites', JSON.stringify(State.favorites)); updateFavBadge();
    if(State.showFavorites) renderAgents();
};

// ==========================================
// 7. FACTIONS ET MODALES
// ==========================================
function initFactions() {
    const clearFactionBtn = document.getElementById('clearFactionBtn');
    if(clearFactionBtn) {
        clearFactionBtn.addEventListener('click', (e) => {
            e.stopPropagation(); State.faction = null;
            document.getElementById('activeFactionTag').classList.add('hidden'); document.getElementById('activeFactionTag').classList.remove('flex');
            renderAgents(); scrollToTop();
        });
    }
}

function initModals() {
    if (DOM.openModalBtn) {
        DOM.openModalBtn.addEventListener('click', () => { 
            // 1. Fermer le tiroir mobile s'il est ouvert
            if(DOM.sidebar && !DOM.sidebar.classList.contains('-translate-x-full')) {
                if(DOM.closeSidebarBtn) DOM.closeSidebarBtn.click();
            }
            
            // 2. Ouvrir la modale
            if(DOM.factionModal) {
                DOM.factionModal.classList.remove('hidden'); 
                void DOM.factionModal.offsetWidth; 
                DOM.factionModal.classList.add('opacity-100'); 
            }
        });
    }
}

function renderFactions() {
    const generateFactionHTML = (faction, isSidebar) => {
        const imgPath = `assets/Faction/${faction}.png`; const fallbackImg = `https://placehold.co/300x300/181818/d7f70c?text=${faction.substring(0,3).toUpperCase()}&font=montserrat`;
        let displayName = faction === "Équipe d'intervention spéciale des Enquêtes criminelles" ? "N.E.P.S." : faction;
        let subName = faction === "Équipe d'intervention spéciale des Enquêtes criminelles" ? "Équipe d'intervention spéciale" : '';

        if(isSidebar) {
            return `
            <div class="mb-5 px-1 transform-gpu hidden md:block">
                <div class="faction-box rounded-[1.5rem] p-4 flex flex-col items-center gap-4 cursor-pointer w-full group bg-gradient-to-br from-[#121212] to-[#050505] border-2 border-zinc-800 hover:border-yellow-400/50 transition-colors transform-gpu" onclick="window.setFactionFilter('${faction.replace(/'/g, "\\'")}')">
                    <div class="w-40 h-40 md:w-44 md:h-44 bg-black rounded-[1.2rem] overflow-hidden flex items-center justify-center p-2 shadow-inner group-hover:bg-[#0a0a0a] transition-colors relative transform-gpu">
                        <img src="${imgPath}" loading="eager" decoding="sync" alt="${faction}" class="w-full h-full object-contain scale-110 drop-shadow-xl relative z-10 transform-gpu" style="backface-visibility: hidden;" onerror="this.onerror=null; this.src='${fallbackImg}'">
                    </div>
                    <div class="bg-black/95 px-3 py-2.5 rounded-xl text-xs font-black text-center w-full border border-zinc-700/80 text-zinc-400 group-hover:text-white group-hover:border-yellow-400/80 transition-colors shadow-lg uppercase leading-tight transform-gpu flex-1 flex flex-col justify-center">
                        ${displayName}${subName ? `<span class="block text-[8px] text-zinc-500 mt-0.5 tracking-wider">${subName}</span>` : ''}
                    </div>
                </div>
            </div>`;
        } else {
            return `
            <div class="bg-[#121212] border-2 border-zinc-800 rounded-[2rem] p-4 sm:p-6 flex flex-col items-center justify-between gap-4 sm:gap-6 cursor-pointer hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 group shadow-2xl relative overflow-hidden" onclick="window.setFactionFilter('${faction.replace(/'/g, "\\'")}', true)">
                <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 transition-all duration-500 group-hover:scale-110 relative z-10 flex-shrink-0">
                    <img src="${imgPath}" loading="lazy" alt="${faction}" class="w-full h-full object-contain" onerror="this.onerror=null; this.src='${fallbackImg}'">
                </div>
                <div class="bg-black/80 px-3 py-2 sm:px-5 sm:py-3 rounded-xl text-[10px] sm:text-xs md:text-sm font-black w-full text-center border border-zinc-800 group-hover:border-yellow-400 text-zinc-300 shadow-inner group-hover:text-yellow-400 transition-colors duration-300 uppercase tracking-wider relative z-10 flex-1 flex flex-col justify-center items-center">
                    ${displayName}${subName ? `<span class="block text-[8px] sm:text-[10px] text-zinc-500 mt-1">${subName}</span>` : ''}
                </div>
            </div>`;
        }
    };
    const modalGrid = document.getElementById('modalFactionsGrid'); if (modalGrid) modalGrid.innerHTML = factionsData.map(f => generateFactionHTML(f, false)).join('');
    const sidebarList = document.getElementById('sidebarFactionsList'); if (sidebarList) { const sidebarHTML = factionsData.map(f => generateFactionHTML(f, true)).join(''); sidebarList.innerHTML = sidebarHTML + sidebarHTML; }
}

window.setFactionFilter = function(faction, fromModal = false) {
    State.faction = faction; 
    let displayName = faction === "Équipe d'intervention spéciale des Enquêtes criminelles" ? "N.E.P.S." : faction;
    document.getElementById('activeFactionName').textContent = displayName;
    document.getElementById('activeFactionTag').classList.remove('hidden'); document.getElementById('activeFactionTag').classList.add('flex');
    if(fromModal) window.closeModal('factionModal');
    
    // Fermer le tiroir mobile si on a sélectionné une faction
    if (DOM.sidebar && !DOM.sidebar.classList.contains('-translate-x-full')) {
        DOM.closeSidebarBtn.click();
    }
    renderAgents(); scrollToTop();
};

window.closeModal = function(id) {
    const m = document.getElementById(id);
    if (!m) return;
    if(id === 'agentDetailModal') {
        const splash = document.getElementById('agentSplashImage'); const container = document.getElementById('agentGuideContainer');
        if(splash) { splash.style.opacity = '0'; splash.style.transform = 'translateY(20px) scale(0.9)'; }
        if(container) { container.style.opacity = '0'; container.style.transform = 'translateX(20px)'; }
        window.history.pushState({}, '', window.location.pathname);
        State.modalIndex = -1;
    }
    m.classList.remove('opacity-100'); setTimeout(() => { m.classList.add('hidden'); }, 300);
};

// ==========================================
// 8. GRILLE DES AGENTS (Avec Buffer DOM)
// ==========================================
function renderAgents() {
    State.filteredAgents = []; const agentsByVersion = {};
    
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

    let htmlBuffer = '';

    if (State.filteredAgents.length > 0) {
        DOM.empty.classList.add('hidden'); DOM.empty.classList.remove('opacity-100'); let globalDelay = 0;
        if (State.mode === 'versions' && State.filters.version === 'All') {
            Object.keys(agentsByVersion).sort().forEach(version => {
                htmlBuffer += `<div class="col-span-full relative mt-16 mb-12 flex items-center justify-center group/sep perspective-1000"><div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-[80%] h-px bg-gradient-to-r from-transparent via-zinc-700/80 to-transparent relative overflow-hidden"><div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#d7f70c] to-transparent -translate-x-full laser-beam"></div></div></div><div class="relative bg-[#050505] px-8 py-3 border border-zinc-800/80 rounded-full flex items-center gap-4 shadow-[0_0_40px_rgba(0,0,0,0.6)] transform transition-transform duration-700 hover:scale-110 hover:border-[#d7f70c]/50 hover:shadow-[0_0_50px_rgba(215,247,12,0.2)] z-10 cursor-default"><div class="w-2.5 h-2.5 bg-[#d7f70c] rounded-full animate-pulse shadow-[0_0_10px_#d7f70c]"></div><span class="font-display font-black italic text-2xl tracking-[0.3em] text-white uppercase drop-shadow-md">Version <span class="text-[#d7f70c]">${version.replace('V', '')}</span></span><div class="w-2.5 h-2.5 bg-[#d7f70c] rounded-full animate-pulse shadow-[0_0_10px_#d7f70c]"></div><div class="absolute inset-0 bg-[#d7f70c]/5 blur-xl rounded-full -z-10 group-hover/sep:bg-[#d7f70c]/15 transition-colors duration-500"></div></div></div>`;
                agentsByVersion[version].forEach(agent => { htmlBuffer += createCardHTML(agent, globalDelay++); });
            });
        } else { State.filteredAgents.forEach((agent) => { htmlBuffer += createCardHTML(agent, globalDelay++); }); }
        
        DOM.grid.innerHTML = htmlBuffer;
        setTimeout(init3DParallax, 50);
    } else { 
        DOM.grid.innerHTML = '';
        DOM.empty.classList.remove('hidden'); setTimeout(() => { DOM.empty.classList.add('opacity-100'); }, 10); 
    }
    updateModalNavigation();
}

function createCardHTML(agent, delayIndex) {
    const hexColor = colorMap[agent.element] || '#ffffff'; const cleanHex = hexColor.replace('#', ''); const fallbackImg = `https://placehold.co/400x400/181818/${cleanHex}?text=${agent.name.charAt(0)}&font=montserrat`;
    const staggerDelay = Math.min(delayIndex * 40, 800); const isFav = State.favorites.includes(agent.name); const heartClass = isFav ? 'text-red-500 fill-red-500' : 'text-zinc-500 fill-transparent'; const displayName = agent.name === 'Jane' ? 'Jane Doe' : agent.name;
    return `<div class="agent-card-container flex flex-col cursor-pointer w-full group animate-fade-in-up" style="--elem-color: ${hexColor}; animation-delay: ${staggerDelay}ms;" onclick="window.openAgentDetail('${agent.name.replace(/'/g, "\\'")}')"><div class="agent-shape-wrapper w-full aspect-square bg-zinc-800 relative"><div class="agent-shape-inner relative overflow-hidden flex items-end justify-center h-full w-full"><img src="assets/Agents/${agent.name}.png" loading="lazy" alt="${displayName}" class="agent-image absolute bottom-0 w-full h-auto min-h-full object-cover object-bottom" onerror="this.onerror=null; this.src='${fallbackImg}'"><div class="absolute inset-0 shadow-[inset_0_-35px_50px_rgba(0,0,0,0.95)] pointer-events-none transition-shadow duration-300 group-hover:shadow-[inset_0_-10px_20px_rgba(0,0,0,0.4)]"></div><button onclick="window.toggleFavorite(this, '${agent.name.replace(/'/g, "\\'")}', event)" class="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-[#111]/80 backdrop-blur border border-zinc-700 flex items-center justify-center z-30 transition-all hover:scale-110 shadow-lg group/fav"><svg class="w-5 h-5 transition-colors duration-300 ${heartClass} group-hover/fav:text-red-400" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button></div></div><div class="mt-3 mx-1 bg-[#151515] p-2 skew-x-[-15deg] border-b-[4px] shadow-lg transition-all duration-300 group-hover:bg-[#1a1a1a]" style="border-bottom-color: ${hexColor};"><div class="skew-x-[15deg] text-center w-full px-1 overflow-hidden flex items-center justify-center gap-2"><span class="text-white font-display font-black uppercase text-xs sm:text-[15px] tracking-[0.2em] truncate block drop-shadow-md transition-colors pointer-events-none">${displayName}</span></div></div></div>`;
}

// ==========================================
// 9. OUVERTURE DU GUIDE D'AGENT
// ==========================================
window.openAgentDetail = function(agentName) {
    const modal = document.getElementById('agentDetailModal');
    const splashImg = document.getElementById('agentSplashImage');
    const giantName = document.getElementById('modalGiantNameText');
    const guideContainer = document.getElementById('agentGuideContainer');
    
    if(guideContainer) {
        guideContainer.scrollTo(0, 0); 
        guideContainer.scrollTop = 0; 
    }
    
    State.modalIndex = State.filteredAgents.findIndex(a => a.name === agentName); updateModalNavigation();
    
    const urlParams = new URLSearchParams(window.location.search); urlParams.set('agent', agentName); window.history.pushState({}, '', '?' + urlParams.toString());
    
    if(splashImg) {
        splashImg.style.opacity = '0';
        splashImg.onerror = function() { this.onerror = null; this.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; };
        splashImg.src = `assets/splash/${agentName}.png`; 
    }
    if(giantName) giantName.textContent = agentName;
    
    if(guideContainer) guideContainer.innerHTML = getGuideHTML(agentName);

    if(modal) { modal.classList.remove('hidden'); void modal.offsetWidth; modal.classList.add('opacity-100'); }
    
    setTimeout(() => {
        if(splashImg) { splashImg.style.opacity = '1'; splashImg.style.transform = agentName.toLowerCase() === 'remielle' ? 'translateY(0) scale(1.4)' : 'translateY(0) scale(1)'; }
        if(guideContainer) { 
            guideContainer.style.opacity = '1'; 
            guideContainer.style.transform = 'translateX(0)'; 
            guideContainer.scrollTop = 0;
        }
    }, 50);
};

function updateModalNavigation() {
    const prevBtn = document.getElementById('prevAgentBtn'); const nextBtn = document.getElementById('nextAgentBtn');
    if(!prevBtn || !nextBtn) return;
    
    if (State.modalIndex > 0) {
        prevBtn.classList.remove('opacity-0', 'pointer-events-none', '-translate-x-10');
        prevBtn.onclick = (e) => { e.stopPropagation(); window.openAgentDetail(State.filteredAgents[State.modalIndex - 1].name); };
    } else { prevBtn.classList.add('opacity-0', 'pointer-events-none', '-translate-x-10'); }
    
    if (State.modalIndex < State.filteredAgents.length - 1 && State.modalIndex !== -1) {
        nextBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-x-10');
        nextBtn.onclick = (e) => { e.stopPropagation(); window.openAgentDetail(State.filteredAgents[State.modalIndex + 1].name); };
    } else { nextBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-x-10'); }
}

function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const modalAgent = document.getElementById('agentDetailModal');
        const factionModal = document.getElementById('factionModal');
        if (e.key === 'Escape') { 
            if(modalAgent && !modalAgent.classList.contains('hidden')) window.closeModal('agentDetailModal'); 
            else if(factionModal && !factionModal.classList.contains('hidden')) window.closeModal('factionModal'); 
        }
        if (modalAgent && !modalAgent.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft' && State.modalIndex > 0) window.openAgentDetail(State.filteredAgents[State.modalIndex - 1].name);
            if (e.key === 'ArrowRight' && State.modalIndex < State.filteredAgents.length - 1 && State.modalIndex !== -1) window.openAgentDetail(State.filteredAgents[State.modalIndex + 1].name);
        }
    });
}

// ==========================================
// 10. UTILITAIRES
// ==========================================
window.shareCurrentAgent = function() {
    if (State.modalIndex === -1) return;
    const url = window.location.origin + window.location.pathname + '?agent=' + encodeURIComponent(State.filteredAgents[State.modalIndex].name);
    navigator.clipboard.writeText(url).then(() => {
        const toast = document.getElementById('toastNotification');
        if(toast) { toast.classList.remove('-translate-y-32', 'opacity-0'); toast.classList.add('translate-y-0', 'opacity-100'); setTimeout(() => { toast.classList.remove('translate-y-0', 'opacity-100'); toast.classList.add('-translate-y-32', 'opacity-0'); }, 3000); }
    });
};

function initLanguageSwitcher() {
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.setAttribute('data-active', currentLang);
        langSwitcher.addEventListener('click', () => {
            const newLang = langSwitcher.getAttribute('data-active') === 'fr' ? 'en' : 'fr'; langSwitcher.setAttribute('data-active', newLang); setLanguage(newLang);
            document.querySelectorAll('.dyn-term').forEach(el => { const term = el.getAttribute('data-term'); if (term) el.textContent = tTerm(term); });
            renderAgents(); scrollToTop();
            
            if (State.modalIndex !== -1 && !document.getElementById('agentDetailModal').classList.contains('hidden')) { 
                const guideContainer = document.getElementById('agentGuideContainer');
                if(guideContainer) guideContainer.innerHTML = getGuideHTML(State.filteredAgents[State.modalIndex].name); 
            }
        });
    }
}

function checkUrlForAgent() {
    const agentParam = new URLSearchParams(window.location.search).get('agent'); 
    const fastMask = document.getElementById('fast-mask');
    if (agentParam) {
        const agent = agentsData.find(a => a.name.toLowerCase() === agentParam.toLowerCase());
        if (agent) { window.openAgentDetail(agent.name); setTimeout(() => { if(fastMask) { fastMask.style.opacity = '0'; setTimeout(() => fastMask.remove(), 400); } }, 100); } 
        else if (fastMask) fastMask.remove();
    } else if (fastMask) fastMask.remove();
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

// ==========================================
// 11. OPTIMISATION MOBILE (SWIPE)
// ==========================================
let touchStartX = 0;
let touchEndX = 0;

function initMobileSwipe() {
    const modal = document.getElementById('agentDetailModal');
    if(!modal) return;

    modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    }, { passive: true });
}

function handleSwipeGesture() {
    const swipeThreshold = 75; 
    
    if (touchEndX < touchStartX - swipeThreshold) {
        if (State.modalIndex < State.filteredAgents.length - 1 && State.modalIndex !== -1) {
            window.openAgentDetail(State.filteredAgents[State.modalIndex + 1].name);
        }
    }
    if (touchEndX > touchStartX + swipeThreshold) {
        if (State.modalIndex > 0) {
            window.openAgentDetail(State.filteredAgents[State.modalIndex - 1].name);
        }
    }
}

// ==========================================
// 12. MENU MOBILE (TIROIR COULISSANT)
// ==========================================
function initMobileSidebar() {
    if(DOM.openSidebarBtn) {
        DOM.openSidebarBtn.addEventListener('click', () => {
            DOM.sidebarMask.classList.remove('hidden');
            void DOM.sidebarMask.offsetWidth; 
            DOM.sidebarMask.classList.remove('opacity-0');
            DOM.sidebar.classList.remove('-translate-x-full');
        });
    }
    
    const closeSidebar = () => {
        if (!DOM.sidebar) return;
        DOM.sidebar.classList.add('-translate-x-full');
        if (DOM.sidebarMask) {
            DOM.sidebarMask.classList.add('opacity-0');
            setTimeout(() => DOM.sidebarMask.classList.add('hidden'), 300);
        }
    };

    if(DOM.closeSidebarBtn) DOM.closeSidebarBtn.addEventListener('click', closeSidebar);
    if(DOM.sidebarMask) DOM.sidebarMask.addEventListener('click', closeSidebar);
}
