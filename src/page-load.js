function addHeader(){
    //header
    const header = document.createElement('div');
    header.classList.add('header');

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Nuovo Vesuvio'
    const h2 = document.createElement('h2');
    h2.innerHTML = 'RISTORANTE'

    header.appendChild(h1);
    header.appendChild(h2);

    const h3 = document.createElement('h3')
    h3.innerHTML = "Home"

    const h32 = document.createElement('h3')
    h32.innerHTML = "Menu"

    const h33 = document.createElement('h3')
    h33.innerHTML = "Contact"

    const div1 = document.createElement('div')
    div1.classList.add('tab')
    div1.id = 'Home'

    const div2 = document.createElement('div')
    div2.classList.add('tab')
    div2.id = 'Menu'

    const div3 = document.createElement('div')
    div3.classList.add('tab')
    div3.id = 'Contact'

    div1.appendChild(h3);
    div2.appendChild(h32);
    div3.appendChild(h33);

    header.appendChild(div1);
    header.appendChild(div2);
    header.appendChild(div3);

    return header;
};

function loadMain(){
    const content = document.getElementById('content')
    content.appendChild(addHeader());
};
export default loadMain;