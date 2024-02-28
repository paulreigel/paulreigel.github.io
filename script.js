alert("js file is linked");

/*const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?*/
function greeting(){
    const hours = new Date().getHours()    //determine time of day
    const isMorning = hours >= 4 && hours < 12  // is it between these hours
    const isAfternoon = hours >= 12 && hours < 17
    const isEvening = hours >= 17 || hours < 4
    const Welcome = document.querySelector('#welcome p ').textContent = isMorning ? 'Good Morning': isAfternoon ? 'Good Afternoon': 'Good Evening'  
   // send reply to the p in id welcome corresponding to the time of day   morning or                  afternoon or evening if not either morning or afternoon
    
}

greeting();

const zeldaJoke = "I was going to make a Legend of Zelda Joke, but it has been probably thirty years since I have played it, so I didn't want to tri and force it....."


localStorage.setItem(`It's a secret to everybody.` , zeldaJoke)

/*Just playing around ...if ("It's a secret to everybody.") {
localStorage.getItem("It's a secret to everybody.")
document.querySelector('p').textContent = zeldaJoke
}else{
    document.querySelector = greeting()
}*/