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
    //
    contentDiv.appendChild(menuSection);
}

export {generateMenu};