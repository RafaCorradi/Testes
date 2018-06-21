export default class MakeRequest {
    createPromisseRequest (url) {
        return new Promise (
            function (resolve, reject) {
                let xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.addEventListener('readystatechange', function () {
                    if (xhr.readyState !== 4) {
                        return;
                    }

                    resolve(xhr);
                });

                xhr.send();
            }
        )
    }
}