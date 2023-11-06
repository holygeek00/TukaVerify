import axios from 'axios';

const BASE_URL = 'http://148.135.119.167/:8999'; // Replace with your actual base URL

export const getWeChatUser = async (wechatId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/wechat_id/${wechatId}`);
    return response.data;
  } catch (error) {
    
    throw error;
    
  }
};
