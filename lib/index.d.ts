interface AppLogger {
    emitEventLogs(loglevel: string, data: any): any;
}
export default class ApplicationLogger implements AppLogger {
    APP: string;
    CONSOLE: boolean;
    URL: string;
    PARTNER_NAME: string;
    ENV: string;
    init(initValues: any): void;
    emitEventLogs(loglevel: string, data: any): Promise<void>;
    private publishDatatoServer;
}
export {};
