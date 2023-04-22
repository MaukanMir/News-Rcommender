import { config } from '@sveltejs/kit';

export const {
    RAPID_API_KEY,
    RAPID_NAME_KEY,
    RAPID_HOST,
    RAPID_NAME_HOST,
    RAPID_BASE_URL
} = config().env;