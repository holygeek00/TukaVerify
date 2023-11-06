import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // Replace with your actual base URL

export const getWeChatUser = async (wechatId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/wechat_id/${wechatId}`);
    return response.data;
  } catch (error) {
    
    throw error;
    
  }
};
