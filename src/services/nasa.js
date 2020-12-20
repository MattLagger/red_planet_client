import api from "./api";

class NasaServices {
    static async listRovers() {
        try {
            console.log('funcionou')
            const {data} = await api.get('/rovers');
            return {data, success: true};
        } catch (error) {
            console.log('não funcionou')
            console.log(error);
            return {data: [], success: false};
        }
    }
}

export default NasaServices;