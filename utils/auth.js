const jwtMiddleware = require('express-jwt');

function handleAuthErrors(err, req, res, next) {
     if (err.name === 'UnauthorizedError') {
         res.status(401).json({ message: 'Unauthorized' });
     }
     next(err);
}


module.exports = {
     handleErrors: handleAuthErrors,
     required: jwtMiddleware({
         secret: process.env.JWT_SECRET,
         requestProperty: 'auth.user'
     })
};
