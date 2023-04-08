const button = document.createElement('button');
button.innerText = 'Click me';

button.addEventListener('click' , () => {
    System.import('./image_viewer').then((module) => {
        module.default();
    });
});

document.body.appendChild(button);