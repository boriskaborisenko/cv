import {works} from './works.js'

const getWorks = () => {
    let div = ''
    works.map(w=>{

        const s = {style:'', font:'', font2:''}
        w.position == 'Soldier' ? s.style=`fixbg` : ''
        w.position == 'Soldier' ? s.font = `fixcol` : ''
        w.position == 'Soldier' ? s.font2 = `fixcol2` : ''
        
          
        let html = `<div class="w_s ${s.style}" >`
        for (let [key, value] of Object.entries(w)) {
            
            html += `<div class="key ${s.font}">${key}</div><div class="val ${s.font2}">${value}</div>` 
        }
        html += '</div>'
        div +=html
    })
    return div
}

document.querySelector('.all_ws').innerHTML = getWorks()

