var http = require('http')
const express =  require ('express')
const mysql = require('mysql')
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'game',
});

app.post('/signUp', (req, res) => {

    const {userName, userMobile, userNickName, userPassword, userReCode, userBalance, userStatus, userDelete } = req.body

    db.query(`INSERT INTO users (userName, userMobile, userNickName, userPassword, userReCode, userBalance, userStatus, userDelete) VALUES (?,?,?,?,?,?,?,?)`,
    [userName, userMobile, userNickName, userPassword, userReCode, userBalance, userStatus, userDelete],
    (err, result) => {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json({mess:'Successfully'});
        }
    }
)
})

app.post('/userLogin', (req, res) => {
    const { userMobile, userPassword } = req.body;
    
    db.query(
        `SELECT * FROM users WHERE userMobile='${userMobile}' AND userPassword='${userPassword}'`,
        (err, result) => {
            if(result.length === 0) {
                res.json('Mobile number and Password is wrong');
            } else if(result.length === 1) {
                res.status(200).json({mess:'Successfully', data:result});
            } else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/blankDetails', (req, res) => {

    const {userId, actualName, ifseCode, bankName, accountNumber, state, city, address, mobileNumber, email, upiAccount, userStatus, userDelete } = req.body

    db.query(`INSERT INTO bankdetails (userId, actualName, ifseCode, bankName, accountNumber, state, city, address, mobileNumber, email, upiAccount, userStatus, userDelete) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [userId, actualName, ifseCode, bankName, accountNumber, state, city, address, mobileNumber, email, upiAccount, userStatus, userDelete],
    (err, result) => {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json({mess:'Successfully'});
        }
    }
)
})

app.post('/addressDetails', (req, res) => {

    const {userId, fullName, mobileNumber, pinCode, state, city, detaileAddress, status, deleteStatus } = req.body

    db.query(`INSERT INTO useraddress (userId, fullName, mobileNumber, pinCode, state, city, detaileAddress, status, deleteStatus) VALUES (?,?,?,?,?,?,?,?,?)`,
    [userId, fullName, mobileNumber, pinCode, state, city, detaileAddress, status, deleteStatus],
    (err, result) => {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json({mess:'Successfully'});
        }
    }
)
})

app.post('/showBankDetails', (req, res) => {

    const {userId} = req.body

    db.query(
        `SELECT * FROM bankdetails WHERE userId='${userId}' AND userDelete=1`,
        (err, result) => {
            if(result.length === 0) {
                res.json('Not add Bank Account ');
            } else if(result.length === 1) {
                res.status(200).json({mess:'Successfully', data:result});
            } else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/showAddressDetails', (req, res) => {

    const {userId} = req.body

    db.query(
        `SELECT * FROM useraddress WHERE userId='${userId}' AND deleteStatus=1`,
        (err, result) => {
            if(result.length === 0) {
                res.json('Not add Address ');
            } else if(result.length === 1) {
                res.status(200).json({mess:'Successfully', data:result});
            } else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/showUser', (req, res) => {
    db.query(
        `SELECT * FROM users`,
        (err, result) => {
            return res.json(result);
        }
    )
})



app.post('/remove/AddressDetails', (req, res) => {

    const {userId} = req.body

    db.query(
        `UPDATE  useraddress SET deleteStatus='0' WHERE userId='${userId}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/remove/BankDetails', (req, res) => {

    const {userId} = req.body

    db.query(
        `UPDATE  bankdetails SET userDelete='0' WHERE userId='${userId}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})


//Surbhi's work

app.post('/page', (req, res) => {

    const { pageName, pageHeading, pageDescription, pageExplain } = req.body;
    db.query(`INSERT INTO page (pageName, pageHeading, pageDescription, pageExplain) VALUES (?,?,?,?)`,
        [pageName, pageHeading, pageDescription, pageExplain],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/promo', (req, res) => {

    const { promoCode, promoDes, validity, promoStatus } = req.body;
    db.query(`INSERT INTO promo (promoCode, promoDes, validity, promoStatus) VALUES (?,?,?,?)`,
        [promoCode, promoDes, validity, promoStatus],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/orders', (req, res) => {

    const { userId, timePeriod, cardtype, amount } = req.body;
    db.query(`INSERT INTO orders (userId, timePeriod, cardtype, amount) VALUES (?,?,?,?)`,
        [userId, timePeriod, cardtype, amount],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/result', (req, res) => {

    const { record, result } = req.body;
    db.query(`INSERT INTO result (record, result) VALUES (?,?)`,
        [record, result],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/rules', (req, res) => {

    const { rules, status } = req.body;
    db.query(`INSERT INTO rules (rules, status) VALUES (?,?)`,
        [rules, status],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/takec', (req, res) => {

    const { takec, tstatus } = req.body;
    db.query(`INSERT INTO takec (takec, tstatus) VALUES (?,?)`,
        [takec, tstatus],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
}) 

app.post('/payment', (req, res) => {

    const { userId, paymentHeading, paymentContent, paymentImage, status, dateTime } = req.body;
    db.query(`INSERT INTO payment (userId, paymentHeading, paymentContent, paymentImage, status, dateTime) VALUES (?,?,?,?,?,?)`,
        [userId, paymentHeading, paymentContent, paymentImage, status, dateTime],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})
app.post('/tickets', (req, res) => {

    const { userId, subject, message } = req.body;
    db.query(`INSERT INTO tickets (userId, subject, message) VALUES (?,?,?)`,
        [userId, subject, message],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/wallet', (req, res) => {

    const { userId, startBal, closeBal, dateTime } = req.body;
    db.query(`INSERT INTO wallet (userId, startBal, closeBal, dateTime) VALUES (?,?,?,?)`,
        [userId, startBal, closeBal, dateTime],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})
app.post('/gamesettings', (req, res) => {

    const { A, Lower, O } = req.body;
    db.query(`INSERT INTO gamesettings (A, Lower, O) VALUES (?,?,?)`,
        [A, Lower, O],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/admin', (req, res) => {

    const { userName, password, status } = req.body;
    db.query(`INSERT INTO admin (userName, password, status) VALUES (?,?,?)`,
        [userName, password, status],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})



app.listen(5000, () => console.log('server is run on 3001'))