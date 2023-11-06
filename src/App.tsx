import React, { useState } from 'react';
import './App.css';
import { getWeChatUser } from './apiClient';

const App: React.FC = () => {
  const [wechatId, setWechatId] = useState('');
  const [user, setUser] = useState<any>(null);

  const [error, setError] = useState('');

  const handleWeChatIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWechatId(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    try {
      const userData = await getWeChatUser(wechatId);
      setUser('存在此微信ID');
    } catch (err) {
      setUser('无法找到该微信ID');
      setError('');
      
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">兔咔员工微信号查询网站</h1>
        <form onSubmit={handleSubmit}>
          <label>
            WeChat ID:
            <input type="text" value={wechatId} onChange={handleWeChatIdChange} />
          </label>
          <button type="submit">Get User</button>
        </form>

        {user && (
          <div>
            <p>查询结果:</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        )}

        {error && <p className="error">{error}</p>}
      </header>
    </div>
  );
};

export default App;
