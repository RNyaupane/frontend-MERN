import axios from 'axios'
import { base_url} from '../../utils/base_url'


const getProducts = async () => {
    const response = await axios.get(`${base_url}product/`);
    if (response.data) {
        return response.data;
    }
}

export const productService = {
    getProducts,
}