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

    static async showManifest(rover, page = 1) {
        try {
            const {data} = await api.get('/manifests/' + rover, {page});
            return data.photo_manifest || {};
        } catch (error) {
            console.log(error);
            return {}
        }
    }

    static async listPhotos(rover, earth_date, page) {
        try {
            const {data} = await api.post('/photos', {
                rover,
                earth_date,
                page
            });
            return data.photos || [];
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

export default NasaServices;