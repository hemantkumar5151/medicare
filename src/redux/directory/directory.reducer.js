const INITIAL_STATE = {
  sections: [
    {
      title: 'new baby born',
      imageUrl: 'https://images.pexels.com/photos/428388/pexels-photo-428388.jpeg',
      id: 1,
      linkUrl: 'shop/new baby born'
    },
    {
      title: 'children',
      imageUrl: 'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg',
      id: 2,
      linkUrl: 'shop/children'
    },
    {
      title: 'senior citizen',
      imageUrl: 'https://images.pexels.com/photos/3867213/pexels-photo-3867213.jpeg',
      id: 3,
      linkUrl: 'shop/senior citizen'
    },
    {
      title: 'womens',
      imageUrl: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
