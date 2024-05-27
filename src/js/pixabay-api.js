import axios from 'axios';

const getArr = async (userParam, page) => {
  const searchParams = new URLSearchParams({
    key: '43997509-fd1501e4e0a2c27eafb2a64d5',
    q: userParam,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  });

  return await axios.get(`https://pixabay.com/api/?${searchParams}`);
};

export default getArr;
