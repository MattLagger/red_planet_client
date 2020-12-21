import api from "./api";

class NasaServices {
    static async listRovers() {
        try {
            const {data} = await api.get('/rovers');
            return data;
        } catch (error) {
            console.log(error);
            return []
        }
    }
}

export default NasaServices;