import axios from 'axios';

let api = axios.create({
  headers: {
    'Client-ID': 'p9svv3jta53d0dhnl2k6mchpus77k6',
    'Authorization': 'Bearer 77jg7g75fr1yedantgf1dbunvmj5xv'
  }
})
// 'Client-ID': 'p9svv3jta53d0dhnl2k6mchpus77k6'
// REDIRECT = 'http://192.168.1.63:3000'

// lient rempli = 'https://id.twitch.tv/oauth2/authorize?client_id=p9svv3jta53d0dhnl2k6mchpus77k6&redirect_uri=https://192.168.1.63:3000&response_type=token'

export default api;