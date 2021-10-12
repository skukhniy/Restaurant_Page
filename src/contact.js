function loadContact(){
    //page div
    const pages = document.createElement('div');
    pages.classList.add('page')
    
    //main div
    const contact = document.createElement('div');
    contact.id = 'contact'
    
    //header
    const Contact_Us = document.createElement('div');
    Contact_Us.id = 'Contact_Us'
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Contact Us!'
    Contact_Us.appendChild(h1)

    //image
    const artie2 = new Image();
    artie2.src = '../imgs/artie3.png';
    
    //info
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact')

    const info1 = document.createElement('div');
    info1.classList.add('info');
    const h2_1 = document.createElement('h2');
    h2_1.innerHTML = 'Phone'
    const p_1 = document.createElement('p')
    p_1.innerHTML = '609-456-7844'
    info1.appendChild(h2_1)
    info1.appendChild(p_1)

    const info2 = document.createElement('div');
    info2.classList.add('info')
    const h2_2 = document.createElement('h2');
    h2_2.innerHTML = 'Email'
    const p_2 = document.createElement('p')
    p_2.innerHTML = 'NuovoVesuvo@gmail.com'
    info2.appendChild(h2_2)
    info2.appendChild(p_2)

    const info3 = document.createElement('div');
    info3.classList.add('info')
    const h2_3 = document.createElement('h2');
    h2_3.innerHTML = 'Location'
    const p_3 = document.createElement('p')
    p_3.innerHTML = '123 Ridge Rd, Lyndhurst, NJ 07071'
    info3.appendChild(h2_3)
    info3.appendChild(p_3)

    contactDiv.appendChild(info1)
    contactDiv.appendChild(info2)
    contactDiv.appendChild(info3)

    //append Children
    contact.appendChild(Contact_Us)
    contact.appendChild(artie2)
    contact.appendChild(contactDiv)

    pages.appendChild(contact)


    //add to HTML
    const content = document.getElementById('content')
    content.appendChild(pages)

}
export default loadContact;