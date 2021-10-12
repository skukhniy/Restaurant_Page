import Artie from './imgs/artie-profile.png'
function loadHome(){
    //frontpage
    const frontpage = document.createElement('div');
    //add image
    const artie = new Image();
    artie.src = Artie;
    const label = document.createElement('p')
    label.innerHTML = 'Michelin Star chef Artie Bucco brings the tastes of Italy to scenic New Jersey. Only at Nuovo Vesuvio.'


    frontpage.appendChild(artie);
    frontpage.appendChild(label);
    frontpage.classList.add('page');
    frontpage.id = 'frontpage'


    const content = document.getElementById('content')
    content.appendChild(frontpage);
};



export default loadHome;