// Heart counter function

let count = 0;
const heartCountedValue = document.getElementById('heart-counted-value')

 function increment(){
    count++
    heartCountedValue.innerText = count;
 }

// Coin Decrement button function

let coin = 100;
let decValue = 20
const coinDefaultdValue = document.getElementById('coin-counted-value')


 function decrement(){
    
    if (coin >= decValue) {
        coin -= decValue;
        coin = coin + 1
        coin--
        coinDefaultdValue.innerText = coin;
    }
 }


// Call History Function
const callHistoryData = []

function getCallHistory(id){
const historyContainer = document.getElementById(id)
    historyContainer.innerText = ''

    for(const data of callHistoryData){
        const div = document.createElement('div')
        div.innerHTML= `
        <div class="flex items-center rounded-xl bg-[#fafafa]">
            <div class="p-3">
                <h2 class="font-semibold">${data.servicesName}</h2>
                <p class="text-[#5c5c5c]">${data.hotline}</p>
            </div>
            <div class="ml-3">
                <p class="text-sm font-semibold">${data.time}</p>
            </div>
        </div>`

        historyContainer.appendChild(div)
    }
}


document.getElementById('emergency-call-button').addEventListener('click', function(){

    const data = {
        servicesName: 'National Emergency Number',
        hotline: '999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    if(coin < 20){
        alert('❌ You do not have enough coins! It takes at least 20 coins to make a call.')
        return;
    }
    decrement(coinDefaultdValue)

    alert('📞 Calling National Emergency Service 999...')
    getCallHistory('history-container')
    
})

document.getElementById('police-call-button').addEventListener('click', function(){

    const data = {
        servicesName: 'Police Helpline Number',
        hotline: '999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    if(coin < 20){
        alert('❌ You do not have enough coins! It takes at least 20 coins to make a call.')
        return;
    }
    decrement(coinDefaultdValue)

    alert('📞 Calling 999...')
    getCallHistory('history-container')
})

document.getElementById('fire-call-button').addEventListener('click', function(){

    const data = {
        servicesName: 'Fire Service Number',
        hotline: '999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    if(coin < 20){
        alert('❌ You do not have enough coins! It takes at least 20 coins to make a call.')
        return;
    }
    decrement(coinDefaultdValue)

    alert('📞 Calling Fire Service 999...')
    getCallHistory('history-container')
})

document.getElementById('ambulance-call-button').addEventListener('click', function(){

    const data = {
        servicesName: 'Ambulance Servicer',
        hotline: '1994-999999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    if(coin < 20){
        alert('❌ You do not have enough coins! It takes at least 20 coins to make a call.')
        return;
    }
    decrement(coinDefaultdValue)

    alert('📞 Calling Ambulance 1994-999999...')
    getCallHistory('history-container')
})

document.getElementById('women-child-Help-call-button').addEventListener('click', function(){

    const data = {
        servicesName: 'Women & Child Helpline',
        hotline: '109',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    if(coin < 20){
        alert('❌ You do not have enough coins! It takes at least 20 coins to make a call.')
        return;
    }
    decrement(coinDefaultdValue)

    alert('📞 Calling Women & Child Helpline 109...')
    getCallHistory('history-container')
})

document.getElementById('railway-Help-call-button').addEventListener('click', function(){

    const data = {
        servicesName: 'Bangladesh Railway Helpline',
        hotline: '999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    if(coin < 20){
        alert('❌ You do not have enough coins! It takes at least 20 coins to make a call.')
        return;
    }
    decrement(coinDefaultdValue)

    alert('📞 Calling Bangladesh Railway 163...')
    getCallHistory('history-container')
})

// Call History Clear
document.getElementById('history-clear-button').addEventListener('click', function(){
    document.getElementById('history-container').innerText = ''
    callHistoryData.length = 0
})


// Text Copy to Clipboard getCopyToClipboard('text-copy-button')

function getCopyToClipboard(id){
    const cardTextCopy = document.getElementById(id).innerText;

    navigator.clipboard.writeText(cardTextCopy)
    .then(() => {
        alert('Number Copied to clipboard: ' + cardTextCopy);
    })
    .catch(err => {
        console.error('Failed to copy: ', err);
    });
}

document.getElementById('emergency-number-copy-button').addEventListener('click', function() {

    getCopyToClipboard('copy-emergency-number')
    
});

document.getElementById('police-number-copy-button').addEventListener('click', function() {

    getCopyToClipboard('copy-police-number')
    
});

document.getElementById('fire-service-number-copy-button').addEventListener('click', function() {

    getCopyToClipboard('copy-fire-service-number')
    
});

document.getElementById('ambulance-number-copy-button').addEventListener('click', function() {

    getCopyToClipboard('copy-ambulance-number')
    
});

document.getElementById('women-child-Help-number-copy-button').addEventListener('click', function() {

    getCopyToClipboard('copy-women-child-Help-number')
    
});

document.getElementById('railway-helpline-number-copy-button').addEventListener('click', function() {

    getCopyToClipboard('copy-railway-helpline-number')
    
});


