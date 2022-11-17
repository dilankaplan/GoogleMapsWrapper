import axios from "axios";

const CHARGERS_API_BASE_URL ="https://belib.paris/api/infra/location?acceptExternalCpos=true";

class ChargerService{
    getChargers(){
        return axios.get(CHARGERS_API_BASE_URL);
    }
}
export default new ChargerService()