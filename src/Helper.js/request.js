const main_url='http://localhost:3004'

function request(url,options="GET"){
    const config = {
        method: options.method,
        headers: {
            "content-type": "application/json"
        }
    }
    url = main_url + url;
    if(options.body){
        config.body = JSON.stringify(options.body)
    }
    if(options.query) {
        url = url + query(options.query)
    }
    return fetch(url,config)
    .then((res) => res.json())
    .then((response) => {
        if(response.error){
            throw response.error
        }
        return response
    })
 }
 const query = (objQuery) => {
    let queryStr = "?"
    Object.entries(objQuery).forEach((el) => {
       queryStr += el[0] + "=" + el[1].toString() + "&"
    })
    return queryStr;
 }

 export default request