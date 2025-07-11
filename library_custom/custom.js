function createRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    
    for (const prop in reactElement.props) {
        if (prop !== 'children') {
            domElement.setAttribute(prop, reactElement.props[prop]);
        }
    }
    
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click here'
};

const mainContainer = document.querySelector('#root');
createRender(reactElement, mainContainer);
//mnb