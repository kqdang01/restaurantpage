function generateHome()
{
    const contentDiv = document.querySelector("#content");
    const currentSection = document.querySelector("section");

    if (!(currentSection.id === "home"))
    {
        for (const child of contentDiv.children)
        {
            child.remove()
        }
    }
}

export {generateHome};