const images = [
  {
    id: 0,
    url: 'assets/00.JPG'
  },
  {
    id: 1,
    url: 'assets/01.JPG'
  },
  {
    id: 2,
    url: 'assets/02.JPG'
  },
  {
    id: 3,
    url: 'assets/03.JPG'
  },
  {
    id: 4,
    url: 'assets/04.JPG'
  },
  {
    id: 5,
    url: 'assets/05.JPG'
  },
  {
    id: 6,
    url: 'assets/06.JPG'
  },
  {
    id: 6,
    url: 'assets/06.JPG'
  },
  {
    id: 7,
    url: 'assets/07.JPG'
  },
  {
    id: 8,
    url: 'assets/08.JPG'
  },
  {
    id: 9,
    url: 'assets/09.JPG'
  },
  {
    id: 10,
    url: 'assets/10.JPG'
  },
  {
    id: 11,
    url: 'assets/11.JPG'
  },
  {
    id: 12,
    url: 'assets/12.JPG'
  },
  {
    id: 13,
    url: 'assets/13.JPG'
  },
  {
    id: 14,
    url: 'assets/14.JPG'
  },
  {
    id: 15,
    url: 'assets/15.JPG'
  },
  {
    id: 16,
    url: 'assets/16.JPG'
  },
  {
    id: 16,
    url: 'assets/16.JPG'
  },
  {
    id: 17,
    url: 'assets/17.JPG'
  },
  {
    id: 18,
    url: 'assets/18.JPG'
  },
  {
    id: 19,
    url: 'assets/19.JPG'
  },
  {
    id: 20,
    url: 'assets/20.JPG'
  },
  {
    id: 21,
    url: 'assets/21.JPG'
  },
  {
    id: 22,
    url: 'assets/22.JPG'
  },
  {
    id: 23,
    url: 'assets/23.JPG'
  },
  {
    id: 24,
    url: 'assets/24.JPG'
  },
  {
    id: 25,
    url: 'assets/25.JPG'
  },
  {
    id: 26,
    url: 'assets/26.JPG'
  },
  {
    id: 26,
    url: 'assets/26.JPG'
  },
  {
    id: 27,
    url: 'assets/27.JPG'
  },
  {
    id: 28,
    url: 'assets/28.JPG'
  },
  {
    id: 30,
    url: 'assets/30.JPG'
  },
  {
    id: 31,
    url: 'assets/31.JPG'
  },
  {
    id: 32,
    url: 'assets/32.JPG'
  },
  {
    id: 33,
    url: 'assets/33.JPG'
  }
];
const timeout = 1000 * 45;
const oddTiles = document.querySelectorAll('.tile:nth-child(odd) img');
const evenTiles = document.querySelectorAll('.tile:nth-child(even) img');
let domImages = [];
// let edtLogos = document.querySelectorAll('.logo');
const edtLogo = document.querySelector('.logo');
const classNames = [
  'center',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right'
];
const randomizeEdtLogo = () => {
  classNames.sort(() => {
    return 0.5 - Math.random();
  });
  // clear the classlist
  edtLogo.classList.remove(...classNames);
  // get the 3rd class name and add to the logo
  edtLogo.classList.add(classNames[2]);
};

// set odd tiles
const setOddTiles = () => {
  // remove animate class from even
  document.querySelectorAll('.tile:nth-child(even) img').forEach(img => {
    img.classList.remove('animate');
  });
  // get non repeat random src
  let randomSrc = getRandomSrc();
  // change img src
  for (let i = 0; i < oddTiles.length; i++) {
    oddTiles[i].src = randomSrc[i];
  }
  // add animate the odd tiles
  document.querySelectorAll('.tile:nth-child(odd) img').forEach(img => {
    img.classList.add('animate');
  });
};

// set even tiles
const setEvenTiles = () => {
  // remove animate class from odd tiles
  document.querySelectorAll('.tile:nth-child(odd) img').forEach(img => {
    img.classList.remove('animate');
  });
  // get non repeat random src
  let randomSrc = getRandomSrc();
  // change img src
  for (let i = 0; i < evenTiles.length; i++) {
    evenTiles[i].src = randomSrc[i];
  }
  // add animate class to even tiles
  document.querySelectorAll('.tile:nth-child(even) img').forEach(img => {
    img.classList.add('animate');
  });
};

// get random image source
const getRandomSrc = () => {
  domImages.length = 0; // clear previous array
  let srcArr = [];
  // sort images array
  images.sort(() => {
    return 0.5 - Math.random();
  });
  // add current dom images (src) into temporary array
  for (const img of document.images) {
    domImages.push(img.getAttribute('src').toLowerCase());
  }
  // get new image src that is not present in the current dom
  for (let i = 0; i < images.length; i++) {
    if (!domImages.includes(images[i].url.toLowerCase())) {
      srcArr.push(images[i].url.toLowerCase());
    }
  }
  return srcArr;
};
//initial load
randomizeEdtLogo();
setOddTiles();
setTimeout(() => {
  setEvenTiles();
}, 800);
// start edt logo swapping
setInterval(() => {
  randomizeEdtLogo();
}, (timeout * 2) / 3); // this timeout is chosen so that it is random of the time the image is swapped
// start image swapping
setInterval(() => {
  setOddTiles();
  setTimeout(() => {
    setEvenTiles();
  }, timeout / 2);
}, timeout);
setTimeout(() => {
  window.location.reload();
}, 1000 * 60 * 60 * 24);
