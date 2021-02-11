import React, { useReducer } from 'react';
import LogoContext from './logoContext';
import LogoReducer from './logoReducer';

import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART,
    CLEAR
} from '../../types';

const LogoState = (props) => {

    const initialState = {
        cart: [],
        logos: [
            { img: 'https://i.pinimg.com/originals/6c/92/49/6c92492ade0a6883809b9ea3ad429770.png', name: 'Audi' },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg', name: 'BMW' },
            { img: 'https://www.carlogos.org/logo/Mercedes-Benz-emblem-1926-1920x1080.png', name: 'Mercedes Benz' },
            { img: 'https://www.carlogos.org/car-logos/tesla-logo-2200x2800.png', name: 'Tesla' },
            { img: 'https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-22-512.png', name: 'Blogger' },
            { img: 'https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/84_Dev_logo_logos-512.png', name: 'Dev' },
            { img: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1592977386906/ovfhUTMtA.png?auto=compress', name: 'Hashnode' },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/1200px-Medium_logo_Monogram.svg.png', name: 'Medium' },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png', name: 'Golang' },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', name: 'JavaScript' },
            { img: 'https://banner2.cleanpng.com/20180825/box/kisspng-python-programming-language-computer-programming-c-hanuman-png-transparent-images-free-download-clip-5b814ed3233799.3867698615352009791443.jpg', name: 'Python' },
            { img: 'https://banner2.cleanpng.com/20180609/vss/kisspng-ruby-on-rails-computer-programming-programming-lan-meppel-5b1c3688d746b1.8695478715285756248818.jpg', name: 'Ruby' },
        ],
        order: []
    }

    const [state, dispatch] = useReducer(LogoReducer, initialState);

    const addToCart = (item) => {
        dispatch({
            type: ADD_TO_CART,
            payload: item
        })
    }

    const updateItemCart = (item) => {
        dispatch({
            type: UPDATE_CART,
            payload: item
        })
    }

    const removeItemCart = (item) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: item
        })
    }

    const clear = () => dispatch({ type: CLEAR });

    return <LogoContext.Provider
        value={{
            cart: state.cart,
            logos: state.logos,
            order: state.order,
            addToCart,
            updateItemCart,
            removeItemCart,
            clear,
        }}>
        {props.children}
    </LogoContext.Provider>
}


export default LogoState;
