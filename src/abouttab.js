function generateAbout()
{
    const contentDiv = document.querySelector("#content");
    const currentSection = document.querySelector("section");

    if (!(currentSection.id === "about"))
    {
        for (const child of contentDiv.children)
        {
            child.remove()
        }
    }
}

export {generateAbout};