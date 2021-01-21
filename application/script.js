const scOne = document.querySelector("#currency-one");
const scTwo = document.querySelector("#currency-two");
const amount = document.querySelector("#amount");
const result = document.querySelector("#result");
fetch("https://api.exchangeratesapi.io/latest")
.then(res => res.json())
.then(data => {    
    Object.keys(data.rates).forEach(print => {
        scOne.innerHTML += `<option value="${print}">${print}</option>`;
        scTwo.innerHTML += `<option value="${print}">${print}</option>`;
    })
})
document.querySelector("#btn-calculate").addEventListener('click', function(){
    const scOneValue = scOne.value;
    const scTwoValue = scTwo.value;
    const amountValue = amount.value;
    if(scOneValue==""||scTwoValue==""){
        result.innerHTML="Lütfen Para Birimlerini Seçiniz!";
    }else{
    if(amountValue==""){
        result.innerHTML="Lütfen Miktar bilgisini giriniz!";
    }else{
    fetch(`https://api.exchangeratesapi.io/latest?base=${scOneValue}`)
    .then(res => res.json())
    .then(data => {
        const rates = data.rates[scTwoValue];
        result.innerHTML=`${amountValue} ${scOneValue} = ${(rates * amountValue).toFixed(2)} ${scTwoValue}`;
    })}}
})