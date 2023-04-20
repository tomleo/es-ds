import { NAV_BAR_ICONS } from '../lib-utils/es-nav-bar-constants';

export default {
    accountMenu: {
        loggedIn: {
            items: [
                {
                    name: 'My Account',
                    link: 'https://www.energysage.com/profile/',
                },
                {
                    name: 'Share Your Experience',
                    link: 'https://www.energysage.com/share-your-experience/',
                },
                {
                    name: 'Settings',
                    link: 'https://www.energysage.com/account-settings/router/',
                },
                {
                    name: 'Refer a Friend',
                    link: 'https://www.energysage.com/refer-a-friend/',
                },
                {
                    name: 'Sign Out',
                    link: 'https://www.energysage.com/logout/',
                },
            ],
        },
        loggedOut: {
            signIn: {
                name: 'Sign in',
                link: 'https://www.energysage.com/login/',
            },
            createAccount: {
                name: 'Create an account',
                link: 'https://www.energysage.com/register/',
            },
        },
    },
    topLevelMenus: [
        {
            name: 'Energy tips',
            subHeading: 'Learn from experts',
            icon: NAV_BAR_ICONS.LIGHT_BULB,
            topics: [
                {
                    name: 'Solar',
                    subtopics: [
                        {
                            name: 'Home solar guide',
                            link: 'https://www.energysage.com/solar/',
                        },
                        {
                            name: 'Community solar guide',
                            link: 'https://www.energysage.com/solar/solar-101/what-is-community-solar/',
                        },
                        {
                            name: 'Best solar panels',
                            link: 'https://news.energysage.com/best-solar-panels-complete-ranking/',
                        },
                        {
                            name: 'What do solar panels cost?',
                            link: 'https://www.energysage.com/local-data/solar-panel-cost/',
                        },
                    ],
                    link: 'https://www.energysage.com/solar/',
                },
                {
                    name: 'Backup power',
                    subtopics: [
                        {
                            name: 'Backup power guide',
                            link: 'https://www.energysage.com/energy-storage/',
                        },
                        {
                            name: 'Best home batteries',
                            link: 'https://news.energysage.com/best-solar-batteries/',
                        },
                        {
                            name: 'Home batteries vs. generators',
                            link: 'https://news.energysage.com/battery-backup-power-vs-generators-which-is-right-for-you/',
                        },
                    ],
                },
                {
                    name: 'Heating & cooling',
                    subtopics: [
                        {
                            name: 'Heat pump guide',
                            link: 'https://www.energysage.com/clean-heating-cooling/air-source-heat-pumps/',
                        },
                        {
                            name: 'Best heat pumps',
                            link: 'https://www.energysage.com/',
                        },
                        {
                            name: 'How do heat pumps work?',
                            link: 'https://news.energysage.com/how-do-heat-pumps-work/',
                        },
                    ],
                },
                {
                    name: 'Electric vehicles',
                    subtopics: [
                        {
                            name: 'EV charging guide',
                            link: 'https://www.energysage.com/electric-vehicles/charging-your-ev/',
                        },
                        {
                            name: 'Electric vehicle guide',
                            link: 'https://www.energysage.com/electric-vehicles/',
                        },
                        {
                            name: 'Best EV chargers',
                            link: 'https://www.energysage.com/',
                        },
                        {
                            name: 'What does it cost to charge an EV?',
                            link: 'https://news.energysage.com/electric-vehicle-charging-cost-vs-gas/',
                        },
                    ],
                },
                {
                    name: 'Smart home',
                    subtopics: [
                        {
                            name: 'Home electricity guide',
                            link: 'http://www.energysage.com/electricity/',
                        },
                        {
                            name: 'Home energy management guide',
                            link: 'http://www.energysage.com/energy-management/',
                        },
                        {
                            name: 'Energy efficiency',
                            link: 'http://www.energysage.com/energy-efficiency/',
                        },
                        {
                            name: 'Best smart home gadgets',
                            link: 'http://www.energysage.com/energy-products/',
                        },
                    ],
                },
                {
                    name: 'For your business',
                    subtopics: [
                        {
                            name: 'Clean energy guide for businesses',
                            link: 'http://www.energysage.com/',
                        },
                        {
                            name: 'Solar for businesses',
                            link: 'https://news.energysage.com/commercial-solar-benefits-for-business/',
                        },
                        {
                            name: 'Solar for nonprofit organizations',
                            link: 'https://news.energysage.com/solar-nonprofit-benefits-financing/',
                        },
                        {
                            name: 'Energy storage for businesses',
                            link: 'https://news.energysage.com/energy-storage-for-businesses/',
                        },
                    ],
                },
                {
                    name: 'Clean energy financing',
                    subtopics: [
                        {
                            name: 'Guide to financing',
                            link: 'http://www.energysage.com/',
                        },
                        {
                            name: 'How to pay for solar',
                            link: 'https://www.energysage.com/solar/how-to-go-solar/how-to-pay-for-solar/',
                        },
                        {
                            name: 'What to know about solar loans',
                            link: 'https://news.energysage.com/solar-loans-overview/',
                        },
                    ],
                },
                {
                    name: 'EnergySage news',
                    subtopics: [
                        {
                            name: 'Blog',
                            link: 'http://news.energysage.com/',
                        },
                    ],
                },
            ],
            featuredArticle: {
                linkName: "Editor's Recommendation",
                linkUrl: 'https://news.energysage.com/are-solar-panels-worth-it/',
                lede: 'Everything you need to know about community solar: projects, costs, savings, and more',
            },
        },
        {
            name: 'Solar calculator',
            subHeading: 'Check your savings',
            icon: NAV_BAR_ICONS.CALCULATOR,
            link: 'https://www.energysage.com/solar/calculator',
            topics: [],
        },
        {
            name: 'About us',
            subHeading: 'Why choose EnergySage',
            icon: NAV_BAR_ICONS.ES_LEAF,
            topics: [
                {
                    name: 'Our company',
                    subtopics: [
                        {
                            name: 'Mission & values',
                            link: 'https://www.energysage.com/about-us/company/',
                        },
                        {
                            name: 'How it works',
                            link: '',
                        },
                        {
                            name: 'Editorial team',
                            link: '',
                        },
                        {
                            name: 'Partner with us',
                            link: 'https://www.energysage.com/partners/',
                        },
                        {
                            name: 'Careers',
                            link: 'https://www.energysage.com/about-us/careers/',
                        },
                        {
                            name: 'Market research',
                            link: 'https://www.energysage.com/data/',
                        },
                        {
                            name: 'Editorial guidelines',
                            link: 'https://www.energysage.com/editorial-guidelines/',
                        },
                        {
                            name: 'Press',
                            link: 'https://www.energysage.com/press/',
                        },
                    ],
                },
            ],
            featuredArticle: {
                linkName: 'Recent Press',
                linkUrl: 'https://www.energysage.com/press/energysage-marketplace-intel-report-16',
                lede: 'EnergySage Releases Its 16th Solar & Storage Marketplace Report',
            },
        },
    ],
    products: [
        {
            name: 'Home solar',
            link: 'https://www.energysage.com/market-intro/',
            topics: [
                {
                    name: 'Rooftop solar',
                    subHeading: 'Install solar on your property',
                    link: 'https://www.energysage.com/market-intro/',
                    subtopics: [
                        {
                            name: 'Home solar guide',
                            link: 'https://www.energysage.com/solar/',
                        },
                        {
                            name: 'Solar calculator',
                            link: 'https://www.energysage.com/solar/calculator/',
                        },
                        {
                            name: 'Search local installers',
                            link: 'https://www.energysage.com/market/equipment-rebates/',
                        },
                        {
                            name: 'Financing',
                            link: 'https://www.energysage.com/solar/financing/loan-providers/',
                        },
                        {
                            name: 'Installer reviews',
                            link: 'https://www.energysage.com/installers/',
                        },
                        {
                            name: 'Compare solar panels',
                            link: 'https://www.energysage.com/solar-panels/',
                        },
                        {
                            name: 'Compare inverters',
                            link: 'https://www.energysage.com/solar-inverters/',
                        },
                        {
                            name: 'Solar incentives',
                            link: 'https://www.energysage.com/local-data/solar-rebates-incentives/',
                        },
                        {
                            name: 'Backup power guide',
                            link: 'https://www.energysage.com/energy-storage//',
                        },
                        {
                            name: 'Get personalized quotes',
                            link: 'https://www.energysage.com/market/start/',
                        },
                    ],
                },
                {
                    name: 'Community solar',
                    subHeading: 'Go solar with no equipment',
                    link: 'https://communitysolar.energysage.com/',
                    subtopics: [
                        {
                            name: 'Community solar guide',
                            link: 'https://www.energysage.com/solar/solar-101/what-is-community-solar/',
                        },
                        {
                            name: 'Search solar farms',
                            link: 'https://communitysolar.energysage.com/projects',
                        },
                    ],
                },
            ],
            featuredArticle: {
                eyebrow: "Editor's Recommendation",
                link: 'https://www.energysage.com/local-data/solar-panel-cost/',
                name: 'What do solar panels cost? ',
            },
        },
        {
            name: 'Community solar',
            link: 'https://communitysolar.energysage.com/',
            items: [
                {
                    name: 'Community solar guide',
                    link: 'https://www.energysage.com/solar/solar-101/what-is-community-solar/',
                },
                {
                    name: 'Search solar farms ',
                    link: 'https://communitysolar.energysage.com/projects',
                },
            ],
        },
        {
            name: 'Heating & cooling',
            link: 'https://heatpumps.energysage.com/',
            items: [
                {
                    name: 'Heat pump guide',
                    link: 'https://www.energysage.com/clean-heating-cooling/air-source-heat-pumps/',
                },
                {
                    name: 'Installer reviews',
                    link: 'https://www.energysage.com/supplier/search?selected_facets=services:installers&selected_facets=technology_types:High%20Efficiency%20HVAC',
                },
                {
                    name: 'Get personalized quotes',
                    link: 'https://heatpumps.energysage.com/welcome',
                },
            ],
        },
        {
            name: 'Backup power',
            link: 'https://www.energysage.com/energy-storage/',
            items: [
                {
                    name: 'Backup power guide',
                    link: 'https://www.energysage.com/energy-storage/',
                },
                {
                    name: 'Installer reviews',
                    link: 'https://www.energysage.com/supplier/search?selected_facets=services:installers&selected_facets=technology_types:Energy%20Storage',
                },
                {
                    name: 'Home battery incentives',
                    link: 'https://www.energysage.com/energy-storage/benefits-of-storage/energy-storage-incentives/',
                },
                {
                    name: 'Compare home batteries',
                    link: 'https://www.energysage.com/solar-batteries/',
                },
            ],
        },
        {
            name: 'EV charging',
            link: 'https://www.energysage.com/energy-products/ev-charging-stations/',
            items: [
                {
                    name: 'Compare EV chargers',
                    link: 'https://www.energysage.com/energy-products/ev-charging-stations/',
                },
                {
                    name: 'Explore electric vehicles',
                    link: 'https://electricvehicles.energysage.com/',
                },
            ],
        },
        {
            name: 'For your business',
            link: 'https://www.energysage.com/businesses/',
            items: [
                {
                    name: 'Solar for businesses',
                    link: 'https://news.energysage.com/commercial-solar-benefits-for-business/',
                },
                {
                    name: 'Solar for nonprofit organizations',
                    link: 'https://news.energysage.com/solar-nonprofit-benefits-financing/',
                },
                {
                    name: 'Energy storage for businesses',
                    link: 'https://news.energysage.com/energy-storage-for-businesses/',
                },
            ],
        },
    ],
};
