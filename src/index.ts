import axios from 'axios';

interface AppLogger {
  emitEventLogs(loglevel: string, data: any): any;
}

export default class ApplicationLogger implements AppLogger {
  APP!: string;
  CONSOLE: boolean = false;
  URL!: string;
  PARTNER_NAME!: string;
  ENV!: string;
  PARTNER_ID!: number;

  public init(initValues: any, partnerUserId: number) {
    this.APP = initValues.APPLICATION;
    this.PARTNER_NAME = initValues.PARTNER;
    this.ENV = initValues.ENV;
    this.CONSOLE = initValues.CONSOLE;
    if(!initValues.PUBLISH_URL){
      throw new Error('PUBLISH_URL is mandatory parameter');
    }
    this.URL = initValues.PUBLISH_URL;
    this.PARTNER_ID = partnerUserId;

  }

  async emitEventLogs(loglevel: string, data: any) {
    return this.publishDatatoServer(loglevel, data);
  }

  private publishDatatoServer(loglevel: string, data: any) {
    const header = {
      'Content-Type': 'application/json',
    };

    axios
      .post(this.URL, data)
      .then((response: any) => {
        // console.log(response);
      })
      .catch((error: any) => {
        // console.log(error);
      });
  }
}

let  loggerObject = {
 "ENV" : "develop",
 "APPLICATION" : "partner-dashboard",
 "PARTNER_NAME" : "AYOPOP",
 "CONSOLE" : "false",
//  "PUBLISH_URL" : "https://dev0pg.openapi.ayopop.id/v1/partnermanager/api/product/updateproductdetails",
}

let initLogPri = new ApplicationLogger();
initLogPri.init(loggerObject,10);
initLogPri.emitEventLogs("critical", {"key" : "abc"});
