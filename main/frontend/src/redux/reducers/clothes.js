import { GET_CLOTHES, CLEAR_CLOTHES, REMOVE_CLOTH } from '../actions/types'


const initialState = {
    clothes: [
        {
            url: "https://4f.com.pl/spodnie-miejskie-meskie-spmc30-sredni-szary.html",
            photo: "https://4f.com.pl/media/catalog/product/cache/823bf270074ee93ee2843bced640f5c3/D/4/D4Z19SPMC30024SM1MAIN.jpg",
            price: "149,99"
        },
        {
            url: "https://4f.com.pl/spodnie-miejskie-meskie-spmc30-bez.html",
            photo: "https://4f.com.pl/media/catalog/product/cache/823bf270074ee93ee2843bced640f5c3/D/4/D4Z19SPMC30083SM1MAIN.jpg",
            price: "149,99"
        },
        {
            url: "https://4f.com.pl/d4z19-spmd300-23m.html",
            photo: "https://4f.com.pl/media/catalog/product/cache/823bf270074ee93ee2843bced640f5c3/D/4/D4Z19SPMD30023MM01MAIN.jpg",
            price: "119,99"
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CLOTHES:
            return {
                ...state,
                clothes: action.payload
            }
        case CLEAR_CLOTHES:
            return {
                ...state,
                clothes: []
            }
        case REMOVE_CLOTH:
            return {
                ...state,
                clothes: action.payload
            }
        default:
            return { ...state }
    }
}