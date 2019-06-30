const { getAuthToken, getInstanceUrl } = require('../oath/signin');
const axios = require('axios');

async function createOpportunity(req, res, next) {
    const url = `${getInstanceUrl()}/services/data/v39.0/sobjects/Opportunity`;
    const authToken = getAuthToken();
    let resp;
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + ' ' + authToken
        };
         resp = await axios({
            method: 'post',
            url,
            headers,
            data:  {
                "Name": "Chaitanya Test",
                "CloseDate": "2020-01-01",
                "StageName": "Prospecting"
            }
          });
        res.send(resp.data);
    } catch(e) {
        console.log(e);
        res.status(500).send(resp.data)
    }
    
}

module.exports = {
    createOpportunity
}