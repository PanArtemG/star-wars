import axios from 'axios'
//import {GET_COLLECTION_URL} from "../baseUrl";
import {getEpisodeItems} from './actions'

export const getEpisodeItemsFetch = (planets, starships) => dispatch => {
    dispatch(getEpisodeItems.planet.request())
    dispatch(getEpisodeItems.starships.request())

   // getName(planets, 'planet')
   // getName(starships, 'starships')
    axios.get('https://swapi.co/api/starships/68/')
        .then(({data:{name}})=> dispatch(getEpisodeItems.planet.success(name)))

    /*function getName(obj, typeDispatch) {
        const planetsArr = []
        const starshipsArr = []

        obj.forEach(credential => {
            const options = {
                method: 'GET',
                url: credential
            }

            axios(options)
                .then(({data: {name}}) => (typeDispatch === 'planet') ? planetsArr.push(name) : starshipsArr.push(name))
                .catch(error => (typeDispatch === 'planet') ? dispatch(getEpisodeItems.planet.error(error)) : dispatch(getEpisodeItems.starships.error(error)))
        })
        typeDispatch === 'planet' ? dispatch(getEpisodeItems.planet.success(planetsArr)) : dispatch(getEpisodeItems.starships.success(starshipsArr))
    }
     */
}

