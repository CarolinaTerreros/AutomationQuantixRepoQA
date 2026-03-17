export const env = {
  baseURL: process.env.BASE_URL ?? '',
  userEmail: process.env.USER_EMAIL ?? '',
  userPassword: process.env.USER_PASSWORD ?? ''
};

export function assertRequiredEnv(): void {
  const missing: string[] = [];
  if (!env.baseURL) missing.push('BASE_URL');
  if (!env.userEmail) missing.push('USER_EMAIL');
  if (!env.userPassword) missing.push('USER_PASSWORD');

  if (missing.length) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}. ` +
        `Create a .env file locally (do not commit) based on .env.example.`
    );
  }
}
