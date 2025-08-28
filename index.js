// Call History Date

// function getCallHistory(id){
// const historyContainer = document.getElementById('history-container')

//     for(const data of callHistoryData){
//         const div = document.createElement('div')
//         div.innerHTML= `
//         <div class="flex items-center rounded-xl bg-[#fafafa]">
//             <div class="p-3">
//                 <h2 class="font-semibold">${data.servicesName}</h2>
//                 <p class="text-[#5c5c5c]">${data.hotline}</p>
//             </div>
//             <div class="ml-3">
//                 <p class="text-sm font-semibold">${data.time}</p>
//             </div>
//         </div>`
        
//         historyContainer.appendChild(div)

        
//         document.getElementById('history-clear-button').addEventListener('click', function(){
//             historyContainer.removeChild(div)
//             document.getElementById(id).style.display = 'none'
//         })
//     }
// }

// function removeCallHistory(id){
//     document.getElementById(id)
//     const callHistoyRemover = historyContainer.removeChild(div)
//     callHistoyRemover.innerText = ''
//     return;
// }


const callHistoryData = []
document.getElementById('emergency-call-button').addEventListener('click', function(){

    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ''

    const data = {
        servicesName: 'National Emergency Number',
        hotline: '999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

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
    
})

document.getElementById('police-call-button').addEventListener('click', function(){

    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ''

    const data = {
        servicesName: 'Police Helpline Number',
        hotline: '999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

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
})

document.getElementById('fire-call-button').addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ''

    const data = {
        servicesName: 'Fire Service Number',
        hotline: '999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

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
})

document.getElementById('ambulance-call-button').addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ''

    const data = {
        servicesName: 'Ambulance Servicer',
        hotline: '999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

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
})

document.getElementById('women-child-Help-call-button').addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ''

    const data = {
        servicesName: 'Women & Child Helpline',
        hotline: '999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

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
})

document.getElementById('railway-Help-call-button').addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ''

    const data = {
        servicesName: 'Bangladesh Railway Helpline',
        hotline: '999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

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
})

// Call History Clear
document.getElementById('history-clear-button').addEventListener('click', function(){
    document.getElementById('history-container').innerText = ''
    callHistoryData.length = 0
})