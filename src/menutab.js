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
}

export {generateMenu};