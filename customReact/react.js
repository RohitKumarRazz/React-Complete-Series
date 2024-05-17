function customRender(reactElement, constainer){
    /*
    const domELement = document.createElement(reactElement.type)
    domELement.innerHTML = reactElement.children
    domELement.setAttribute('href', reactElement.props.href)
    domELement.setAttribute('target', reactElement.props.target)

    constainer.appendChild(domELement)
    */
    const domELement = document.createElement(reactElement.type)
    domELement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domELement.setAttribute(prop, reactElement.props[prop])

    }
    constainer.appendChild(domELement)
    
}
const reactElement = {
    type: 'a',
    props: {
        herf: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to vist google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)