const meals = [
    {
        name: "Chicken Stir-Fry",
        image: "./images/chicken-stir-fry.jpg",
        description: "Quick and healthy stir-fry with colorful vegetables",
        prepTime: 15,
        cookTime: 15,
        servings: 4,
        difficulty: "Easy",
        cuisine: "Asian",
        rating: 4.5,
        reviews: 324,
        ingredients: [
            "500g chicken breast, sliced",
            "2 bell peppers, sliced",
            "1 broccoli head, florets",
            "2 carrots, julienned",
            "3 tablespoons soy sauce",
            "2 tablespoons oyster sauce",
            "1 tablespoon sesame oil",
            "2 cloves garlic, minced",
            "Fresh ginger, grated"
        ],
        instructions: [
            "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
            "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
            "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
            "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
            "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
            "Serve immediately over steamed rice or noodles."
        ],
        nutrition: {
            Calories: "320 kcal",
            Protein: "34g",
            Carbohydrates: "18g",
            Fat: "12g",
            Fiber: "5g",
            Sodium: "840mg"
        },
        tips: [
            "Cut all ingredients before starting to cook",
            "Keep heat high for authentic stir-fry texture",
            "Don't overcrowd the wok or vegetables will steam",
            "Add cashews or peanuts for extra crunch"
        ]
    },
    {
        name: "Chicken Tikka Masala",
        image: "./images/chicken-tikka-masala.jpg",
        description: "Rich and creamy Indian curry with tender chicken pieces",
        prepTime: 20,
        cookTime: 30,
        servings: 4,
        difficulty: "Intermediate",
        cuisine: "Asian",
        rating: 4.7,
        reviews: 389,
        ingredients: [
            "600g chicken breast, cubed",
            "1 cup plain yogurt",
            "2 tablespoons tikka masala paste",
            "400ml coconut cream",
            "1 onion, diced",
            "4 cloves garlic, minced",
            "2 tablespoons ginger, grated",
            "400g canned tomatoes",
            "Fresh cilantro for garnish"
        ],
        instructions: [
            "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
            "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
            "In the same pan, saute onion until soft. Add garlic and ginger, cook for 1 minute.",
            "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
            "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
            "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."
        ],
        nutrition: {
            Calories: "450 kcal",
            Protein: "38g",
            Carbohydrates: "24g",
            Fat: "22g",
            Fiber: "4g",
            Sodium: "760mg"
        },
        tips: [
            "Marinate chicken overnight for deeper flavor",
            "Use full-fat coconut cream for richest sauce",
            "Adjust spice level by varying the tikka paste amount",
            "Serve with naan bread and basmati rice"
        ]
    },
    {
        name: "French Onion Soup",
        image: "./images/french-onion-soup.jpg",
        description: "Rich beef broth with caramelized onions and melted cheese",
        prepTime: 15,
        cookTime: 60,
        servings: 4,
        difficulty: "Intermediate",
        cuisine: "Mediterranean",
        rating: 4.7,
        reviews: 267,
        ingredients: [
            "4 large onions, thinly sliced",
            "4 tablespoons butter",
            "1 liter beef broth",
            "1/2 cup white wine",
            "2 bay leaves",
            "Fresh thyme",
            "Baguette slices",
            "200g Gruyere cheese, grated"
        ],
        instructions: [
            "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
            "Add white wine and deglaze the pot, scraping up brown bits.",
            "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
            "Meanwhile, toast baguette slices until golden.",
            "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
            "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot."
        ],
        nutrition: {
            Calories: "380 kcal",
            Protein: "18g",
            Carbohydrates: "36g",
            Fat: "18g",
            Fiber: "4g",
            Sodium: "980mg"
        },
        tips: [
            "Patience is key - don't rush the onion caramelization",
            "Use good quality beef broth for best flavor",
            "Gruyere can be substituted with Swiss cheese",
            "Watch carefully when broiling to avoid burning"
        ]
    },
    {
        name: "Mediterranean Quinoa Bowl",
        image: "./images/quinoa.jpg",
        description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
        prepTime: 20,
        cookTime: 35,
        servings: 2,
        difficulty: "Easy",
        cuisine: "Mediterranean",
        rating: 4.5,
        reviews: 156,
        ingredients: [
            "1 cup quinoa",
            "Cherry tomatoes, halved",
            "Cucumber, diced",
            "Red onion, sliced",
            "Kalamata olives",
            "Feta cheese, crumbled",
            "Fresh parsley",
            "Tahini dressing"
        ],
        instructions: [
            "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
            "While quinoa cooks, prepare all vegetables and set aside.",
            "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
            "Fluff cooked quinoa with a fork and let cool slightly.",
            "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
            "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
        ],
        nutrition: {
            Calories: "480 kcal",
            Protein: "18g",
            Carbohydrates: "58g",
            Fat: "20g",
            Fiber: "10g",
            Sodium: "540mg"
        },
        tips: [
            "Rinse quinoa well to remove bitter coating",
            "Let quinoa cool before adding fresh ingredients",
            "Make extra tahini dressing - it keeps well in the fridge",
            "Add grilled chicken or chickpeas for extra protein"
        ]
    },
    {
        name: "Caprese Sandwich",
        image: "./images/caprese-sandwich.jpg",
        description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
        prepTime: 10,
        cookTime: 5,
        servings: 2,
        difficulty: "Easy",
        cuisine: "Italian",
        rating: 4.5,
        reviews: 189,
        ingredients: [
            "1 ciabatta bread",
            "200g fresh mozzarella, sliced",
            "2 large tomatoes, sliced",
            "Fresh basil leaves",
            "3 tablespoons pesto",
            "2 tablespoons balsamic glaze",
            "Olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Slice ciabatta bread in half horizontally.",
            "Toast bread lightly until just crispy.",
            "Spread pesto on both sides of bread.",
            "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
            "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
            "Close sandwich, cut in half, and serve immediately."
        ],
        nutrition: {
            Calories: "480 kcal",
            Protein: "22g",
            Carbohydrates: "48g",
            Fat: "22g",
            Fiber: "3g",
            Sodium: "680mg"
        },
        tips: [
            "Use ripe, in-season tomatoes for best flavor",
            "Buffalo mozzarella is traditional but harder to slice",
            "Toast bread lightly - not too crispy",
            "Add prosciutto or salami for a heartier sandwich"
        ]
    },
    {
        name: "Margherita Pizza",
        image: "./images/pizza.jpg",
        description: "Classic Italian pizza with fresh mozzarella and basil",
        prepTime: 90,
        cookTime: 12,
        servings: 2,
        difficulty: "Intermediate",
        cuisine: "Italian",
        rating: 4.9,
        reviews: 512,
        ingredients: [
            "300g pizza dough",
            "200g crushed tomatoes",
            "250g fresh mozzarella",
            "Fresh basil leaves",
            "2 tablespoons olive oil",
            "2 cloves garlic, minced",
            "Salt and pepper to taste",
            "Parmesan cheese for topping"
        ],
        instructions: [
            "Let pizza dough come to room temperature and rest for 1 hour.",
            "Preheat oven to maximum temperature (usually 250 degrees C/480 degrees F).",
            "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
            "Roll out dough on a floured surface to desired thickness.",
            "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
            "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan."
        ],
        nutrition: {
            Calories: "580 kcal",
            Protein: "24g",
            Carbohydrates: "68g",
            Fat: "22g",
            Fiber: "4g",
            Sodium: "920mg"
        },
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload with toppings - less is more",
            "Add basil after baking to keep it fresh",
            "Let dough rest properly for best texture"
        ]
    },
    {
        name: "Teriyaki Chicken Bowl",
        image: "./images/teriyaki-chicken-bowl.jpg",
        description: "Sweet and savory chicken over rice with vegetables",
        prepTime: 15,
        cookTime: 20,
        servings: 2,
        difficulty: "Easy",
        cuisine: "Asian",
        rating: 4.7,
        reviews: 367,
        ingredients: [
            "400g chicken thighs, sliced",
            "1/2 cup teriyaki sauce",
            "2 cups cooked rice",
            "1 broccoli head, florets",
            "1 carrot, julienned",
            "Sesame seeds",
            "Green onions, sliced",
            "1 tablespoon sesame oil"
        ],
        instructions: [
            "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
            "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
            "Meanwhile, steam broccoli and carrots until tender-crisp.",
            "Divide rice between bowls.",
            "Top with teriyaki chicken and steamed vegetables.",
            "Garnish with sesame seeds and green onions. Serve hot."
        ],
        nutrition: {
            Calories: "540 kcal",
            Protein: "42g",
            Carbohydrates: "58g",
            Fat: "14g",
            Fiber: "4g",
            Sodium: "1240mg"
        },
        tips: [
            "Use chicken thighs for juicier meat",
            "Make homemade teriyaki sauce for better flavor control",
            "Add edamame for extra protein",
            "Meal prep by cooking rice and chicken ahead"
        ]
    },
    {
        name: "Vegetable Curry",
        image: "./images/vegetable-curry.jpg",
        description: "Hearty vegetarian curry with coconut milk",
        prepTime: 20,
        cookTime: 30,
        servings: 4,
        difficulty: "Easy",
        cuisine: "Asian",
        rating: 4.6,
        reviews: 289,
        ingredients: [
            "2 potatoes, cubed",
            "1 cauliflower, florets",
            "2 carrots, sliced",
            "1 can chickpeas",
            "400ml coconut milk",
            "3 tablespoons curry powder",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "Fresh spinach"
        ],
        instructions: [
            "Heat oil in a large pot. Saute onion until soft, add garlic and curry powder, cook for 1 minute.",
            "Add potatoes and carrots, cook for 5 minutes.",
            "Pour in coconut milk and 1 cup water. Bring to simmer.",
            "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
            "Stir in fresh spinach and cook until wilted.",
            "Serve hot over basmati rice or with naan bread."
        ],
        nutrition: {
            Calories: "380 kcal",
            Protein: "14g",
            Carbohydrates: "48g",
            Fat: "16g",
            Fiber: "12g",
            Sodium: "480mg"
        },
        tips: [
            "Add vegetables in order of cooking time needed",
            "Adjust curry powder amount to taste",
            "Use full-fat coconut milk for creamier curry",
            "Add protein like tofu or paneer if desired"
        ]
    }
];
const mealImage = document.getElementById("recipe-image");
const mealName = document.getElementById("meal-name");
const description = document.getElementById("description");
const prepTime = document.getElementById("prep-time");
const cookTime = document.getElementById("cook-time");
const servings = document.getElementById("servings");
const difficulty = document.getElementById("difficulty");
const cuisine = document.getElementById("cuisine");
const rating = document.getElementById("rating");
const reviews = document.getElementById("reviews");
const timeWarning = document.getElementById("time-warning");
const ingredientsList = document.getElementById("ingredients-list");
const instructionsList = document.getElementById("instructions-list");
const nutritionList = document.getElementById("nutrition-list");
const tipsList = document.getElementById("tips-list");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const tryAnotherButton = document.getElementById("try-another");
const bookmarkButton = document.getElementById("bookmark-button");
const savedButton = document.getElementById("saved-button");
const savedDot = document.getElementById("saved-dot");
const shareButton = document.getElementById("share-button");
const savedList = document.getElementById("saved-list");
const historyList = document.getElementById("history-list");
const darkModeToggle = document.getElementById("dark-mode");
const shareStatus = document.getElementById("share-status");
const modals = document.querySelectorAll(".modal");
let currentIndex = -1;
let savedRecipes = readCollection("dinner-saved");
let recipeHistory = readCollection("dinner-history");

function getRandomMeal() {
    let randomIndex = Math.floor(Math.random() * meals.length);
    while (meals.length > 1 && randomIndex === currentIndex) {
        randomIndex = Math.floor(Math.random() * meals.length);
    }
    currentIndex = randomIndex;
    let selectedMeal = meals[randomIndex];
    return selectedMeal;
}

function displayMeal(meal) {
    currentIndex = meals.indexOf(meal);
    shareStatus.hidden = true;
    mealImage.src = meal.image;
    mealImage.alt = meal.name;
    mealName.textContent = meal.name;
    description.textContent = meal.description;
    prepTime.textContent = meal.prepTime + " min";
    cookTime.textContent = meal.cookTime + " min";
    servings.textContent = meal.servings + " people";
    difficulty.textContent = meal.difficulty;
    cuisine.textContent = meal.cuisine;
    rating.textContent = meal.rating;
    reviews.textContent = "(" + meal.reviews + " reviews)";
    if (meal.prepTime + meal.cookTime > 45) {
        timeWarning.hidden = false;
    } else {
        timeWarning.hidden = true;
    }
    displayNumberedList(meal.ingredients, ingredientsList);
    displayNumberedList(meal.instructions, instructionsList);
    nutritionList.innerHTML = "";
    for (let nutrient in meal.nutrition) {
        let nutrientIcon = "flame";
        if (nutrient === "Protein") nutrientIcon = "protein";
        if (nutrient === "Carbohydrates") nutrientIcon = "carbs";
        if (nutrient === "Fat") nutrientIcon = "fat";
        if (nutrient === "Fiber") nutrientIcon = "fiber";
        if (nutrient === "Sodium") nutrientIcon = "sodium";
        nutritionList.innerHTML += '<div class="nutrition-item"><span class="nutrient-icon">'
            + getIcon(nutrientIcon)
            + '</span><span>'
            + nutrient
            + '</span><strong>'
            + meal.nutrition[nutrient]
            + '</strong></div>';
    }
    tipsList.innerHTML = "";
    for (let i = 0; i < meal.tips.length; i++) {
        tipsList.innerHTML += '<li><span class="tip-check" aria-hidden="true">'
            + getIcon("check")
            + '</span><span>'
            + meal.tips[i]
            + '</span></li>';
    }
    updateBookmark();
    recordHistory(meal.name);
}

function displayNumberedList(items, list) {
    list.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        list.innerHTML += '<li><span class="number" aria-hidden="true">'
            + (i
            + 1)
            + '</span><span>'
            + items[i]
            + '</span></li>';
    }
}

function showSection(sectionName) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
        tabs[i].setAttribute("aria-pressed", "false");
        if (tabs[i].getAttribute("data-section") === sectionName) {
            tabs[i].classList.add("active");
            tabs[i].setAttribute("aria-pressed", "true");
        }
    }
    for (let i = 0; i < panels.length; i++) {
        panels[i].hidden = panels[i].id !== sectionName;
    }
    document.querySelector(".tab-content").scrollTop = 0;
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
        showSection(tabs[i].getAttribute("data-section"));
    });
}

tryAnotherButton.addEventListener("click", function () {
    displayMeal(getRandomMeal());
    document.querySelector(".tab-content").scrollTop = 0;
});

function getIcon(name) {
    return '<svg class="icon" aria-hidden="true"><use href="#icon-' + name + '"></use></svg>';
}

function readCollection(key) {
    let result = [];
    try {
        let stored = JSON.parse(localStorage.getItem(key));
        if (Array.isArray(stored)) {
            for (let i = 0; i < stored.length; i++) {
                for (let j = 0; j < meals.length; j++) {
                    if (stored[i] === meals[j].name && !result.includes(stored[i])) {
                        result.push(stored[i]);
                    }
                }
            }
        }
    } catch (error) {
        result = [];
    }
    return result;
}

function saveCollection(key, collection) {
    try {
        localStorage.setItem(key, JSON.stringify(collection));
    } catch (error) {
        return;
    }
}

function updateBookmark() {
    savedDot.hidden = savedRecipes.length === 0;
    let isSaved = savedRecipes.includes(meals[currentIndex].name);
    bookmarkButton.setAttribute("aria-pressed", isSaved);
    bookmarkButton.setAttribute("aria-label", isSaved ? "Unsave recipe" : "Save recipe");
    if (isSaved) {
        bookmarkButton.classList.add("is-saved");
    } else {
        bookmarkButton.classList.remove("is-saved");
    }
}

function recordHistory(name) {
    let previousIndex = recipeHistory.indexOf(name);
    if (previousIndex !== -1) {
        recipeHistory.splice(previousIndex, 1);
    }
    recipeHistory.unshift(name);
    saveCollection("dinner-history", recipeHistory);
}

function displayCollection(collection, list, emptyMessage) {
    list.innerHTML = "";
    if (collection.length === 0) {
        let emptyState = document.createElement("p");
        emptyState.className = "empty-state";
        emptyState.textContent = emptyMessage;
        list.appendChild(emptyState);
        return;
    }
    for (let i = 0; i < collection.length; i++) {
        for (let j = 0; j < meals.length; j++) {
            if (meals[j].name === collection[i]) {
                let meal = meals[j];
                let item = document.createElement("button");
                item.type = "button";
                item.className = "collection-item";
                item.setAttribute("data-meal", j);
                item.innerHTML = '<img src="'
                    + meal.image
                    + '" alt=""><span><strong>'
                    + meal.name
                    + '</strong><small>'
                    + meal.cuisine
                    + ' &middot; '
                    + (meal.prepTime
                    + meal.cookTime)
                    + ' min &middot; '
                    + meal.difficulty
                    + '</small></span>';
                list.appendChild(item);
            }
        }
    }
}

function closeModal(modal) {
    modal.close();
    document.body.classList.remove("modal-open");
}

function openModal(id) {
    for (let i = 0; i < modals.length; i++) {
        if (modals[i].open) modals[i].close();
    }
    if (id === "saved-modal") {
        displayCollection(savedRecipes, savedList, "No saved recipes yet. Tap the bookmark on a dish you love.");
    }
    if (id === "history-modal") {
        displayCollection(recipeHistory, historyList, "No recipes viewed yet. Try another recipe to start your history.");
    }
    document.getElementById(id).showModal();
    document.body.classList.add("modal-open");
}

bookmarkButton.addEventListener("click", function () {
    let name = meals[currentIndex].name;
    let savedIndex = savedRecipes.indexOf(name);
    if (savedIndex === -1) {
        savedRecipes.push(name);
    } else {
        savedRecipes.splice(savedIndex, 1);
    }
    saveCollection("dinner-saved", savedRecipes);
    updateBookmark();
    if (savedIndex === -1) {
        savedButton.classList.remove("save-animation");
        savedButton.offsetWidth;
        savedButton.classList.add("save-animation");
    }
    displayCollection(savedRecipes, savedList, "No saved recipes yet. Tap the bookmark on a dish you love.");
});

savedButton.addEventListener("animationend", function () {
    savedButton.classList.remove("save-animation");
});

savedButton.addEventListener("click", function () {
    openModal("saved-modal");
});

document.getElementById("history-button").addEventListener("click", function () {
    openModal("history-modal");
});

document.getElementById("settings-button").addEventListener("click", function () {
    openModal("settings-modal");
});

for (let i = 0; i < modals.length; i++) {
    modals[i].querySelector(".modal-close").addEventListener("click", function () {
        closeModal(modals[i]);
    });
    modals[i].addEventListener("click", function (event) {
        if (event.target === modals[i]) closeModal(modals[i]);
    });
    modals[i].addEventListener("close", function () {
        let hasOpenModal = false;
        for (let j = 0; j < modals.length; j++) {
            if (modals[j].open) hasOpenModal = true;
        }
        if (!hasOpenModal) document.body.classList.remove("modal-open");
    });
}

function selectCollectionMeal(event) {
    let item = event.target.closest(".collection-item");
    if (item) {
        let index = Number(item.getAttribute("data-meal"));
        displayMeal(meals[index]);
        document.querySelector(".tab-content").scrollTop = 0;
        closeModal(item.closest("dialog"));
    }
}

savedList.addEventListener("click", selectCollectionMeal);

historyList.addEventListener("click", selectCollectionMeal);

document.getElementById("clear-history").addEventListener("click", function () {
    recipeHistory = [];
    saveCollection("dinner-history", recipeHistory);
    displayCollection(recipeHistory, historyList, "No recipes viewed yet. Try another recipe to start your history.");
});

function applyTheme() {
    if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

darkModeToggle.addEventListener("change", function () {
    applyTheme();
    saveCollection("dinner-dark-mode", darkModeToggle.checked);
});

function showShareStatus(message) {
    shareStatus.textContent = message;
    shareStatus.hidden = false;
}

function copyRecipe(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
            showShareStatus("Recipe copied to clipboard.");
        }).catch(function () {
            showShareStatus("Could not copy the recipe. Check your browser clipboard permissions.");
        });
    } else {
        let textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.className = "clipboard-text";
        document.body.appendChild(textArea);
        textArea.select();
        let copied = false;
        try {
            copied = document.execCommand("copy");
        } catch (error) {
            copied = false;
        }
        textArea.remove();
        shareButton.focus();
        showShareStatus(copied ? "Recipe copied to clipboard." : "Could not copy the recipe in this browser.");
    }
}

shareButton.addEventListener("click", function () {
    let meal = meals[currentIndex];
    let text = meal.name
        + "\n"
        + meal.description
        + "\nPrep: "
        + meal.prepTime
        + " min | Cook: "
        + meal.cookTime
        + " min | Servings: "
        + meal.servings
        + "\n\nIngredients\n"
        + meal.ingredients.join("\n")
        + "\n\nInstructions\n";
    for (let i = 0; i < meal.instructions.length; i++) {
        text += (i + 1) + ". " + meal.instructions[i] + "\n";
    }
    if (navigator.share) {
        navigator.share({
            title: meal.name,
            text: text
        }).then(function () {
            showShareStatus("Recipe shared.");
        }).catch(function (error) {
            if (error.name !== "AbortError") copyRecipe(text);
        });
    } else {
        copyRecipe(text);
    }
});

try {
    darkModeToggle.checked = JSON.parse(localStorage.getItem("dinner-dark-mode")) === true;
} catch (error) {
    darkModeToggle.checked = false;
}

applyTheme();

displayMeal(getRandomMeal());
