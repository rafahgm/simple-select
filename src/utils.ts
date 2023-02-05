export function createElement(elementType: string = "div", className: string|string[] = "") {
    const element = document.createElement(elementType);
    if(Array.isArray(className)) {
        className.forEach(c => {
            element.classList.add(c);
        })
    }else {
        element.className = className;
    }
    
    return element;
}