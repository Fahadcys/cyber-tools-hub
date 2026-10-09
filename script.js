
const categories = [
    "Reconnaissance & OSINT",
    "Network Scanning",
    "Network Analysis",
    "Web Security",
    "Vulnerability Assessment",
    "Password Auditing",
    "Digital Forensics",
    "SOC & Blue Team",
    "Reverse Engineering",
    "Penetration Testing",
    "Data Analysis",
    "Malware Analysis"
];

const defaultTools = [
    {
        name: "OSINT Framework",
        category: "Reconnaissance & OSINT",
        description: "Directory of OSINT tools and resources.",
        url: "https://osintframework.com/"
    },
    {
        name: "theHarvester",
        category: "Reconnaissance & OSINT",
        description: "Collect emails, domains and public information.",
        url: "https://github.com/laramies/theHarvester"
    },
    {
        name: "Amass",
        category: "Reconnaissance & OSINT",
        description: "Discover and map external attack surfaces.",
        url: "https://github.com/owasp-amass/amass"
    },
    {
        name: "Maltego",
        category: "Reconnaissance & OSINT",
        description: "Visualize relationships between entities.",
        url: "https://www.maltego.com/"
    },
    {
        name: "Sherlock",
        category: "Reconnaissance & OSINT",
        description: "Find usernames across social networks.",
        url: "https://github.com/sherlock-project/sherlock"
    },
    {
        name: "SpiderFoot",
        category: "Reconnaissance & OSINT",
        description: "Automate open-source intelligence collection.",
        url: "https://github.com/smicallef/spiderfoot"
    },
    {
        name: "Shodan",
        category: "Reconnaissance & OSINT",
        description: "Search internet-connected devices and services.",
        url: "https://www.shodan.io/"
    },
    {
        name: "Social Searcher",
        category: "Reconnaissance & OSINT",
        description: "Search public social media posts and mentions.",
        url: "https://www.social-searcher.com/"
    },
    {
        name: "Wayback Machine",
        category: "Reconnaissance & OSINT",
        description: "Explore archived websites and historical pages.",
        url: "https://web.archive.org/"
    },
    {
        name: "Nmap",
        category: "Network Scanning",
        description: "Discover hosts, ports and network services.",
        url: "https://nmap.org/"
    },
    {
        name: "Masscan",
        category: "Network Scanning",
        description: "High-speed TCP port scanner.",
        url: "https://github.com/robertdavidgraham/masscan"
    },
    {
        name: "RustScan",
        category: "Network Scanning",
        description: "Fast port scanner with Nmap integration.",
        url: "https://github.com/bee-san/RustScan"
    },
    {
        name: "Wireshark",
        category: "Network Analysis",
        description: "Capture and analyze network packets.",
        url: "https://www.wireshark.org/"
    },
    {
        name: "tcpdump",
        category: "Network Analysis",
        description: "Command-line network packet analyzer.",
        url: "https://www.tcpdump.org/"
    },
    {
        name: "Zeek",
        category: "Network Analysis",
        description: "Network security monitoring and analysis.",
        url: "https://zeek.org/"
    },
    {
        name: "Burp Suite",
        category: "Web Security",
        description: "Web application security testing platform.",
        url: "https://portswigger.net/burp"
    },
    {
        name: "OWASP ZAP",
        category: "Web Security",
        description: "Open-source web application security scanner.",
        url: "https://www.zaproxy.org/"
    },
    {
        name: "Nikto",
        category: "Web Security",
        description: "Web server security scanner.",
        url: "https://github.com/sullo/nikto"
    },
    {
        name: "Gobuster",
        category: "Web Security",
        description: "Discover directories, files and DNS names.",
        url: "https://github.com/OJ/gobuster"
    },
    {
        name: "Greenbone",
        category: "Vulnerability Assessment",
        description: "Vulnerability scanning and management.",
        url: "https://www.greenbone.net/"
    },
    {
        name: "Nuclei",
        category: "Vulnerability Assessment",
        description: "Template-based vulnerability scanner.",
        url: "https://github.com/projectdiscovery/nuclei"
    },
    {
        name: "Nessus",
        category: "Vulnerability Assessment",
        description: "Vulnerability assessment platform.",
        url: "https://www.tenable.com/products/nessus"
    },
    {
        name: "Hashcat",
        category: "Password Auditing",
        description: "Password hash recovery and auditing.",
        url: "https://hashcat.net/hashcat/"
    },
    {
        name: "John the Ripper",
        category: "Password Auditing",
        description: "Password security auditing tool.",
        url: "https://www.openwall.com/john/"
    },
    {
        name: "Hydra",
        category: "Password Auditing",
        description: "Authentication security testing tool.",
        url: "https://github.com/vanhauser-thc/thc-hydra"
    },
    {
        name: "Autopsy",
        category: "Digital Forensics",
        description: "Digital forensic investigation platform.",
        url: "https://www.autopsy.com/"
    },
    {
        name: "Volatility",
        category: "Digital Forensics",
        description: "Memory forensic analysis framework.",
        url: "https://volatilityfoundation.org/"
    },
    {
        name: "FTK Imager",
        category: "Digital Forensics",
        description: "Forensic imaging and evidence examination.",
        url: "https://www.exterro.com/ftk-imager"
    },
    {
        name: "Wazuh",
        category: "SOC & Blue Team",
        description: "Open-source security monitoring platform.",
        url: "https://wazuh.com/"
    },
    {
        name: "Suricata",
        category: "SOC & Blue Team",
        description: "Network intrusion detection and prevention.",
        url: "https://suricata.io/"
    },
    {
        name: "Security Onion",
        category: "SOC & Blue Team",
        description: "Threat detection and security monitoring.",
        url: "https://securityonion.net/"
    },
    {
        name: "MISP",
        category: "SOC & Blue Team",
        description: "Threat intelligence sharing and IOC management.",
        url: "https://www.misp-project.org/"
    },
    {
        name: "SOCRadar",
        category: "SOC & Blue Team",
        description: "Threat intelligence and external attack surface monitoring.",
        url: "https://socradar.io/"
    },
    {
        name: "MITRE ATT&CK",
        category: "SOC & Blue Team",
        description: "Knowledge base of adversary tactics and techniques.",
        url: "https://attack.mitre.org/"
    },
    {
        name: "ThreatFox",
        category: "SOC & Blue Team",
        description: "Search malware indicators of compromise.",
        url: "https://threatfox.abuse.ch/"
    },
    {
        name: "Ghidra",
        category: "Reverse Engineering",
        description: "Software reverse engineering framework.",
        url: "https://ghidra-sre.org/"
    },
    {
        name: "JADX",
        category: "Reverse Engineering",
        description: "Decompiler for Android applications.",
        url: "https://github.com/skylot/jadx"
    },
    {
        name: "Radare2",
        category: "Reverse Engineering",
        description: "Binary analysis and reverse engineering.",
        url: "https://rada.re/n/"
    },
    {
        name: "Metasploit",
        category: "Penetration Testing",
        description: "Penetration testing framework.",
        url: "https://www.metasploit.com/"
    },
    {
        name: "sqlmap",
        category: "Penetration Testing",
        description: "Automated SQL injection testing.",
        url: "https://sqlmap.org/"
    },
    {
        name: "CyberChef",
        category: "Data Analysis",
        description: "Encode, decode and analyze data.",
        url: "https://cyberchef.org/"
    },
    {
        name: "VirusTotal",
        category: "Malware Analysis",
        description: "Analyze suspicious files, URLs, domains and IPs.",
        url: "https://www.virustotal.com/"
    }
];

const STORAGE_KEY = "cyberToolsCustomV3";
const FAVORITES_KEY = "cyberToolsFavoritesV3";

function readStorage(key) {
    try {
        const data = JSON.parse(localStorage.getItem(key));
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

let customTools = readStorage(STORAGE_KEY);
let favorites = readStorage(FAVORITES_KEY);

let selectedCategory = "All";
let favoritesOnly = false;

const search = document.getElementById("search");
const container = document.getElementById("tools-container");
const categoriesBox = document.getElementById("categories");
const count = document.getElementById("tool-count");
const form = document.getElementById("tool-form");
const categorySelect = document.getElementById("tool-category");

function getTools() {
    return [...defaultTools, ...customTools];
}

function saveCustomTools() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(customTools)
    );
}

function saveFavorites() {
    localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(favorites)
    );
}

function createButton(label, callback, className = "") {
    const button = document.createElement("button");

    button.textContent = label;
    button.className = className;
    button.type = "button";

    button.addEventListener("click", callback);

    return button;
}

function renderCategories() {
    categoriesBox.replaceChildren();

    const allCategories = ["All", ...categories];

    allCategories.forEach(category => {
        const button = createButton(category, () => {
            selectedCategory = category;
            renderCategories();
            renderTools();
        });

        if (category === selectedCategory) {
            button.classList.add("active");
        }

        categoriesBox.appendChild(button);
    });
}

function renderTools() {
    container.replaceChildren();

    const keyword = search.value.trim().toLowerCase();

    const filtered = getTools().filter(tool => {
        const matchesSearch = [
            tool.name,
            tool.category,
            tool.description
        ].some(value =>
            value.toLowerCase().includes(keyword)
        );

        const matchesCategory =
            selectedCategory === "All" ||
            tool.category === selectedCategory;

        const matchesFavorites =
            !favoritesOnly ||
            favorites.includes(tool.url);

        return matchesSearch &&
               matchesCategory &&
               matchesFavorites;
    });

    count.textContent = `(${filtered.length})`;

    if (filtered.length === 0) {
        const message = document.createElement("p");

        message.className = "empty";
        message.textContent = "No tools found.";

        container.appendChild(message);
        return;
    }

    filtered.forEach(tool => {
        const card = document.createElement("article");
        card.className = "tool";

        const title = document.createElement("h3");
        title.textContent = tool.name;

        const category = document.createElement("span");
        category.className = "category-label";
        category.textContent = tool.category;

        const description = document.createElement("p");
        description.textContent = tool.description;

        const actions = document.createElement("div");
        actions.className = "tool-actions";

        const link = document.createElement("a");
        link.href = tool.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Official Website ↗";

        const isFavorite = favorites.includes(tool.url);

        const favoriteButton = createButton(
            isFavorite ? "★ Saved" : "☆ Save",
            () => toggleFavorite(tool.url),
            isFavorite ? "favorite active" : "favorite"
        );

        actions.append(link, favoriteButton);

        if (customTools.includes(tool)) {
            const deleteButton = createButton(
                "Delete",
                () => deleteTool(tool),
                "delete"
            );

            actions.appendChild(deleteButton);
        }

        card.append(
            title,
            category,
            description,
            actions
        );

        container.appendChild(card);
    });
}

function toggleFavorite(url) {
    if (favorites.includes(url)) {
        favorites = favorites.filter(item => item !== url);
    } else {
        favorites.push(url);
    }

    saveFavorites();
    renderTools();
}

function deleteTool(tool) {
    if (!confirm(`Delete ${tool.name}?`)) {
        return;
    }

    customTools = customTools.filter(item => item !== tool);

    saveCustomTools();

    favorites = favorites.filter(url => url !== tool.url);

    saveFavorites();
    renderTools();
}

categories.forEach(category => {
    const option = document.createElement("option");

    option.value = category;
    option.textContent = category;

    categorySelect.appendChild(option);
});

document.getElementById("add-tool-btn")
    .addEventListener("click", () => {
        form.hidden = !form.hidden;
    });

document.getElementById("cancel-btn")
    .addEventListener("click", () => {
        form.hidden = true;
        form.reset();
    });

document.getElementById("favorites-btn")
    .addEventListener("click", event => {
        favoritesOnly = !favoritesOnly;

        event.currentTarget.classList.toggle(
            "active",
            favoritesOnly
        );

        renderTools();
    });

form.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("tool-name")
        .value.trim();

    const category = categorySelect.value;

    const description = document.getElementById(
        "tool-description"
    ).value.trim();

    const url = document.getElementById("tool-url")
        .value.trim();

    const parsedUrl = new URL(url);

    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        alert("Enter a valid HTTP or HTTPS URL.");
        return;
    }

    const exists = getTools().some(tool =>
        tool.name.toLowerCase() === name.toLowerCase()
    );

    if (exists) {
        alert("This tool already exists.");
        return;
    }

    customTools.push({
        name,
        category,
        description,
        url
    });

    saveCustomTools();

    form.reset();
    form.hidden = true;

    search.value = "";
    selectedCategory = "All";
    favoritesOnly = false;

    document.getElementById("favorites-btn")
        .classList.remove("active");

    renderCategories();
    renderTools();
});

search.addEventListener("input", renderTools);

renderCategories();
renderTools();