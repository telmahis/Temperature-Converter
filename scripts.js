

const inputCnt = document.querySelector('.js-tem-input');
const tempCelsiusinput = document.querySelector('.Celsius');
const tempFahrenheitinput = document.querySelector('.Fahrenheit');

const submitBtn = document.querySelector('.js-submit-btn');
const resultShown = document.querySelector('.js-result');

let temp;

function submit(){
    const enterdValue  = inputCnt.value;
    convert(enterdValue);
    inputCnt.value="";
}

submitBtn.addEventListener('click',submit);

inputCnt.addEventListener('keydown',(event)=>{
    if(event.key==="Enter")
    {
        submit();
    }
})

function convert(enterdValue)
{
    if(enterdValue==='')
    {
        resultShown.innerHTML = `Please enter a temperature.`;
        return
    }

    else if(tempCelsiusinput.checked)
    {
        temp = (enterdValue * 1.8) + 32
    }
    else{
        temp = (enterdValue - 32) * (5 / 9);
    }

    resultShown.innerHTML =`${temp.toFixed(1)}° `;
}

