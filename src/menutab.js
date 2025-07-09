function generateMenu()
{
    const contentDiv = document.querySelector("#content");
    const currentSection = document.querySelector("section");

    if (!(currentSection.id === "menu"))
    {
        for (const child of contentDiv.children)
        {
            child.remove()
        }
    }
    else
    {
        return;
    }

    const menuSection = document.createElement("section");
    menuSection.id = "menu";
    
    const menuSpan = document.createElement("span");
    menuSpan.textContent = "Menu";
    menuSection.appendChild(menuSpan);

    const menuGrid = document.createElement("div");
    menuGrid.className = "menuGrid";
    prepMenuGridTemplate(menuGrid);

    menuSection.appendChild(menuGrid);

    contentDiv.appendChild(menuSection);
}

function prepMenuGridTemplate(menuGrid)
{
    const appetizers = document.createElement("div");
    appetizers.className = "Appetizers";
    prepFoodTemplates(appetizers);
    menuGrid.appendChild(appetizers);

    const mains = document.createElement("div");
    mains.className = "Mains";
    prepFoodTemplates(mains);
    menuGrid.appendChild(mains);

    const sides = document.createElement("div");
    sides.className = "Sides";
    prepFoodTemplates(sides);
    menuGrid.appendChild(sides);

    const sweets = document.createElement("div");
    sweets.className = "Sweets";
    prepFoodTemplates(sweets);
    menuGrid.appendChild(sweets);

    const drinks = document.createElement("div");
    drinks.className = "Drinks";
    prepFoodTemplates(drinks);
    menuGrid.appendChild(drinks);
}

function prepFoodTemplates(foodCategory)
{
    const foodHeader = document.createElement("h1");
    foodHeader.textContent = foodCategory.className;
    foodCategory.appendChild(foodHeader);

    for (let i = 1; i < 5; i++)
    {
        const foodDiv = document.createElement("div");

        const foodName = document.createElement("p");
        foodName.textContent = "Food Item #" + i;
        foodDiv.appendChild(foodName);

        const cost = document.createElement("p");
        cost.textContent = "$$$";
        foodDiv.appendChild(cost);

        foodCategory.appendChild(foodDiv);
    }
}

export {generateMenu};