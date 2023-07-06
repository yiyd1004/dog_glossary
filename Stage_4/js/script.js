const app = (() => {
    const BASE_URL = `https://dog.ceo/api`;

    const init = () => {
        updateRandomDogImg();

        document.getElementById("button-random-dog")
            .addEventListener("click", () => updateRandomDogImg());

        document.getElementById("button-show-breed")
            .addEventListener("click", () => {
                let breed = document.getElementById("input-breed").value;
                updateRandomDogImg(breed.toLowerCase());
            });

        document.getElementById("button-show-sub-breed")
            .addEventListener("click", () => {
                let breed = document.getElementById("input-breed").value;
                getSubBreedList(breed.toLowerCase());
            });

        document.getElementById("button-show-all")
            .addEventListener("click", getAllBreedList);
    };

    const updateRandomDogImg = (breed) => {
        let url = BASE_URL;

        if (breed === undefined) {
            url += '/breeds/image/random';
        } else {
            url += `/breed/${breed}/images/random`;
        }

        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`error ${res.status}`)
                }
            })
            .then(json => {
                const content = document.getElementById("content");
                let code = '';
                if (json['status'] === 'success') {
                    code = `<img src="${json['message']}"/>`;
                } else {
                    code = '<p>Breed not found!</p>';
                }
                content.innerHTML = code;
            })
            .catch(error => {
                console.log('1: ' + error + ': ' + url);
                document.getElementById("content").innerHTML = '<p>Breed not found!</p>';
            });
    };

    const getSubBreedList = (breed) => {
        let url = BASE_URL + `/breed/${breed}/list`;
        console.log("2: " + url);
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`error ${res.status}`);
                }
            })
            .then(json => {
                const content = document.getElementById("content");

                if (json['status'] === 'success') {
                    const subBreedList = json['message'];

                    if (subBreedList.length > 0) {
                        const list = document.createElement('ol');
                        for (let sub of json['message']) {
                            const item = document.createElement('li');
                            item.append(document.createTextNode(sub));
                            list.append(item);
                        }
                        content.innerHTML = '';
                        content.appendChild(list);
                    } else {
                        content.innerHTML = '<p>No sub-breeds found!</p>';
                    }
                } else {
                    content.innerHTML = '<p>No sub-breeds found!</p>';
                }
            })
            .catch(error => {
                console.log('2: ' + error + ': ' + url);
                document.getElementById("content").innerHTML = '<p>Breed not found!</p>';
            });
    };

    const getAllBreedList = () => {
        let url = BASE_URL + '/breeds/list/all';

        fetch(url)
            .then(res => res.json())
            .then(json => {
                const content = document.getElementById("content");

                if (json['status'] === 'success' && Object.keys(json['message'] > 0)) {
                    const list = document.createElement('ol');

                    for (let [key, breeds] of Object.entries(json['message'])) {
                        const item = document.createElement('li');
                        item.append(document.createTextNode(key));

                        if (breeds.length > 0) {
                            const subList = document.createElement('ul');

                            for (let subBreed of breeds) {
                                const subItem = document.createElement('li');
                                subItem.append(document.createTextNode(subBreed));
                                subList.append(subItem);
                            }
                            item.append(subList);
                        }
                        list.append(item);
                    }

                    content.innerHTML = '';
                    content.append(list);
                }
            })
            .catch(error => console.log('3: ' + error + ': ' + url));
    };

    return {init};
})();

document.addEventListener("DOMContentLoaded", app.init);