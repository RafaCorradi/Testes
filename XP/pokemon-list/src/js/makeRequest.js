export default class MakeRequest {
    createRequest (apiUrl, callback, objectToFill, index) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", apiUrl, true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var dataResponse = JSON.parse(xhr.responseText);
                
                if (typeof(objectToFill) === 'object' && typeof(index) === 'number') {
                    callback(dataResponse, objectToFill, index);    
                } else {
                    callback(dataResponse);
                }
            }
        }
    }
}