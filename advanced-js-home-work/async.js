/* Вычисление числа Пи методом Монте-Карло */
function calculatePi(iterations)
{
    let insideCircle = 0;
    let total = 0;

    for (let i = 0; i < iterations; i++)
    {
        const x = Math.random();
        const y = Math.random();

        if (x*x + y*y <= 1)
        {
            insideCircle++;
        }
        total++;
    }

    const pi = 4 * (insideCircle / total);
    return pi;
}

/* обертка, возвращающая промис */
async function asyncCalculatePi(iterations)
{
    return new Promise(
        (resolve, reject) => {
            let pi = calculatePi(iterations);
            resolve(pi);
        },
        iterations
        );
}

/* main */
console.log("run async calc Pi")

asyncCalculatePi(10**8)
.then(
    (value) => { console.log("Pi = ", value); }
)