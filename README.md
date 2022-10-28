# chatroom-api

ChatRoomAPI


## Technology Used

1. NodeJS
2. express framework
3. MongoDB

 


## Installation

You can run start this api in development env with following command

`npm run dev`

This will start api working on [http//localhost:4000](http://localhost:5000/)

You can run start this api in development env with following command

`npm start`

This will start api working on [http//localhost:4000](http://localhost:5000/)

## HTTP Requests

| HTTP METHOD                            | POST                | GET                                       | PUT    | DELETE |
| -------------------------------------- | ------------------- | ----------------------------------------- | ------ | ------ |
| CURD Opreations                        | CREATE              | READ                                      | UPDATE | DELETE |
| /api/message                           | Create new messages | Get all the messages                      | -      | -      |
| /api/message?propetyname=propertyvalue | -                   | Get messages which are satifies the value | -      | -      |

**Bad Request**

### POST api/message

```
{
   [
    {"body":"Hello form room"},
    {"roomid":"129-621"},


   ]
}
```

**Good Request**

### POST api/message

```
{ 
    "body":"Hello form room",
    "roomid":"129-621",
}
```

## Error Handling

**Bad Response**

```
{
    "success":false,
    "error":"Error message"
}

```

## Response

**Good Response**

### GET /api/message

```
{
    "success":true,
     body:
     [
         {
          
            "_id": "608b44e38549e51c407c4319",
            "body": "This is test Message",
            "roomid": "142-984",
            "datetime": "2021-04-29T23:44:35.556Z",
            "__v": 0

         }

     ]
}

```

## Backdraws
1. vulnerable to Injections 
2. vulnerable to xxs attacks

## Solutions
1. You can use [xxs-clean](https://www.npmjs.com/package/xss-clean) for prevent xxs attacks
2. You can use [express-mongo-sanitize](https://www.npmjs.com/package/express-mongo-sanitize) for prevent injections

<br>
> Witten By Abhinav Yadav
