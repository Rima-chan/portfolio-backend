const data = [
    {
        "id": "p1",
        "title": "Site e-commerce",
        "type": "Projet formation web",
        "attachments": ['p5_screen_devises.png', 'p5_capture_accueil.png', 'p5_deckstop_shop.png'],
        "description": "Réalisation du MVP front-end d'un site e-commerce uniquement en CSS, HTML et JavaScript. Fonctionnalités : récupérer les données d'une API, gestion du panier, formulaire sécurisé",
        "langages": "Html, CSS, Javascript",
        "tags": ["html", "css", "javascript", "bootstrap"],
        "details": [
            "Communication avec une API",
            "Panier shopping",
            "Formulaire sécurisé"
        ],
        "url": "https://rima-chan.github.io/Ecommerce-Website/",
        "github": "https://github.com/Rima-chan/Ecommerce-Website.git"
    },
    {
        "id": "p2",
        "title": "Backend - API Rest",
        "type": "Projet formation web",
        "attachments": ['p6_page_accueil.png', 'p6_sauce.png', 'p6_likes.png'],
        "description": "Réalisation du backend (frontend déjà réalisé) d'un site d'avis gastronomiques (sauces piquantes) : création d'une API REST (CRUD). Fonctionnalités : création (authentification/déconnexion) d'un compte utilisateur, ajout/modification/suppresion d'une sauce, système de Like/Dislikes",
        "langages": "NodeJS, Express, MongoDB",
        "tags": ["NodeJS", "Express", "MongoDB"],
        "details": [
            "Creation compte et authentification utilisateur",
            "Ajout, modification et suppression de sauces (avec authentification)",
            "Système Like/Dislikes",
            "Base de données sécurisée"
        ],
        "github": "https://github.com/Rima-chan/MarieBeaujeu_6_31072021.git"
    },
    {
        "id": "p3",
        "title": "Reseau social d'entreprise",
        "type": "Projet formation web",
        "attachments": [ 'p7_screen_devises.png', 'p7_posts.png', 'p7_inscription.png'],
        "langages": "NodeJS, Sequelize, Vue",
        "description": "Réalisation du MVP d'un réseau social (partages d'images style 9gag) interne avec profils administrateurs. Fonctionnalités : creation/authentification/déconnexion compte utilisateur, creation/modification/suppression d'un post, commenter les posts (modification/suppression possibles), modification/suppression d'un profil, droits administrateurs (modération des publications et commentaires)",
        "tags": ["NodeJS", "Express", "Sequelize", "MySQL", "VueJS", "Bootstrap"],
        "details": [
            "Creation compte, connexion, déconnexion utilisateur",
            "Authentification utilisateur",
            "Publication, modification, suppresion d'un post et d'un commentaire",
            "Modification, suppression d'un profil utilisateur",
            "Privilèges administrateur"
        ],
        "github": "https://github.com/Rima-chan/MarieBeaujeu_7_21082021.git"
    },
    {
        "id": "p4",
        "title": "Apps JS",
        "type": "Projet perso",
        "attachments": ['app_JS_devises_transparent.png', 'recette_app_capture.png', 'app_meteo_capture.png'],
        "langages": "Javascript",
        "description": "Réalisation de plusieurs applications avec Javascript : application météo (API Openweathermap), Todo liste, Sticky Note, application de recettes (API publique Spoonacular)",
        "tags": ["CSS", "Html", "Javascript"],
        "details": [
            "Tailwindcss : Todo Liste et App Recette",
        ],
        "url": "https://rima-chan.github.io/Apps-JS/",
        "github": "https://github.com/Rima-chan/Apps-JS.git"
    }
] 

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(data))));
}