// Heart counter

function getHertCount(){
    let hertCounter = document.getElementById('heart-counter').innerHTML
    ++hertCounter
    document.getElementById('heart-counter').innerHTML = hertCounter;
}

// document.getElementById('emergency-heart-button').addEventListener('click', function(){
    
    



    
// })






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

    alert('📞 Calling Bangladesh Railway 163...')

    getCallHistory('history-container')
})

// Call History Clear
document.getElementById('history-clear-button').addEventListener('click', function(){
    document.getElementById('history-container').innerText = ''
    callHistoryData.length = 0
})