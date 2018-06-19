export default class MakeRequest {
    createRequest (apiUrl, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", apiUrl, true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var dataResponse = JSON.parse(xhr.responseText);
                callback(dataResponse);
            }
        }
    }
}