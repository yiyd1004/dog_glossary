const app = (() => {
    const init = () => {
        updateRandomDogImg();
        document.getElementById("button-random-dog").addEventListener("click", updateRandomDogImg);
    };

    const updateRandomDogImg = () => {
        fetch('https://dog.ceo/api/breed/affenpinscher/images/random')
            .then(res => res.json())
            .then((json) => {
                document.getElementById("content").innerHTML = `<img src="${json['message']}"/>`;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return {init};
})();

document.addEventListener("DOMContentLoaded", app.init);