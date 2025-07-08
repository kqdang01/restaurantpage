import mcdonalds from "./images/yunming-wang-0NOHvCbtUw4-unsplash.jpg"
import lights from "./images/utkarsh-singh-alZ4baGYAKk-unsplash.jpg"

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
    else
    {
        return;
    }

    const homeSection = document.createElement("section");
    homeSection.id = "home";

    const containerDiv = document.createElement("div");

    const imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";
    
    const creditsWang = document.createElement("p");
    creditsWang.textContent = "Yunming Wang on UnSplash";
    imgDiv.appendChild(creditsWang);
    containerDiv.appendChild(imgDiv);

    const boxDiv = document.createElement("div");
    boxDiv.className = "box";

    const cornyHeader = document.createElement("h1");
    cornyHeader.textContent = "Dine Like a King";
    boxDiv.appendChild(cornyHeader);

    const hoursHeader = document.createElement("p");
    hoursHeader.textContent = "Our Hours";
    boxDiv.appendChild(hoursHeader);

    const scheduleGrid = document.createElement("div");
    scheduleGrid.className = "scheduleGrid";
    fillSchedule(scheduleGrid);
    boxDiv.appendChild(scheduleGrid);
    containerDiv.appendChild(boxDiv);

    const bottomImg = document.createElement("div");
    bottomImg.className = "bottomImg";

    const creditsSingh = document.createElement("p");
    creditsSingh.textContent = "Utkarsh Singh on UnSplash";
    bottomImg.appendChild(creditsSingh);

    homeSection.appendChild(containerDiv);
    homeSection.appendChild(bottomImg);

    contentDiv.appendChild(homeSection);
}

function fillSchedule(scheduleGrid)
{
    for (let i = 0; i < 7; i++)
    {
        const day = document.createElement("p");
        const time = document.createElement("p");
        time.textContent = "6 AM – 10 PM";
        if (!i)
        {
            day.textContent = "Sunday";
        }
        else if (i === 1)
        {
            day.textContent = "Monday";
        }
        else if (i === 2)
        {
            day.textContent = "Tuesday";
        }
        else if (i === 3)
        {
            day.textContent = "Wednesday";
        }
        else if (i === 4)
        {
            day.textContent = "Thursday";
        }
        else if (i === 5)
        {
            day.textContent = "Friday";
        }
        else
        {
            day.textContent = "Saturday";
        }
        scheduleGrid.appendChild(day);
        scheduleGrid.appendChild(time);
    }
}

export {generateHome};