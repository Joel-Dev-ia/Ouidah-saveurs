
  // Recipe data
        const recipes = [
            {
                id: 1,
        name: "Akassa",
        image: "./images/Akassa__ TOP 10 Traditional Beninese Foods you MUST try _ Benin.jpg",
        description: "Pâte de maïs fermentée, plat de base à Ouidah souvent accompagnée de sauces.",
        prepTime: "30 min",
        cookTime: "1h",
        difficulty: "Moyen",
        servings: 4,
        tags: ["traditionnel"],
        ingredients: [
            "500g de farine de maïs",
            "1 litre d'eau",
            "1 pincée de sel",
            "Feuilles de bananier (pour la cuisson)"
        ],
        steps: [
            "Délayer la farine de maïs dans un peu d'eau froide.",
            "Porter le reste d'eau à ébullition et y verser le mélange en remuant constamment.",
            "Laisser cuire à feu doux pendant 45 minutes en remuant régulièrement.",
            "Verser la pâte dans des feuilles de bananier préalablement passées à l'eau chaude.",
            "Laisser refroidir avant de servir avec une sauce de votre choix."
        ],
        tips: "L'Akassa est souvent consommée avec de la sauce gombo ou de la sauce tomate. Traditionnellement, la pâte est laissée à fermenter pendant 24 heures avant cuisson pour plus de saveur."
    },
            {
                   id: 2,
        name: "Amiwo",
        image: "./images/94790cdaf171ca2c9bf7c487b25edcdf.jpg",
        description: "Bouillie de maïs épicée, souvent servie pour le petit déjeuner.",
        prepTime: "15 min",
        cookTime: "30 min",
        difficulty: "Facile",
        servings: 4,
        tags: ["rapide"],
        ingredients: [
            "250g de farine de maïs",
            "1 litre d'eau",
            "1 oignon émincé",
            "2 tomates coupées en dés",
            "1 piment (facultatif)",
            "Sel et poivre au goût",
            "2 cuillères à soupe d'huile de palme"
        ],
        steps: [
            "Faire chauffer l'huile de palme dans une casserole et y faire revenir l'oignon.",
            "Ajouter les tomates et le piment, laisser mijoter 5 minutes.",
            "Ajouter l'eau et porter à ébullition.",
            "Délayer la farine de maïs dans un peu d'eau froide puis l'incorporer à la préparation en remuant.",
            "Laisser cuire à feu doux pendant 20 minutes en remuant régulièrement.",
            "Rectifier l'assaisonnement et servir chaud."
        ],
        tips: "L'Amiwo est souvent accompagnée de pain ou de beignets. Pour une version plus riche, vous pouvez ajouter des morceaux de poisson fumé ou de viande."
    },
    {
        id: 3,
        name: "Gari Foto",
        image: "./images/dcfe5989b6750abd20d3ff7b5901d4d9.jpg",
        description: "Semoule de manioc réhydratée avec une sauce tomate épicée.",
        prepTime: "20 min",
        cookTime: "25 min",
        difficulty: "Facile",
        servings: 4,
        tags: ["vegetarien", "rapide"],
        ingredients: [
            "400g de gari (semoule de manioc)",
            "3 tomates mûres",
            "1 oignon",
            "2 gousses d'ail",
            "1 cube bouillon",
            "2 cuillères à soupe d'huile",
            "Sel, poivre et piment au goût",
            "Eau tiède"
        ],
        steps: [
            "Hacher finement l'oignon et l'ail. Couper les tomates en dés.",
            "Faire chauffer l'huile dans une poêle et y faire revenir l'oignon et l'ail.",
            "Ajouter les tomates, le cube bouillon et les épices. Laisser mijoter 10 minutes.",
            "Dans un grand bol, verser le gari et ajouter progressivement de l'eau tiède en mélangeant jusqu'à obtenir une texture moelleuse.",
            "Incorporer la sauce tomate au gari et bien mélanger.",
            "Servir immédiatement, accompagné d'avocat ou de poisson grillé si désiré."
        ],
        tips: "Le Gari Foto est un plat rapide et économique très populaire. Pour une version plus complète, ajoutez des œufs brouillés ou du thon en boîte."
    },
    {
        id: 4,
        name: "Sauce Gombo",
        image: "./images/91954da9fd54de112d4cdf9196540502.jpg",
        description: "Sauce gluante à base de gombo frais, souvent accompagnée de pâte ou de riz.",
        prepTime: "20 min",
        cookTime: "45 min",
        difficulty: "Moyen",
        servings: 4,
        tags: ["vegetarien", "traditionnel"],
        ingredients: [
            "500g de gombo frais",
            "2 oignons",
            "3 tomates",
            "2 gousses d'ail",
            "1 cube bouillon",
            "3 cuillères à soupe d'huile de palme",
            "Sel, poivre et piment au goût",
            "500ml d'eau"
        ],
        steps: [
            "Laver et équeuter les gombos. Les couper en rondelles fines.",
            "Hacher finement les oignons et l'ail. Couper les tomates en dés.",
            "Faire chauffer l'huile dans une casserole et y faire revenir les oignons et l'ail.",
            "Ajouter les tomates, le cube bouillon et les épices. Laisser mijoter 10 minutes.",
            "Ajouter les gombos et bien mélanger. Verser l'eau et porter à ébullition.",
            "Baisser le feu et laisser cuire à couvert pendant 30 minutes en remuant de temps en temps.",
            "La sauce est prête lorsqu'elle a une texture légèrement gluante."
        ],
        tips: "La sauce gombo est meilleure lorsqu'elle est préparée avec de l'huile de palme rouge. Elle est traditionnellement servie avec de l'akassa ou du riz blanc."
    },

{
    id: 5,
    name: "Dakouin Sauce Tomate au Tilapia",
    image: "./images/Dakouin-1.jpg",
    description: "Purée de maïs fermenté accompagnée d'une sauce tomate au tilapia frais, une variante équilibrée du plat traditionnel béninois.",
    prepTime: "48h (fermentation)",
    cookTime: "50min",
    difficulty: "Moyen",
    servings: 6,
    tags: ["traditionnel", "poisson frais", "saison"],
    carbonFootprint: {
        value: 1.8,  // Réduction grâce au tilapia local vs poisson fumé
        unit: "kg CO2e/portion",
        details: [
            "Maïs local (0.3kg)",
            "Tilapia d'élevage local (0.5kg)",  // Impact inférieur au poisson fumé
            "Tomates locales (0.2kg)"
        ]
    },
    ingredients: [
        "Pour la pâte:",
        "- 500g de maïs blanc",
        "- 2 litres d'eau",
        "- 1 poignée de malt",
        
        "Pour la sauce tomate:",
        "- 1 tilapia frais (environ 500g) nettoyé et coupé en tronçons",
        "- 4 tomates bien mûres",
        "- 1 oignon rouge",
        "- 2 gousses d'ail",
        "- 80ml d'huile rouge",
        "- 1 cube bouillon poisson",
        "- Piment frais/sel au goût",
        "- 1 c.à.c de gingembre moulu (optionnel)"
    ],
    steps: [
        "Fermentation (48h à l'avance):",
        "1. Tremper le maïs avec le malt dans l'eau pendant 2 jours",
        "2. Moudre finement et filtrer la pâte fermentée",
        
        "Cuisson du Dakouin:",
        "3. Faire cuire la pâte à feu doux en remuant 30min jusqu'à consistance épaisse",
        
        "Sauce tomate au tilapia:",
        "4. Faire revenir oignon et ail dans l'huile rouge 3min",
        "5. Ajouter les tomates mixées, cuire 5min",
        "6. Disposer les tronçons de tilapia dans la sauce",
        "7. Ajouter cube bouillon, gingembre et piment. Cuire à couvert 15min sans remuer"
    ],
    tips: [
        "→ Éco-geste : Choisir du tilapia d'élevage durable (label ASC)",
        "→ Pour un impact carbone minimal : Acheter le poisson chez les pêcheurs locaux le jour même",
        "→ Astuce anti-gaspi : Utiliser les arêtes pour faire un bouillon maison",
        "→ Cuisson économe : Couvrir la casserole pour réduire le temps de cuisson"
    ],
    culturalNote: "À Ouidah, le tilapia est considéré comme le 'poisson du peuple' pour sa disponibilité et son prix abordable. Son goût subtil permet d'équilibrer l'acidité du maïs fermenté."
},
    {
        id: 6,
        name: "Abobo (Haricot)",
        image: "./images/030fcffbbc06ba63d209aa298fbb6168.jpg",
        description: "Haricot sauce rouge, plat populaire et nourrissant de la cuisine béninoise.",
        prepTime: "30 min",
        cookTime: "1h30",
        difficulty: "Moyen",
        servings: 4,
        tags: ["végétarien", "traditionnel"],
        ingredients: [
            "300g de haricots blancs secs",
            "2 tomates bien mûres",
            "1 oignon moyen",
            "2 gousses d'ail",
            "1 piment frais (facultatif)",
            "3 cuillères à soupe d'huile rouge",
            "1 cube bouillon (volaille ou poisson)",
            "1 feuille de laurier",
            "Sel et poivre au goût",
            "Eau"
        ],
        steps: [
            "La veille, faire tremper les haricots dans l'eau froide.",
            "Le jour même, égoutter et rincer les haricots.",
            "Dans une marmite, couvrir les haricots d'eau et ajouter la feuille de laurier.",
            "Porter à ébullition puis réduire le feu. Laisser cuire 1h à feu doux.",
            "Pendant ce temps, préparer la sauce : piler l'oignon, l'ail et le piment au mortier.",
            "Dans une poêle, chauffer l'huile rouge et y faire revenir la mixture oignon/ail/piment.",
            "Ajouter les tomates coupées en dés et le cube bouillon. Laisser mijoter 15 min.",
            "Quand les haricots sont tendres, incorporer la sauce tomate et mélanger délicatement.",
            "Laisser mijoter encore 10 min à feu très doux pour que les saveurs se marient.",
            "Rectifier l'assaisonnement si nécessaire."
        ],
        tips: "L'Abobo de haricots se déguste traditionnellement avec de l'igname pilée ou du riz. Pour une version plus riche, ajoutez du poisson fumé ou de la viande séchée. À Ouidah, on sert souvent ce plat lors des cérémonies familiales."
    },
    {
    "id": 7,
    "name": "Gboman (Ragoût d'Épinards)",
    "image": "./images/image.jpg",
    "description": "Ragoût traditionnel de Ouidah à base d'épinards locaux, parfumé à l'huile rouge et au poisson fumé.",
    "prepTime": "20 min",
    "cookTime": "25 min",
    "difficulty": "Facile",
    "servings": 4,
    "tags": ["traditionnel", "sud-bénin", "feuilles"],
    "ingredients": [
        "500 g de feuilles de Gboma (ou épinards/feuilles de patate douce)",
        "200 g de poisson fumé (ou viande/tofu)",
        "1 oignon émincé",
        "2 tomates fraîches (ou 1 c.à.s de concentré)",
        "2 gousses d'ail écrasées",
        "1 piment frais (facultatif)",
        "3 c.à.s d'huile rouge (ou huile végétale)",
        "1 cube d'assaisonnement",
        "Sel au goût",
        "1 verre d'eau"
    ],
    "steps": [
        "Laver et couper les feuilles de Gboma en lanières. Blanchir 2 min si using épinards classiques.",
        "Dans une casserole, chauffer l'huile. Faire revenir oignon, ail et piment 2 min.",
        "Ajouter les tomates en dés (ou concentré) et mijoter 5 min.",
        "Incorporer le poisson fumé et ½ verre d'eau. Laisser cuire 5 min.",
        "Ajouter les feuilles de Gboma, mélanger et couvrir. Cuire 10-15 min à feu moyen.",
        "Rectifier l'assaisonnement (sel/cube) si nécessaire."
    ],
    "tips": "Servir avec de l'igname pilée, du riz ou de la pâte de maïs. Version enrichie : ajouter 1 c.à.s de pâte d'arachide en fin de cuisson. À Ouidah, on utilise des feuilles de Gboma sauvages pour un goût plus authentique."
},
{
    "id": 8,
    "name": "Doko (Yovo Doko)",
    "image": "./images/1ff927a7e3223daf87e44d3626471f40.jpg",
    "description": "Beignets soufflés sucrés, incontournables des rues de Ouidah. Parfaits pour le petit-déjeuner ou le goûter.",
    "prepTime": "15 min",
    "cookTime": "20 min",
    "difficulty": "Facile",
    "servings": 6,
    "tags": ["snack", "sucré", "street-food"],
    "ingredients": [
        "250 g de farine de blé",
        "100 g de sucre",
        "1 sachet de levure chimique (10g)",
        "1 pincée de sel",
        "1 œuf (optionnel pour une texture plus riche)",
        "250 ml d'eau tiède",
        "1 c.à.c d'extrait de vanille (facultatif)",
        "Huile de friture"
    ],
    "steps": [
        "Dans un saladier, mélanger la farine, le sucre, la levure et le sel.",
        "Ajouter l'œuf (si utilisé) et l'eau tiède petit à tout en battant pour éviter les grumeaux.",
        "Incorporer la vanille. La pâte doit être lisse et légèrement épaisse (comme une pâte à crêpes).",
        "Couvrir et laisser reposer 10 min.",
        "Chauffer l'huile dans une poêle profonde. À l'aide d'une cuillère, former des boules de pâte et les frire à feu moyen jusqu'à ce qu'elles soient dorées et gonflées.",
        "Égoutter sur du papier absorbant. Servir tiède."
    ],
    "tips": "Pour une version parfumée, ajoutez de la noix de muscade râpée ou du zeste de citron. À Ouidah, on les vend souvent dans des cornets en papier journal. Accompagnez-les de café ou de chocolat chaud !"
},
{
    "id": 9,
    "name": "Tchoukoutou",
    "image": "./images/467174816_541609412124768_7305727753728711467_n.jpg",
    "description": "Bière traditionnelle béninoise à base de mil fermenté, légèrement acidulée et rafraîchissante. Boisson emblématique des fêtes et cérémonies.",
    "prepTime": "30 min (plus 2-3 jours de fermentation)",
    "cookTime": "1h",
    "difficulty": "Moyen",
    "servings": "Variable (environ 5 litres)",
    "tags": ["boisson", "traditionnel", "fermenté"],
    "ingredients": [
        "2 kg de farine de mil",
        "5 litres d'eau",
        "1 poignée de malt de mil (ou levure traditionnelle appelée 'levain de tchoukoutou')",
        "Sucre roux (optionnel, pour ajuster le goût)",
        "Feuilles de baobab séchées (optionnel, pour la fermentation)"
    ],
    "steps": [
        "Torréfier légèrement la farine de mil dans une grande poêle sans huile jusqu'à ce qu'elle prenne une couleur légèrement dorée. Laisser refroidir.",
        "Dans un grand récipient, mélanger la farine avec 3 litres d'eau chaude (non bouillante) pour former une pâte épaisse.",
        "Ajouter le malt de mil ou le levain traditionnel. Mélanger vigoureusement.",
        "Couvrir le récipient avec un torchon propre et laisser fermenter à température ambiante pendant 48 à 72 heures. Le mélange doit développer une odeur légèrement acidulée.",
        "Après fermentation, diluer la pâte avec les 2 litres d'eau restante et filtrer à travers un tissu propre pour extraire le liquide.",
        "Laisser reposer encore 12 heures pour une seconde fermentation légère.",
        "Servir frais dans des calebasses ou des verres. Le Tchoukoutou se consomme généralement dans les 24h après préparation."
    ],
    "tips": "Pour une version plus sucrée, ajouter un peu de sucre roux avant de servir. À Ouidah, on le parfume parfois avec des morceaux de gingembre frais. Attention : le degré d'alcool varie selon la durée de fermentation (généralement entre 2% et 4%). Consommer avec modération."
},
{
    "id": 10,
    "name": "KluiKlui",
    "image": "./images/delicieux-cookies-aux-raisins-secs-et-a-l-avoine-vue-du-dessus.jpg",
    "description": "Biscuits traditionnels croquants à base de farine, sucre et noix de coco, parfaits pour accompagner le café ou le thé. Spécialité sucrée de Ouidah.",
    "prepTime": "20 min",
    "cookTime": "15 min",
    "difficulty": "Facile",
    "servings": "Environ 30 biscuits",
    "tags": ["biscuit", "sucré", "coco", "snack"],
    "ingredients": [
        "250 g de farine de blé",
        "100 g de sucre",
        "100 g de noix de coco râpée",
        "1 œuf",
        "1 pincée de sel",
        "1 c.à.c de vanille en poudre",
        "100 g de beurre ramolli",
        "1 c.à.s de lait (si nécessaire pour ajuster la texture)"
    ],
    "steps": [
        "Préchauffer le four à 180°C (thermostat 6).",
        "Dans un saladier, mélanger la farine, le sucre, la noix de coco, le sel et la vanille.",
        "Ajouter le beurre ramolli et pétrir du bout des doigts pour obtenir un mélange sableux.",
        "Incorporer l'œuf et mélanger jusqu'à obtenir une pâte homogène. Ajouter un peu de lait si la pâte est trop sèche.",
        "Former des petites boules de pâte (environ 2 cm de diamètre) et les aplatir légèrement entre vos paumes.",
        "Disposer les biscuits sur une plaque recouverte de papier sulfurisé en les espaçant.",
        "Enfourner pour 12-15 minutes jusqu'à ce qu'ils soient légèrement dorés.",
        "Laisser refroidir sur une grille avant de déguster."
    ],
    "tips": "Pour des KluiKlui plus croustillants, ajoutez 1 c.à.s de sucre glace à la pâte. À Ouidah, on les parfume parfois avec de la muscade ou de la cannelle. Se conservent 1 semaine dans une boîte hermétique."
},
{
    "id": 12,
    "name": "Hêviosso à l'ananas",
    "image": "./images/jkujyyttg.jpg",
    "description": "Version fruitée du jus sacré de gingembre, mélangeant le piquant du gingembre et la douceur de l'ananas. Boisson énergisante et digestive, très prisée lors des fêtes à Ouidah.",
    "prepTime": "20 min",
    "cookTime": "5 min",
    "difficulty": "Facile",
    "servings": 4,
    "tags": ["boisson", "rafraîchissant", "fruité", "vodoun"],
    "ingredients": [
        "100 g de gingembre frais pelé",
        "300 g d'ananas frais (ou 200 ml de jus d'ananas naturel)",
        "1 litre d'eau",
        "1 citron vert (jus)",
        "2 cuillères à soupe de miel",
        "1 pincée de sel",
        "1 bâton de cannelle (optionnel)",
        "Feuilles de menthe et morceaux d'ananas pour la décoration"
    ],
    "steps": [
        "Mixer le gingembre avec 1 verre d'eau. Filtrer pour obtenir un jus concentré.",
        "Mixer l'ananas frais (si utilisé) et filtrer pour obtenir 200 ml de jus.",
        "Dans une casserole, porter le reste d'eau à ébullition avec le bâton de cannelle.",
        "Ajouter le jus de gingembre filtré et laisser frémir 3 min. Retirer du feu.",
        "Incorporer le jus d'ananas, le jus de citron, le miel et le sel. Bien mélanger.",
        "Laisser refroidir à température ambiante puis filtrer à nouveau.",
        "Servir très frais avec des glaçons, décoré de morceaux d'ananas et de menthe."
    ],
    "tips": "Conseils Ouidah : - Pour une version 'cérémonielle', ajouter un piment entier pendant l'infusion. - Plus l'ananas est mûr, plus la boisson sera sucrée naturellement. - Se conserve 24h au réfrigérateur."
}
];

        // DOM Elements
        const recipesContainer = document.getElementById('recipes-container');
        const recipeModal = document.getElementById('recipe-modal');
        const modalContent = document.getElementById('modal-content');
        const closeModalBtn = document.getElementById('close-modal');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const carouselItems = document.querySelectorAll('.carousel-item');

        // Variables
        let currentCarouselIndex = 0;

        // Functions
        function renderRecipes(filter = 'all') {
            recipesContainer.innerHTML = '';
            
            const filteredRecipes = filter === 'all' 
                ? recipes 
                : recipes.filter(recipe => recipe.tags.includes(filter));
            
            filteredRecipes.forEach(recipe => {
                const recipeCard = document.createElement('div');
                recipeCard.className = 'dish-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300';
                recipeCard.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.name}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 text-gray-800">${recipe.name}</h3>
                        <p class="text-gray-600 mb-4">${recipe.description}</p>
                        <div class="flex justify-between text-sm text-gray-500 mb-4">
                            <span><i class="fas fa-clock mr-1"></i> ${recipe.prepTime}</span>
                            <span><i class="fas fa-fire mr-1"></i> ${recipe.cookTime}</span>
                            <span><i class="fas fa-utensils mr-1"></i> ${recipe.servings} pers.</span>
                        </div>
                        <button class="view-recipe-btn w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition duration-300" data-id="${recipe.id}">
                            Voir la recette
                        </button>
                    </div>
                `;
                recipesContainer.appendChild(recipeCard);
            });
            
            // Add event listeners to new buttons
            document.querySelectorAll('.view-recipe-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const recipeId = parseInt(e.target.getAttribute('data-id'));
                    showRecipeModal(recipeId);
                });
            });
        }

        function showRecipeModal(recipeId) {
            const recipe = recipes.find(r => r.id === recipeId);
            if (!recipe) return;
            
            modalContent.innerHTML = `
                <div class="p-6">
                    <div class="flex flex-col md:flex-row gap-6 mb-8">
                        <div class="md:w-1/2">
                            <img src="${recipe.image}" alt="${recipe.name}" class="w-full rounded-lg shadow-md">
                        </div>
                        <div class="md:w-1/2">
                            <h2 class="text-3xl font-bold mb-4 text-gray-800">${recipe.name}</h2>
                            <p class="text-gray-700 mb-4">${recipe.description}</p>
                            <div class="grid grid-cols-3 gap-4 mb-6">
                                <div class="bg-gray-100 p-3 rounded-lg text-center">
                                    <div class="text-gray-500 text-sm">Préparation</div>
                                    <div class="font-semibold">${recipe.prepTime}</div>
                                </div>
                                <div class="bg-gray-100 p-3 rounded-lg text-center">
                                    <div class="text-gray-500 text-sm">Cuisson</div>
                                    <div class="font-semibold">${recipe.cookTime}</div>
                                </div>
                                <div class="bg-gray-100 p-3 rounded-lg text-center">
                                    <div class="text-gray-500 text-sm">Portions</div>
                                    <div class="font-semibold">${recipe.servings}</div>
                                </div>
                            </div>
                            <div class="flex items-center mb-4">
                                <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">${recipe.difficulty}</span>
                                ${recipe.tags.map(tag => `<span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium ml-2">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Ingrédients</h3>
                            <ul class="space-y-2">
                                ${recipe.ingredients.map(ing => `<li class="flex items-start">
                                    <span class="inline-block bg-orange-100 text-orange-800 rounded-full p-1 mr-2">
                                        <i class="fas fa-check-circle text-xs"></i>
                                    </span>
                                    ${ing}
                                </li>`).join('')}
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Préparation</h3>
                            <ol class="space-y-4">
                                ${recipe.steps.map((step, index) => `<li class="flex items-start">
                                    <span class="inline-block bg-orange-600 text-white rounded-full w-6 h-6 text-center mr-2 flex-shrink-0">${index + 1}</span>
                                    <span>${step}</span>
                                </li>`).join('')}
                            </ol>
                        </div>
                    </div>
                    
                    ${recipe.tips ? `
                    <div class="mt-8 bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r">
                        <h4 class="font-bold text-orange-800 mb-2"><i class="fas fa-lightbulb mr-2"></i>Astuce culturelle</h4>
                        <p class="text-orange-700">${recipe.tips}</p>
                    </div>
                    ` : ''}
                </div>
            `;
            
            recipeModal.classList.remove('hidden');
            recipeModal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function updateCarousel() {
            carouselItems.forEach((item, index) => {
                item.classList.toggle('opacity-0', index !== currentCarouselIndex);
            });
        }

        // Event Listeners
        document.addEventListener('DOMContentLoaded', () => {
            renderRecipes();
        });

        closeModalBtn.addEventListener('click', () => {
            recipeModal.classList.add('hidden');
            recipeModal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        });

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => {
                    if (btn === button) {
                        btn.classList.add('bg-orange-600', 'text-white');
                        btn.classList.remove('bg-gray-200', 'hover:bg-orange-500', 'hover:text-white');
                    } else {
                        btn.classList.remove('bg-orange-600', 'text-white');
                        btn.classList.add('bg-gray-200', 'hover:bg-orange-500', 'hover:text-white');
                    }
                });
                
                const filter = button.getAttribute('data-filter');
                renderRecipes(filter);
            });
        });

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        prevBtn.addEventListener('click', () => {
            currentCarouselIndex = (currentCarouselIndex - 1 + carouselItems.length) % carouselItems.length;
            updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            currentCarouselIndex = (currentCarouselIndex + 1) % carouselItems.length;
            updateCarousel();
        });

        // Auto-rotate carousel
        setInterval(() => {
            currentCarouselIndex = (currentCarouselIndex + 1) % carouselItems.length;
            updateCarousel();
        }, 5000);

        // Close modal when clicking outside
        recipeModal.addEventListener('click', (e) => {
            if (e.target === recipeModal) {
                recipeModal.classList.add('hidden');
                recipeModal.classList.remove('flex');
                document.body.style.overflow = 'auto';
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
            });
        });
