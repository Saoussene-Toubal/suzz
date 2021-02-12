import Vue from "vue";
import Vuex from "vuex";
/*import { stat } from "fs";*/
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {
        name: "Toubal",
        surname: "Saoussene",
        birthDay: new Date(1997, 9, 24),
        startDescription: "Hello I’m Saoussene",
        description:
            ", un web developer basée a Boumérdes, Algéria .specializé en Vuejs/Laravel et j'ai une experience professional avec PHP. ",
    },
    technologies: {
        programming:  [
            { name: "JavaEE", level: 60 , },
            { name: "HTML & (S)CSS", level: 92 },
            { name: "Javascript (ES6)", level: 80 },
            { name: "PHP", level: 80 },
            { name: "PHP", level: 40 }
        ],
        frameworks: [
            { name: "Vue.js", level: 65 },
            { name: "Laravel", level: 60 },
            { name: "Tailwind.css", level: 80 },
            { name: "Bootstrap", level: 80 },
            { name: "Vuetify", level: 68 },
        ],
        tools:[
            { name: "git" },
            { name: "mvc" },
            { name: "Webpack" },
            { name: "Netlify" },
            { name: "Wordpress" }
        ]
    },
    projects: [{
        name: "3yadati",
        description: "3yadaty , est une application de gestion de cabinet médical qui traite les rendez-vous des clients , la gestion des tache secretaire , la gestion des consulatation et la géneration des ordonnaces et fiche analyse , accompagné avec un tableau de bord pour l'admin qui controle l'applicatiion-designer avec bootstrap , css et particlejs.",
        link: "",
        icon: "leaf",
        startDate: "2019",
        endDate: "2019",
        developer: "toubal saoussene",
        tags: [
            { name: "#opensource" },
            { name: "#php" },
            { name: "#app" },
            { name: "#kdconcept" }
        ]
    }, {
        name: "Suz portfolio",
        description: "Creation de mon propre portfolio avec du full Vue.js et Tailwind css!",
        link: "",
        icon: "address-card",
        startDate: "2020",
        endDate: "Present",
        developer: "Toubal saoussene",
        tags: [
            { name: "#opensource" },
            { name: "#vue" },
            { name: "#tailwindcss" },
            { name: "#portfolio" }
        ]
    },{
        name: "Hey Book !!",
        description: "Hey Book !! est une application web creé avec du Java EE et MysQL qui s'occupe de la gestion d'une bibliotheque en lign et offre un espace de recherche pour les utilisateurs et un espace de traitement de livres pour les admins.",
        link: "",
        icon: "book",
        startDate: "Oct ,2020",
        endDate: "Nov, 2020",
        developer: "saoussene toubal",
        tags: [
            { name: "#javaee" },
            { name: "#mysql" },
            { name: "#bootstrap" }
        ]
    },
    {
        name: "Meeting App",
        description: "Cette applications permet la gestion et l'organisation des evenemnt crée avec vuejs, vuetify et firebase.",
        link: "https://github.com/suuuzana/sou-calandrier",
        icon: "envelope",
        startDate: "Oct ,2020",
        endDate: "Nov, 2020",
        developer: "saoussene toubal",
        tags: [
            { name: "#vue" },
            { name: "#firebase" },
            { name: "#calender" }
        ]
    },
    {
        name: "Translate App",
        description: "Cette mini application permet la traduction des mots crée avec vuejs et l'API yandex.",
        link: "https://github.com/suuuzana/translate",
        icon: "wifi",
        startDate: "Fevrier 2020",
        endDate: "",
        developer: "saoussene toubal",
        tags: [
            { name: "#apitranslate" },
            { name: "#vuejs" },
            { name: "#yandex" }
        ]
    }
    ,
    {
        name: "Suz Ecommerce",
        description: "C'est une application de vent en lign  crée avec Laravel 6.",
        link: "",
        icon: "map-leaf",
        startDate: "Dec ,2020",
        endDate: "fev, 2021",
        developer: "saoussene toubal",
        tags: [
            { name: "#Laravel" },
            { name: "#strip" },
            { name: "#shoopingcart" }
        ]
    }
    ], events: [
        { 
            name: "KDCONCEPT",
            description: "Kdconcept est une boite de dévloppement basée a rouiba, alger durant mon parcourt labas j'ai travallé avec du PHP et MYSQL",
            role: "Backend Developer ",
            type: "Work",
            startDate: " 2018",
            endDate: "2019",
            roles:[
                {description:"Gestion des utilisateurs." },
                {description:"Gestion des Consulations." },
                {description:"Gestion des Rendez-vous" },
                {description:"Gestion des clients" },
                {description:"Gestion des Ordonnces et Analyses " }
            ]
        } , { 
            name: "Master en ingenieries des logiciels et traitement de l'informations (en cours)",
            description: "Université MHAMED BOUGARA BOUMERDES",
            role: "",
            type: "",
            startDate: " 2019",
            endDate: "2021",
            roles:[
               
            ]
        },
         { 
            name: "Licence en Systéme informatique",
            description: "Université MHAMED BOUGARA BOUMERDES",
            role: "",
            type: "",
            startDate: " 2015",
            endDate: "2019",
            roles:[
                
            ]
        }
        ,
         { 
            name: "CCNA 1",
            description: "ECOLE EL YACINE BOUMERDES",
            role: "",
            type: "",
            startDate: " juin 2018",
            endDate: "",
            roles:[
                
            ]
        },
        { 
            name: "CCNA 2",
            description: "ECOLE EL YACINE BOUMERDES",
            role: "",
            type: "",
            startDate: " octobre 2018",
            endDate: "",
            roles:[
                
            ]
        },
        { 
            name: "CERTIFICATION PYTHON OF EVRYBODY",
            description: "UNIVERSITE OF MICHIGAN IN COURSERA EN LIGN",
            role: "",
            type: "",
            startDate: " SEPTEMBRE 2020",
            endDate: "",
            roles:[
                
            ]
        },
        { 
            name: "CERTIFICATION WORDPRESS",
            description: "COURSERA EN LIGN",
            role: "",
            type: "",
            startDate: " JUIN 2020",
            endDate: "",
            roles:[
                
            ]
        },
    ], socials: [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/saoussene-toubal-82b037183/",
            icon: "linkedin" 
        }, {
            name: "Github",
            link: "https://github.com/suuuzana",
            icon: "github" 
        }, {
            name: "Twitter",
            link: "https://twitter.com/SaousseneToubal",
            icon: "twitter" 
        }, {
            name: "instagram",
            link: "https://www.instagram.com/saoussene_toubal/",
            icon: "instagram" 
        },  
    ]
},

    getters: { age: state => {
            let ageDiff = Date.now() - state.profile.birthDay;
            let ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        profile: state => state.profile,
        projects: state => state.projects,
        technologies: state => state.technologies,
        events: state => state.events,
        socials: state => state.socials
    },
    mutations: {},
    actions: {}
});
