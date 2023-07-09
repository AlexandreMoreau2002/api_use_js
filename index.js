document.addEventListener('DOMContentLoaded', () => {
const button = document.querySelector(".btn");
const img = document.querySelector(".photo");

console.log(button)

async function imgAtPageChargement() {
    try {
        const response = await fetch('https://cataas.com/cat');
        const data = await response.url;
        img.src = data;
    } catch (error) {
        console.log(error);
    }
    
    button.textContent = button.textContent.toUpperCase()

} imgAtPageChargement();

    console.log("Bonjour, monde");

    // Appel de la fonction pour charger l'image

    // Appel avec fetch :
    button.addEventListener('click', async () => {
        try {
            const fetchResult = await fetch('https://cataas.com/cat');
            const data = await fetchResult.url;

            console.log(data);
            img.src = data;

        } catch (error) {
            console.log(error);
        }
    });
});

