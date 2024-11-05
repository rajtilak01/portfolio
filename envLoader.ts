import { cleanEnv, str } from 'envalid';

const getEnv = () => {
    return cleanEnv(process.env, {
        DB_URI: str(),
        // Add other environment variables as needed
    });
};

export default getEnv;