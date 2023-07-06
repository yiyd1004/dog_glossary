const app = (() => {
    const init = () => {
        updateRandomDogImg();
        document.getElementById("button-random-dog")
            .addEventListener("click", () => updateRandomDogImg());

        document.getElementById("button-show-breed")
            .addEventListener("click", () => {
                let breed = document.getElementById("input-breed").value;
                updateRandomDogImg(breed.toLowerCase());
            });
    };

    const updateRandomDogImg = (breed) => {
        let url = `https://dog.ceo/api`;

        if (breed === undefined) {
            url += '/breeds/image/random';
        } else {
            url += `/breed/${breed}/images/random`;
        }
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then((json) => {
                let code = '';
                if (json['status'] === 'success') {
                    code = `<img src="${json['message']}"/>`;
                } else {
                    code = '<p>Breed not found!</p>';
                }
                document.getElementById("content").innerHTML = code;
            })
            .catch((error) => {
                document.getElementById("content").innerHTML = '<p>Breed not found!</p>';
            });
    };

    return {init};
})();

document.addEventListener("DOMContentLoaded", app.init);