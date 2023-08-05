function generateNumber() {

    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min
    
    const resultNumberInput = document.querySelector('.result-number');
        resultNumberInput.value = result;

        let currentNumber = min;
        const animationSpeed = 5; // Milliseconds per frame (adjust for desired speed)

        const animate = () => {
            resultNumberInput.value = currentNumber;
            if (currentNumber === result) {
                clearInterval(animationInterval);
            } else {
                currentNumber++;
            }
        };

        const animationInterval = setInterval(animate, animationSpeed);
    
    }