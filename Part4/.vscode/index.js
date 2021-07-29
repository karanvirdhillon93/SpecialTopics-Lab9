var AWS = require ('aws-sdk');

//Set the region to
    // Set the region 
    AWS.config.update({
        region: 'us-east-1',
      });


exports.handler = async (event) => {
    
    this.dynamoDB = new AWS.DynamoDB();

    console.log(JSON.stringify(event));

    let game = JSON.parse(event.body);

var params = {
	item: {
		game: {
            'S': game.game,
            'N': game.game_time,
            'SS': game.players
        },
    },
    KeyConditionExpression: 'game = :g',
    TableName: 'game_play',
    ScanIndexForward: false,
    Limit: 1
};

dynamodb.batchExecuteStatement(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });

    const response ={
        statusCode: 200,
        body: event.body,
    };
    return response;
};