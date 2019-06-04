import {createStore} from 'redux';

let reducer = function(oldState, action) {
    // Initial State
    let initialState = {
        isMenuLoading: false,
        breeds: [],

        isGalleryLoading: false,
        dogImages: []
    };

    // Create a new state in the start
    if(!oldState) { return initialState; }

    // Start by setting new State as the initial state
    let newState = initialState;

    // Copy all the things that you need from the old state.
    newState.breeds = oldState.breeds;


    // Fetch the menu bar
    if(action.type == "FETCH_MENU") {

        fetch("https://dog.ceo/api/breeds/list/all")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                store.dispatch({
                    type: "MENU_LOADED",
                    data: Object.keys(data.message)
                });
            })
            .catch(function(err){
                console.log(err);
            });

        newState.isMenuLoading = true;
    }


    // Fetching menu bar done
    if(action.type == "MENU_LOADED") {
        newState.breeds = action.data;
    }


    // Fetching dog images
    if(action.type == "FETCH_PICTURES") {
        let url = `https://dog.ceo/api/breed/${action.breedName}/images`;

        fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                store.dispatch({
                    type: "PICTURES_LOADED",
                    data: data
                });
            })
            .catch(function(err){
                console.log(err);
            });

        newState.isGalleryLoading = true;
    }

    // Fetching the dog images done
    if(action.type == "PICTURES_LOADED") {
        newState.dogImages = action.data.message.slice(0, 15);
    }


    return newState;
}


let store = createStore(reducer);


store.subscribe(function(){
    console.log( store.getState() );
});


function storeMapper(state) {
    return state;
}

export {store, storeMapper};