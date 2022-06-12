# Backend Descam Project Using Node.js, Express.js, and Mysql

DOKUMENTATION

# 1. /hasil
### Method: POST
### Request Body:
### {
    "Text": "text"
} 
Text as STRING:(mandatory)

### Response:
### {
    "output": "Ilegal",
    "success": true
} 

# 2. /History/addHistory
## Method: POST
## Request Body:
### {
    "Email": "example@gmail.com",
    "Text": "text",
    "Result": "result"
}

Email as STRING:(mandatory)
Text as STRING:(mandatory)
Result as STRING:(mandatory)

## Response:
### {
    "error": "false", 
    "status": "success",
    "message": " success insert data"
} 
