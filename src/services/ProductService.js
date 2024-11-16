import axios from "axios";

class ProductService {
    constructor() {
        this.baseUrl = process.env.REACT_APP_JSON_API_URL;
    }

    async getAllProducts() {
        try {
            const { data } = await axios.get(this.baseUrl);
            // console.log("Çekilen ürünler:", data.products);
            return data.products; 
        } catch (error) {
            console.error("Ürünleri çekerken hata oluştu:", error);
            throw error;
        }
    }
}

export default ProductService;
