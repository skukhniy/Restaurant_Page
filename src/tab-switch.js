import loadHome from './home.js'
import loadMenu from './menu.js'
import loadContact from './contact.js'

function tabswitch(){
    document.getElementById("Home").addEventListener('click',()=>{
        var pages = document.getElementsByClassName('page')
        while (pages[0]) {
            pages[0].parentNode.removeChild(pages[0])
        }
        loadHome();
    })
    document.getElementById("Menu").addEventListener('click',()=>{
        var pages = document.getElementsByClassName('page')
        while (pages[0]) {
            pages[0].parentNode.removeChild(pages[0])
        }
        loadMenu();
    })
    document.getElementById("Contact").addEventListener('click',()=>{
        var pages = document.getElementsByClassName('page')
        while (pages[0]) {
            pages[0].parentNode.removeChild(pages[0])
        }
        loadContact();
    })
}

export default tabswitch;
