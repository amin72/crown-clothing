const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: 'hats',
            imageUrl: 'http://localhost:8888/hats.jpg',
            link: 'shop/hats'
        },
        {
            id: 2,
            title: 'jackets',
            imageUrl: 'http://localhost:8888/jackets.jpg',
            link: 'shop/jackets'
        },
        {
            id: 3,
            title: 'sneakers',
            imageUrl: 'http://localhost:8888/sneakers.jpg',
            link: 'shop/sneakers'
        },
        {
            id: 4,
            title: 'womens',
            imageUrl: 'http://localhost:8888/womens.jpg',
            size: 'large',
            link: 'shop/womens'
        },
        {
            id: 5,
            title: 'mens',
            imageUrl: 'http://localhost:8888/mens.jpg',
            size: 'large',
            link: 'shop/mens'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state
    }
}

export default directoryReducer