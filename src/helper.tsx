import * as jQuery  from 'jquery'
import * as toastr from  "toastr"
import link from 'react-router-dom'
import $ from 'jquery'
/*global _spPageContextInfo*/
declare var _spPageContextInfo,_spFormDigestRefreshInterval;
declare var UpdateFormDigest: any;



/**
 * Data Source
 */
export class Helper {

    
    /**
     * This Method is use to retrive Azure App URL from hidden list - AzureAppConfiguration
     */
    public static AzureFunctionAppURL(key: string): PromiseLike<string> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('AzureAppConfiguration')/Items?$select=Value&$filter=Title eq '${key}'`;
            this.executeJson(restUrl, null, null, null)
                .then((response) => {
                    resolve(response.d.results[0].Value);
                }).catch( (e) => {
                    console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
                    reject();
                });
        });
    }

    public static executeJsonNew(url: string, method: string, headers: any, payload: any,digestvalue : any){
        method = method || 'GET';
        headers = headers || {};
        headers["Accept"] = "application/json;odata=verbose";
        if (method == 'POST')
        {
            //This is essential to always referesh form digest value for any SP REST post request
       
        headers["X-RequestDigest"] = digestvalue;
        }
        
        var ajaxOptions = 
        {       
            url: url,   
            type: method,  
            contentType: "application/json;odata=verbose",
            headers: headers,
            fail: (request, status, error) => {
                console.log(request.responseText);
            }
        };
        
        if (typeof payload != undefined) {
          ajaxOptions["data"] = payload;
        }
        
        return jQuery.ajax(ajaxOptions);
  
    }

    //This is common mthod to execute call SPOnline REST API 
    public static executeJson(url: string, method: string, headers: any, payload: any) : any
    {
        method = method || 'GET';
        headers = headers || {};
        headers["Accept"] = "application/json;odata=verbose";
        if (method == 'POST')
        {
            //This is essential to always referesh form digest value for any SP REST post request
       
        headers["X-RequestDigest"] = $('#__REQUESTDIGEST').val();
        }
        
        var ajaxOptions = 
        {       
            url: url,   
            type: method,  
            contentType: "application/json;odata=verbose",
            headers: headers,
            fail: (request, status, error) => {
                console.log(request.responseText);
            }
        };
        
        if (typeof payload != undefined) {
          ajaxOptions["data"] = payload;
        }
        
        return jQuery.ajax(ajaxOptions);
    }

    
    // Method to get current logged in user
    public static GetCurrentUser(): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/currentuser?$select=Title,Email,Id";
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    var user = response.d;
                    var email = user.Email
                    resolve(email);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.GetCurrentUser()");
                });
        });
    }

    // Method to read the RoutingList Data
    public static GetCurrentUserGroup(): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/currentuser/?$expand=groups&$Select=groups/Title";
            this.executeJson(restUrl, null, null, null)
            .then((response) => {
                const groupNames= response.d.Groups.results;
                groupNames.forEach(group => {
                    //console.log(group.Title)
                });
                resolve(response.d.Groups.results);
            }).catch( (e) => {
                toastr.error(e.message, "Failed to check current user have permissions on Library/List");
                reject();
            });
    });
    }

    // Method to read the RoutingList Data
    public static setReportNumber(): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Audit Report')/items?$select=ID,Title&$Top=1&$orderby=ID desc";
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.getFunctionList()");
                });
        });
    }

    // Method to read the RoutingList Data
    public static getFunctionNameList(): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('FunctionMasterList')/items?$select=ID,Title";
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.getFunctionNameList()");
                });
        });
    }

    // Method to read the RoutingList Data
    public static getFunctionArea(): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('FunctionalAreaMasterList')/items?$select=ID,Title";
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.getFunctionArea()");
                });
        });
    }

    // Method to read the RoutingList Data
    public static getWorldAreas(): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('WorldAreas')/items?$select=ID,Title";
            //const restUrl = "https://emerson.sharepoint.com/sites/process-dev2/EEEC/IMSPortal/AUDITS/_api/web/lists/getbytitle('FunctionMasterList')/items?$select=ID,Title";
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.getFunctionList()");
                });
        });
    }

    // Method to read the RoutingList Data
    public static getCountry(worldareaname: string): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            //const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbytitle('WorldMasterList')/items?$select=ID,Title,WorldArea/ID,WorldArea/Title&$expand=WorldArea/ID&$filter=WorldArea/Title eq '${worldareaname}'`;
            const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbytitle('World Area Master List')/items?$select=ID,Title&$filter=WorldAreaCalc eq '${worldareaname}'`;
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.getFunctionList()");
                });
        });
    }

    // Method to read the RoutingList Data
    public static AuditEventType(): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Audit_EventType')/items?$select=ID,Title";
            //const restUrl = "https://emerson.sharepoint.com/sites/process-dev2/EEEC/IMSPortal/AUDITS/_api/web/lists/getbytitle('FunctionMasterList')/items?$select=ID,Title";
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.getFunctionList()");
                });
        });
    }
    
    // Method to read the RoutingList Data
    public static getReferenceStanderdList(): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('ReferenceStanderdMasterList')/items?$select=ID,Title";
            //const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Audit Findings List')/fields?$filter=EntityPropertyName eq 'Choice Field Name'";
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.getFunctionList()");
                });
        });
    }
    // Method to read the RoutingList Data
    public static GetDropDownData(Listname: string): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbytitle('${Listname}')/items?$select=ID,Title,checked`;
            //const restUrl = "https://emerson.sharepoint.com/sites/process-dev2/EEEC/IMSPortal/AUDITS/_api/web/lists/getbytitle('FunctionMasterList')/items?$select=ID,Title";
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.getFunctionList()");
                });
        });
    }

    // Method to read the RoutingList Data
    public static GetPeriodMasterData(AuditDate: Date): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbytitle('Period Master List')/items?$select=ID,Title,FinYear&$filter=(Start_x0020_Date le datetime'${AuditDate.toISOString()}') and (End_x0020_Date ge datetime'${AuditDate.toISOString()}')`;
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    console.log(response);
                    console.log(response.d.results);
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.GetPeriodMasterData()");
                });
        });
    }

    // Method to read the RoutingList Data
    public static GetCountryDetails(CountryName: string): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbytitle('World%20Area%20Master%20List')/items?$select=ID,Title,WorldAreaCalc&$filter=Title eq '${CountryName}'`;
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    console.log(response);
                    console.log(response.d.results);
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.GetPeriodMasterData()");
                });
        });
    }

    // Method to read the RoutingList Data
    public static getLatestItemsCreatedinAuditReportList(): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbytitle('Audit Report')/items?$select=ID,Title&$top=1&$orderby=Created desc`;
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    console.log(response);
                    console.log(response.d.results)
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "AuditReportDetails: Helper.getLatestItemsCreatedinAuditFindingList()");
                });
        });
    }
    

    // Method to read the RoutingList Data
    public static getClauseNumber(referencestanderd: string): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            //const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbytitle('WorldMasterList')/items?$select=ID,Title,WorldArea/ID,WorldArea/Title&$expand=WorldArea/ID&$filter=WorldArea/Title eq '${worldareaname}'`;
            const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbytitle('IMS Standards')/items?$select=ID,Title,Clause_x0020_Number,Clause_x0020_Name&$filter=Title eq '${referencestanderd}'`;
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.getFunctionList()");
                });
        });
    }
    
    // Method to read the RoutingList Data
    public static getClauseNumberByID(referencestanderd: string, clausenumber: string): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            //const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbytitle('WorldMasterList')/items?$select=ID,Title,WorldArea/ID,WorldArea/Title&$expand=WorldArea/ID&$filter=WorldArea/Title eq '${worldareaname}'`;
            const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbytitle('IMS Standards')/items?$select=ID,Title,Clause_x0020_Number,Clause_x0020_Name&$filter=Title eq '${referencestanderd}' and Clause_x0020_Number eq '${clausenumber}'`;
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.getFunctionList()");
                });
        });
    }

    // Method to read the RoutingList Data
    public static getRoutingList(): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            
            //const restUrl = "https://emerson.sharepoint.com/sites/process-dev2/EEEC/IMSPortal/AUDITS/_api/web/lists/getbytitle('Audit%20Report')/items?$select=Title,Function&$orderby=ID";
            const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Audit%20Report')/items?$select=Title&$orderby=ID";
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.getRoutingList()");
                });
        });
    }
    

    // Method to get the CoverSheet ID
    public static doesUserHavePermissionsOnLibrary(group1: string, group2?: string): PromiseLike<boolean> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/currentuser/?$expand=groups&$Select=groups/Title";
            this.executeJson(restUrl, null, null, null)
                .then((response) => {
                    const groupNames= response.d.Groups.results;
                    groupNames.forEach(group => {

                        // Resolve the request
                        if(group.Title === group1 || group.Title === group2)
                            resolve(true);
                    });
                    
                    resolve(false);
                }).catch( (e) => {
                    toastr.error(e.message, "Failed to check current user have permissions on Library/List");
                    reject();
                });
        });
    }

    // Method to read the RoutingList Data
    public static GetAuditFindingListData(ItemID: any): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            //const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbytitle('Audit Findings List')/items?$select=*&$filter=ID eq '${ItemID}'`;
            const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbytitle('Audit Findings List')/items?$select=Auditee/Id,Auditee/UserName,Functinal_x0020_Head/Id,Functinal_x0020_Head/UserName,Concerned_x0020_Business_x0020_M/Id,Concerned_x0020_Business_x0020_M/UserName,Concerned_x0020_Director/Id,Concerned_x0020_Director/UserName,Action_x0020_Assigned_x0020_to/Id,Action_x0020_Assigned_x0020_to/UserName,Auditor/Id,Auditor/Name,Auditor/UserName,*
            &$expand=Auditee,Functinal_x0020_Head,Concerned_x0020_Business_x0020_M,Concerned_x0020_Director,Action_x0020_Assigned_x0020_to,Auditor&$filter=ID eq '${ItemID}'`;
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.getFunctionList()");
                });
        });
    }
    
    
    /**
     * Returns formated date string
     */
    public static getFormatedDate(dateValue: Date): string {
        if (dateValue) {
            let date: string = dateValue.toLocaleString();
            if (date.indexOf(",") > -1) {
                date = date.split(",")[0];
            }
            return date;
        }
        return "";
    }

    /**
     * Returns formated date string
     */
    public static getFormatedDateString(dateString: string): string {
        if (dateString) {
            const convertedDate: Date = new Date(dateString);
            let date: string = convertedDate.toLocaleString();
            if (date.indexOf(",") > -1) {
                date = date.split(",")[0];
            }
            return date;
        }
        return "";
    }

    /**
     * Returns image url for the given filename.
     * The urls points to https://spoprod-a.akamaihd.net..... !!!
     */
    public static getImgUrl(fileName: string): string {

        const fileNameItems = fileName.split(".");
        const fileExtenstion = fileNameItems[fileNameItems.length - 1];

        return this.getFileIconByFileExtension(fileExtenstion);
    }

    /**
     * Returns image url for the given extension.
     * The urls points to https://spoprod-a.akamaihd.net..... !!!
     */
    public static getImgUrlByFileExtension(extension: string): string {
        // cuurently in SPFx with React I didn't find different way of getting the image
        // feel free to improve this
        const imgRoot: string = `https://spoprod-a.akamaihd.net/files
        /odsp-next-prod_ship-2017-04-21-sts_20170503.001/odsp-media/images/filetypes/16/`;
        let imgType = "genericfile.png";
        imgType = extension + ".png";

        switch (extension) {
            case "jpg":
            case "jpeg":
            case "jfif":
            case "gif":
            case "png":
                imgType = "photo.png";
                break;
            case "folder":
                imgType = "folder.svg";
                break;

        }
        return imgRoot + imgType;
    }

    /**
     * Returns image url for the given extension.
     * The urls points to https://spoprod-a.akamaihd.net..... !!!
     */
    public static getFileIconByFileExtension(extension: string): string {
        let imgUrl : string = `https://spoprod-a.akamaihd.net/files/odsp-next-prod_ship-2017-04-21-sts_20170503.001/odsp-media/images/filetypes/16/genericfile.png`
        const officeProductIcons: string[] = ['accdb', 'csv', 'docx', 'dotx', 'mpp', 'mpt', 
            'odp', 'ods', 'odt', 'one', 'onepkg', 'onetoc', 'potx', 'ppsx', 'pptx', 'pub',
            'vsdx', 'vssx', 'vstx', 'xls', 'xlsx', 'xltx', 'xsn'];

        if(officeProductIcons.indexOf(extension) !== -1 ){
            imgUrl = `https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/${extension}_16x1.svg`;
        } else {                     
            switch (extension.toLowerCase()) {
                case "jpg":
                case "jpeg":
                case "jfif":
                case "gif":
                case "png":
                    imgUrl = `https://spoprod-a.akamaihd.net/files/odsp-next-prod_ship-2017-04-21-sts_20170503.001/odsp-media/images/filetypes/16/photo.png`;
                    break;
                case "folder":
                    imgUrl = "/_layouts/15/images/folder.gif?rev=44";
                    break;
                case "pdf":
                    imgUrl = "/_layouts/15/images/icpdf.png";
                    break;
                case "msg":
                    imgUrl = "/_layouts/15/images/icmsg.png";
                    break;
                case "doc":
                    imgUrl = "/_layouts/15/images/icdoc.png";
                    break;
                case "xls":
                    imgUrl = "/_layouts/15/images/icxls.png";
                    break;
                case "ppt":
                    imgUrl = "/_layouts/15/images/icppt.png";
                    break;
                case "xml":
                    imgUrl = "/_layouts/15/images/icxml.gif";
                    break;
                default:
                    imgUrl = `https://spoprod-a.akamaihd.net/files/odsp-next-prod_ship-2017-04-21-sts_20170503.001/odsp-media/images/filetypes/16/genericfile.png`;
                    break;
            }
        }

        return imgUrl;
    }

    // Function to retrieve a query string value.
    public static getQueryStringParameter(paramToRetrieve: string): string {
        const documentURL = document.URL;
        return (documentURL.split("?").length > 1 && documentURL.indexOf(paramToRetrieve) > 0)
         ? documentURL.split("?")[1].split("&").filter(
             (i) => i.split("=")[0] === paramToRetrieve)[0].split("=")[1] : "";
    }

    //Convert uct time to EST
    public static getESTDate = (utc: Date)=> {
        let utcTime = new Date(utc);
        const estTime = utcTime.setHours(utcTime.getUTCHours() - 5); //adjust uct time for EST hours as per old app regional settings.
        return new Date(estTime);
    };

    //Convert EST to uct time
    public static getUTCDate = (local: Date)=> {
        let localTime = new Date(local);
        const utcTime = localTime.setHours(localTime.getUTCHours() + 5); //adjust uct time for EST hours as per old app regional settings.
        return new Date(utcTime);
    };
    
    //Convert Date to MM/dd/yyyy
    public static getMonthYearFormat = (): string => {
        var date = new date;
        var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];
        if(date === null)
            return "";
        else
              return monthNames[date.getMonth()]+date.getFullYear().toString().substring(2,4);;
    };

    //Convert Date to MM/dd/yyyy
    public static _onFormatDate = (date: Date): string => {
        if(date === null)
            return "";
        else
              return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    };
    
    // Function to retrieve a query string value.
    public static getUserID(userName: any[]): number {
        var UserID;
        var arrayLength = userName.length;
        for (var i = 0; i < arrayLength; i++) {
            
            UserID = userName[0].id;
        }
        //return name.substr(1).slice(0, -1);
        return UserID;
    }

    // Function to retrieve a query string value.
    public static getClauseNumberID(userName: any[]): number {
        var clauseID;
        var arrayLength = userName.length;
        for (var i = 0; i < arrayLength; i++) {
            
            clauseID = userName[0].id;
        }
        //return name.substr(1).slice(0, -1);
        return clauseID;
    }

    // Function to retrieve a query string value.
    public static getFinYear(year: any[]): string {
        var finYear;
        var arrayLength = year.length;
        for (var i = 0; i < arrayLength; i++) {
            
            finYear = year[0].FinYear;
        }
        //return name.substr(1).slice(0, -1);
        return finYear;
    }

    // Function to retrieve a query string value.
    public static getMultipleUser(technicalleads: any[]): number[] {
        var Leads = [];
        let str;
        var arrayLength = technicalleads.length;
        for (var i = 0; i < arrayLength; i++) {
            Leads.push(parseInt(technicalleads[i].id));
        }

        str = Leads.join(",");
        //return name.substr(1).slice(0, -1);
        return Leads;
    }
    // Function to retrieve a query string value.
    public static getPeriod(period: any[]): number {
        var Period;
        var arrayLength = period.length;
        for (var i = 0; i < arrayLength; i++) {
            
            Period = period[0].ID;
        }
        //return name.substr(1).slice(0, -1);
        return Period;
    }

    //// Function to retrieve a query string value.
    //public static getTechLeadID(techlead: any[]): number {
    //    var leads;
    //    for (var i = 0; i < techlead.length; i++) {
    //        
    //        Period = techlead[i].id;
    //    }
    //    //return name.substr(1).slice(0, -1);
    //    return leads;
    //}

    // Function to retrieve a query string value.
    public static getTechLeadID(TechleadID: any[]): string[] {
        var Leads = [];
        var TechleadIDs;
        var arrayLength = TechleadID.length;
        for (var i = 0; i < arrayLength; i++) {
            //var refURL = "<a href=\"/sites/process-dev2/EEEC/IMSPortal/AUDITS/Pages/AuditFindingsForm.aspx?ID=OBSJUN19" + NOCID[i].ID + "\"> "+ NOCID[i].ID+ "</a>";
            Leads.push(TechleadID[i].id);
        }
        TechleadIDs = Leads.join("<br/>");
        return TechleadIDs;
    }

    // Function to retrieve a query string value.
    public static getNOCUrl(NOCID: any[], monthyear: string): string[] {
        var NOCURL = [];
        var NOCLink;
        var arrayLength = NOCID.length;
        for (var i = 0; i < arrayLength; i++) {
            let nocid = NOCID[i].ID;
            let title = "NC"+monthyear+nocid;
            let refURL = "<a href=\"https://emerson.sharepoint.com/sites/process-dev2/EEEC/IMSPortal/AUDITS/Pages/AuditReportForm.aspx?formType=auditfindings&Category=NC&ItemID=" + nocid + "\">"+ title+ "</a>";
            NOCURL.push(refURL);
        }
        NOCLink = NOCURL.join("<br/>");
        return NOCLink;
    }

    // Function to retrieve a query string value.
    public static getOBSUrl(OBSID: any[], monthyear: string): string[] {
        var OBSURL = [];
        var OBSLink;
        var arrayLength = OBSID.length;
        for (var i = 0; i < arrayLength; i++) {
            let obsid = OBSID[i].ID;
            let title = "Obs"+monthyear+obsid;
            let refURL = "<a href=\"https://emerson.sharepoint.com/sites/process-dev2/EEEC/IMSPortal/AUDITS/Pages/AuditReportForm.aspx?formType=auditfindings&Category=Obs&ItemID=" + obsid + "\">"+ title+ "</a>";
            OBSURL.push(refURL);
        }
        OBSLink = OBSURL.join("<br/>");
        return OBSLink;
    }

    public static adddata(formData: any): PromiseLike<string> {
        
        // Return a promise
        const siteURL= "https://emerson.sharepoint.com/sites/process-dev2/EEEC/IMSPortal/PROJECT%20REVIEWS";
        return new Promise((resolve, reject) => {
            const restUrl = siteURL + `/_api/web/lists/getbytitle('ProjectReviewSectionAB')/items`;
            const headers = { 'content-Type': 'application/json;odata=verbose' };
            const listTitle = "ProjectReviewSectionAB";
            let i = 0;
            const data = {
                            '__metadata': { 'type': 'SP.Data.' + listTitle + 'ListItem' },
                            Title: formData.Title[i],
                            
                        }  
                    
                        console.log("Rest Call")
            console.log(data);
                Helper.executeJson(restUrl, "POST", headers, JSON.stringify($.extend(true,{}, data)))
                    
                .then((response) => {
                    // Resolve the request
                    console.log(response);
                    resolve("success");
                }).catch( (e) => {
                    if(e.responseJSON.error.message.value.indexOf("The request ETag value") != -1)
                    {
                        resolve("Please refresh the page, and resubmit your changes");
                    }
                    else
                    {
                        //const errorLog = {'Source':'coverSheet=>Data=>saveCoverSheet', 
                        //    'ErrorText': JSON.parse(e.responseText).error.message.value, 'NotifyToAdmin': 0};
                        //Helper.callAzureFunctionAppToLogError(errorLog);
                        resolve(JSON.parse(e.responseText).error.message.value);
                    }
                }); 
            
        });
    }

    // Function to retrieve a query string value.
    public static getStanderd(standerd: any[]): string {
        return standerd.join(';')
    }

    // Function to retrieve a query string value.
    public static getUserName(username: any[]): string {
        //var UserName = JSON.parse(username.toString());
        var UserName = JSON.stringify(username);
        var ex = JSON.parse(UserName);
        console.log(ex.Id)
        return ex.UserName;
    }

    // Function to retrieve a query string value.
    public static getARUserID(username: any[]): string {
        //var UserName = JSON.parse(username.toString());
        var UserName = JSON.stringify(username);
        var ex = JSON.parse(UserName);
        console.log(ex.Id)
        return ex.Id;
    }

    // Function to retrieve a query string value.
    public static getAFUserID(username: any[]): string {
        //var UserName = JSON.parse(username.toString());
        var UserName = JSON.stringify(username);
        var ex = JSON.parse(UserName);
        return ex[0].id;
    }
    
    // Function to retrieve a query string value.
    public static getCLId(clausenumber: any[]): string {
        var CL = JSON.stringify(clausenumber);
        var ex = JSON.parse(CL);
        //console.log("name in helper "+ ex.UserName);
        return ex[0];
    }

    // Method to read the RoutingList Data
    public static getUserNameAD(email: string): PromiseLike<any> {

        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/Web/SiteUsers?$filter=Email eq '${email}'`;
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    resolve(response.d.results);
                }).catch((e) => {
                    resolve(null);
                    toastr.error("Error ocurred: " + e.message, "Method: Helper.getFunctionList()");
                });
        });
    }
}
