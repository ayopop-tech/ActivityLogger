interface AppLogger {
    emitEventLogs(loglevel: string, data: any): any;
}
export default class ApplicationLogger implements AppLogger {
    APP: string | undefined;
    CONSOLE: boolean | undefined;
    URL: string | undefined;
    PARTNER_NAME: string | undefined;
    ENV: string | undefined;
    PARTNER_ID: number | undefined;
    init(initValues: any, partnerUserId: number): void;
    emitEventLogs(loglevel: string, data: any): Promise<void>;
    private publishDatatoServer;
}
export {};
