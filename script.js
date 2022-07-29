import {works} from './works.js'

const getWorks = () => {
    let div = ''
    works.map(w=>{

        const s = {style:'', font:''}
        w.position == 'Soldier' ? s.style=`padding:40px 0 40px 0px; border-radius:10px; background: linear-gradient(144deg, rgba(86,58,180,1) 0%, rgba(29,119,253,1) 20%, rgba(252,230,69,1) 70%);` : ''
        w.position == 'Soldier' ? s.font = `color:white;` : ''
          
        let html = `<div class="w_s"  style="${s.style}">`
        for (let [key, value] of Object.entries(w)) {
            
            html += `<div class="key" style="${s.font}">${key}</div><div class="val">${value}</div>` 
        }
        html += '</div>'
        div +=html
    })
    return div
}

document.querySelector('.all_ws').innerHTML = getWorks()

