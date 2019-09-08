import axios from 'axios';

const requestDataAsync = async () => {
  let { data } = await axios.get('http://localhost:5000/api/test.json');
  return data;
};

requestDataAsync() /*?.*/
