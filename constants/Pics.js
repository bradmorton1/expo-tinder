import shuffleArray from '../utils/shuffleArray'

export const HomeScreenPics = [
  {
    pic: require('../assets/images/dog.jpg'),
    title: '',
    caption: '',
  },
  {
    pic: require('../assets/images/rnibcard.jpg'),
    title: '',
    caption: '',
  },
  {
    pic: require('../assets/images/BIBcard.jpg'),
    title: '',
    caption: '',
  },
  {
    pic: require('../assets/images/wayfindr.jpg'),
    title: '',
    caption: '',
  },
  {
    pic: require('../assets/images/women/women11.jpg'),
    title: 'Missing something?',
    caption: 'Do something here if you are',
  }
]

export const TopPicksScreenPics = shuffleArray([
  {
    pic: require('../assets/images/BIBcard.jpg'),
    title: 'Blind in Business',
    caption: 'Helping blind and partially sighted people back into work',
  },
  {
    pic: require('../assets/images/women/women12.jpg'),
    title: 'Lena, 31',
    caption: '20h left',
  },
  {
    pic: require('../assets/images/women/women13.jpg'),
    title: 'Kendra, 19',
    caption: '15h left',
  },
])
