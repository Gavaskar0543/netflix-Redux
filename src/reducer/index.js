export default function movies(state = [],action){
    if(action.type === 'MOVIE_ADD'){
        return action.movies;
    }
    return state;
}