const requestName = prompt('անուն')
const requestDate = prompt('օր( օրինակ  13)')
const requestMounth = prompt('ամիս (օրինակ  4)')

function birthdayRemained (){
const currentTime = new Date()
const myBirthday = new Date(`${requestMounth}/${requestDate}/${currentTime.getFullYear()  }`)
if(currentTime > myBirthday){
    myBirthday.setFullYear(myBirthday.getFullYear()+ 1)
}
const remained = Math.trunc((myBirthday - currentTime)/1000/60/60/24) + ' օր  ' + Math.trunc((myBirthday - currentTime)/1000/60/60)%24 + ' ժամ  ' + Math.trunc((myBirthday - currentTime)/1000/60)%60 + ' րոպե  ' + Math.trunc((myBirthday - currentTime)/1000)%60 + ' վարկյան'
return remained
}
const time = document.querySelector('#time')
const text = document.querySelector('#text')
text.innerText = `${requestName} ծնունդիտ մնացել է `

setInterval(() => {
    time.innerText = birthdayRemained()
}, 1000);

console.log(birthdayRemained());
