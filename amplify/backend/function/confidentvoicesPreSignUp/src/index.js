/* Amplify Params - DO NOT EDIT
	API_CONFIDENTVOICES_GRAPHQLAPIENDPOINTOUTPUT
	API_CONFIDENTVOICES_GRAPHQLAPIIDOUTPUT
	API_CONFIDENTVOICES_GRAPHQLAPIKEYOUTPUT
	AUTH_CONFIDENTVOICES_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
