const myPromise = new Promise((resolve, reject) => {
    let age = 19;
    if (age >= 18) {
        resolve("Eligible for vote");
    } else {
        reject("Not eligible for vote");
    }
});

const checkEligibilty = async () => {
    try {
        const msg = await myPromise;
        console.log(msg); // Outputs: "Eligible for vote"
    } catch (error) {
        console.log(error);
    }
};

checkEligibilty(); // Call the function
