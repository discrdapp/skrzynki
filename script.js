const apiEndpoint = 'https://bymykel.github.io/CSGO-API/api/en/crates.json';
let caseSkins = {};
let caseKnives = {}
let caseId = 1;
const casesElement = document.getElementById('cases');

let skinWylosowany;

fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            if (item.type == "Case") {
                caseSkins["case" + caseId] = item.contains;
                caseKnives["case" + caseId] = item.contains_rare;
                const caseDiv = document.createElement('div');
                caseDiv.id = "case" + caseId;
                caseDiv.classList.add("caseDiv");
                casesElement.appendChild(caseDiv);
                const caseElement = document.createElement('div');
                caseElement.className = 'case';
                caseElement.style.backgroundImage = `url('${item.image}')`
                caseDiv.appendChild(caseElement);
                const caseName = document.createElement('div');
                caseName.classList.add("caseName");
                caseName.innerHTML = item.name;
                caseDiv.appendChild(caseName);
                caseId++;
            }
        });
        document.querySelectorAll(".caseDiv").forEach((item) => {
            item.addEventListener("click", () => {
                pokazSkrzynke(item.id);
            })
        })
    })
    .catch(error => console.error('Error:', error));
    
    const openCase = document.getElementById("openCase");
    const closeButton = document.getElementById("close");
    const mainCase = document.getElementById("mainCase");
    const skinsDiv = document.getElementById("skins");
    const openButton = document.getElementById("open");
    let pierwszy = true;
    let playAnimation = false;
    let audio = new Audio();
    audio.src = "sound.mp3"
    audio.volume = 0.5;

    function pokazSkrzynke(id) {

        const skins = caseSkins[id];
    
        openCase.classList.remove("d-none");
        openCase.classList.add("d-flex");
        casesElement.classList.remove("d-grid");
        casesElement.classList.add("d-none");
    
        skins.forEach(skin => {
            const skinElement = document.createElement('div');
            skinElement.style.backgroundImage = `url('${skin.image}'), linear-gradient(to top, rgba(121,121,121,1), rgba(97,95,101,1))`;
            skinElement.classList.add("skinek");
            skinsDiv.appendChild(skinElement);
            const skinBottomLine = document.createElement("div");
            skinBottomLine.classList.add("skinBottomLine")
            skinBottomLine.style.backgroundColor = `${skin.rarity.color}`;
            skinElement.appendChild(skinBottomLine)
            let gun = skin.name.split(" | ")[0];
            let skinName = skin.name.split(" | ")[1];
            const gunName = document.createElement("div");
            gunName.classList.add("gunName");
            gunName.innerHTML = gun;
            skinElement.appendChild(gunName);
            const skinNazwa = document.createElement("div");
            skinNazwa.classList.add("skinName");
            skinNazwa.innerHTML = skinName;
            skinElement.appendChild(skinNazwa);
        });
        const knife = document.createElement("div");
        knife.style.backgroundImage = `url('https://waxpeer.com/img/collection/00.png'), linear-gradient(to right, rgba(73,59,14,255), rgba(122,106,32,255) , rgba(73,59,14,255))`;
        knife.classList.add("skinek");
        skinsDiv.appendChild(knife);
        const skinBottomLine = document.createElement("div");
        skinBottomLine.classList.add("skinBottomLine")
        skinBottomLine.style.backgroundColor = `#fbd413`;
        knife.appendChild(skinBottomLine)
        usunToCoWSkrzynce();
        losujSkinyDoSkrzynki(id);
        openButton.addEventListener('click', otworzPrzycisk)
        openButton.myid = id;
    } 
    
    const openSkin = document.getElementById("openedSkin");
    const openedSkinButtonsClose = document.getElementById("openedSkinButtonsClose");
    openedSkinButtonsClose.addEventListener('click', () => {
        openCase.classList.remove("d-none");
        openCase.classList.add("d-flex");
        openSkin.classList.add("d-none");
    })
    document.addEventListener('keydown', (e) => {
        if (e.key == "Escape" && openCase.classList.contains('d-none') && !openSkin.classList.contains('d-none')) {
            openCase.classList.remove("d-none");
            openCase.classList.add("d-flex");
            openSkin.classList.add("d-none");
            openSkin.classList.remove("opacity");
        }
    })

    function openedSkin(skin) {
        openCase.classList.remove("d-flex");
        openCase.classList.add("d-none");
        openSkin.classList.remove("d-none");
        openSkin.classList.add("opacity");

        const openedSkinName = document.getElementById("openedSkinName");
        const openedSkinRarity = document.getElementById("openedSkinRarity");
        const openedSkinImage = document.getElementById("openedSkinImage");
        const openedSkinInfo = document.getElementById("openedSkinInfo");

        openedSkinName.innerHTML = skin.name;
        if (skin.rarity.name != 'Exceedingly Rare') {
            openedSkinRarity.style.backgroundColor = skin.rarity.color;
        } else {
            openedSkinRarity.style.backgroundColor = '#fbd413';
        }
        openedSkinImage.style.backgroundImage = `url('${skin.image}')`;
        openedSkinInfo.innerHTML = skinDescription(skin);
    }

    function skinDescription(skin) {
        let jakiSkin = skin.name.split(" | ")[0];
        return skinDescriptions[jakiSkin]
    }

let openingAnimationInProgress = false;
    function otworzPrzycisk(evt) {
        if (!openingAnimationInProgress) {
            openingAnimationInProgress = true;
            let id = evt.currentTarget.myid
            if (!pierwszy) {
                usunToCoWSkrzynce();
                losujSkinyDoSkrzynki(id);
            }
            pierwszy = false;   
            if (audio.currentTime > 0 && !audio.paused && !audio.ended 
                && audio.readyState > audio.HAVE_CURRENT_DATA) {
                audio.pause();
                audio.currentTime = 0;
                audio.play();
            } else {
                audio.play();
            }
            playAnimation = true;
            let start;
            const duration = 5800;
            const endPos = -(35 * 263.5 + Math.random() * 263.5) - 7.5; 
            
            function easeOutCubic(t) {
                return (--t)*t*t+1;
            }
            
            function step(timestamp) {
                if (start === undefined)
                    start = timestamp;
                const elapsed = timestamp - start;
            
                let t = elapsed / duration;
                let easedT = easeOutCubic(t);
                let newX = easedT * endPos;
                mainCase.style.transform = 'translateX(' + newX + 'px)';
            
                if (elapsed < duration && playAnimation) {
                    window.requestAnimationFrame(step);
                } else {
                    openingAnimationInProgress = false;
                    openedSkin(skinWylosowany)              
                }
            }

            window.requestAnimationFrame(step);
        }
    };

    closeButton.addEventListener('click', () => {
        openButton.removeEventListener('click', otworzPrzycisk);
        mainCase.style.transform = '';
        playAnimation = false;
        pierwszy = true;
        audio.pause();
        audio.currentTime = 0;
        openCase.classList.add("d-none");
        openCase.classList.remove("d-flex");
        casesElement.classList.add("d-grid");
        casesElement.classList.remove("d-none");

        skinsDiv.innerHTML = '';
        mainCase.style.animation = '';
    });

    function losujSkinyDoSkrzynki(id) {
        let rarities = [
            { name: 'Mil-Spec Grade', odds: 79.92 },
            { name: 'Restricted', odds: 15.98 },
            { name: 'Classified', odds: 3.2 },
            { name: 'Covert', odds: 0.64 },
            { name: 'Exceedingly Rare', odds: 0.26 }
        ]; 
        losujskina(0, 36, id);
        let rand = Math.random() * 100;
        let cumulativeOdds = 0;
        for (let rarity of rarities) {
            cumulativeOdds += rarity.odds;
            if (rand < cumulativeOdds) {
                if (rarity.name != 'Exceedingly Rare') {
                    const skin = caseSkins[id]
                    let skinyDoWyLosowania = []
                    for (let j = 0; j < skin.length; j++) {
                        if (skin[j].rarity.name == rarity.name) {
                            skinyDoWyLosowania.push(skin[j])    
                        }
                    }
                    skinWylosowany = skinyDoWyLosowania[Math.floor(Math.random()* skinyDoWyLosowania.length)];
                    const itemInCase = document.createElement("div")
                    itemInCase.classList.add("skinWSkrzynce")
                    itemInCase.style.backgroundImage = `url('${skinWylosowany.image}'), radial-gradient(rgba(121,121,121,1), rgba(97,95,101,1))`;
                    mainCase.appendChild(itemInCase);
                    const itemOverlay = document.createElement("div");
                    itemOverlay.classList.add("itemOverlay")
                    itemOverlay.style.backgroundImage = `
                    linear-gradient(to top, ${skinWylosowany.rarity.color} 0%, ${skinWylosowany.rarity.color} 5%, rgba(0,212,255,0) 40%)`
                    itemInCase.appendChild(itemOverlay)
                    break;
                } else {
                    skinWylosowany = caseKnives[id][Math.floor(Math.random()* caseKnives[id].length)]
                    const itemInCase = document.createElement("div")
                    itemInCase.classList.add("skinWSkrzynce")
                    itemInCase.style.backgroundImage = `url('https://waxpeer.com/img/collection/00.png'), radial-gradient(rgba(121,121,121,1), rgba(97,95,101,1))`;
                    mainCase.appendChild(itemInCase);
                    const itemOverlay = document.createElement("div");
                    itemOverlay.classList.add("itemOverlay")
                    itemOverlay.style.backgroundImage = `
                    linear-gradient(to top, #fbd413 0%, #fbd413 5%, rgba(0,212,255,0) 40%)`
                    itemInCase.appendChild(itemOverlay)
                    break;
                }
            }
        }
        losujskina(0, 2, id);
    }

function usunToCoWSkrzynce() {
    mainCase.innerHTML = '';
}

function losujskina(a, b, id) {
    let rarities = [
        { name: 'Mil-Spec Grade', odds: 79.92 },
        { name: 'Restricted', odds: 15.98 },
        { name: 'Classified', odds: 3.2 },
        { name: 'Covert', odds: 0.64 },
        { name: 'Exceedingly Rare', odds: 0.26 }
    ]; 
    while (a != b) {
        let rand = Math.random() * 100;
        let cumulativeOdds = 0;
        for (let rarity of rarities) {
            cumulativeOdds += rarity.odds;
            if (rand < cumulativeOdds) {
                if (rarity.name != 'Exceedingly Rare') {
                    const skin = caseSkins[id]
                    let skinyDoWyLosowania = []
                    for (let j = 0; j < skin.length; j++) {
                        if (skin[j].rarity.name == rarity.name) {
                            skinyDoWyLosowania.push(skin[j])    
                        }
                    }
                    let skinDoPokazania = skinyDoWyLosowania[Math.floor(Math.random() * skinyDoWyLosowania.length)]
                    const itemInCase = document.createElement("div")
                    itemInCase.classList.add("skinWSkrzynce")
                    itemInCase.style.backgroundImage = `url('${skinDoPokazania.image}'), radial-gradient(rgba(121,121,121,1), rgba(97,95,101,1))`;
                    mainCase.appendChild(itemInCase);
                    const itemOverlay = document.createElement("div");
                    itemOverlay.classList.add("itemOverlay")
                    itemOverlay.style.backgroundImage = `
                    linear-gradient(to top, ${skinDoPokazania.rarity.color} 0%, ${skinDoPokazania.rarity.color} 5%, rgba(0,212,255,0) 40%)`
                    itemInCase.appendChild(itemOverlay)
                    a++;
                }
                break;
            }
        }
    }
}
