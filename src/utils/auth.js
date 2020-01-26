import axios from 'axios';
import history from './history';
import EnvConfig from './env_config'

// const url = EnvConfig + 'session' 
const url = 'http://dev-services.bluephage.com/api/v1/' + 'session'

export default class Auth {
  userProfile = {}

  login = async (email, password) => {
    const res = await axios.post(url, { email, password })
      .then((res) => {
        return res.data
      });
    return res;
  }

  /*   handleAuth = () => {
  
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime())) 
      localStorage.setItem('expiresAt', expiresAt)
  
      this.getProfile();
      setTimeout(() => { history.replace('/authcheck') }, 600);
    }*/

  getAccessToken = () => {
    if (localStorage.getItem('access_token')) {
      const accessToken = localStorage.getItem('access_token')
      return accessToken
    } else {
      return null
    }
  }

  getProfile = () => {
    let accessToken = this.getAccessToken()
    if (accessToken) {
      console.log(accessToken)
    }
  }

  logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('expiresAt')
    setTimeout(() => { history.replace('/authcheck') }, 200);
  }

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
    return new Date().getTime() < expiresAt
  }
}
