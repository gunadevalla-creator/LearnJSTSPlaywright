let statuscode = 204;

let category =
        statuscode < 300 ? "Success" :
            statuscode < 400 ? "Redirect" :
                statuscode < 500 ? "Client error" :"Server Error";

console.log(`Status Code ${statuscode} is ${category}`);
