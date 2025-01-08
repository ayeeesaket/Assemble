export const Forgot_Username_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Recovery</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #ddd;
        }
        .header {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 26px;
            font-weight: bold;
        }
        .content {
            padding: 25px;
            color: #333;
            line-height: 1.8;
        }
        .username {
            display: block;
            margin: 20px 0;
            font-size: 22px;
            color: #4CAF50;
            background: #e8f5e9;
            border: 1px dashed #4CAF50;
            padding: 10px;
            text-align: center;
            border-radius: 5px;
            font-weight: bold;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 15px;
            text-align: center;
            color: #777;
            font-size: 12px;
            border-top: 1px solid #ddd;
        }
        p {
            margin: 0 0 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Account Recovery</div>
        <div class="content">
            <p>Hello,</p>
            <p>The username for your account registered with us:</p>
            <span class="username">{username}</span>
            <p>If this change is not done by you, please contact our support team.</p>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Assemble. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;