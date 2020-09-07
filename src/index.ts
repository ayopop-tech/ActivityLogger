import axios from 'axios';

interface AppLogger {
  emitEventLogs(loglevel: string, data: any) : any;
}

export default class ApplicationLogger implements AppLogger {
  APP: string|undefined;
  CONSOLE: boolean|undefined;
  URL: string|undefined;
  PARTNER_NAME: string|undefined;
  ENV: string|undefined;
  PARTNER_ID: number|undefined;

 public init(initValues: any, partnerUserId : number){
   console.log("welcome to logger", partnerUserId, initValues);
   this.APP = initValues.APPLICATION;
   this.PARTNER_NAME = initValues.PARTNER;
   this.ENV = initValues.ENV;
   this.CONSOLE = initValues.CONSOLE;
   this.URL = initValues.PUBLISH_URL;
   this.PARTNER_ID = partnerUserId;
   console.log(this.APP);

 }

 async emitEventLogs(loglevel: string, data: any){
     console.log(data, loglevel);
     return this.publishDatatoServer(loglevel,data);
 }
 
 private publishDatatoServer(loglevel: string, data: any) {

  axios.post(this.URL,{
        data : data
      } , {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
        console.log(error);
    })



 }
}

// let  loggerObject = {
//  "ENV" : "develop",
//  "APPLICATION" : "partner-dashboard",
//  "PARTNER_NAME" : "AYOPOP",
//  "CONSOLE" : "false",
//  "PUBLISH_URL" : "https://dev0pg.openapi.ayopop.id/v1/partnermanager/api/product/updateproductdetails",
// }


// let initLogPri = new ApplicationLogger();
// initLogPri.init(loggerObject,10);
// initLogPri.emitEventLogs("critical", {"key" : "abc"});