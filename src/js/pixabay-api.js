const getArr = userParam => {
  const searchParams = new URLSearchParams({
    key: '43997509-fd1501e4e0a2c27eafb2a64d5',
    q: userParam,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export default getArr;
