export function main (context, req) {
    let response = {
        status: 200, // optional, defaults to 200
        body: {sample: "Azure function works!"}
    };

    return context.done(null, response);
};