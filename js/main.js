const countries = [
    {
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bqbdRU9j-ExuXQa7M-FFJ7Qk9HuYF3J74iwh4tbMbmIDGz6d",
    countryName:"Mexico",
    description:"Mexico is a country between the U.S. and Central America that's known for its Pacific and Gulf of Mexico beaches",
    },
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjoVDjb4prFahIDtAEj8TdlERSvjdPC-B2egh9vyoljKx6ZNc",
    countryName:"Great Britain",
    description:"Great Britain, also known as Britain, is a large island in the north Atlantic Ocean off the northwest coast of continental Europe.",
    },
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdoavIheI_fTFRP6c3Zf9MZQbgAG0WOXf7V6n3BHOt53nmMDfR",
    countryName:"Ukraine",
    description:"Ukraine sometimes called the Ukraine, is a sovereign state in Eastern Europe",
    },
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJ5B4nuXeWejkNEJswxXo-dmQN1HqSzGz8NWZHNw_JcNUd5xTMQ",
    countryName:"Africa",
    description:"Africa is the world's second largest and second most-populous continent.",
    },
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJKSk_p2IsON8JSwfG_TscnN-SBM5z8Gn9C3NfexjSliOWWSI9g",
    countryName:"Germany",
    description:"Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches",
    },
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDbHZxetTT-mtU2NkBGs8KUhlIybMLzDlMn8NltVZsPL5WvWU",
    countryName:"France",
    description:"France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. ",
    }
    ];


    const printToDom = (domString, divId) => {
        const printTo = document.getElementById(divId);
        printTo.innerHTML = domString;
    };
    
    const cardMaker = (countryArray)=> {
        let domString = '';
       
        countryArray.forEach((countries) => {
        let countryName = countries.countryName.toLowerCase();
        domString += `<div class="card" id="container-${countryName}">`;
        domString += `<img src="${countries.image}" alt="">`;
        domString +=  `<h1>${countries.countryName}</h1>`;
        domString += `<h3>${countries.description}</h3>`;
        domString += `<input type='text' id="input-${countryName}" class='input' placeholder='type your text here'>`; 
        domString +=`<button class="add-note-button" data-country-name="${countryName}" data-container-id="container-${countryName}">Add Note</button>`;
        domString += `</div>`; 
    
        })
        printToDom(domString, 'card-wraper');
    }
    
    cardMaker(countries);

const allAddButtons = document.getElementsByClassName(`add-note-button`);


for (let i=0; i < allAddButtons.length; i++){
    allAddButtons[i].addEventListener('click', (e)=> {
        console.log('event!', e);
        console.log("data set", e.currentTarget.dataset)
        const countryInput = document.getElementById(`input-${e.currentTarget.dataset.countryName}`);
        console.log(countryInput)
        
    });
}







    