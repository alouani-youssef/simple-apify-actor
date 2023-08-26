import yenv from 'yenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


const env = yenv('env.yaml', {
    message: key => `[env] ${key} not found in the loaded file environment`,
    logBeforeThrow: error => console.error(error),
});

export default env;
