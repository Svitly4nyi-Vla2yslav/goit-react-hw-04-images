import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const yourKey = '38650686-211065fda926dbe73f41f5be1'

export const FetchPixabay = async (searchQuery, page) => {
    const { data } = await axios
        .get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${yourKey}&image_type=photo&orientation=horizontal&per_page=12`);
    return data;
}

