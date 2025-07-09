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
    else
    {
        return;
    }

    const aboutSection = document.createElement("section");
    aboutSection.id = "about";
    
    const aboutHeader = document.createElement("h1");
    aboutHeader.textContent = "Our Mission";
    aboutSection.appendChild(aboutHeader);

    const aboutSpan = document.createElement("span");
    aboutSpan.textContent = "Yea. we're pretty cool. Our moms said so";
    aboutSection.appendChild(aboutSpan);

    contentDiv.appendChild(aboutSection);
}

export {generateAbout};