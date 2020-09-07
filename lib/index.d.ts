interface AppLogger {
    emitEventLogs(loglevel: string, data: any): any;
}
export default class ApplicationLogger implements AppLogger {
    APP: string;
    CONSOLE: boolean;
    URL: string;
    PARTNER_NAME: string;
    ENV: string;
    PARTNER_ID: number;
    init(initValues: any, partnerUserId: number): void;
    emitEventLogs(loglevel: string, data: any): Promise<void>;
    private publishDatatoServer;
}
export {};
