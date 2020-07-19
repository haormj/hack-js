import axios from 'axios';

axios.get('https://baidu.com')
    .then(response => {
        console.log(response.status);
        console.log(response.statusText);
    })
    .catch(err => {
        console.log(err);
    });

