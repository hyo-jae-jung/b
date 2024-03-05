const fastapi = (operation, url, params, success_callback, failure_callback) => {
    let method = operation
    let content_type = 'application/json'
    let body = JSON.stringify(params) // json형식의 데이터로 변환해주는 메소드

    let _url = import.meta.env.VITE_SERVER_URL+url
    if(method === 'get') {
        _url += "?" + new URLSearchParams(params) // 자바크스립트 내장함수. parameters를 get형식 url로 만들어줌
    }

    let options = {
        method: method,
        headers: {
            "Content-Type": content_type
        }
    }

    if (method !== 'get') {
        options['body'] = body
    }

    fetch(_url, options)
        .then(response => {
            response.json()
            .then(json => {
                if(response.status >= 200 && response.status < 300) { // 200 ~ 299
                    if(success_callback) {
                        success_callback(json)
                    }
                }else {
                    if (failure_callback) {
                        failure_callback(json)
                    }else {
                        alert(JSON.stringify(json))
                    }
                }
            })
            .catch(error => {
                alert(JSON.stringify(error))
            })
        })
}

export default fastapi
