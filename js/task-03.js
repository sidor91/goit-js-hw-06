const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryList = document.querySelector('.gallery');

const createImageMarkup = ({url, alt}) => `<li class='gallery__element'><img src=${url} alt='${alt}' class='gallery__image'></img></li>`;

const createGalleryOfImages = images.map(createImageMarkup);

galleryList.insertAdjacentHTML("afterbegin", createGalleryOfImages);

// const galleryElemArr = galleryList.children;
// for (const galleryElem of galleryElemArr) {
//   galleryElem.classList.add('gallery__element')
// }

// const imageElArr = document.querySelectorAll('.gallery__element img');
// for (const image of imageElArr) {
//   image.classList.add('gallery__image');
// }

// console.log(imageElArr);