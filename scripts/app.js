// [[[[[[[[[[[[[[[[[    COMMENT HERE    ]]]]]]]]]]]]]]
// greeting a newcomer depending on time of a day
window.addEventListener("load", () => {

    fetch("./data.json")
    .then(response => {
        if(!response.ok) {
            throw new Error("Error occurred on fetch.");
        }
        return response.json();
    })
    .then(jsondata => {
      
        const greeting = document.getElementById('greeting');
        const mobileGreeting = document.getElementById('mobile-greeting');
        const currentHour = new Date().getHours();
        let randomInd = Math.floor(Math.random() * jsondata.amEarlyGreeting.length);
    
        if (currentHour >=5 && currentHour <= 11) {
            greeting.innerHTML = jsondata.amEarlyGreeting[randomInd];
            mobileGreeting.innerHTML = jsondata.amEarlyGreeting[randomInd];
        } else if (currentHour < 18) {
            greeting.innerHTML = jsondata.amLateGreeting[randomInd];
            mobileGreeting.innerHTML = jsondata.amLateGreeting[randomInd];
        } else {
            greeting.innerHTML = jsondata.pmGreeting[randomInd];
            mobileGreeting.innerHTML = jsondata.pmGreeting[randomInd];
        }
    })
    .catch(console.error);   
})


// [[[[[[[[[[[[[[[[[    COMMENT HERE    ]]]]]]]]]]]]]]
// source footer section with the current year
const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;














