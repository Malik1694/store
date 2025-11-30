// A simple logger. In a real production app, you'd use a more robust library like Winston or Pino.

const logger = {
    info: (...args: any[]) => {
        console.log('[INFO]', ...args);
    },
    warn: (...args: any[]) => {
        console.warn('[WARN]', ...args);
    },
    error: (...args: any[]) => {
        console.error('[ERROR]', ...args);
    },
};

export default logger;
