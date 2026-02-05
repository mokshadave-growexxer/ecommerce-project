module.exports = {
database: 'mongodb://localhost:27017',
<<<<<<< HEAD
<<<<<<< HEAD
redis: 'redis://localhost:6379',
port: 3000
=======
port: 3000,
logging: {
level: 'info',
file: './app.log'
}
>>>>>>> dev-b-add-logging
=======
port: 3000,
security: {
jwtSecret: 'secret-key',
tokenExpiry: '24h'
}
>>>>>>> dev-c-add-security
};