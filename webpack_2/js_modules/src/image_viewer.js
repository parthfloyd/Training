// import big from '../assets/img1.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

export default() => {
    const image = document.createElement('img');
    image.src = small;    
    document.body.appendChild(image);
}



// const bigImage = document.createElement('img');
// image.src = big;

// document.body.appendChild(bigImage);