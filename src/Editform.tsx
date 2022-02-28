import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card';
import { SPPeoplePicker } from "./peoplepicker";
import $ from 'jquery';
//import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Helper } from './helper'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import "./eProjectNewForm.css"
import {
  CompactPeoplePicker,
  IBasePickerSuggestionsProps,
  IBasePicker,
  ListPeoplePicker,
  NormalPeoplePicker,
  ValidationState
} from 'office-ui-fabric-react/lib/Pickers';
import { DateRangeType } from 'office-ui-fabric-react/lib/Calendar'
import "./"
import {
  Label, Checkbox, PrimaryButton, Selection, SelectionMode, TextField, IPersonaProps, IPersona, DatePicker, DayOfWeek, Dropdown, values, DefaultButton, inputProperties, themeRulesStandardCreator, textAreaProperties, thProperties
} from "office-ui-fabric-react";

import { DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { allResolved } from 'q';
import { string } from 'prop-types';
import { throwStatement } from '@babel/types';
import { EventEmitter } from 'events';
import { parse } from 'path';
 
initializeIcons(/* optional base url */);
export interface IeProjectState {
  data: any;
  EBU: any;
  EPC: any;
}

/*dropdown options */
declare var _spPageContextInfo;
let pstartDate;
let pendDate;
let pactDate;
let CurrentFinPeriod = [];
let CurrentPeriod;
let agreedendate;
let RRDate;
let QIDate;
let EUDRDate;
let FSODate;
let PR2Date;
let PR1Date;
let ChangeDate;



const stackTokens: IStackTokens = { childrenGap: 10 };
export interface NewFormProps {
  data: any;
  EBU: any;
  BU: any;
}



export class eProjectNewForm extends React.Component<{}, any>{
  public EPC; EndUser; EndDestination; DeltaV; ProjectID; ProjectDate; ProjectPeriod; ProjectName; HWIO; SWIO; FFIO; SSIO; module
  public ModuleClasses; ComplexLoops; EQM; PhraseClasses; OP; UP; PR; Dynamos; Display; Cabinet; ILD; FSOLE; FSOPM; FSOHW; EECPM; BudgetChange;
  public ScheduleChange; ProgressDev; UpdateFreq; BudgetDev; Status; AgreedBudget; InternalBudget; Actuals; ETC; Progress; ExpHours; ActualEnd;
  public Remark; EQMClasses; postdeliveryComments
  public NoOfSLS; NodesDelta; NoOfControl
  public newModule; newModuleClasses; postdelivery; hardcopy; hardcopyComments;
  public delivery; deliverycomments; projectComments
  public ITSS; ITSS2; ITSSComments; ITSS2Comments; donglereturn; dongleComments; projectcorrect
  public close; closeComments; resourceskill; resourceskillComments; CSS; CSSComments
  public ProjectType; IndType; IndSubType; Country; WorldArea; ProjPlatform; EEECProjID; EBUU; closeOut

  public DCSAI; DCSAO; DCSDI; DCSDO; SISAI; SISAO; SISDI; SISDO
  public WorkstationNodes; NoofCIOC; NoofCSLS; CEModules; VotingLogic;
  public SysCabinet; MarshallingCabinets; ServerCabinet; PDBCabinet; RiskRegister; PAS;
  constructor(props: IeProjectState) {

    super(props);

    this.EPC = React.createRef();
    this.PDBCabinet = React.createRef();
    this.RiskRegister = React.createRef();
    this.DCSDO = React.createRef();
    this.SysCabinet = React.createRef();
    this.MarshallingCabinets = React.createRef();
    this.ServerCabinet = React.createRef();
    this.PDBCabinet = React.createRef();
    this.PAS = React.createRef();
    this.DCSAI = React.createRef();
    this.DCSAO = React.createRef();
    this.DCSDI = React.createRef();
    this.SISAI = React.createRef();
    this.SISAO = React.createRef();
    this.SISDI = React.createRef();
    this.SISDO = React.createRef();

    this.WorkstationNodes = React.createRef();
    this.NoofCIOC = React.createRef();
    this.NoofCSLS = React.createRef();
    this.CEModules = React.createRef();
    this.VotingLogic = React.createRef();
    this.EndUser = React.createRef();
    this.EndUser = React.createRef();
    this.DeltaV = React.createRef();
    this.ProjectID = React.createRef();
    this.ProjectDate = React.createRef();
    this.ProjectPeriod = React.createRef();
    this.ProjectName = React.createRef();
    this.EndDestination = React.createRef();
    this.SWIO = React.createRef();
    this.HWIO = React.createRef();
    this.FFIO = React.createRef();
    this.SSIO = React.createRef();
    this.closeOut = React.createRef();
    this.module = React.createRef();
    this.newModule = React.createRef();
    this.newModuleClasses = React.createRef();
    this.ModuleClasses = React.createRef();
    this.Remark = React.createRef();
    this.ActualEnd = React.createRef();
    this.ExpHours = React.createRef();
    this.Progress = React.createRef();
    this.ETC = React.createRef();
    this.Actuals = React.createRef();
    this.InternalBudget = React.createRef();
    this.AgreedBudget = React.createRef();
    this.BudgetDev = React.createRef();
    this.UpdateFreq = React.createRef();
    this.ProgressDev = React.createRef();
    this.ScheduleChange = React.createRef();
    this.BudgetChange = React.createRef();
    this.ILD = React.createRef();
    this.Display = React.createRef();
    this.PR = React.createRef();
    this.UP = React.createRef();
    this.OP = React.createRef();
    this.EQM = React.createRef();
    this.EQMClasses = React.createRef();
    this.ComplexLoops = React.createRef();
    this.PhraseClasses = React.createRef();
    this.Dynamos = React.createRef();
    this.Cabinet = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this)
    this.AnalysisArrow = this.AnalysisArrow.bind(this);



    this.AnalysisInfoArrow = this.AnalysisInfoArrow.bind(this);
    this.AnalysisConfigArrow = this.AnalysisConfigArrow.bind(this);
    this.AnalysisTrackArrow = this.AnalysisTrackArrow.bind(this);
    this.AnalysisCloseArrow = this.AnalysisCloseArrow.bind(this);
    this.AnalysisEEEArrow = this.AnalysisEEEArrow.bind(this)
    this.loadsubind = this.loadsubind.bind(this)
    this.handlePeopleChnage = this.handlePeopleChnage.bind(this)
    this.postdata = this.postdata.bind(this);
    this.handleEEECLEChange = this.handleEEECLEChange.bind(this)
    this.handleFSOLEChange = this.handleFSOLEChange.bind(this)
    this.handleFSOPMChange = this.handleFSOPMChange.bind(this)
    this.hardwareLeChange = this.hardwareLeChange.bind(this)

    this.handleDateEvent = this.handleDateEvent.bind(this);
    this.toggleChange = this.handleInputChange.bind(this)
    this.ontextChange = this.ontextChange.bind(this)
    this.getExpectedHours = this.getExpectedHours.bind(this)
    this.NoOfControl = React.createRef();
    this.NoOfSLS = React.createRef();
    this.NodesDelta = React.createRef();
    this.closeComments = React.createRef();
    this.close = React.createRef();
    this.CSS = React.createRef();
    this.CSSComments = React.createRef();
    this.ITSS = React.createRef();
    this.ITSS2 = React.createRef();
    this.ITSS2Comments = React.createRef();
    this.ITSSComments = React.createRef();
    this.dongleComments = React.createRef();
    this.donglereturn = React.createRef();
    this.resourceskill = React.createRef();
    this.resourceskillComments = React.createRef();
    this.close = React.createRef();
    this.closeComments = React.createRef();
    this.postdelivery = React.createRef();
    this.postdeliveryComments = React.createRef();
    this.hardcopy = React.createRef();
    this.hardcopyComments = React.createRef();
    this.delivery = React.createRef();
    this.deliverycomments = React.createRef();
    this.projectcorrect = React.createRef();
    this.projectComments = React.createRef();
    this.Status = React.createRef();
    this.EEECProjID = React.createRef();
    this.ProjPlatform = React.createRef();
    this.Country = React.createRef();
    this.WorldArea = React.createRef();
    this.IndSubType = React.createRef();
    this.IndType = React.createRef();
    this.ProjectType = React.createRef();
    this.EBUU = React.createRef();
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleddl = this.handleddl.bind(this)









    this.state = {
      ISPASOtherRemarkChecked: false,
      ISOtherRemarkChecked: false,
      ISProjectCTOtherChecked: false,
      ISOthPASE: false,
      ISISRemarkChecked: false,
      ISSame: false,
      ISIncrease: false,
      ISDecrease: false,
      ISAdd: false,
      ISOneWorld: false,
      ISMultipleWorld: false,
      IsVisibleSectionMsg: false,
      PEEProjectContractType: "",
      PEEProjectLD: "",
      PEEProjectGP: "",
      PEEEmersonHours: "",
      PEEEEECHours: "",
      PEEBudget: "",
      PEEUtilization: "",
      PEEInvolve: "",
      PEEDuration: "",
      PEEOrgChart: "",
      PEERiskRanking: "",
      PEEFAT: "",
      PEEOverall: "",
      PEELead: "",
      PEEResource: "",
      PEEProjectLoading: "",
      ResourcePlan_Remarks: "",
      ddlRiskTraining : "No",






      ISDev: "No",

      ISIP: "No",
      ISOth: "No",

      ISOdd: "No",
      ISNewProd: "No",
      ISGraphics: "No",
      ISNonPCSD: "No",
      ISUSESIS: "No",
      ISImplement: "No",
      ISMaintain: "No",
      ISRework: "No",
      ISFATReady: "No",
      ISNoBudget: "No",
      ISTimely: "No",
      ISOther: "No",
      ISAgile: "No",
      ISDemo: "No",
      ISCust: "No",
      ISWireless: "No",
      ISOTS: "No",
      ISTechWriter: "No",
      ISDocControl: "No",
      ISInterface: "No",
      ISOtherBU: "No",
      ISPASCAB: "No",
      ISOTHERSISINT: "No",
      ISSISPASINT: "No",
      ISSISBMS: "No",
      ISSISFGS: "No",
      ISSISESD: "No",
      ISOtherPAS: "No",
      ISMigration : "No",
      ISPASThird: "No",
      ISPASBatch: "No",
      ISPASComplex: "No",
      ISPASCustom: "No",
      ISSISCAB: "No",


      ISPASBase: "No",
      ISSAT: "No",
      ISFAT: "No",
      ISExecute: "No",
      ISFEED: "No",


      ISMultiAreaParallal: "No",
      ISMultiAreaPhased: "No",
      ISMultiEPC: "No",
      ISMultiEngg: "No",
      ExecutionStrategyandModelExecution: "",
      ExecutionStrategyandModelFSO: "",
      FSOPMLeadsOpen: "",

      FSOPMLeadsTechnical: "",
      FSOPMLeadsOther: "",
      FSOPMLeadsEEECExp: "",





      OverallRisk: 0,
      TotalRiskIndex: 0,
      FSO_Success: 0,
      Non_Std: 0,
      EEEInvScope: 0,
      EEEScope: 2,
      RiskIndex_ProjectCT: 0,
      RiskIndex_ProjectLD: 0,
      RiskIndex_ProjectGP: 0,
      RiskIndex_ExecutionFSO: 0,
      RiskIndex_Execution: 0,
      RiskIndex_ExecutionMulti: 0,
      RiskIndex_EmersonHours: 0,
      RiskIndex_EEECHours: 0,
      RiskIndex_Budget: 0,
      RiskIndex_Utilization: 0,
      RiskIndex_Duration: 0,
      RiskIndex_EEECInvolvement: 0,
      RiskIndex_ProjectChart: 0,
      RiskIndex_EEECScope: 0,
      RiskIndex_EEECInvolvementScope: 0,
      RiskIndex_FAT: 0,
      RiskIndex_OverallPM: 0,
      RiskIndex_OverallRisk: 0,
      RiskIndex_OverallLead: 0,
      RiskIndex_FSOLead: 0,
      RiskIndex_ResourceSkill: 0,
      RiskIndex_FSOSuccess: 0,
      RiskIndex_NonStandard: 0,
      RiskIndex_ResourcePlan: 0,
      PMLastReviewComments : "",
      WALastReviewComments : "",
      

      FSO_OPEN: 0,
      FSO_Tech: 0,
      FSO_Oth: 0,
      FSO_EEC: 0,
      FSO: 0,
      WA: 0,
      FSO_WA: 0,


      restdata: [],
      projectDetails: [],
      deltav: [],
      period: [],
      worldarea: [],
      EBU: [],
      platform: [],
      industry: [],
      subindustry: [],
      country: [],
      finyear: [],
      showResults: true,
      showButton: "No",
      year: 0,
      unit: "",
      prjpltfrmunit: "",
      Isdel: null,
      counter: 0,
      EEECID: "",
      CountryCode: "OTH",
      qualitycounter: 900,
      oldcounter: 0,
      title: "",
      ProjEndDate: new Date(),
      ProjRequestEndDate: new Date(),
      AgreedEndDate: new Date(),
      currentDate: new Date(),
      EEECPM: null,
      EEECLE: null,
      FSOLE: null,
      FSOPM: null,
      FinPeriod: "",
      ExpectedHoursPerWeek: 0,
      today: new Date(),






      // Edit Data map

      EditEmerBuisUnit: null,
      FHX: null,
      EditFHXComments: null,
      EditEndUser: null,
      EditEPC: null,
      EditDeltaVVersion: null,
      Edit: null,
      EditTypeOfIndustry: null,
      EditBudgetDeviation: null,
      EditUpdateFrequency: null,
      EditProgressDeviation: null,
      EditScheduleChange: null,
      EditBudgetChange: null,
      EditEEECPM: null,
      EditEEECLe: null,
      EditFSOLe: null,
      EditFSOPm: null,
      EditEEECPMId: null,
      EditEECLeId: null,
      EditFSOMPmId: null,
      EditFSOLeId: null,
      EditHardwareLE: null,
      EditNoOfSLS: null,
      EditNodesOnDelta: null,
      EditCabinetJBS: null,
      EditILD: null,
      EditPR: null,
      EditDynamos: null,
      EditDisplays: null,
      EditPhaseClasses: null,
      EditOP: null,
      EditUP: null,
      EditComplexClasses: null,
      EditEQMClasses: null,
      EditEQM: null,
      EditSIS: null,
      EditModules: null,
      EditModulesClasses: null,
      EditHWIO: null,
      EditSWIO: null,
      EditFWIO: null,
      EditProjectStartDate: null,
      EditProjectStartPeriod: null,
      EditAgreedEndDate: null,
      EditActualEndDate: null,
      EditProjectID: null,
      EditEEECProjID: null,
      EditProjectName: null,
      EditStatus: null,
      EditSpecialDesign: null,
      EditSafetySystem: null,
      EditProjectPlatform: null,
      EditIOType: null,
      EditIOSeries: null,
      EditAgreedBudget: null,
      EditInternalBudget: null,
      EditActuals: null,
      EditETC: null,
      EditProgress: null,
      EditExpectedHours: null,
      EditActualEnd: null,
      EditRemark: null,
      EditCountry: null,
      EditWorldArea: null,
      EditIndustrySubtype: null,
      EditComplexLoops: null,
      EditSSIO: null,
      EditRP: null,
      EditDeliveryComplete: null,
      EditDeliveryCompleteComments: null,
      EditCSSFormReceived: null,
      EditCSSFormReceivedComments: null,
      EditProjectCloseMeeting: null,
      EditProjectCloseMeetingComments: null,
      EditResourceSkillUpdated: null,
      EditResourceSkillUpdatedComments: null,
      EditPerfomarmanceUpdated: null,
      EditPerfomarmanceUpdatedComments: null,
      EditPMITSS: null,
      EditPMITSSComments: null,
      EditHardcopy: null,
      EditHardcopyComments: null,
      EditDatacorrect: null,
      EditDatacorrectComments: null,
      EditPostdelivery: null,
      EditPostdeliveryComments: null,
      EditCloseOut: null,
      //EditCountry : null,
      EditCountryID: null,
      //EditWorldArea : null, 
      DCSAI: null, DCSAO: null, DCSDI: null, DCSDO: null, SISAI: null, SISAO: null, SISDI: null, SISDO: null,
      WorkstationNodes: null, NoofCIOC: null, NoofCSLS: null, CEModules: null, VotingLogic: null,
      SysCabinet: null, MarshallingCabinets: null, ServerCabinet: null, PDBCabinet: null, RiskRegister: null, PAS: null,







    }
  }


  public async CurrentDigestValue(siteurl){

     return new Promise((resolve,reject)=>{
      let ExistsInFolder;

      const restUrl = siteurl + "/_api/contextinfo";
  
      $.ajax({
  
          url: restUrl,
  
          type: "POST",
  
          async: false,
  
          headers: {
  
              "accept": "application/json;odata=verbose",
  
              "content-Type": "application/json;odata=verbose"
  
          },
  
          success: function (data) {
  
              ExistsInFolder = data.d.GetContextWebInformation.FormDigestValue;
              resolve(ExistsInFolder)
  
          },
  
          error: function (error) {
  
              console.log(JSON.stringify(error));
              reject(ExistsInFolder)
  
          }
  
      });
  
     
     })
   
  }

  public _onParseAgreedEndDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.EditAgreedEndDateString;
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };


  public _onParseActualEndDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.EditActualEndDate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };
  public _EUDRDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.EUDRDate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };
  public _FSODateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.FSODate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };
  public _PR2DateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.PR2Date
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };
  public _PR1DateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.PR1Date
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };
  public _ChangeDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.ChangeDate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };
  public _QIDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.QIDate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };
  public _RRDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.RRDate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };

  public _onParseProjectEndDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.EditProjectEndDate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };

  public _onParseProjectStartDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.EditProjectStartDate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };


  public handleddl(e) {
    if (this.state.EditStatus == "Delivered") {
      var doc = document.getElementById("ddlStatus")
      doc.innerHTML = " <option>WIP</option><option>On Hold</option><option>Shelved</option><option selected>Delivered</option>"
    } else
      if (this.state.EditStatus == "Closed") {
        var doc = document.getElementById("ddlStatus")
        doc.innerHTML = " <option>WIP</option><option>On Hold</option><option>Shelved</option><option>Delivered</option><option selected>Closed</option>"
        this.setState({
          showButton: "",
        })

      }
      else {
        var doc = document.getElementById("ddlStatus")
        doc.innerHTML = " <option>WIP</option><option>On Hold</option><option>Shelved</option>"
      }

  }


  public handleTextChange(e) {

    if (e.target.name == "PMLastReviewComments") {
      this.setState({
        PMLastReviewComments: e.target.value
      })
    }
    if (e.target.name == "WALastReviewComments") {
      this.setState({
        WALastReviewComments: e.target.value
      })
    }
    if (e.target.name == "ProjectLD_Remarks") {
      this.setState({
        ProjectLD_Remarks: e.target.value
      })
    }
    if (e.target.name == "ProjectGP_Remarks") {
      this.setState({
        ProjectGP_Remarks: e.target.value
      })
    }
    if (e.target.name == "Strategy_Remarks") {
      this.setState({
        Strategy_Remarks: e.target.value
      })
    }
    if (e.target.name == "Emerson_Remarks") {
      this.setState({
        Emerson_Remarks: e.target.value
      })
    }
    if (e.target.name == "EEECHours_Remarks") {
      this.setState({
        EEECHours_Remarks: e.target.value
      })
    }
    if (e.target.name == "Budget_Remarks") {
      this.setState({
        Budget_Remarks: e.target.value
      })
    }
    if (e.target.name == "Utilization_Remarks") {
      this.setState({
        Utilization_Remarks: e.target.value
      })
    }
    if (e.target.name == "Duration_Remarks") {
      this.setState({
        Duration_Remarks: e.target.value
      })
    }
    if (e.target.name == "EEECInvolve_Remarks") {
      this.setState({
        EEECInvolve_Remarks: e.target.value
      })
    }
    if (e.target.name == "ProjectOrg_Remarks") {
      this.setState({
        ProjectOrg_Remarks: e.target.value
      })
    }
    if (e.target.name == "OverallRisk_Remarks") {
      this.setState({
        OverallRisk_Remarks: e.target.value
      })
    }
    if (e.target.name == "EEECScope_Remarks") {
      this.setState({
        EEECScope_Remarks: e.target.value
      })
    }
    if (e.target.name == "EECInvolvScope_Remarks") {
      this.setState({
        EECInvolvScope_Remarks: e.target.value
      })
    }
    if (e.target.name == "FSOPM_Remarks") {
      this.setState({
        FSOPM_Remarks: e.target.value
      })
    }
    if (e.target.name == "FSOSuccess_Remarks") {
      this.setState({
        FSOSuccess_Remarks: e.target.value
      })
    }
    if (e.target.name == "NonStd_Remarks") {
      this.setState({
        NonStd_Remarks: e.target.value
      })
    }
    if (e.target.name == "FAT_Remarks") {
      this.setState({
        FAT_Remarks: e.target.value
      })
    }
    if (e.target.name == "OverallPM_Remarks") {
      this.setState({
        OverallPM_Remarks: e.target.value
      })
    }
    if (e.target.name == "LeadRemarks") {
      this.setState({
        LeadRemarks: e.target.value
      })
    }
    if (e.target.name == "ResourceSkill_Remarks") {
      this.setState({
        ResourceSkill_Remarks: e.target.value
      })
    }

    if (e.target.name == "ResourcePlan_Remarks") {
      this.setState({
        ResourcePlan_Remarks: e.target.value
      })
    }

    if (e.target.name == "OverallRiskRanking_Remarks") {
      this.setState({
        OverallRiskRanking_Remarks: e.target.value
      })
    }



    if (e.target.id == "DCSAI") {
      this.setState({
        EditDCSAI: e.target.value
      })
    }
    if (e.target.id == "DCSAO") {
      this.setState({
        EditDCSAO: e.target.value
      })
    }

    if (e.target.id == "FHXComments") {
      this.setState({
        EditFHXComments: e.target.value
      })
    }

    if (e.target.id == "DCSDI") {
      this.setState({
        EditDCSDI: e.target.value
      })
    }
    if (e.target.id == "DCSDO") {
      this.setState({
        EditDCSDO: e.target.value
      })
    }
    if (e.target.id == "SISAI") {
      this.setState({
        EditSISAI: e.target.value
      })
    }
    if (e.target.id == "SISAO") {
      this.setState({
        EditSISAO: e.target.value
      })
    }
    if (e.target.id == "SISDO") {
      this.setState({
        EditSISDO: e.target.value
      })
    }
    if (e.target.id == "SISDI") {
      this.setState({
        EditSISDI: e.target.value
      })
    }
    if (e.target.id == "Workstation") {
      this.setState({
        EditWorkstationNodes: e.target.value
      })
    }
    if (e.target.id == "CIO") {
      this.setState({
        EditNoofCIOC: e.target.value
      })
    }
    if (e.target.id == "CSLS") {
      this.setState({
        EditNoofCSLS: e.target.value
      })
    }
    if (e.target.id == "VL") {
      this.setState({
        EditVotingLogic: e.target.value
      })
    }
    if (e.target.id == "SysCabinet") {
      this.setState({
        EditSysCabinet: e.target.value
      })
    }
    if (e.target.id == "Server") {
      this.setState({
        EditServerCabinet: e.target.value
      })
    }
    if (e.target.id == "Marshalling") {
      this.setState({
        EditMarshallingCabinets: e.target.value
      })
    }




    if (e.target.id == "addExpHours") {
      this.setState({
        EditExpectedHours: e.target.value
      })
    }
    if (e.target.id == "addRemark") {
      this.setState({
        EditRemark: e.target.value
      })
    }

    if (e.target.id == "addRemark") {
      this.setState({
        EditRemark: e.target.value
      })
    }
    if (e.target.id == "addEPC") {
      this.setState({
        EPC: e.target.value
      })
    }
    if (e.target.id == "addEnduser") {
      this.setState({
        EditEndUser: e.target.value
      })
    }
    if (e.target.id == "CloseComments") {
      this.setState({
        EditProjectCloseMeetingComments: e.target.value
      })
    }
    if (e.target.id == "CloseOutNotes") {
      this.setState({
        EditCloseOut: e.target.value
      })
    }
    if (e.target.id == "addEndDestination") {
      this.setState({
        EditEndDestination: e.target.value
      })
    }
    if (e.target.id == "addProjectName") {
      this.setState({
        EditProjectName: e.target.value
      })
    }
    if (e.target.id == "addProjectID") {
      this.setState({
        EditProjectID: e.target.value
      })
    }
    if (e.target.id == "addHWIO") {
      this.setState({
        EditHWIO: e.target.value
      })
    }
    if (e.target.id == "addSWIO") {
      this.setState({
        EditSWIO: e.target.value
      })
    }
    if (e.target.id == "addFFIO") {
      this.setState({
        EditFWIO: e.target.value
      })
    }
    if (e.target.id == "addSISIO") {
      this.setState({
        EditSSIO: e.target.value
      })
    }
    if (e.target.id == "addModuleClasses") {
      this.setState({
        EditModulesClasses: e.target.value
      })
    }
    if (e.target.id == "addModules") {
      this.setState({
        EditModules: e.target.value
      })
    }
    if (e.target.id == "addComplexLoops") {
      this.setState({
        EditComplexLoops: e.target.value
      })
    }
    if (e.target.id == "addEQMClasses") {
      this.setState({
        EditEQMClasses: e.target.value
      })
    }
    if (e.target.id == "addEQM") {
      this.setState({
        EditEQM: e.target.value
      })
    }
    if (e.target.id == "addPhraseClasses") {
      this.setState({
        EditPhaseClasses: e.target.value
      })
    }
    if (e.target.id == "addOP") {
      this.setState({
        EditOP: e.target.value
      })
    }
    if (e.target.id == "addUP") {
      this.setState({
        EditUP: e.target.value
      })
    }
    if (e.target.id == "addPR") {
      this.setState({
        EditPR: e.target.value
      })
    }
    if (e.target.id == "addDynamos") {
      this.setState({
        EditDynamos: e.target.value
      })
    }
    if (e.target.id == "addDisplay") {
      this.setState({
        EditDisplays: e.target.value
      })
    }
    if (e.target.id == "addCabinetJBS") {
      this.setState({
        EditCabinetJBS: e.target.value
      })
    }
    if (e.target.id == "addILD") {
      this.setState({
        EditILD: e.target.value
      })
    }

    if (e.target.id == "addControl") {
      this.setState({
        EditNoOfControl: e.target.value
      })
    }
    if (e.target.id == "NoOfSLS") {
      this.setState({
        EditNoOfSLS: e.target.value
      })
    }
    if (e.target.id == "NodesOnDelta") {
      this.setState({
        EditNodesOnDelta: e.target.value
      })
    }
    if (e.target.id == "addBudgetChange") {
      this.setState({
        EditBudgetChange: e.target.value
      })
    }
    if (e.target.id == "addScheduleChange") {
      this.setState({
        EditScheduleChange: e.target.value
      })
    }
    if (e.target.id == "addProgressDeviation") {
      this.setState({
        EditProgressDeviation: e.target.value
      })
    }
    if (e.target.id == "addUpdateFrequenct") {
      this.setState({
        EditUpdateFrequency: e.target.value
      })
    }
    if (e.target.id == "addBudgetDeviation") {
      this.setState({
        EditBudgetDeviation: e.target.value
      })
    }
    if (e.target.id == "addAgreedBudget") {
      var budget = e.target.value;
      var pervalue = (budget / 100) * 2
      this.setState({
        EditAgreedBudget: e.target.value,
        EditBudgetDeviation: pervalue
      })
    }
    if (e.target.id == "addInternalBudget") {
      this.setState({
        EditInternalBudget: e.target.value
      })
    }
    if (e.target.id == "addActuals") {
      this.setState({
        EditActuals: e.target.value
      })
    }
    if (e.target.id == "addETC") {
      this.setState({
        EditExpectedHours: e.target.value
      })
    }
    if (e.target.id == "CloseOutNotes") {
      this.setState({
        EditCloseOut: e.target.value
      })
    }




    if (e.target.id == "addProgress") {
      this.setState({
        EditProgress: e.target.value
      })
    }
    if (e.target.id == "addActualEnd") {
      this.setState({
        EditActualEnd: e.target.value
      })
    }
    if (e.target.id == "ITSSComments") {
      this.setState({
        EditPMITSSComments: e.target.value
      })
    }
    if (e.target.id == "ITSS2Comments") {
      this.setState({
        ProjectHWComments: e.target.value
      })
    }
    if (e.target.id == "DongleComments") {
      this.setState({
        EditDongleReturnedComments: e.target.value
      })
    }
    if (e.target.id == "ProjectComments") {
      this.setState({
        EditDatacorrectComments: e.target.value
      })
    }
    if (e.target.id == "PostDeliveryComments") {
      this.setState({
        EditPostdeliveryComments: e.target.value
      })
    }
    if (e.target.id == "CSSComments") {
      this.setState({
        EditCSSFormReceivedComments: e.target.value
      })
    }
    if (e.target.id == "ResourceSkillComments") {
      this.setState({
        EditResourceSkillUpdatedComments: e.target.value
      })
    }


    if (e.target.id == "DeliveryComments") {
      this.setState({
        EditDeliveryCompleteComments: e.target.value
      })
    }


    if (e.target.id == "HardCopyComments") {
      this.setState({
        EditProjectFolderComments: e.target.value
      })
    }

    if (e.target.id == "ResourceSkillUpdatedComments") {
      this.setState({
        EditResourceSkillUpdatedComments: e.target.value
      })
    }



  }

  public getExpectedHours(e) {
    this.setState({
      EditETC: e.target.value
    })
    //get ETC value
    var valueETC = parseInt(this.ETC.current.value);
    //get Agreed end date 
    let valueAgreedEndDate = new Date(Date.parse(this.state.AgreedEndDate));

    //get todays date as reference
    var refDate = new Date();

    //get value 1st jan
    var oneJan = new Date(refDate.getFullYear(), 0, 1);

    //get user entered agreed end date week no
    var agreedEndDtWeekNo = Math.ceil((((valueAgreedEndDate.valueOf() - oneJan.valueOf()) / 86400000) + oneJan.getDay()) / 7);

    //get todays date;
    var todaysDt = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate());
    //get todays date week no
    var todaysWeekNo = Math.ceil((((todaysDt.getTime() - oneJan.getTime()) / 86400000) + oneJan.getDay()) / 7);
    if (todaysWeekNo == NaN) {
      todaysWeekNo = 2;
    }
    //get the no of remaining weeks
    var diffDateValue = agreedEndDtWeekNo - todaysWeekNo;
    if (diffDateValue == 0) {
      var answer = 0;
    } else {
      var answer = valueETC / diffDateValue;
    }




    answer = Math.abs(answer)
    console.log(answer)
    this.setState(
      {
        ExpectedHoursPerWeek: answer,
        EditExpectedHours: answer,
      }
    )






  }

  public ontextChange(event) {
    if (event.target.id = "addEPC")
      this.setState({ EPC: event.target.value })













  }
  public loadprojectlist() {

    let initialProj = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items?$top=4500`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          initialProj = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            projectDetails: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });

  }

  public EBU() {
    let initialProj = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('EmersonBusinessUnit')/Items?$top=4500`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          initialProj = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            EBU: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }


  public loaddeltavversion() {
    let deltavversion = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('DeltaV%20Version')/Items?$top=4500`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          deltavversion = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            period: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }


  public validateData = (e) => {

    if ((this.state.ISOthPASE == true) && (!this.state.EECInvolvScope_Remarks)) {
      alert("Please fill all mandatory fields")
      e.preventDefault()
      return false;

    }
    if ((this.state.ISISRemarkChecked == true) && (!this.state.EECInvolvScope_Remarks)) {
      alert("Please fill all mandatory fields")
      e.preventDefault()
      return false;

    }



    if ((this.state.ISPASOtherRemarkChecked == true) && (!this.state.EECInvolvScope_Remarks)) {
      alert("Please fill all mandatory fields")
      e.preventDefault()
      return false;

    } else if ((this.state.ISOtherRemarkChecked == true) && (!this.state.NonStd_Remarks)) {
      alert("Please fill all mandatory fields")
      e.preventDefault()
      return false;

    } if ((this.state.ISProjectCTOtherChecked == true) && (!this.state.ProjectCT_Remarks)) {
      alert("Please fill all mandatory fields")
      e.preventDefault()
      return false;
    } else {
      this.postdata(e)
    }
  }

  public loadperiod() {
    let perioddetails = []
    debugger;
    let mySet = new Set();
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Period')/Items?$top=4500`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          perioddetails = response.d.results;
          var arr = Object.values(response.d.results);

          this.setState({
            period: arr,


          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });


  }


  public hardwareLeChange = (name) => (value: any) => {

    var EEECPM = value;
    var EEEEE = Helper.getUserID(value)
    if (EEEEE != 0 || EEEEE != null) {

      this.setState(
        {
          EditEEECLeId: EEEEE
        }
      )

    }
  }

  public loadFY() {
    // get current FY 

    var year = (new Date()).getFullYear();
    var shortyear = year.toString().substring(2); // 19
    var today = new Date();
    var currmonth = today.getMonth();
    if (currmonth >= 8) {
      shortyear = shortyear + 1;
      this.setState({
        year: shortyear
      })
    } else {
      this.setState({
        year: shortyear
      })
    }


    let deltavversion = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('DeltaV%20Version')/Items?$top=4500`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          deltavversion = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            deltav: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }

  public loadworldarea(name) {
    let worledarea = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Country')/Items?$filter=CountryCode eq '` + name + `'`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          worledarea = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            worldarea: arr,
          });
        }).then(

        ).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });

  }

  public loadPlatform() {
    let deltavversion = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Project%20Platform')/Items?$top=4500`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          deltavversion = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            platform: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }
  public loadindustry() {

    let initialProj = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Type%20of%20Industry')/Items`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          initialProj = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            industry: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });

  }

  public getcurrentcsergroup() {
    debugger;
    var url = _spPageContextInfo.webAbsoluteUrl + '/_api/web/currentuser/groups'
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('World%20Area')/Items`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(url, null, null, null)
        .then((response) => {
          var group = response.d.results;
          var arr;
          for (let i in response.d.results) {
            console.log(response.d.results[i].Title)
            if (response.d.results[i].Title == "QualityTeam") {
              this.setState({
                showResults: false,
                opacity: false,
                Group: "Quality"
              });
            }
          }



        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }



  public loadAllData(param) {
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items?$filter=EEECProjID eq '` + param + `'`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          //initialProj =response.d.results;
          var arr = Object.values(response.d.results);
          console.log(arr)

          console.log(response.d.results[0].Emerson_x0020_Business_x0020_Uni);
          console.log(response.d.results[0].DeltaVVersion);
          console.log(response.d.results[0].ProjectType);
          console.log(response.d.results[0].Country);
          console.log(response.d.results[0].WorldArea);
          console.log(response.d.results[0].IndustrySubtype);
          console.log(response.d.results[0].TypeOfIndustry);
          console.log(response.d.results[0].AgreedEndDate)

          if (response.d.results[0].ActualEndDate === null || response.d.results[0].ActualEndDate == 'undefined') {
            this.setState({
              EditActualEndDate: null,
            })
          } else {
            this.setState({

              EditActualEndDate: Helper.getUTCDate(new Date(response.d.results[0].ActualEndDate)),
            })

          }



          if (response.d.results[0].EndUserDesign === null || response.d.results[0].EndUserDesign == 'undefined') {
            this.setState({
              EUDRDate: null,
            })
          } else {
            this.setState({

              EUDRDate: Helper.getUTCDate(new Date(response.d.results[0].EndUserDesign)),
            })

          }

          if (response.d.results[0].ProjectReviewCallswithFSO === null || response.d.results[0].ProjectReviewCallswithFSO == 'undefined') {
            this.setState({
              FSODate: null,
            })
          } else {
            this.setState({

              FSODate: Helper.getUTCDate(new Date(response.d.results[0].ProjectReviewCallswithFSO)),
            })

          }

          if (response.d.results[0].ProductivityReview === null || response.d.results[0].ProductivityReview == 'undefined') {
            this.setState({
              PR1Date: null,
            })
          } else {
            this.setState({

              PR1Date: Helper.getUTCDate(new Date(response.d.results[0].ProductivityReview)),
            })

          }

          if (response.d.results[0].ProductivityReview2 === null || response.d.results[0].ProductivityReview2 == 'undefined') {
            this.setState({
              PR2Date: null,
            })
          } else {
            this.setState({

              PR2Date: Helper.getUTCDate(new Date(response.d.results[0].ProductivityReview2)),
            })

          }

          if (response.d.results[0].ChangeManagement === null || response.d.results[0].ChangeManagement == 'undefined') {
            this.setState({
              ChangeDate: null,
            })
          } else {
            this.setState({

              ChangeDate: Helper.getUTCDate(new Date(response.d.results[0].ChangeManagement)),
            })

          }
          if (response.d.results[0].PMLastReview === null || response.d.results[0].PMLastReview == 'undefined') {
            this.setState({
              PMLastReview: null,
            })
          } else {
            this.setState({

              PMLastReview: Helper.getUTCDate(new Date(response.d.results[0].PMLastReview)),
            })

          }

          if (response.d.results[0].WALastReview === null || response.d.results[0].WALastReview == 'undefined') {
            this.setState({
              WALastReview: null,
            })
          } else {
            this.setState({

              WALastReview: Helper.getUTCDate(new Date(response.d.results[0].WALastReview)),
            })

          }



          if (response.d.results[0].QIDocumentsUpdated === null || response.d.results[0].QIDocumentsUpdated == 'undefined') {
            this.setState({
              QIDate: null,
            })
          } else {
            this.setState({

              QIDate: Helper.getUTCDate(new Date(response.d.results[0].QIDocumentsUpdated)),
            })

          }

          if (response.d.results[0].ActualEndDate === null || response.d.results[0].ActualEndDate == 'undefined') {
            this.setState({
              EditActualEndDate: null,
            })
          } else {
            this.setState({

              EditActualEndDate: Helper.getUTCDate(new Date(response.d.results[0].ActualEndDate)),
            })

          }

          if (response.d.results[0].RiskRegister === null || response.d.results[0].RiskRegister == 'undefined') {
            this.setState({
              RRDate: null,
            })
          } else {
            this.setState({

              RRDate: Helper.getUTCDate(new Date(response.d.results[0].RiskRegister)),
            })

          }




          this.setState({

            NonStd_Remarks: response.d.results[0].NonStandardRequirementsRemarks,
            Non_Std: (response.d.results[0].NonStandardRequirementsRiskIndex) ? response.d.results[0].NonStandardRequirementsRiskIndex : 0,
            FSOSuccess_Remarks: response.d.results[0].FSOSuccessRemarks,
            FSO_Success: (response.d.results[0].FSOSuccessRiskIndex) ? response.d.results[0].FSOSuccessRiskIndex : 0,
            FSOPM_Remarks: response.d.results[0].FSORemarks,
            FSOTotalRiskIndex: (response.d.results[0].FSORiskIndex) ? response.d.results[0].FSORiskIndex : 0,
            LeadRemarks: response.d.results[0].OverallLeadRemarks,
            EEEScope : response.d.results[0].EEECScopeRiskIndex,
            RiskIndex_OverallLead: (response.d.results[0].OverallLeadRiskIndex) ? response.d.results[0].OverallLeadRiskIndex : 0,
            OverallPM_Remarks: response.d.results[0].OverallPMRemarks,
            RiskIndex_OverallPM: (response.d.results[0].OverallPMRiskIndex) ? response.d.results[0].OverallPMRiskIndex : 0,
            FAT_Remarks: response.d.results[0].FATEngagementRemarks,
            RiskIndex_FAT: (response.d.results[0].FATEngagementRiskIndex) ? response.d.results[0].FATEngagementRiskIndex : 0,
            EECInvolvScope_Remarks: response.d.results[0].EEECInvolvementRemarks,
            EEEInvScope: (response.d.results[0].EEECInvolvementRiskIndex) ? response.d.results[0].EEECInvolvementRiskIndex : 0,
            EEECScope_Remarks: response.d.results[0].EEECScopeRemarks,
            EEECScopeRiskIndex: (response.d.results[0].EEECScopeRiskIndex) ? response.d.results[0].EEECScopeRiskIndex : 0,
            // // TotalRiskIndex: response.d.results[0].OverallRiskRankingRemarks,
            // OverallRiskRankingRiskIndex: response.d.results[0].OverallRiskRankingRiskIndex,

            ProjectOrg_Remarks: response.d.results[0].ProjectOrganisationChartRemarks,
            RiskIndex_ProjectChart: (response.d.results[0].ProjectOrganisationChartRiskInde) ? response.d.results[0].ProjectOrganisationChartRiskInde : 0,

            EEECInvolve_Remarks: response.d.results[0].TimeofEEECInvolvementRemarks,
            RiskIndex_EEECInvolvement: (response.d.results[0].TimeofEEECInvolvementRiskIndex) ? response.d.results[0].TimeofEEECInvolvementRiskIndex : 0,
            Duration_Remarks: response.d.results[0].ExecutionDurationRemarks,
            RiskIndex_Duration: (response.d.results[0].ExecutionDurationRiskIndex) ? response.d.results[0].ExecutionDurationRiskIndex : 0,
            Utilization_Remarks: response.d.results[0].EEECUtilizationRemarks,
            RiskIndex_Utilization: (response.d.results[0].EEECUtilizationRiskIndex) ? response.d.results[0].EEECUtilizationRiskIndex : 0,
            Budget_Remarks: response.d.results[0].AdequacyofBudgetAndScheduleRemar,
            RiskIndex_Budget: (response.d.results[0].AdequacyofBudgetAndScheduleRiskI) ? response.d.results[0].AdequacyofBudgetAndScheduleRiskI : 0,

            EEECHours_Remarks: response.d.results[0].EEECBudgetedEngineeringhoursRema,
            RiskIndex_EEECHours: (response.d.results[0].EEECBudgetedEngineeringhoursRisk) ? response.d.results[0].EEECBudgetedEngineeringhoursRisk : 0,
            Emerson_Remarks: response.d.results[0].Total_x0020_EmersonBudgetedEngin0,
            RiskIndex_EmersonHours: (response.d.results[0].Total_x0020_EmersonBudgetedEngin) ? response.d.results[0].Total_x0020_EmersonBudgetedEngin : 0,

            Strategy_Remarks: response.d.results[0].ExecutionStrategyandModelRemarks,
            TotalRiskIndexES: (response.d.results[0].ExecutionStrategyandModelRiskInd) ? response.d.results[0].ExecutionStrategyandModelRiskInd : 0,
            ProjectGP_Remarks: response.d.results[0].ProjectGPRemarks,
            RiskIndex_ProjectGP: (response.d.results[0].ProjectGPRiskIndex) ? response.d.results[0].ProjectGPRiskIndex : 0,
            ProjectLD_Remarks: (response.d.results[0].ProjectLDRemarks),
            RiskIndex_ProjectLD: (response.d.results[0].ProjectLDRiskIndex) ? response.d.results[0].ProjectLDRiskIndex : 0,
            PMLastReviewComments :  (response.d.results[0].PMLastReviewComments),
            WALastReviewComments : (response.d.results[0].WALastReviewComments),
            ProjectCT_Remarks: response.d.results[0].ProjectContractTypeRemarks,
            RiskIndex_ProjectCT: (response.d.results[0].ProjectContractTypeRiskIndex) ? response.d.results[0].ProjectContractTypeRiskIndex : 0,
            ResourceSkill_Remarks: (response.d.results[0].ResourceSkillsetRemarks),
            RiskIndex_ResourceSkill: (response.d.results[0].ResourceSkillsetRiskIndex) ? response.d.results[0].ResourceSkillsetRiskIndex : 0,
            ResourcePlan_Remarks: response.d.results[0].ResourcePlanRemarks,
            RiskIndex_ResourcePlan: (response.d.results[0].ResourcePlanRiskIndex) ? response.d.results[0].ResourcePlanRiskIndex : 0,


            PEEProjectContractType: response.d.results[0].ProjectContractType,
            PEEProjectLD: response.d.results[0].ProjectLD,
            PEEProjectGP: response.d.results[0].ProjectGP,
            PEEEmersonHours: response.d.results[0].EmersonHours,
            PEEEEECHours: response.d.results[0].EEECHours,
            PEEBudget: response.d.results[0].AdequacyofBudgetSchedule,
            PEEUtilization: response.d.results[0].EEECUtilization,
            PEEDuration: response.d.results[0].ExecutionDuration,
            PEEInvolve: response.d.results[0].TimeofEEECInvolvement,
            PEEOrgChart: response.d.results[0].ProjectOrganisationChart,
            PEERiskRanking: response.d.results[0].Overall_x0020_Risk_x0020_Ranking,
            OverallRisk: response.d.results[0].OverallRiskRankingRiskIndex,
            OverallRiskRanking_Remarks: response.d.results[0].OverallRiskRankingRemarks,
            PEEFAT: response.d.results[0].FAT_x0020_Engagement,
            PEEOverall: response.d.results[0].OverallPM,
            PEELead: response.d.results[0].OverallLead,
            PEEResource: response.d.results[0].Resource_x0020_Skillset,
            PEEProjectLoading: response.d.results[0].ResourcePlanProjectLoadingChart,


            ISMultiEngg: response.d.results[0].ISMultiEngg,
            ISMultiEnggChecked: (response.d.results[0].ISMultiEngg == "Yes"),
            ISMultiEPC: response.d.results[0].ISMultiEPC,
            ISMultiEPCChecked: (response.d.results[0].ISMultiEPC == "Yes"),
            ISMultiAreaPhased: response.d.results[0].ISMultiAreaPhased,
            ISMultiAreaPhasedChecked: (response.d.results[0].ISMultiAreaPhased == "Yes"),
            ISMultiAreaParallal: response.d.results[0].ISMultiAreaParallal,
            ISMultiAreaParallalChecked: (response.d.results[0].ISMultiAreaParallal == "Yes"),
            ISAdditional: response.d.results[0].ISAdditional,
            ISAdditionalChecked: (response.d.results[0].ISAdditional == "Yes"),
            ISExecute: response.d.results[0].ISExecute,
            ISExecuteChecked: (response.d.results[0].ISExecute == "Yes"),
            ISFAT: response.d.results[0].ISFAT,
            ISFATChecked: (response.d.results[0].ISFAT == "Yes"),
            ISSAT: response.d.results[0].ISSAT,
            ISSATChecked: (response.d.results[0].ISSAT == "Yes"),
            ISPASBase: response.d.results[0].ISPASBase,
            ISPASBaseChecked: (response.d.results[0].ISPASBase == "Yes"),
            ISFEED: response.d.results[0].ISFEED,
            ISFEEDChecked: (response.d.results[0].ISFEED == "Yes"),

            ISSISCAB: response.d.results[0].ISSISCAB,
            ISSISCABChecked: (response.d.results[0].ISSISCAB == "Yes"),
            ISPASCustom: response.d.results[0].ISPASCustom,
            ISPASCustomChecked: (response.d.results[0].ISPASCustom == "Yes"),
            ISPASComplex: response.d.results[0].ISPASComplex,
            ISPASComplexChecked: (response.d.results[0].ISPASComplex == "Yes"),
            ISPASBatch: response.d.results[0].ISPASBatch,
            ISPASBatchChecked: (response.d.results[0].ISPASBatch == "Yes"),
            ISPASThird: response.d.results[0].ISPASThird,
            ISPASThirdChecked: (response.d.results[0].ISPASThird == "Yes"),
            IsVisibleSectionMsg: (response.d.results[0].IsV == "Yes"),
            IsVisible: (response.d.results[0].IsV == "Yes"),
            ISOtherPAS: response.d.results[0].ISOtherPAS,
            ISOtherPASChecked: (response.d.results[0].ISOtherPAS == "Yes"),
            ISMigration: response.d.results[0].ISMigrationWithBatch,
            ISMigrationChecked: (response.d.results[0].ISMigrationWithBatch == "Yes"),
            
            ISSISESD: response.d.results[0].ISSISESD,
            ISSISESDChecked: (response.d.results[0].ISSISESD == "Yes"),
            ISSISFGS: response.d.results[0].ISSISFGS,
            ISSISFGSChecked: (response.d.results[0].ISSISFGS == "Yes"),
            ISSISBMS: response.d.results[0].ISSISBMS,
            ISSISBMSChecked: (response.d.results[0].ISSISBMS == "Yes"),
            ISSISPASINT: response.d.results[0].ISSISPASINT,
            ISSISPASINTChecked: (response.d.results[0].ISSISPASINT == "Yes"),
            ExecutionModel: response.d.results[0].ExecutionStrategyandModelExecuti,
            ExecutionWorldArea: response.d.results[0].ExecutionStrategyandModelFSO,

            ISOTHERSISINT: response.d.results[0].ISOTHERSISINT,
            ISOTHERSISINTChecked: (response.d.results[0].ISOTHERSISINT == "Yes"),


            ISPASCAB: response.d.results[0].ISPASCAB,
            ISPASCABChecked: (response.d.results[0].ISPASCAB == "Yes"),
            ISOtherBU: response.d.results[0].ISOtherBU,
            ISOtherBUChecked: (response.d.results[0].ISOtherBU == "Yes"),
            ISInterface: response.d.results[0].ISInterface,
            ISInterfaceChecked: (response.d.results[0].ISInterface == "Yes"),
            ISDocControl: response.d.results[0].ISDocControl,
            ISDocControlChecked: (response.d.results[0].ISDocControl == "Yes"),
            ISTechWriter: response.d.results[0].ISTechWriter,
            ISTechWriterChecked: (response.d.results[0].ISTechWriter == "Yes"),
            ISOTS: response.d.results[0].ISOTS,
            ISOTSChecked: (response.d.results[0].ISOTS == "Yes"),





            ISMIB: response.d.results[0].ISMIB,
            ISMIBChecked: (response.d.results[0].ISMIB == "Yes"),
            ISMIBDisable: (response.d.results[0].EEECCenter == "Pune"),
            ISWireless: response.d.results[0].ISWireless,
            ISWirelessChecked: (response.d.results[0].ISWireless == "Yes"),
            ISCust: response.d.results[0].ISCust,
            ISCustChecked: (response.d.results[0].ISCust == "Yes"),
            ISAgile: response.d.results[0].ISAgile,
            ISAgileChecked: (response.d.results[0].ISAgile == "Yes"),
            ISOther: response.d.results[0].ISOther,
            ISOtherChecked: (response.d.results[0].ISOther == "Yes"),
            ISTimely: response.d.results[0].ISTimely,
            ISTimelyChecked: (response.d.results[0].ISTimely == "Yes"),
            ISNoBudget: response.d.results[0].ISNoBudget,
            ISNoBudgetChecked: (response.d.results[0].ISNoBudget == "Yes"),
            ISFATReady: response.d.results[0].ISFATReady,
            ISFATReadyChecked: (response.d.results[0].ISFATReady == "Yes"),

            ISRework: response.d.results[0].ISRework,
            ISReworkChecked: (response.d.results[0].ISRework == "Yes"),
            ISMaintain: response.d.results[0].ISMaintain,
            ISMaintainChecked: (response.d.results[0].ISMaintain == "Yes"),
            ISImplement: response.d.results[0].ISImplement,
            ISImplementChecked: (response.d.results[0].ISImplement == "Yes"),
            ISUSESIS: response.d.results[0].ISUSESIS,
            ISUSESISChecked: (response.d.results[0].ISUSESIS == "Yes"),



            ISGraphics: response.d.results[0].ISGraphics,
            ISGraphicsChecked: (response.d.results[0].ISGraphics == "Yes"),

            ISNonPCSD: response.d.results[0].ISNonPCSD,
            ISNonPCSDChecked: (response.d.results[0].ISNonPCSD == "Yes"),



            ISNewProd: response.d.results[0].ISNewProd,
            ISNewProdChecked: (response.d.results[0].ISNewProd == "Yes"),

            ISOdd: response.d.results[0].ISOdd,
            ISOddChecked: (response.d.results[0].ISOdd == "Yes"),

            ISOth: response.d.results[0].ISOth,
            ISOthChecked: (response.d.results[0].ISOth == "Yes"),

            ISIP: response.d.results[0].ISIP,
            ISIPChecked: (response.d.results[0].ISIP == "Yes"),

            ISDev: response.d.results[0].ISDev,
            ISDevChecked: (response.d.results[0].ISDev == "Yes"),


            FSO: (response.d.results[0].RiskIndex_FSO) ? response.d.results[0].RiskIndex_FSO : 0,
            WA: (response.d.results[0].RiskIndex_WA) ? response.d.results[0].RiskIndex_WA : 0,
            FSO_WA: (response.d.results[0].RiskIndexFW) ? response.d.results[0].RiskIndexFW : 0,

            FSO_OPEN: (response.d.results[0].RiskIndex_LeadOpen) ? response.d.results[0].RiskIndex_LeadOpen : 0,
            FSO_Tech: (response.d.results[0].RiskIndex_LeadTech) ? response.d.results[0].RiskIndex_LeadTech : 0,
            FSO_Oth: (response.d.results[0].RiskIndex_LeadOth) ? response.d.results[0].RiskIndex_LeadOth : 0,
            FSO_EEC: (response.d.results[0].RiskIndex_LeadEEEC) ? response.d.results[0].RiskIndex_LeadEEEC : 0,

            FSOPMLeadsOpen: response.d.results[0].FSOPMLeadsOpen,
            FSOPMLeadsTechnical: response.d.results[0].FSOPMLeadsTechnical,
            FSOPMLeadsOther: response.d.results[0].FSOPMLeadsOther,
            FSOPMLeadsEEECExp: response.d.results[0].FSOPMLeadsEEECExp,
            ExecutionFSOValue: response.d.results[0].ExecutionStrategyandModelExecuti,
            ExecutionFSOValueWA: response.d.results[0].ExecutionStrategyandModelFSO,
            //ExecutionStrategyandModelFSO



            EditForecast: response.d.results[0].ISForecasted,
            EditPDL: response.d.results[0].PDL,
            PDLChecked: (response.d.results[0].PDL == "Yes"),
            EditPCSD: response.d.results[0].PCSD,
            PCSDChecked: (response.d.results[0].PCSD == "Yes"),
            EditVO: response.d.results[0].VO,
            VOChecked: (response.d.results[0].VO == "Yes"),
            EditCTO: response.d.results[0].CTO,
            CTOChecked: (response.d.results[0].CTO == "Yes"),
            EditDVLive: response.d.results[0].ProductivityDVLive,
            DVChecked: (response.d.results[0].ProductivityDVLive == "Yes"),
            EditResourceCertifications: response.d.results[0].ResourceCertifications,
            ResourceChecked: (response.d.results[0].ResourceCertifications == "Yes"),
            EditLBPManagingFAT: response.d.results[0].LBPManagingFAT,
            LBPChecked: (response.d.results[0].LBPManagingFAT == "Yes"),
            EditPAS: response.d.results[0].PAS,
            PASChecked: (response.d.results[0].PAS == "Yes"),
            EditEI: response.d.results[0].E_x0026_I,
            EIChecked: (response.d.results[0].E_x0026_I == "Yes"),
            EditICSS: response.d.results[0].ICSS,
            ICSSChecked: (response.d.results[0].ICSS == "Yes"),
            EditSyncade: response.d.results[0].Syncade,
            SyncadeChecked: (response.d.results[0].Syncade == "Yes"),
            EditTMS: response.d.results[0].TMS,
            TMSChecked: (response.d.results[0].TMS == "Yes"),
            EditMHM: response.d.results[0].MHM,
            MHMChecked: (response.d.results[0].MHM == "Yes"),
            EditWireless: response.d.results[0].Wireless,
            WireChecked: (response.d.results[0].Wireless == "Yes"),
            EditFeed: response.d.results[0].FEED,
            FeedChecked: (response.d.results[0].FEED == "Yes"),
            EditConsultancy: response.d.results[0].Consultancy,
            EditCChecked: (response.d.results[0].Consultancy == "Yes"),
            ISolution: response.d.results[0].ISolution,
            ISolChecked: (response.d.results[0].ISolution == "Yes"),
            EditOSIPI: response.d.results[0].OSIPI,
            OSIChecked: (response.d.results[0].OSIPI == "Yes"),
            EditCybersecurity: response.d.results[0].Cybersecurity,
            CyberChecked: (response.d.results[0].Cybersecurity == "Yes"),
            ChkSIS: response.d.results[0].ChkSIS,
            ChkSISChecked: (response.d.results[0].ChkSIS == "Yes"),
            EditID: response.d.results[0].ID,
            EPC: response.d.results[0].EPC,
            EndUser: response.d.results[0].End_x0020_User,
            EditEndDestination: response.d.results[0].End_x0020_Destination,
            EditEmerBuisUnit: response.d.results[0].Emerson_x0020_Business_x0020_Uni,
            EditYear: (response.d.results[0].EEECProjID).split('-')[0],
            EditUnit: (response.d.results[0].EEECProjID).split('-')[2],
            prjpltfrmunit: "",
            EditCountryCode: (response.d.results[0].EEECProjID).split('-')[1],
            EditCounter: (response.d.results[0].EEECProjID).split('-')[3],
            EditEndUser: response.d.results[0].End_x0020_User,
            //EditEPC: response.d.results[0],
            EditDeltaVVersion: response.d.results[0].DeltaVVersion,
            EditProjectType: response.d.results[0].ProjectType,
            AgreedEndDate: response.d.results[0].AgreedEndDate,


            // EditProjectName : response.d.results[0].ProjectName,
            // EditProjectID : response.d.results[0].ProjectID,
            // EditEEECProjID : response.d.results[0].EEECProjID,
            // Edit: response.d.results[0],
            EndFinPeriod: response.d.results[0].ActualEnd,
            EditTypeOfIndustry: response.d.results[0].TypeOfIndustry,
            EditBudgetDeviation: response.d.results[0].BudgetDeviation,
            EditUpdateFrequency: response.d.results[0].UpdateFrequency,
            EditProgressDeviation: response.d.results[0].ProgressDeviation,
            EditScheduleChange: response.d.results[0].ScheduleChange,
            EditBudgetChange: response.d.results[0].BudgetChange,
            EditEEECPM: response.d.results[0].EEECPM,
            EditEEECLe: response.d.results[0].EEECLe,
            EditFSOLe: response.d.results[0].FSOLe,
            EditFSOPm: response.d.results[0].FSOPm,
            //EditHardwareLE: response.d.results[0],
            EditNoOfSLS: response.d.results[0].NoOfSLS,
            EditNodesOnDelta: response.d.results[0].NodesOnDelta,
            EditCabinetJBS: response.d.results[0].CabinetJBS,
            EditILD: response.d.results[0].ILD,
            EditPR: response.d.results[0].PR,
            EditDynamos: response.d.results[0].Dynamos,
            EditDisplays: response.d.results[0].Displays,
            EditPhaseClasses: response.d.results[0].PhaseClasses,
            EditOP: response.d.results[0].OP,
            EditUP: response.d.results[0].UP,
            ddlRiskTraining :  (response.d.results[0].ISRiskTrainingComplete?(response.d.results[0].ISRiskTrainingComplete) : ""),
            EditComplexClasses: response.d.results[0].ComplexClasses,
            EditEQMClasses: response.d.results[0].EQMClasses,
            EditEQM: response.d.results[0].EQM,
            EditSIS: response.d.results[0].SIS,
            EditModules: response.d.results[0].Modules,
            EditModulesClasses: response.d.results[0].ModuleClasses,
            EditHWIO: response.d.results[0].HWIO,
            EditSWIO: response.d.results[0].SWIO,
            EditFWIO: response.d.results[0].FWIO,
            EditEEECProjID: response.d.results[0].EEECProjID,
            EditNoOfControl: response.d.results[0].NoOfControllers,
            ProjectHWComments: response.d.results[0].ProjectHWComments,
            EditProjectStartPeriod: response.d.results[0].ProjectStartPeriod,
            ProjectPeriod: response.d.results[0].ProjectStartPeriod,
            //EditProjectPlatform : response.d.results[0].ProjectPlatform,
            EditHardcopy: response.d.results[0].ProjectFolderArchive,

            FinPeriod: response.d.results[0].ProjectStartPeriod,
            EditAgreedEndDate: response.d.results[0].AgreedEndDate,
            EditProjectStartDate: Helper.getUTCDate(new Date(response.d.results[0].ProjectStartDate)),
            EditAgreedEndDateString: Helper.getUTCDate(new Date(response.d.results[0].AgreedEndDate)),
            

            EditProjectEndDate: Helper.getUTCDate(new Date(response.d.results[0].ProjectEndDate)),
            EditProjectID: response.d.results[0].ClarityID,
            // EditEEECProjID: response.d.results[0].EditEEECProjID,
            EditExpectedHours: response.d.results[0].ExpectedHours,
            ExpectedHoursPerWeek: response.d.results[0].ExpectedHours,
            EditProjectName: response.d.results[0].ProjectName,
            EditStatus: response.d.results[0].Status,
            EditSpecialDesign: response.d.results[0].SpecialDesign,
            EditSafetySystem: response.d.results[0].SafetySystem,
            EditProjectPlatform: response.d.results[0].ProjectPlatform,
            EditIOType: response.d.results[0].IOType,
            EditIOSeries: response.d.results[0].IOSeries,
            EditAgreedBudget: response.d.results[0].AgreedBudget,
            EditInternalBudget: response.d.results[0].InternalBudget,
            EditActuals: response.d.results[0].Actuals,
            EditETC: response.d.results[0].ETC,
            EditProgress: response.d.results[0].Progress,
            //EditExpectedHours: response.d.results[0].ExpectedHours,
            EditActualEnd: response.d.results[0].ActualEnd,
            EditRemark: response.d.results[0].Remark,
            EditCountry: response.d.results[0].Country,
            EditWorldArea: response.d.results[0].WorldArea,
            EditIndustrySubtype: response.d.results[0].IndustrySubtype,
            EditComplexLoops: response.d.results[0].ComplexLoops,
            EditSSIO: response.d.results[0].SSIO,
            EditRP: response.d.results[0].RP,

            EditDatacorrect: response.d.results[0].Datacorrect,
            EditDatacorrectComments: response.d.results[0].DatacorrectComments,
            EditDeliveryComplete: response.d.results[0].DeliveryComplete,
            EditDeliveryCompleteComments: response.d.results[0].DeliveryCompleteComments,

            EditCSSFormReceived: response.d.results[0].CSSFormReceived,
            EditCSSFormReceivedComments: response.d.results[0].CSSFormReceivedComments,

            EditProjectCloseMeeting: response.d.results[0].ProjectCloseMeeting,
            EditProjectCloseMeetingComments: response.d.results[0].ProjectCloseMeetingComments,
            EditEEEC: response.d.results[0].EEECCenter,
            EditResourceSkillUpdated: response.d.results[0].ResourceSkillUpdated,
            EditResourceSkillUpdatedComments: response.d.results[0].ResourceSkillUpdatedComments,

            EditPerfomarmanceUpdated: response.d.results[0].PerfomarmanceUpdated,
            EditPerfomarmanceUpdatedComments: response.d.results[0].PerfomarmanceUpdatedComments,

            EditPMITSS: response.d.results[0].PMITSS,
            EditPMITSSComments: response.d.results[0].PMITSSComments,
            EditCloseOut: response.d.results[0].Closeoutnotes,
            EditITSSCall: response.d.results[0].ProjectHW,
            EditITSCallComments: response.d.results[0].ProjectHWComments,




            //new Code
            EditDCSAI: response.d.results[0].DCS_x0020_AI,
            EditDCSAO: response.d.results[0].DCSAO,
            EditDCSDI: response.d.results[0].DCSDI,
            EditDCSDO: response.d.results[0].DCSDO,
            EditSISAI: response.d.results[0].SISAI,
            EditSISAO: response.d.results[0].SISAO,
            EditSISDI: response.d.results[0].SISDI,
            EditSISDO: response.d.results[0].SISDO,
            EditWorkstationNodes: response.d.results[0].WorkstationNodes,
            EditFHX: response.d.results[0].ISProjectFHX,
            EditFHXComments: response.d.results[0].ISProjectFHXComments,
            TopRisk: response.d.results[0].TopRisk,
            EditNoofCIOC: response.d.results[0].NoofCIOC,
            EditNoofCSLS: response.d.results[0].NoofCSLS,
            EditCEModules: response.d.results[0].NoofCSLS,
            EditVotingLogic: response.d.results[0].VotingLogic,
            EditSysCabinet: response.d.results[0].SystemCabinets,
            EditMarshallingCabinets: response.d.results[0].MarshallingCabinets,
            EditServerCabinet: response.d.results[0].ServerNetworkCabinets,
            EditPDBCabinet: response.d.results[0].Closeoutnotes,
            EditRiskRegister: response.d.results[0].Closeoutnotes,
            ProjectRiskStatus: response.d.results[0].ProjectLevelRiskStatus,
            // ProjectRiskStatus: response.d.results[0].ResourcePlanRemarks,



            //



            // EditHardcopy: response.d.results[0].,
            // EditHardcopyComments: response.d.results[0],

            EditPostdelivery: response.d.results[0].Postdelivery,
            EditPostdeliveryComments: response.d.results[0].PostdeliveryComments,

            EditProjectFolder: response.d.results[0].ProjectFolderArchive,
            EditProjectFolderComments: response.d.results[0].ProjectFolderArchiveComments,

            EditDongleReturned: response.d.results[0].DongleReturned,
            EditDongleReturnedComments: response.d.results[0].DongleReturnedComments,

          }, () => {

            //

            if (this.state.ExecutionWorldArea == "One World Area") {
              this.setState({
                ISOneWorld: true
              })
            }
            if (this.state.ExecutionWorldArea == "Multiple World Area") {
              this.setState({
                ISMultipleWorld: true
              })
            }
            if (this.state.ExecutionStrategyandModelExecution == "Same") {

              this.setState({
                ISSame: true
              })
            }
            if (this.state.ExecutionStrategyandModelExecution == "Increase") {
              this.setState({
                ISIncrease: true
              })
            }
            if (this.state.ExecutionStrategyandModelExecution == "Decrease") {
              this.setState({
                ISDecrease: true
              })
            }
            if (this.state.ExecutionStrategyandModelExecution == "Additional") {
              this.setState({
                ISAdd: true
              })
            }
            this.getProjectTypeID();
            this.getcurrentcsergroup()
            resolve(0);
          })
          console.log(arr[0])
        }).then(() => {
          this.loadpeople(param);
        }

        ).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }

  handleRisk_Change = (event) => {


    if (event.target.id == "ExecutionFSOValue") {
      var index = event.target.selectedIndex;
      var optionElement = event.target.childNodes[index]
      var value = optionElement.innerText.trim()
      var option = optionElement.getAttribute('data-set');



      this.setState({
        [event.target.id]: event.target.value,
        [event.target.name]: parseInt(option),
      })

    } else {


      var index = event.target.selectedIndex;
      var optionElement = event.target.childNodes[index]
      var value = optionElement.innerText.trim()
      var option = optionElement.getAttribute('data-set');


      this.setState({
        [event.target.name]: parseInt(option),
        [event.target.id]: value

      })
    }

  }
  public getProjectTypeID() {
    let deltavversion = []
    debugger;
    //const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Project%20Platform')/Items?&expand=BM&$select%20BM/Id,BM/Title,Project%20Platform?filter=Project%20Platform eq '` + this.state.EditProjectPlatform + `'`
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Project%20Platform')/Items?$select=BM/Title,BM/Id,Project_x0020_Platform&$expand=BM&$filter=Project_x0020_Platform eq '` + this.state.EditProjectPlatform + `'`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          deltavversion = response.d.results;
          var arr = Object.values(response.d.results);

          for (let i in response.d.results) {


            this.setState({
              BMID: response.d.results[0].BM.Id,
              BMTitle: response.d.results[0].BM.Title
            });
          }
          console.log(this.state.BMID)
          console.log(response.d.results)
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });

  }
  public componentDidMount() {

    var stringQuery = Helper.getQueryStringParameter('id');
    this.setState({
      navURL: "https://emerson.sharepoint.com/sites//EEEC/EProjectControl/Pages/LinkPage.aspx?FilterField1=EEECProjectID&FilterValue1=" + stringQuery + ""
    }, () => {
      // var anchor = document.getElementById("rootbar")
      // anchor.setAttribute("href", this.state.navURL)
      // anchor.setAttribute("Target", "_blank")
    })


    //this.loadpeople();
    debugger;
    console.log(stringQuery);

    this.loadprojectlist();
    this.loaddeltavversion();
    this.loadFY();
    this.loadperiod();
    this.EBU();
    this.loadPlatform();
    this.loadindustry();
    // this.getcurrentcsergroup();
    this.loadCountry();
    this.loadcounter();

    this.loadAllData(stringQuery)
    setTimeout(this.handleddl, 1000);

    // this.postdata();

    let initialProj = []
    debugger;



  }

  public loadpeople(param) {
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items(` + this.state.EditID + `)`
    const url = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items?$expand=EEECPM,IndustrySubtype,Country,EEECLe,FSOPm,HWLE,FSOLe&$select=EEECPM/Title,IndustrySubtype/Industry_x0020_Subtype,EEECPM/Id,EEECLe/Title,EEECLe/Id,Country/Country,Country/CountryCode,Country/Id,HWLE/Title,HWLE/Id,TypeOfIndustry,FSOPm/Title,FSOPm/Id,FSOLe/Title,ClarityID,FSOLe/Id&$filter=EEECProjID eq '` + param + `'`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(url, null, null, null)
        .then((response) => {
          for (let i in response.d.results) {
            console.log(response.d.results[i].EEECPM.Title)
            var name = response.d.results[i].IndustrySubtype.Industry_x0020_Subtype
            var indtype = response.d.results[i].TypeOfIndustry
            this.loadindsubtype(indtype);

            this.loadworldarea(response.d.results[i].Country.CountryCode);



            this.setState
              ({
                EditEEECPM: response.d.results[i].EEECPM.Title,
                EditEEECPMId: response.d.results[i].EEECPM.Id,
                EditEEECLe: response.d.results[i].EEECLe.Title,
                EditEEECLeId: response.d.results[i].EEECLe.Id,
                EditFSOPm: response.d.results[i].FSOPm.Title,
                EditFSOMPmId: response.d.results[i].FSOPm.Id,
                EditFSOLe: response.d.results[i].FSOLe.Title,
                EditFSOLeId: response.d.results[i].FSOLe.Id,
                CC: response.d.results[i].Country.CountryCode,
                EditHardwareLE: response.d.results[i].HWLE.Title,
                EditHardwareLeId: response.d.results[i].HWLE.Id,
                EditCountry: response.d.results[i].Country.Country,
                CountryCode: response.d.results[i].Country.CountryCode,

                EditIndustrySubtype: name

              }, () => {
                this.getuserid();
              })
          }
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });


  }

  public reloadpage() {

  }

  public loadsubind() {

  }
  public postdata(e) {

    // if ((this.state.ISOtherRemarkChecked == true) || (this.state.ISPASOtherRemarkChecked == true)) {
    //   if ((!this.state.EECInvolvScope_Remarks) || (!this.state.NonStd_Remarks)) {
    //     alert("Please fill all mandatory fields ")
    //     e.preventDefault()

    //   }
    // }



    debugger;
    e.preventDefault();
    var EPC = this.EPC.current.value;
    var HWIO = this.HWIO.current.value;
    var SWIO = this.SWIO.current.value;
    var SSIO = this.SSIO.current.value;
    var projectID = this.ProjectID.current.value;
    var projectName = this.ProjectName.current.value;
    var DeltaV = this.DeltaV.current.value;
    var ProjectPeriod = this.ProjectPeriod.current.value;
    var EndUser = this.EndUser.current.value;
    var EndDestination = this.EndDestination.current.value;
    var ProjectPlatform = this.ProjPlatform.current.value
    var CloseOut = this.closeOut.current.value;
    var ComplexLoops = this.ComplexLoops.current.value;
    var EQMClasses = this.EQMClasses.current.value;
    var EQM = this.EQM.current.value;
    var phrase = this.PhraseClasses.current.value;
    var OP = this.OP.current.value;
    var UP = this.UP.current.value;
    var PR = this.PR.current.value;
    var Dynamos = this.Dynamos.current.value;
    var Cabinet = this.Cabinet.current.value;
    var ILD = this.ILD.current.value;
    var BudgetChange = this.BudgetChange.current.value;
    var ScheduleChange = this.ScheduleChange.current.value;
    var ProgressDev = this.ProgressDev.current.value;
    var UpdateFrequency = this.UpdateFreq.current.value;
    var BudgetDev = this.BudgetDev.current.value;
    var AgreedBudget = this.AgreedBudget.current.value;
    var InternalBudget = this.InternalBudget.current.value;
    var Actuals = this.Actuals.current.value;
    var ETC = this.ETC.current.value;
    var ProgressDev = this.ProgressDev.current.value;
    var ExpHours = this.ExpHours.current.value;
    var ActualEnd = this.ActualEnd.current.value;
    var Remark = this.Remark.current.value;
    var Display = this.Display.current.value;
    var PhraseClasses = this.PhraseClasses.current.value;
    var NoOfControl = this.NoOfControl.current.value;
    var NoOfSLS = this.NoOfSLS.current.value;
    var NodesDelta = this.NodesDelta.current.value;
    var EBU = this.state.EBU
    let newModule = this.newModule.current.value
    let newModuleClasses = this.newModuleClasses.current.value
    let Progress = this.Progress.current.value


    var CSS = this.CSS.current.value
    var CSSComments = this.CSSComments.current.value
    var ITSS = this.ITSS.current.value
    var ITSSComments = this.ITSSComments.current.value
    var ProjectHW = this.ITSS2.current.value
    var ProjectHWComments = this.ITSS2Comments.current.value
    var Dongle = this.donglereturn.current.value
    var DongleComments = this.dongleComments.current.value
    var Delivery = this.delivery.current.value
    var DeliveryComments = this.deliverycomments.current.value
    var ProjectCorrect = this.projectcorrect.current.value
    var ProjectCorrectComments = this.projectComments.current.value
    var PostDelivery = this.postdelivery.current.value
    var PostDeliveryComments = this.postdeliveryComments.current.value
    var ResourceSkill = this.resourceskill.current.value
    var ResourceSkillComments = this.resourceskillComments.current.value
    var Close = this.close.current.value
    var CloseComments = this.closeComments.current.value
    var HardCopy = this.hardcopy.current.value
    var HardCopyComments = this.hardcopyComments.current.value



    var EBUU = this.EBUU.current.value
    var Country = this.Country.current.value
    var WorldArea = this.WorldArea.current.value
    var IndType = this.IndType.current.value
    var IndSubType = this.IndSubType.current.value
    var ProjPlatform = this.ProjPlatform.current.value
    var Status = this.Status.current.value
    var ProjType = this.ProjectType.current.value
    var EEECProjID = this.EEECProjID.current.value
    var EditEEEC = this.state.EditEEEC
    var ProjectStartDate = pstartDate
    var ProjectEndDate = pendDate
    var ProjectActdate = pactDate
    var ProjectAgreedEndDate = agreedendate
    //console.log(title); 
    var isV = "No"
    var isV2 = "No"
    //binding for lookup
    var countryID = parseInt(this.Country.current.selectedOptions[0].id);
    //var worldAreaID = this.WorldArea.current.selectedOptions[0].id
    var IndSubID = parseInt(this.IndSubType.current.selectedOptions[0].id);

    if ((this.state.EEEScope == 0) || (this.state.EEEInvScope == 0) || (this.state.FSO==0)) {
      isV = "Yes"
      this.setState({
        IsVisible: true
      })
    }


    if(this.state.FSO==0){
               isV = "Yes"
      if(this.state.ExecutionFSOValue=="Same"){
        isV = "No"
      }

    }


    if(this.state.WA==0){
      isV2="Yes"
      if(this.state.ExecutionFSOValueWA=="One World Area"){
        isV2="No"
      }
    }


    // if ((this.state.ExecutionFSOValueWA == "One World Area") || (this.state.ExecutionFSOValue == "Same")) {
    //   isV = "No"
    // }

    // RiskIndex_ResourceSkill

    var FSORI = this.state.FSO_OPEN + this.state.FSO_Tech + this.state.FSO_Oth + this.state.FSO_EEC


    var  _isV
    if ((parseInt(this.state.RiskIndex_ProjectCT) == 0) || (parseInt(this.state.RiskIndex_ResourceSkill) == 0)  || (parseInt(this.state.RiskIndex_ResourcePlan) == 0)  ||(parseInt(this.state.RiskIndex_ProjectLD) == 0) || (parseInt(this.state.RiskIndex_ProjectGP) == 0) || (parseInt(this.state.RiskIndex_EmersonHours) == 0) || (parseInt(this.state.RiskIndex_EEECHours) == 0) || (parseInt(this.state.RiskIndex_Budget) == 0) || (parseInt(this.state.RiskIndex_Utilization) == 0) || (parseInt(this.state.RiskIndex_Duration) == 0) || (parseInt(this.state.RiskIndex_EEECInvolvement) == 0) || (parseInt(this.state.RiskIndex_ProjectChart) == 0) || (parseInt(this.state.RiskIndex_FAT) == 0) || (parseInt(this.state.RiskIndex_OverallPM) == 0) || (parseInt(this.state.RiskIndex_OverallLead) == 0) || (parseInt(this.state.RiskIndex_ResourceSkill) == 0) || (parseInt(this.state.RiskIndex_ResourcePlan) == 0) || (parseInt(this.state.EEEInvScope) == 0) || (parseInt(this.state.EEEScope) == 0) || (parseInt(this.state.OverallRisk) == 0)) {
      _isV = "Yes"
   }


    var _isOpen;
    var _isOth
    var _isOther
    var _isEEEC

    var _flag

    if( (this.state.FSO_OPEN==0 ) || (this.state.FSO_Tech==0) || (this.state.FSO_Oth==0) || (this.state.FSO_EEC==0) ){
      _flag="Yes"

      if( (this.state.FSOPMLeadsOther=="Please Select") ||(this.state.FSOPMLeadsEEECExp=="Please Select") ||(this.state.FSOPMLeadsTechnical=="Please Select") ||(this.state.FSOPMLeadsOpen=="Please Select") ){
        _flag="Yes"
      } else{
        _flag="No"
      }

      // if( (this.state.FSOPMLeadsOther!="Proactive") && (this.state.FSO_Oth==0)){
      //    _isOpen="No"
      // }
      // if( (this.state.FSOPMLeadsEEECExp=="Worked with EEEC") && (this.state.FSO_EEC==0)){
      //   _isEEEC="No"
      // }
      // if( (this.state.FSOPMLeadsTechnical=="Technical") && (this.state.FSO_Tech==0)){
      //   _isOth="No"
      // }
      // if(  ((this.state.FSOPMLeadsOpen=="Accommodative") && (this.state.FSO_OPEN==0)) ||((this.state.FSOPMLeadsTechnical=="Technical") && (this.state.FSO_Tech==0))||()){
      //   _isOth="No"
      // }

      // if( (_isOpen=="No" ) && (_isEEEC) 

    }


         var _isScope;

    if ((this.state.ISFAT == "No") && (this.state.ISSAT == "No") && (this.state.ISFEED=="No") && (this.state.ISExecute=="No")) {
      isV = "Yes"
      var __isScope ="Yes"
      this.setState({
        IsVisible: true
      })
    }

    var IsVisible= "No" ;
    if (isV == "Yes" || isV2=="Yes" || _isScope=="Yes" || _isV=="Yes" || _flag=="Yes") {
    IsVisible  = "Yes"
    }
    
    return new Promise((resolve, reject) => {

      const   digestValue =  this.CurrentDigestValue("https://emerson.sharepoint.com/sites/autosolpss/EEEC/EProjectControl/")

     

      const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items(` + this.state.EditID + `)`;
      //const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items`;
      const headers = {
        "accept": "application/json;odata=verbose",
        
        "content-Type": "application/json;odata=verbose",
        "IF-MATCH": "*",
        "X-HTTP-Method": "MERGE"
      }
      const listTitle = "Projectmaster";
      const savedata =
      {
        '__metadata': { 'type': 'SP.Data.' + listTitle + 'ListItem' },
        Title: "new MMID2",
        ISMIB: this.state.ISMIB,
        ISRiskTrainingComplete : this.state.ddlRiskTraining,
       
       
        TotalRiskIndex: parseInt(this.state.RiskIndex_ProjectCT) + parseInt(this.state.RiskIndex_ProjectLD) + parseInt(this.state.RiskIndex_ProjectGP) + parseInt(this.state.RiskIndex_ExecutionFSO) + parseInt(this.state.RiskIndex_Execution) + parseInt(this.state.RiskIndex_ExecutionMulti) + parseInt(this.state.RiskIndex_EmersonHours) + parseInt(this.state.RiskIndex_EEECHours) + parseInt(this.state.RiskIndex_Budget) + parseInt(this.state.RiskIndex_Utilization) + parseInt(this.state.RiskIndex_Duration) + parseInt(this.state.RiskIndex_EEECInvolvement) + parseInt(this.state.RiskIndex_ProjectChart) + parseInt(this.state.RiskIndex_EEECScope) + parseInt(this.state.RiskIndex_EEECInvolvementScope) + parseInt(this.state.RiskIndex_FAT) + parseInt(this.state.RiskIndex_OverallPM) + parseInt(this.state.RiskIndex_OverallRisk) + parseInt(this.state.RiskIndex_OverallLead) + parseInt(this.state.RiskIndex_FSOLead) + parseInt(this.state.RiskIndex_ResourceSkill) + parseInt(this.state.RiskIndex_FSOSuccess) + parseInt(this.state.RiskIndex_NonStandard) + parseInt(this.state.RiskIndex_ResourcePlan) + parseInt(this.state.Non_Std) + parseInt(this.state.FSO_Success) + parseInt(this.state.EEEInvScope) + parseInt(this.state.EEEScope) + parseInt(this.state.OverallRisk) + parseInt(this.state.FSO) + parseInt(this.state.WA) + parseInt(this.state.FSO_WA) + parseInt(this.state.FSO_OPEN) + parseInt(this.state.FSO_Tech) + parseInt(this.state.FSO_Oth) + parseInt(this.state.FSO_EEC),
        RiskIndex_FSO: parseInt(this.state.FSO),
        RiskIndex_WA: parseInt(this.state.WA),
        RiskIndexFW: parseInt(this.state.FSO_WA),
        RiskIndex_LeadOpen: parseInt(this.state.FSO_OPEN),
        RiskIndex_LeadTech: parseInt(this.state.FSO_Tech),
        RiskIndex_LeadOth: parseInt(this.state.FSO_Oth),
        RiskIndex_LeadEEEC: parseInt(this.state.FSO_EEC),
        IsV: IsVisible,
        EPC: EPC,
        HWIO: HWIO,
        SWIO: SWIO,
        SSIO: SSIO,
        ProjectID: projectID,
        ProjectName: projectName,
        End_x0020_User: EndUser,
        End_x0020_Destination: EndDestination,
        DeltaVVersion: DeltaV,
        BudgetDeviation: BudgetDev,
        ProjectPlatform: ProjPlatform,
        UpdateFrequency: UpdateFrequency,
        ProgressDeviation: ProgressDev,
        ScheduleChange: ScheduleChange,
        BudgetChange: BudgetChange,
        CabinetJBS: Cabinet,
        ILD: ILD,
        PR: PR,
        Dynamos: Dynamos,
        Displays: Display,
        PhaseClasses: PhraseClasses,
        OP: OP,
        UP: UP,
        ComplexClasses: ComplexLoops,
        ComplexLoops: ComplexLoops,
        EQMClasses: EQMClasses,
        EQM: EQM,
        SIS: SSIO,
        RP: PR,
        NoOfControllers: NoOfControl,
        NoOfSLS: NoOfSLS,
        NodesOnDelta: NodesDelta,
        Modules: newModule,
        ModuleClasses: newModuleClasses,
        AgreedBudget: AgreedBudget,
        InternalBudget: InternalBudget,
        Actuals: Actuals,
        ETC: ETC,
        Progress: Progress,
        ExpectedHours: ExpHours,
        ActualEnd: ActualEnd,
        Remark: Remark,
        Status: this.state.EditStatus,
        ISDelivered: this.state.Isdel,
        DeliveryComplete: Delivery,
        DeliveryCompleteComments: DeliveryComments,
        CSSFormReceived: CSS,
        CSSFormReceivedComments: CSSComments,
        ProjectCloseMeeting: Close,
        ProjectCloseMeetingComments: CloseComments,
        ResourceSkillUpdated: ResourceSkill,
        ResourceSkillUpdatedComments: ResourceSkillComments,
        PMITSS: ITSS,
        PMITSSComments: ITSSComments,
        DongleReturned: Dongle,
        DongleReturnedComments: DongleComments,
        Datacorrect: ProjectCorrect,
        DatacorrectComments: ProjectCorrectComments,
        ProjectFolderArchive: HardCopy,
        ProjectFolderArchiveComments: HardCopyComments,
        ProjectHWComments: ProjectHWComments,
        ProjectHW: ProjectHW,
        PostdeliveryComments: PostDeliveryComments,
        Postdelivery: this.state.EditPostdelivery,
        Emerson_x0020_Business_x0020_Uni: EBUU,
        ProjectType: ProjType,
        TypeOfIndustry: IndType,
        EEECProjID: EEECProjID,
        ProjectStartPeriod: ProjectPeriod,
        CountryId: countryID,
        IndustrySubtypeId: IndSubID,
        ProjectStartDate: pstartDate,
        ProjectEndDate: pendDate,
        AgreedEndDate: ProjectAgreedEndDate,
        ActualEndDate: pactDate,
        EndUserDesign: EUDRDate,
        QIDocumentsUpdated: QIDate,
        ChangeManagement: ChangeDate,
        ProductivityReview: PR1Date,
        ProductivityReview2: PR2Date,
        RiskRegister: RRDate,
        
        ProjectReviewCallswithFSO: FSODate,
        EEECPMId: this.state.EditEEECPMId,
        FSOLeId: this.state.EditFSOLeId,
        EEECLeId: this.state.EditEEECLeId,
        FSOPmId: this.state.EditFSOMPmId,
        HWLEId: this.state.EditHardwareLeId,
        Closeoutnotes: CloseOut,
        EEECCenter: EditEEEC,
        ISForecasted: this.state.EditForecast,
        DCSAO: this.state.EditDCSAO,
        DCSDI: this.state.EditDCSDI,
        DCSDO: this.state.EditDCSDO,
        SISAI: this.state.EditSISAI,
        SISAO: this.state.EditSISAO,
        SISDI: this.state.EditSISDI,
        SISDO: this.state.EditSISDO,
        VotingLogic: this.state.EditVotingLogic,
        DCS_x0020_AI: this.state.EditDCSAI,
        WorkstationNodes: this.state.EditWorkstationNodes,
        NoofCIOC: this.state.EditNoofCIOC,
        NoofCSLS: this.state.EditNoofCSLS,
        SystemCabinets: this.state.EditSysCabinet,
        MarshallingCabinets: this.state.EditMarshallingCabinets,
        ServerNetworkCabinets: this.state.EditServerCabinet,
        PDL: this.state.EditPDL,
        PCSD: this.state.EditPCSD,
        VO: this.state.EditVO,
        ResourceCertifications: this.state.EditResourceCertifications,
        LBPManagingFAT: this.state.EditLBPManagingFAT,
        PAS: this.state.EditPAS,
        E_x0026_I: this.state.EditEI,
        ICSS: this.state.EditICSS,
        Syncade: this.state.EditSyncade,
        TMS: this.state.EditTMS,
        MHM: this.state.EditMHM,
        Wireless: this.state.EditWireless,
        FEED: this.state.EditFeed,
        Consultancy: this.state.EditConsultancy,
        ISolution: this.state.ISolution,
        OSIPI: this.state.EditOSIPI,
        Cybersecurity: this.state.EditCybersecurity,
        CTO: this.state.EditCTO,
        ProductivityDVLive: this.state.EditDVLive,
        FWIO: this.state.EditFWIO,
        ClarityID: this.state.EditProjectID,
        ChkSIS: this.state.ChkSIS,

        ProjectLevelRiskStatus: this.state.ProjectRiskStatus,
        ISProjectFHXComments: this.state.EditFHXComments,
        ISProjectFHX: this.state.EditFHX,


        NonStandardRequirementsRemarks: this.state.NonStd_Remarks,
        NonStandardRequirementsRiskIndex: parseInt(this.state.Non_Std),
        FSOSuccessRemarks: this.state.FSOSuccess_Remarks,
        FSOSuccessRiskIndex: parseInt(this.state.FSO_Success),

        FSORemarks: this.state.FSOPM_Remarks,
        FSORiskIndex: parseInt(this.state.FSO_OPEN + this.state.FSO_Tech + this.state.FSO_Oth + this.state.FSO_EEC),
        OverallLeadRemarks: this.state.LeadRemarks,
        OverallLeadRiskIndex: parseInt(this.state.RiskIndex_OverallLead),


        OverallPMRemarks: this.state.OverallPM_Remarks,
        OverallPMRiskIndex: parseInt(this.state.RiskIndex_OverallPM),
        FATEngagementRemarks: this.state.FAT_Remarks,
        FATEngagementRiskIndex: parseInt(this.state.RiskIndex_FAT),


        EEECInvolvementRemarks: this.state.EECInvolvScope_Remarks,
        EEECInvolvementRiskIndex: parseInt(this.state.EEEInvScope),
        EEECScopeRemarks: this.state.EEECScope_Remarks,
        EEECScopeRiskIndex: parseInt(this.state.EEEScope),


        OverallRiskRankingRemarks: this.state.OverallRiskRanking_Remarks,
        OverallRiskRankingRiskIndex: parseInt(this.state.OverallRisk),
        ProjectOrganisationChartRemarks: this.state.ProjectOrg_Remarks,
        ProjectOrganisationChartRiskInde: parseInt(this.state.RiskIndex_ProjectChart),
        TimeofEEECInvolvementRemarks: this.state.EEECInvolve_Remarks,
        TimeofEEECInvolvementRiskIndex: parseInt(this.state.RiskIndex_EEECInvolvement),

        ExecutionDurationRemarks: this.state.Duration_Remarks,
        ExecutionDurationRiskIndex: parseInt(this.state.RiskIndex_Duration),
        EEECUtilizationRemarks: this.state.Utilization_Remarks,
        EEECUtilizationRiskIndex: parseInt(this.state.RiskIndex_Utilization),

        AdequacyofBudgetAndScheduleRemar: this.state.Budget_Remarks,
        AdequacyofBudgetAndScheduleRiskI: parseInt(this.state.RiskIndex_Budget),
        EEECBudgetedEngineeringhoursRema: this.state.EEECHours_Remarks,
        EEECBudgetedEngineeringhoursRisk: parseInt(this.state.RiskIndex_EEECHours),

        Total_x0020_EmersonBudgetedEngin0: this.state.Emerson_Remarks,
        Total_x0020_EmersonBudgetedEngin: parseInt(this.state.RiskIndex_EmersonHours),
        ExecutionStrategyandModelRemarks: this.state.Strategy_Remarks,
        ExecutionStrategyandModelRiskInd: parseInt(this.state.FSO + this.state.WA + this.state.FSO_WA),


        ProjectGPRemarks: this.state.ProjectGP_Remarks,
        ProjectGPRiskIndex: parseInt(this.state.RiskIndex_ProjectGP),
        ProjectLDRemarks: this.state.ProjectLD_Remarks,
        ProjectLDRiskIndex: parseInt(this.state.RiskIndex_ProjectLD),


        ProjectContractTypeRemarks: this.state.ProjectCT_Remarks,
        ProjectContractTypeRiskIndex: parseInt(this.state.RiskIndex_ProjectCT),

        ResourceSkillsetRemarks: this.state.ResourceSkill_Remarks,
        ResourceSkillsetRiskIndex: parseInt(this.state.RiskIndex_ResourceSkill),
        ResourcePlanRemarks: this.state.ResourcePlan_Remarks,
        ResourcePlanRiskIndex: parseInt(this.state.RiskIndex_ResourcePlan),

        ProjectContractType: this.state.PEEProjectContractType,
        ProjectLD: this.state.PEEProjectLD,
        ProjectGP: this.state.PEEProjectGP,
        EmersonHours: this.state.PEEEmersonHours,
        EEECHours: this.state.PEEEEECHours,
        AdequacyofBudgetSchedule: this.state.PEEBudget,
        EEECUtilization: this.state.PEEUtilization,
        ExecutionDuration: this.state.PEEDuration,
        TimeofEEECInvolvement: this.state.PEEInvolve,
        ProjectOrganisationChart: this.state.PEEOrgChart,
        Overall_x0020_Risk_x0020_Ranking: this.state.PEERiskRanking,
        FAT_x0020_Engagement: this.state.PEEFAT,
        OverallPM: this.state.PEEOverall,
        OverallLead: this.state.PEELead,
        Resource_x0020_Skillset: this.state.PEEResource,
        ResourcePlanProjectLoadingChart: this.state.PEEProjectLoading,

        ISMultiEngg: this.state.ISMultiEngg,
        ISMultiEPC: this.state.ISMultiEPC,
        ISMultiAreaPhased: this.state.ISMultiAreaPhased,
        ISMultiAreaParallal: this.state.ISMultiAreaParallal,
        ISAdditional: this.state.ISAdditional,
        ISFEED: this.state.ISFEED,
        ISExecute: this.state.ISExecute,
        ISFAT: this.state.ISFAT,
        ISSAT: this.state.ISSAT,
        ISPASBase: this.state.ISPASBase,
        ISSISCAB: this.state.ISSISCAB,
        ISPASCustom: this.state.ISPASCustom,
        ISPASComplex: this.state.ISPASComplex,
        ISPASBatch: this.state.ISPASBatch,
        ISPASThird: this.state.ISPASThird,
        ISOtherPAS: this.state.ISOtherPAS,
        ISMigrationWithBatch : this.state.ISMigration,
        ISSISESD: this.state.ISSISESD,
        ISSISFGS: this.state.ISSISFGS,
        ISSISBMS: this.state.ISSISBMS,
        ISSISPASINT: this.state.ISSISPASINT,
        ISOTHERSISINT: this.state.ISOTHERSISINT,
        ISPASCAB: this.state.ISPASCAB,
        ISOtherBU: this.state.ISOtherBU,
        ISInterface: this.state.ISInterface,
        ISDocControl: this.state.ISDocControl,
        ISTechWriter: this.state.ISTechWriter,
        ISOTS: this.state.ISOTS,
        ISWireless: this.state.ISWireless,
        ISCust: this.state.ISCust,
        ISAgile: this.state.ISAgile,
        ISOther: this.state.ISOther,
        ISTimely: this.state.ISTimely,
        ISNoBudget: this.state.ISNoBudget,
        ISFATReady: this.state.ISFATReady,
        ISRework: this.state.ISRework,
        ISMaintain: this.state.ISMaintain,
        ISImplement: this.state.ISImplement,
        ISUSESIS: this.state.ISUSESIS,
        ISNonPCSD: this.state.ISNonPCSD,
        ISGraphics: this.state.ISGraphics,
        ISNewProd: this.state.ISNewProd,
        ISOdd: this.state.ISOdd,
        ISOth: this.state.ISOth,
        ISIP: this.state.ISIP,
        ISDev: this.state.ISDev,
        FSOPMLeadsOpen: this.state.FSOPMLeadsOpen,
        FSOPMLeadsTechnical: this.state.FSOPMLeadsTechnical,
        FSOPMLeadsOther: this.state.FSOPMLeadsOther,
        FSOPMLeadsEEECExp: this.state.FSOPMLeadsEEECExp,

        ExecutionStrategyandModelExecuti: this.state.ExecutionFSOValue,
        ExecutionStrategyandModelFSO: this.state.ExecutionFSOValueWA,























































      }

      

      digestValue.then((data)=>{
        Helper.executeJsonNew(restUrl, "POST", headers, JSON.stringify($.extend(true, {}, savedata)),data).then((response) => {
          // Resolve the request
         
  
          if (IsVisible=="Yes") {
            alert("PEE Categorization section is incomplete")
          }
  
          alert("Record Updated Succesfully")
          setTimeout(func, 700);
          function func() {
            window.open("https://emerson.sharepoint.com/sites/autosolpss/EEEC/EProjectControl/SiteAssets/ViewReport.aspx", "_self");
          }
          resolve("success");
  
        }).catch((e) => {
          reject("Error")
          console.log(e);
  
        });
      })
      

    });




  }



  public getCurrentFY(shortyear, entereddate, type) {
    this.setState({
      Startflag: false,
      Endflag: false
    })
    var shortyearint = parseInt(shortyear);
    var year = shortyearint;
    var month = entereddate.getMonth();
    if (month > 8) {
      year = year + 1
    }
    var FY = 'FY' + year
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Period')/Items?$filter=FinYear eq '` + FY + `'`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          //initialProj =response.d.results;
          var arr = Object.values(response.d.results);
          if (response.d.results.length == 0) {
            // alert("Financial Period for date is not defined .Please contact admin")

            if (type == "start")
              this.setState({
                EditProjectStartPeriod: "",
              });
            if (type == "end") {

              this.setState({
                EndFinPeriod: "",
              })


            }
          } else {
            for (let i in response.d.results) {
              console.log(response.d.results[i].Period_x0020_Name)

              var startdatestring = response.d.results[i].Start_x0020_Date
              var Startdate = new Date(startdatestring);
              var enddatestring = response.d.results[i].End_x0020_Date
              var enddate = new Date(enddatestring);
              if (entereddate >= Startdate && entereddate <= enddate) {
                CurrentFinPeriod.push = response.d.results[i].Period_x0020_Name
                CurrentPeriod = response.d.results[i].Period_x0020_Name
                if (type == "start") {
                  this.setState({
                    FinPeriod: response.d.results[i].Period_x0020_Name,
                    EditProjectStartPeriod: response.d.results[i].Period_x0020_Name,
                    Startflag: true

                  });
                }
                if (type == "end") {
                  this.setState({
                    EndFinPeriod: response.d.results[i].Period_x0020_Name,
                    Endflag: true
                  });
                  console.log(CurrentPeriod)
                }
                break;
              } else {
                this.setState({
                  flag: false
                })
              }
            }
          }

          if (this.state.Startflag != true && type != "end") {
            alert("‘Project Start Period’ is not defined for selected ‘Project Start Date’. Please contact e-Project Control administrator")
            this.setState({
              FinPeriod: "",
              EditProjectStartPeriod: "",
            })

          }
          if (this.state.Endflag != true && type != "start") {
            alert("‘Project Start Period’ is not defined for selected ‘Project End Date’. Please contact e-Project Control administrator")
            this.setState({
              EndFinPeriod: "",
            })
            document.getElementById("addActualEnd").setAttribute('required', 'required');

          }
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }


  public handleDateEvent = date => (name) => {


    if (date == "ActualEndDate") {
      var r = window.confirm("Entering date here will change project status to Delivered.Do you want to proceed");
      if (r) {
        const valueOfInput = name.format();
        var prjdate = new Date(valueOfInput);
        var ProjActDate = new Date(valueOfInput).toISOString()
        pactDate = ProjActDate
        this.setState({ EditActualEndDate: Helper.getUTCDate(name) });
        this.setState({
          Isdel: "Yes"
        })
        var year = prjdate.getFullYear();
        var shortyear = year.toString().substring(2)
        var month = prjdate.getMonth();
        this.getCurrentFY(shortyear, prjdate, "end")
        this.setState({
          EditStatus: "Delivered"
        })

        var doc = document.getElementById("ddlStatus")

        doc.innerHTML = "<option>WIP</option><option>On Hold</option><option>Shelved</option><option>Delivered</option>"
        console.log(doc)
        alert("Please review 'Agreed End Date' and update if appropriate.Delivery will be considered delayed if 'Actual End Date' is after 'Agreed End Date'")
        document.getElementById("addAgreedBudget").focus()

        // } else {
        //   document.getElementById("ActualEndDate-label").nodeValue = ""
        // }
      } else {
        this.setState({ EditActualEndDate: null, EndFinPeriod: "" }, () => {
          setTimeout(() => {
            var a: any = document.getElementById('ActualEndDate-label');
            a.value = '';
            // document.getElementById("ActualEndDate-label").nodeValue = ""
            var doc = document.getElementById("ddlStatus")

            doc.innerHTML = "<option>WIP</option><option>On Hold</option><option>Shelved</option>"

          }, 400);

        });





        document.getElementById("addAgreedBudget").focus()
      }
    }
    if (date == "ProjectData") {
      this.setState({ currentDate: name });

      this.setState({ EditProjectStartDate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var prjdate = new Date(valueOfInput);
      var year = prjdate.getFullYear();
      var shortyear = year.toString().substring(2)
      var month = prjdate.getMonth();
      var projStartDate = new Date(valueOfInput).toISOString();

      this.getCurrentFY(shortyear, prjdate, "start")


      pstartDate = projStartDate
      //  this.setState(
      //    {
      //     pstart : name,
      //    }
      //  )

    }
    if (date == "ProjEndDate") {
      this.setState({ ProjEndDate: name });
      this.setState({ EditProjectEndDate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      pendDate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }

    if (date == "RRDate") {
      this.setState({ RRDate: name });
      this.setState({ RRDate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      RRDate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }

    if (date == "PMLastReview") {
      this.setState({ PMLastReview: name });
      this.setState({ PMLastReview: Helper.getUTCDate(name) })
     
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "WALastReview") {
      this.setState({ WALastReview: name });
      this.setState({ WALastReview: Helper.getUTCDate(name) })
       
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "QIDate") {
      this.setState({ QIDate: name });
      this.setState({ QIDate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      QIDate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "ChangeDate") {
      this.setState({ ChangeDate: name });
      this.setState({ ChangeDate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      pendDate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "PR1Date") {
      this.setState({ PR1Date: name });
      this.setState({ PR1Date: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      PR1Date = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "PR2Date") {
      this.setState({ PR2Date: name });
      this.setState({ PR2Date: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      PR2Date = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "FSODate") {
      this.setState({ FSODate: name });
      this.setState({ FSODate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      FSODate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "ChangeDate") {
      this.setState({ ChangeDate: name });
      this.setState({ ChangeDate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      ChangeDate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "EUDRDate") {
      this.setState({ EUDRDate: name });
      this.setState({ EUDRDate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      EUDRDate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }





    if (date == "AgreedEndDate") {
      this.setState({ AgreedEndDate: name });
      // this.setState({EditAgreedEndDate: Helper.getUTCDate(name)})
      const valueOfInput = name.format();
      var projStartDate = new Date(valueOfInput).toISOString();
      agreedendate = projStartDate

    }
    // if (date == "ActualEndDate" && r == true) {
    //   this.setState({ ProjRequestEndDate: name });
    //   this.setState({ EditActualEndDate: Helper.getUTCDate(name) });
    //   const valueOfInput = name.format();
    //  ;


    // }

  }


  public AnalysisArrow(): any {
    if (this.state.AnalysisDown === "Yes") {
      this.setState({ AnalysisDown: "No" });
    } else {
      this.setState({ AnalysisDown: "Yes" });
    }
  }
  public AnalysisInfoArrow(): any {
    if (this.state.AnalysisInfoDown === "Yes") {
      this.setState({ AnalysisInfoDown: "No" });
    } else {
      this.setState({ AnalysisInfoDown: "Yes" });
    }
  }


  public AnalysisConfigArrow(): any {
    if (this.state.AnalysisConfigDown === "Yes") {
      this.setState({ AnalysisConfigDown: "No" });
    } else {
      this.setState({ AnalysisConfigDown: "Yes" });
    }
  }

  public AnalysisEEEArrow(): any {
    if (this.state.AnalysisEEEArrow === "Yes") {
      this.setState({ AnalysisPEEArrow: "No" });
    } else {
      this.setState({ AnalysisPEEArrow: "Yes" });
    }
  }


  public AnalysisTrackArrow(): any {
    if (this.state.AnalysisTrackDown === "Yes") {
      this.setState({ AnalysisTrackDown: "No" });
    } else {
      this.setState({ AnalysisTrackDown: "Yes" });
    }
  }


  public AnalysisCloseArrow(): any {
    if (this.state.AnalysisCloseDown === "Yes") {
      this.setState({ AnalysisCloseDown: "No" });
    } else {
      this.setState({ AnalysisCloseDown: "Yes" });
    }
  }
  // public handleDate = date =>(event)=> {
  //   debugger;
  //   if(event.target.id=="ProjStartDate-label")
  //   {
  //     const test =   event.target.value
  //     const startdate =  new Date(test).toISOString();

  //   )
  //   }
  //   if(event.target.id=="AgreedEndDate-label")
  //   {

  //   }
  //   if(event.target.id=="ActualEndDate-label")
  //   {
  //   const valueOfInput = date.format();
  //   var projStartDate = new Date(valueOfInput).toISOString();
  //   this.setState(
  //     {
  //            AgreedEndDate : projStartDate,
  //     }
  //   )
  //   }
  //   if(event.target.id=="ActualEndDate")
  //   {
  //   const valueOfInput = date.format();
  //   var projStartDate = new Date(valueOfInput).toISOString();
  //   this.setState(
  //     {
  //       ActualEndDate : projStartDate,
  //     }
  //   )
  //   }

  //   ///...
  // };

  public handlePeopleChnage = (name) => (value: any) => {

    var EEECPM = value;
    var EEEEE = Helper.getUserID(value)
    if (EEEEE != 0 || EEEEE != null) {

      this.setState(
        {
          EditEEECPMId: EEEEE
        }
      )

    }
  }

  public handleEEECLEChange = (name) => (value: any) => {

    var EEECPM = value;
    var EEEEE = Helper.getUserID(value)
    if (EEEEE != 0 || EEEEE != null) {

      this.setState(
        {
          EditHardwareLeId: EEEEE
        }
      )

    }
  }

  public getuserid() {
    debugger;
    var url = _spPageContextInfo.webAbsoluteUrl + '/_api/web/currentuser'
    //const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('World%20Area')/Items`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(url, null, null, null)
        .then((response) => {
          var group = response.d.results;
          console.log(response.d.Id)
          console.log(group)
          this.setState({
            CurrentID: response.d.Id
          }, () => {
            this.loadUserID(this.state.CC)
          })

        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }
  public handleFSOLEChange = (name) => (value: any) => {

    var EEECPM = value;
    var EEEEE = Helper.getUserID(value)
    if (EEEEE != 0 || EEEEE != null) {

      this.setState(
        {
          EditFSOLeId: EEEEE
        }
      )

    }
  }
  public handleFSOPMChange = (name) => (value: any) => {

    var EEECPM = value;
    var EEEEE = Helper.getUserID(value)
    if (EEEEE != 0 || EEEEE != null) {

      this.setState(
        {
          EditFSOMPmId: EEEEE
        }
      )

    }
  }


  public loadindsubtype(id) {
    let restid = id;
    let initialProj = []
    debugger;
    var lookupid;
    if (id == "Chemical")
      lookupid = 5
    if (id == 'Food & Beverage')
      lookupid = 1
    if (id == 'Food And Beverage')
      lookupid = 1
    if (id == 'Utilities')
      lookupid = 2;
    if (id == 'Other')
      lookupid = 3;
    if (id == 'Metal & Mining')
      lookupid = 4;
    if (id == 'Metal And Mining')
      lookupid = 4;
    if (id == 'Pharmaceutical')
      lookupid = 6;
    if (id == 'Refining')
      lookupid = 7
    if (id == 'Pulp & Paper')
      lookupid = 8
    if (id == 'Pulp And Paper')
      lookupid = 8
    if (id == 'Internal')
      lookupid = 9
    if (id == 'Oil & Gas')
      lookupid = 10
    if (id == "Oil And Gas")
      lookupid = 10
    var string = '$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq' + lookupid

    //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq 1
    //const restUrl = _spPageContextInfo.webAbsoluteUrl + string;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,ID,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq " + lookupid + "&$orderby=Industry_x0020_Subtype"
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          initialProj = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            subindustry: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });

  }

  public loadcounter() {





    var counter;
    var qualitycounter
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Counter')/Items`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {

          var arr = Object.values(response.d.results);
          counter = response.d.results[0].Count;
          qualitycounter = response.d.results[0].QualityCount
          this.setState({
            counter: counter,
            qualitycounter: qualitycounter,
            oldcounter: counter
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }

  public loadCountry() {
    //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Country')/items?$filter=World_x0020_Area eq 'Europe'
    // var string = '/items?$filter=World_x0020_Area eq' + id

    //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq 1
    //const restUrl = _spPageContextInfo.webAbsoluteUrl + string;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/getByTitle('Country')/Items?$top=4500&$orderby=Country"
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          // initialProj =response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            country: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }


  public loadUserID(name) {
    let worledarea = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Country')/Items?$expand=BM&$select=CountryCode,BM/Id,BM/Title&$filter=CountryCode eq '` + name + `'`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          worledarea = response.d.results;
          var arr = Object.values(response.d.results);
          console.log(arr)
          this.setState({

            UID: response.d.results[0].BM.Id

          }, () => {

            if ((this.state.CurrentID == this.state.EditEEECPMId) || (this.state.CurrentID == this.state.EditEEECLeId) || (this.state.CurrentID == this.state.EditFSOMPmId) || (this.state.CurrentID == this.state.EditFSOLeId) || (this.state.Group == "Quality") || (this.state.CurrentID == this.state.UID) || (this.state.CurrentID == this.state.BMID)) {
              this.setState({

              })
            } else {
              this.setState({
                showButton: ""
              })
            }
          });

        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }



  public setdropdownvalue(param) {

  }

  public toggleChange = (event) => {
    debugger;
    this.setState({
      qualitycounter: this.state.counter
    })
  }



  handleScopeChange = (event) => {
    if (event.target.checked) {
      this.setState({
        EEECInvScope: this.state.EEECInvScope + 1
      })
    }
  }

  public handleRiskChange = (event) => {
    console.log("RiskChange")
    if (event.target.name == "EEECInvScope") {
      if (event.target.checked) {
        this.setState({
          EEEInvScope: this.state.EEEInvScope + 1
        })
      } else {

        this.setState({
          EEEInvScope: this.state.EEEInvScope - 1
        })
      }
    }




    // if ((event.target.name == "FSOMPMOpen") || (event.target.name == "FSOPMTechnical") || (event.target.name == "FSOPMOther") || (event.target.name == "FSOEEEC") || (event.target.name == "WA") || (event.target.name == "FSO") || (event.target.name == "FSOWA") || (event.target.name == "EEECInvScope") || (event.target.name == "EEEScope") || (event.target.name == "EEECInvScope") || (event.target.name == "FSOSuccess") || (event.target.name == "ChkNonStandardRequirements")) {


    //   if ((event.target.name = "ChkNonStandardRequirements") || (event.target.name = "FSOSuccess")) {

    //   }
    //   if (event.target.checked) {
    //     if (event.target.id == "ISOther") {
    //       this.setState({
    //         ISPASOtherRemarkChecked: true
    //       })
    //     }

    //     if (event.target.id == "ISOth") {
    //       this.setState({
    //         ISOtherRemarkChecked: true
    //       })
    //     }

    //     if (event.target.id == "ISOtherPAS") {
    //       this.setState({
    //         ISOthPASE: true
    //       })
    //     }

    //     if (event.target.id == "ISOTHERSISINT") {
    //       this.setState({
    //         ISISRemarkChecked: true
    //       })
    //     }

    //   } else {
    //     if (event.target.id == "ISOther") {
    //       this.setState({
    //         ISPASOtherRemarkChecked: false
    //       })
    //     }

    //     if (event.target.id == "ISOth") {
    //       this.setState({
    //         ISOtherRemarkChecked: false
    //       })
    //     }
    //     if (event.target.id == "ISOtherPAS") {
    //       this.setState({
    //         ISOthPASE: false
    //       })
    //     }

    //     if (event.target.id == "ISOTHERSISINT") {
    //       this.setState({
    //         ISISRemarkChecked: false
    //       })
    //     }


    //   }

    //   if ((event.target.name == "WA") || (event.target.name == "FSO") || (event.target.name == "FSOMPMOpen") || (event.target.name == "FSOPMTechnical") || (event.target.name == "FSOPMOther") || (event.target.name == "FSOEEEC")) {


    //     if (event.target.name == "ChkNonStandardRequirements") {

    //       if (event.target.checked) {





    //         if ((event.target.id == "ISOth") || (event.target.id == "ISDev")) {
    //           this.setState({
    //             Non_Std: this.state.Non_Std + 4
    //           })
    //         } else if (event.target.id == "ISImplement") {
    //           this.setState({
    //             Non_Std: this.state.Non_Std + 3
    //           })
    //         } else if ((event.target.id == "ISUSESIS") || (event.target.id == "ISNonPCSD") || (event.target.id == "ISNewProd")) {
    //           this.setState({
    //             Non_Std: this.state.Non_Std + 2
    //           })
    //         } else {


    //           this.setState({
    //             Non_Std: this.state.Non_Std + 1
    //           })
    //         }



    //       } else {


    //         if ((event.target.id == "ISOth") || (event.target.id == "ISDev")) {
    //           this.setState({
    //             Non_Std: this.state.Non_Std - 4
    //           })
    //         } else if (event.target.id == "ISImplement") {
    //           this.setState({
    //             Non_Std: this.state.Non_Std - 3
    //           })
    //         } else if ((event.target.id == "ISUSESIS") || (event.target.id == "ISNonPCSD") || (event.target.id == "ISNewProd")) {
    //           this.setState({
    //             Non_Std: this.state.Non_Std - 2
    //           })
    //         } else {
    //           this.setState({
    //             Non_Std: this.state.Non_Std - 1
    //           })
    //         }




    //       }
    //     }
    //   }












    //   if (event.target.name == "FSOSuccess") {

    //     if (event.target.checked) {


    //       if (event.target.id == "ISMaintain") {
    //         this.setState({
    //           FSO_Success: this.state.FSO_Success + 2
    //         })
    //       } else {
    //         this.setState({
    //           FSO_Success: this.state.FSO_Success + 1
    //         })
    //       }

    //     } else {

    //       if (event.target.id == "ISMaintain") {
    //         this.setState({
    //           FSO_Success: this.state.FSO_Success - 2
    //         })
    //       } else {
    //         this.setState({
    //           FSO_Success: this.state.FSO_Success - 1
    //         })
    //       }

    //     }
    //   }




    //   if (event.target.name == "EEEScope") {

    //     if (event.target.checked) {


    //       if (event.target.id == "ISFAT") {
    //         this.setState({

    //           EEEScope: this.state.EEEScope - 1
    //         })

    //       } else {
    //         this.setState({
    //           EEEScope: this.state.EEEScope + 1
    //         })
    //       }



    //     } else {

    //       if (event.target.id == "ISFAT") {
    //         this.setState({
    //           EEEScope: this.state.EEEScope + 1
    //         })
    //       } else {

    //         this.setState({
    //           EEEScope: this.state.EEEScope - 1
    //         })
    //       }

    //     }
    //   }


    //   if (event.target.name == "FSOWA") {


    //     if (event.target.checked) {


    //       if (event.target.id == "ISAdditional") {
    //         this.setState({

    //           [event.target.className]: true,
    //           FSO_WA: this.state.FSO_WA + 3
    //         })
    //       } else {
    //         this.setState({
    //           [event.target.className]: true,
    //           FSO_WA: this.state.FSO_WA + 2,

    //         })
    //       }
    //     } else {

    //       if (event.target.id == "ISAdditional") {
    //         this.setState({
    //           [event.target.className]: false,
    //           FSO_WA: this.state.FSO_WA - 3
    //         })
    //       } else {
    //         this.setState({
    //           [event.target.className]: false,
    //           FSO_WA: this.state.FSO_WA - 2
    //         })
    //       }

    //     }
    //   }
    //   if (event.target.name == "FSO") {
    //     this.setState({
    //       FSO: parseInt(event.target.dataset.set)
    //     })
    //   }
    //   if (event.target.name == "WA") {
    //     this.setState({
    //       WA: parseInt(event.target.dataset.set)
    //     })
    //   }

    //   if (event.target.name == "FSOMPMOpen") {
    //     this.setState({
    //       FSO_OPEN: parseInt(event.target.dataset.set)
    //     })
    //   }
    //   if (event.target.name == "FSOPMTechnical") {
    //     this.setState({
    //       FSO_Tech: parseInt(event.target.dataset.set)
    //     })
    //   }
    //   if (event.target.name == "FSOPMOther") {
    //     this.setState({
    //       FSO_Oth: parseInt(event.target.dataset.set)
    //     })
    //   }
    //   if (event.target.name == "FSOEEEC") {
    //     this.setState({
    //       FSO_EEC: parseInt(event.target.dataset.set)
    //     })
    //   }


    // } else {

    //   var index = event.target.selectedIndex;
    //   var optionElement = event.target.childNodes[index]
    //   var value = optionElement.innerText.trim()
    //   var option = optionElement.getAttribute('data-set');


    //   if (parseInt(option) != 0) {
    //     this.setState({
    //       IsVisibleSectionMsg: false
    //     })
    //   } else {
    //     this.setState({
    //       IsVisibleSectionMsg: true
    //     })
    //   }

    //   if (event.target.id == "PEEProjectContractType") {
    //     if (value == "Other") {
    //       this.setState({
    //         ISProjectCTOtherChecked: true
    //       })
    //     } else {
    //       this.setState({
    //         ISProjectCTOtherChecked: false
    //       })
    //     }
    //   }

    //   this.setState({
    //     [event.target.name]: parseInt(option),
    //     [event.target.id]: value

    //   })
    // }

    if ((event.target.name == "FSOMPMOpen") || (event.target.name == "FSOPMTechnical") || (event.target.name == "FSOPMOther") || (event.target.name == "FSOEEEC") || (event.target.name == "WA") || (event.target.name == "FSO") || (event.target.name == "FSOWA") || (event.target.name == "EEECInvScope") || (event.target.name == "EEEScope") || (event.target.name == "EEECInvScope") || (event.target.name == "FSOSuccess") || (event.target.name == "ChkNonStandardRequirements")) {


      if (event.target.checked) {

        this.setState({
          [event.target.id]: "Yes",
          [event.target.className]: true,
        })
      } else {
        this.setState({
          [event.target.id]: "No",
          [event.target.className]: false,
        })
      }

      if (event.target.checked) {
        if (event.target.id == "ISOther") {
          this.setState({
            ISPASOtherRemarkChecked: true
          })
        }

        if (event.target.id == "ISOtherPAS") {
          this.setState({
            ISOthPASE: true
          })
        }

        if (event.target.id == "ISMigration") {
          this.setState({
            ISMigration: true
          })
        }
        

        if (event.target.id == "ISOTHERSISINT") {
          this.setState({
            ISISRemarkChecked: true
          })
        }

        if (event.target.id == "ISOth") {
          this.setState({
            ISOtherRemarkChecked: true
          })
        }
      } else {
        if (event.target.id == "ISOther") {
          this.setState({
            ISPASOtherRemarkChecked: false
          })
        }

        if (event.target.id == "ISOtherPAS") {
          this.setState({
            ISOthPASE: false
          })
        }

        if (event.target.id == "ISMigration") {
          this.setState({
            ISMigration: false
          })
        }

        if (event.target.id == "ISOTHERSISINT") {
          this.setState({
            ISISRemarkChecked: false
          })
        }


        if (event.target.id == "ISOth") {
          this.setState({
            ISOtherRemarkChecked: false
          })
        }

      }

      if ((event.target.name == "FSOMPMOpen") || (event.target.name == "FSOPMTechnical") || (event.target.name == "FSOPMOther") || (event.target.name == "FSOEEEC")) {

        this.setState({
          [event.target.id]: event.target.value
        })

      }
      else {

        if (event.target.checked) {
          this.setState({
            [event.target.id]: "Yes"
          })
        } else {
          this.setState({
            [event.target.id]: "No"
          })
        }

        if (event.target.name == "ChkNonStandardRequirements") {

          if (event.target.checked) {

            if ((event.target.id == "ISOth") || (event.target.id == "ISDev")) {
              this.setState({
                Non_Std: this.state.Non_Std + 4
              })
            } else if (event.target.id == "ISImplement") {
              this.setState({
                Non_Std: this.state.Non_Std + 3
              })
            } else if ((event.target.id == "ISUSESIS") || (event.target.id == "ISNonPCSD") || (event.target.id == "ISNewProd")) {
              this.setState({
                Non_Std: this.state.Non_Std + 2
              })
            } else {
              this.setState({
                Non_Std: this.state.Non_Std + 1
              })
            }



          } else {
            if ((event.target.id == "ISOth") || (event.target.id == "ISDev")) {
              this.setState({
                Non_Std: this.state.Non_Std - 4
              })
            } else if (event.target.id == "ISImplement") {
              this.setState({
                Non_Std: this.state.Non_Std - 3
              })
            } else if ((event.target.id == "ISUSESIS") || (event.target.id == "ISNonPCSD") || (event.target.id == "ISNewProd")) {
              this.setState({
                Non_Std: this.state.Non_Std - 2
              })
            } else {
              this.setState({
                Non_Std: this.state.Non_Std - 1
              })
            }




          }
        }
      }












      if (event.target.name == "FSOSuccess") {

        if (event.target.checked) {


          if (event.target.id == "ISMaintain") {
            this.setState({
              FSO_Success: this.state.FSO_Success + 2
            })
          } else {
            this.setState({
              FSO_Success: this.state.FSO_Success + 1
            })
          }

        } else {

          if (event.target.id == "ISMaintain") {
            this.setState({
              FSO_Success: this.state.FSO_Success - 2
            })
          } else {
            this.setState({
              FSO_Success: this.state.FSO_Success - 1
            })
          }

        }
      }
      if (event.target.name == "EEECInvScope") {

     
        

        if (event.target.checked) {
        
          if (event.target.id == "ISMigration") {
            this.setState({
              EEEInvScope: this.state.EEEInvScope + 4
            })
          } else {
             
          this.setState({
            EEEInvScope: this.state.EEEInvScope + 1
          })
        }

        } else {
          if (event.target.id == "ISMigration") {
            this.setState({
              EEEInvScope: this.state.EEEInvScope - 4
            })
          } else {
          this.setState({
            EEEInvScope: this.state.EEEInvScope - 1
          })
        }
        }
      }

      




      if (event.target.name == "EEEScope") {

        if (event.target.checked) {

          if (event.target.id == "ISFAT") {
            this.setState({
              EEEScope: this.state.EEEScope - 1
            })

          } else {
            this.setState({
              EEEScope: this.state.EEEScope + 1
            })
          }



        } else {

          if (event.target.id == "ISFAT") {
            this.setState({
              EEEScope: this.state.EEEScope + 1
            })
          } else {

            this.setState({
              EEEScope: this.state.EEEScope - 1
            })
          }

        }
      }


      if (event.target.name == "FSOWA") {


        if (event.target.checked) {

          if (event.target.id == "ISAdditional") {
            this.setState({
              FSO_WA: this.state.FSO_WA + 3
            })
          } else {
            this.setState({
              FSO_WA: this.state.FSO_WA + 2
            })
          }
        } else {

          if (event.target.id == "ISAdditional") {
            this.setState({
              FSO_WA: this.state.FSO_WA - 3
            })
          } else {
            this.setState({
              FSO_WA: this.state.FSO_WA - 2
            })
          }

        }
      }
      if (event.target.name == "FSO") {
        this.setState({
          FSO: parseInt(event.target.dataset.set)
        })
      }
      if (event.target.name == "WA") {
        this.setState({
          WA: parseInt(event.target.dataset.set)
        })
      }

      if (event.target.name == "FSOMPMOpen") {
        this.setState({
          FSO_OPEN: parseInt(event.target.dataset.set)
        })
      }
      if (event.target.name == "FSOPMTechnical") {
        this.setState({
          FSO_Tech: parseInt(event.target.dataset.set)
        })
      }
      if (event.target.name == "FSOPMOther") {
        this.setState({
          FSO_Oth: parseInt(event.target.dataset.set)
        })
      }
      if (event.target.name == "FSOEEEC") {
        this.setState({
          FSO_EEC: parseInt(event.target.dataset.set)
        })
      }


    } else {

      var index = event.target.selectedIndex;
      var optionElement = event.target.childNodes[index]
      var value = optionElement.innerText.trim()
      var option = optionElement.getAttribute('data-set');
      if (event.target.id == "PEEProjectContractType") {
        if (value == "Other") {
          this.setState({
            ISProjectCTOtherChecked: true
          })
        } else {
          this.setState({
            ISProjectCTOtherChecked: false
          })
        }
      }
      this.setState({
        [event.target.name]: parseInt(option),
        [event.target.id]: value

      })
    }



  }

  public HandleTextAreaChange = (e) => {
    debugger;



  }

  public handleInputChange = (event) => {




    let ddltype = event.target.id;

    if (ddltype == "chkMIB") {
      if (event.target.checked) {
        this.setState({
          ISMIB: "Yes",
          ISMIBChecked: true,
        })
      }
      else {
        this.setState({
          ISMIB: "No",
          ISMIBChecked: false
        })
      }
    }


    if (ddltype == "PPEProjectContractType") {

      var index = event.nativeEvent.target.selectedIndex;
      console.log(event.nativeEvent.target[index].text)

      var index = event.target.selectedIndex;
      var optionElement = event.target.childNodes[index]
      var option = optionElement.getAttribute('data-id');


      console.log(event.target.value)
      console.log(event.target.text)
    }


    if (ddltype == "ddlProjectRiskStatus") {
      this.setState({
        ProjectRiskStatus: event.target.value
      })
    }
    if (ddltype == "ChkSIS") {
      if (event.target.checked) {
        this.setState({
          ChkSIS: "Yes",
          ChkSISChecked: true
        })
      }
      else {
        this.setState({
          ChkSIS: "No",
          ChkSISChecked: false
        })
      }

    }

    if (ddltype == "PDL") {
      if (event.target.checked) {
        this.setState({
          EditPDL: "Yes",
          PDLChecked: true
        })
      }
      else {
        this.setState({
          EditPDL: "No",
          PDLChecked: false
        })
      }

    }
    if (ddltype == "PCSD") {
      if (event.target.checked) {
        this.setState({
          EditPCSD: "Yes",
          PCSDChecked: true
        })
      }
      else {
        this.setState({
          EditPCSD: "No",
          PCSDChecked: false


        })
      }
    }
    if (ddltype == "CTO") {
      if (event.target.checked) {
        this.setState({
          EditCTO: "Yes",
          CTOChecked: true
        })
      }
      else {
        this.setState({
          EditCTO: "No",
          CTOChecked: false
        })
      }
    }
    if (ddltype == "RVO2") {
      if (event.target.checked) {
        this.setState({
          EditVO: "Yes",
          VOChecked: true

        })
      }
      else {
        this.setState({
          EditVO: "No",
          VOChecked: false
        })
      }
    }
    if (ddltype == "DVLive") {
      if (event.target.checked) {
        this.setState({
          EditDVLive: "Yes",
          DVChecked: true
        })
      }
      else {
        this.setState({
          EditDVLive: "No",
          DVChecked: false
        })
      }
    }
    if (ddltype == "ResourceCertifications") {
      if (event.target.checked) {
        this.setState({
          EditResourceCertifications: "Yes",
          ResourceChecked: true,
        })
      }
      else {
        this.setState({
          EditResourceCertifications: "No",
          ResourceChecked: false
        })
      }
    }
    if (ddltype == "LBPManagingFAT") {
      if (event.target.checked) {
        this.setState({
          EditLBPManagingFAT: "Yes",
          LBPChecked: true
        })
      }
      else {
        this.setState({
          EditLBPManagingFAT: "No",
          LBPChecked: false
        })
      }
    }
    if (ddltype == "PAS") {
      if (event.target.checked) {
        this.setState({
          EditPAS: "Yes",
          PASChecked: true
        })
      }
      else {
        this.setState({
          EditPAS: "No",
          PASChecked: false
        })
      }
    }

    if (ddltype == "EI") {
      if (event.target.checked) {
        this.setState({
          EditEI: "Yes",
          EIChecked: true,
        })
      }
      else {
        this.setState({
          EditEI: "No",
          EIChecked: false
        })
      }
    }
    if (ddltype == "ICSS") {
      if (event.target.checked) {
        this.setState({
          EditICSS: "Yes",
          ICSSChecked: true
        })
      }
      else {
        this.setState({
          EditICSS: "No",
          ICSSChecked: false
        })
      }
    }
    if (ddltype == "Syncade") {
      if (event.target.checked) {
        this.setState({
          EditSyncade: "Yes",
          SyncadeChecked: true
        })
      }
      else {
        this.setState({
          EditSyncade: "No",
          SyncadeChecked: false
        })
      }
    }
    if (ddltype == "TMS") {
      if (event.target.checked) {
        this.setState({
          EditTMS: "Yes",
          TMSChecked: true,
        })
      }
      else {
        this.setState({
          EditTMS: "No",
          TMSChecked: false,
        })
      }
    }
    if (ddltype == "MHM") {
      if (event.target.checked) {
        this.setState({
          EditMHM: "Yes",
          MHMChecked: true
        })
      }
      else {
        this.setState({
          EditMHM: "No",
          MHMChecked: false
        })
      }
    }
    if (ddltype == "Wireless") {
      if (event.target.checked) {
        this.setState({
          EditWireless: "Yes",
          WireChecked: true
        })
      }
      else {
        this.setState({
          EditWireless: "No",
          WireChecked: false
        })
      }
    }
    if (ddltype == "FEED") {
      if (event.target.checked) {
        this.setState({
          EditFeed: "Yes",
          FeedChecked: true
        })
      }
      else {
        this.setState({
          EditFeed: "No",
          FeedChecked: false
        })
      }
    }
    if (ddltype == "Consultancy") {
      if (event.target.checked) {
        this.setState({
          EditConsultancy: "Yes",
          EditCChecked: true,
        })
      }
      else {
        this.setState({
          EditConsultancy: "No",
          EditCChecked: false
        })
      }
    }
    if (ddltype == "iSolution") {
      if (event.target.checked) {
        this.setState({
          ISolution: "Yes",
          ISolChecked: true,
        })
      }
      else {
        this.setState({
          ISolution: "No",
          ISolChecked: false,
        })
      }
    }

    if (ddltype == "OSIPI") {
      if (event.target.checked) {
        this.setState({
          EditOSIPI: "Yes",
          OSIChecked: true,
        })
      }
      else {
        this.setState({
          EditOSIPI: "No",
          OSIChecked: false
        })
      }
    }

    if (ddltype == "Cybersecurity") {
      if (event.target.checked) {
        this.setState({
          EditCybersecurity: "Yes",
          CyberChecked: true,
        })
      }
      else {
        this.setState({
          EditCybersecurity: "No",
          CyberChecked: false
        })
      }
    }


    if (ddltype == "ddlForecast") {
      this.setState({
        EditForecast: event.target.value
      })
    }

    if (ddltype == "ddlType") {
      let name = event.target.value
      let keyval;

      if (name == "Analytical, F&G")
        keyval = ""
      if (name == "Daniel")
        keyval = ""
      if (name == "Field Instrumentation")
        keyval = ""
      if (name == "BPCS + HW")
        keyval = "01"
      if (name == "BPCS + SIS")
        keyval = "02"
      if (name == "BPCS Only")
        keyval = "00"
      if (name == "BPCS + SIS + HW")
        keyval = "03"
      if (name == "Custom MES Applications")
        keyval = "09"
      if (name == "MMI")
        keyval = ""
      if (name == "Human Centred Design")
        keyval = "07"
      if (name == "Migration ABB to DeltaV")
        keyval = "06"
      if (name == "BPCS Only")
        keyval = "00"
      if (name == "Hardware Only")
        keyval = "05"
      if (name == "Migration Bailey to DeltaV")
        keyval = "06"
      if (name == "PWS Ovation + SIS")
        keyval = ""
      if (name == "Migration Connect type")
        keyval = "06"
      if (name == "Migration DVOP, DOP")
        keyval = "06"




      if (name == "Migration DVOR")
        keyval = "06"
      if (name == "Migration Fix to iFix")
        keyval = "06"
      if (name == "Migration Honeywell to DeltaV")
        keyval = "06"
      if (name == "Migration Invensys to DeltaV")
        keyval = "06"
      if (name == "Migration Provox to DeltaV")
        keyval = "06"
      if (name == "Migration Yokogawa to DeltaV")
        keyval = "06"
      if (name == "Final Control Elements")
        keyval = ""
      if (name == "Migration PLC to DeltaV")
        keyval = ""
      if (name == "Migration Siemens to DeltaV")
        keyval = "06"

      if (name == "Migration RS3 to DeltaV")
        keyval = "06"
      if (name == "RAS")
        keyval = ""
      if (name == "PWS SIS")
        keyval = "08"
      if (name == "SW Tools")
        keyval = ""
      if (name == "SharePoint Applications")
        keyval = ""
      if (name == "SIS Only")
        keyval = "04"
      if (name == "Syncade - Life Science")
        keyval = "09"
      if (name == "Syncade - MLM")
        keyval = "09"
      if (name == "Upgrade")
        keyval = "10"

      if (this.state.EditUnit == "A") {
        this.setState({

          EditEEECProjID: this.state.EditYear + "-" + this.state.EditCountryCode + "-" + this.state.EditUnit + keyval + "-" + this.state.EditCounter
        })
      }
    }




    if (ddltype == "ddlStatus") {
      if (event.target.value == "Closed") {
        alert("Do you really want to change the status to Closed?Please ensure  all One Time Entry Parameters are correctly entered,after this project is locked for editing")
      }

      this.setState({
        EditStatus: event.target.value
      })
    }


    if (ddltype == "ddlEEC") {
      this.setState({
        EditEEEC: event.target.value
      })
    }

    if (ddltype == "addDeliv") {
      this.setState({
        EditDeliveryComplete: event.target.value
      })
    }
    if (ddltype == "AddITSS") {
      this.setState({
        EditPMITSS: event.target.value
      })
    }
    if (ddltype == "ITSS2") {
      this.setState({
        EditITSSCall: event.target.value
      })
    }
    if (ddltype == "HardCopy") {
      this.setState({
        EditProjectFolder: event.target.value
      })
    }
    if (ddltype == "DongleReturn") {
      this.setState({
        EditDongleReturned: event.target.value
      })
    }
    if (ddltype == "ProjectCorrect") {
      this.setState({
        EditDatacorrect: event.target.value
      })
    }
    if (ddltype == "PostDelivery") {
      this.setState({
        EditPostdelivery: event.target.value
      })
    }
    if (ddltype == "FHX") {
      this.setState({
        EditFHX: event.target.value
      })
    }




    if (ddltype == "CSS") {

      this.setState({
        EditCSSFormReceived: event.target.value
      }, () => {

        if (this.state.EditCSSFormReceived == "No") {
          if (this.state.EditActualEndDate == null || this.state.EditActualEndDate == undefined) {
            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = "<option selected>WIP</option><option>On Hold</option><option>Shelved</option>"

          } else {
            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = "<option selected>Delivered</option><option>WIP</option><option>On Hold</option><option>Shelved</option>"
          }
        }
        if (ddltype == "CSS" || ddltype == "ResourceSkill" || ddltype == "Close") {

          if (this.state.EditCSSFormReceived == "Yes" && this.state.EditProjectCloseMeeting == "Yes" && this.state.EditResourceSkillUpdated == "Yes" && (this.state.EditActualEndDate != null || this.state.EditActualEndDate != undefined)) {
            this.setState({
              EditStatus: "Closed"


            })



            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = " <option>WIP</option><option>On Hold</option><option>Shelved</option><option>Delivered</option><option>Closed</option>"
          }
        }
      })
    }
    if (ddltype == "Close") {

      this.setState({
        EditProjectCloseMeeting: event.target.value

      }, () => {

        if (this.state.EditProjectCloseMeeting == "No") {
          if (this.state.EditActualEndDate == null || this.state.EditActualEndDate == undefined) {
            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = "<option selected>WIP</option><option>On Hold</option><option>Shelved</option>"

          } else {

            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = "<option selected>Delivered</option><option>WIP</option><option>On Hold</option><option>Shelved</option>"
          }
        }
        if (ddltype == "CSS" || ddltype == "ResourceSkill" || ddltype == "Close") {

          if (this.state.EditCSSFormReceived == "Yes" && this.state.EditProjectCloseMeeting == "Yes" && this.state.EditResourceSkillUpdated == "Yes" && (this.state.EditActualEndDate != null || this.state.EditActualEndDate != undefined)) {
            this.setState({
              EditStatus: "Closed"


            })
            if (this.state.EditActualEndDate == null || this.state.EditActualEndDate == undefined) {
              var doc = document.getElementById("ddlStatus")
              doc.innerHTML = "<option selected>WIP</option><option>On Hold</option><option>Shelved</option>"

            }


            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = " <option>WIP</option><option>On Hold</option><option>Shelved</option><option>Delivered</option><option>Closed</option>"
          }
        }
      })
    }
    if (ddltype == "ResourceSkill") {
      this.setState({
        EditResourceSkillUpdated: event.target.value
      }, () => {

        if (this.state.EditResourceSkillUpdated == "No") {

          if (this.state.EditActualEndDate == null || this.state.EditActualEndDate == undefined) {
            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = "<option selected>WIP</option><option>On Hold</option><option>Shelved</option>"

          } else {
            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = "<option selected>Delivered</option><option>WIP</option><option>On Hold</option><option>Shelved</option>"
          }
        }
        if (ddltype == "CSS" || ddltype == "ResourceSkill" || ddltype == "Close") {

          if (this.state.EditCSSFormReceived == "Yes" && this.state.EditProjectCloseMeeting == "Yes" && this.state.EditResourceSkillUpdated == "Yes" && (this.state.EditActualEndDate != null || this.state.EditActualEndDate != undefined)) {
            this.setState({
              EditStatus: "Closed"


            })



            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = " <option>WIP</option><option>On Hold</option><option>Shelved</option><option>Delivered</option><option>Closed</option>"
          }
        }
      })
    }


    if (ddltype == "ddlInd") {
      let id = event.target.value;
      let name = event.target.value
      this.loadindsubtype(name)
      this.setState({
        EditTypeOfIndustry: event.target.value
      })
    }
    if (ddltype == 'ddlSub') {
      this.setState({
        EditIndustrySubtype: event.target.value
      })
    }

    if (ddltype == "ddlType") {
      this.setState({
        EditProjectPlatform: event.target.value
      })
    }

    if (ddltype == "ddldelta") {
      this.setState({
        EditDeltaVVersion: event.target.value
      })
    }
    if (ddltype == "ddlProjType") {
      this.setState({
        EditProjectType: event.target.value
      })
    }

    if (ddltype == "Quality") {
      let check;
      if (event.target.checked) {
        this.setState({
          counter: this.state.qualitycounter
        })
      } else {
        this.setState({
          counter: this.state.oldcounter
        })
      }
    }

    if(ddltype=="ddlRiskTraining"){
      this.setState({
        ddlRiskTraining : event.target.value
      })

    }

    if (ddltype == "ddlEBU") {

      let inputstring = this.state.EditYear + "-" + this.state.EditCountryCode + "-" + this.state.EditUnit + this.state.prjpltfrmunit + "-" + this.state.EditCounter
      this.setState({
        EditEmerBuisUnit: event.target.value,
        EditProjectPlatform: ""

      })


      let name = event.target.value
      let keyval;
      if (name == "ASCO")
        keyval = "H99"
      if (name == "DMC")
        keyval = "C99"
      if (name == "MIB")
        keyval = "K99"
      if (name == "MMI")
        keyval = "E99"
      if (name == "PSS")
        keyval = "A"
      if (name == "PWS")
        keyval = "B99"
      if (name == "RAI")
        keyval = "D99"
      if (name == "RAS")
        keyval = "G99"
      if (name == "RPC")
        keyval = "F99"
      if (name == "RTG")
        keyval = "J99"
      if (name == "SBG")
        keyval = "I99"


      if (keyval != "A") {
        this.setState({
          prjpltfrmunit: "",
          EditEEECProjID: this.state.EditYear + "-" + this.state.EditCountryCode + "-" + this.state.EditUnit + this.state.prjpltfrmunit + "-" + this.state.EditCounter
        })
      }
      this.setState({
        EditUnit: keyval,
        EditEEECProjID: this.state.EditYear + "-" + this.state.EditCountryCode + "-" + keyval + this.state.prjpltfrmunit + "-" + this.state.EditCounter
      })

    }

    if (ddltype == "ddlCountry") {
      let id = event.target.value;
      let name = event.target.value
      //this.loadCountry(name)

    }

    if (ddltype === "addCountry") {
      let cc = event.target.value
      this.setState({
        CountryCode: cc,
        EditCountryCode: cc,
        EditEEECProjID: this.state.EditYear + "-" + cc + "-" + this.state.EditUnit + this.state.prjpltfrmunit + "-" + this.state.EditCounter
      });
      this.loadworldarea(cc);
    }


  };


  public clear() {
    if (this.state.EditActualEndDate == null) {
      setTimeout(function () {
        var a: any = document.getElementById('ActualEndDate-label');
        a.value = '';
      }, 300);
    }
  }


  public render() {
    debugger;

    let Test = CurrentPeriod;


    const uniqueNames = Array.from(new Set(this.state.projectDetails.map(v => v.ProjectName)));
    let optionTemplate = this.state.projectDetails.map(v => (
      <option value={v.ProjectName}>{v.ProjectName}</option>
    ));

    let EndUserOptionTemplate = this.state.projectDetails.map(v => (
      <option value={v.End_x0020_User}>{v.End_x0020_User}</option>
    ));
    let EPCUserOptionTemplate = this.state.projectDetails.map(v => (
      <option value={v.EPC}>{v.EPC}</option>
    ));
    let EndDestinationOptionTemplate = this.state.projectDetails.map(v => (
      <option value={v.End_x0020_Destination}>{v.End_x0020_Destination}</option>
    ));
    let DeltaVoptionTemplate = this.state.deltav.map(v => (
      <option value={v.DeltaVversion}>{v.DeltaVversion}</option>
    ));
    let PeridoptionTemplate = this.state.period.map(v => (
      <option value={v.Period_x0020_Name}>{v.Period_x0020_Name}</option>
    ));

    let WorldareaoptionTemplate = this.state.worldarea.map(v => (
      <option value={v.World_x0020_Area}>{v.World_x0020_Area}</option>
    ));

    let EBUOptionsTemplate = this.state.EBU.map(v => (
      <option value={v.EmersonDivision}>{v.EmersonDivision}</option>
    ));



    let ProjectOptionsTemplate = this.state.platform.map(v => (
      <option value={v.Project_x0020_Platform}>{v.Project_x0020_Platform}</option>
    ));
    let IndustryOptionsTemplate = this.state.industry.map(v => (
      <option value={v.Type_x0020_of_x0020_Industry}>{v.Type_x0020_of_x0020_Industry}</option>
    ));

    // let FinyearOptionsTemplate = this.state.finyear.map(v => (
    //  <option value={v.FinYear}>{v.FinYear}</option>
    //));
    let SubIndsutryOptionsTemplate = this.state.subindustry.map(v => (
      <option id={v.ID} selected={this.state.EditIndustrySubtype} value={v.Industry_x0020_Subtype.toString()}>{v.Industry_x0020_Subtype.toString()}</option>
    ));



    let CountryList = this.state.country.map(v => (
      <option id={v.ID} value={v.CountryCode} selected={this.state.CountryCode}>{v.Country}</option>
    ));



    var _FSOPMLeadsOpen= (this.state.FSOPMLeadsOpen)?(this.state.FSOPMLeadsOpen.includes("Select")? "" : this.state.FSOPMLeadsOpen) : ""
    var _FSOPMLeadsTechnical= (this.state.FSOPMLeadsTechnical)?(this.state.FSOPMLeadsTechnical.includes("Select")? "" : this.state.FSOPMLeadsTechnical) : ""
    var _FSOPMLeadsOther= (this.state.FSOPMLeadsOther)?(this.state.FSOPMLeadsOther.includes("Select")? "" : this.state.FSOPMLeadsOther) : ""
    
    var _FSOPMLeadsEEECExp= (this.state.FSOPMLeadsEEECExp)?(this.state.FSOPMLeadsEEECExp.includes("Select")? "" : this.state.FSOPMLeadsEEECExp) : ""
    var _ExecutionFSOValueWA =(this.state.ExecutionFSOValueWA)?(this.state.ExecutionFSOValueWA.includes("Select")? "" : this.state.ExecutionFSOValueWA) : ""
    //||(this.state.FSOPMLeadsTechnical)||(this.state.FSOPMLeadsOther)
    return (

     
      
      <form id='myform' onSubmit={this.validateData} >
        <div id="mainContainerRender">
          <Card>
            <h5 className="table-color" id="mainSubheader">e-Project Control</h5>
            <div id="DottedBox_content">
              <Accordion defaultActiveKey="1">

                <Card.Header >
                  <Accordion.Toggle onClick={this.AnalysisArrow} as={Card.Header} eventKey="1" className="header">
                    <span className={this.state.AnalysisDown === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                    Project Initiation<br></br>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <span className="Shortnote"> <span className="redstar">*</span> Indicates required field. Gray fields are either read-only or calculated fields</span>
                    <br></br>
                    <table className="InputTable" id="InputTable">
                      <tbody>
                        <tr>
                          <td style={{ width: '250px' }}>
                            EEEC Location
                          </td>
                          <td style={{ width: '17%' }}>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" id="ddlEEC" onChange={this.handleInputChange} value={this.state.EditEEEC} disabled defaultValue={this.state.EditEEEC}>
                                <option value=""> Please select</option>
                                <option value="Pune"> Pune</option>
                                <option value="Nashik">Nashik</option>
                              </select>
                            </Stack>

                          </td>
                          <td style={{ paddingLeft: "30px", width: '250px' }}>
                            Project Name
                          </td>
                          <td>

                            <input type="text" name="Projectname" id="addProjectName" disabled ref={this.ProjectName} value={this.state.EditProjectName} onChange={this.handleTextChange} required />

                          </td>



                        </tr>

                        <tr>
                          <td style={{ width: '250px' }}>
                            Emerson Business Unit <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td style={{ width: '17%' }}>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" disabled id="ddlEBU" onChange={this.handleInputChange} ref={this.EBUU} value={this.state.EditEmerBuisUnit} defaultValue={this.state.EditEmerBuisUnit}>
                                {EBUOptionsTemplate}
                              </select>
                            </Stack>

                          </td>
                          <td style={{ width: '250px', paddingLeft: "30px" }}>
                            EPC <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td style={{ width: "20%" }} >


                            <input type="text" name="EPC" id="addEPC" value={this.state.EPC} ref={this.EPC} required onChange={this.handleTextChange} />

                          </td>

                        </tr>

                        <tr>
                          <td >
                            End-User <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <input type="text" name="addEndUser" id="addEnduser" required ref={this.EndUser} onChange={this.handleTextChange} value={this.state.EditEndUser} />

                          </td>
                          <td style={{ paddingLeft: "30px" }}>
                            End-Destination <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <input type="text" name="addEndDestination" id="addEndDestination" ref={this.EndDestination} onChange={this.handleTextChange} value={this.state.EditEndDestination} required />

                          </td>

                        </tr>
                        <tr>
                          <td>
                            DeltaV Version <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <input type="text" id="ddldelta" onChange={this.handleInputChange} ref={this.DeltaV} value={this.state.EditDeltaVVersion} />





                          </td>
                          <td style={{ paddingLeft: "30px" }}>
                            Project Type <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>
                            <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="addprojType" ></i>
                            <select className="ms-Dropdown-select" value={this.state.EditProjectType} defaultValue={this.state.EditProjectType} ref={this.ProjectType} id='ddlProjType' onChange={this.handleInputChange}>
                              <option>Other</option>
                              <option>MAC</option>
                              <option>MIV/FIV</option>
                              <option>Non PSG BU</option>
                              <option>Services Only</option>
                              <option>Site Support Only</option>

                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td> Type Of Industry  <span style={{ color: 'red' }}><b>*</b></span></td>
                          <td>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" disabled onChange={this.handleInputChange} id="ddlInd" ref={this.IndType} value={this.state.EditTypeOfIndustry} defaultValue={this.state.EditTypeOfIndustry}>
                                {IndustryOptionsTemplate}
                              </select> </Stack>

                          </td>
                          <td style={{ paddingLeft: "30px" }}>App/Industry SubType</td>
                          <td>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" onChange={this.handleInputChange} id="ddlSub" ref={this.IndSubType} value={this.state.EditIndustrySubtype} defaultValue={this.state.EditIndustrySubtype}>
                                {SubIndsutryOptionsTemplate}

                              </select>
                            </Stack>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Country (Booking) <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>
                            <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="addCountry" ></i>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" disabled id="addCountry" onChange={this.handleInputChange} ref={this.Country} value={this.state.CountryCode} defaultValue={this.state.CountryCode}>
                                {CountryList}
                              </select>
                            </Stack>
                          </td>
                          <td style={{ paddingLeft: "30px" }}>
                            World Area
                          </td>
                          <td>
                            <Stack tokens={stackTokens} onChange={this.handleInputChange} id="ddlCountryy">
                              <select className="AR-Select" id="ddlCountry" ref={this.WorldArea} value={this.state.EditWorldArea} defaultValue={this.state.EditWorldArea} disabled>
                                {WorldareaoptionTemplate}
                              </select>
                            </Stack>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Project Platform <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>
                            <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="addProjectPlatform"></i>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" id="ddlType" ref={this.ProjPlatform} value={this.state.EditProjectPlatform} defaultValue={this.state.EditProjectPlatform} onChange={this.handleInputChange}>
                                <option value="">Please Select</option>
                                {ProjectOptionsTemplate}</select>
                            </Stack>
                          </td>
                          <td style={{ paddingLeft: "30px" }}>
                            EEEC Project ID
                          </td>
                          <td>

                            <input type="text" name="ProjectID" id="addEEECProjectID" onChange={this.handleTextChange} value={this.state.EditEEECProjID} ref={this.EEECProjID} required disabled />

                          </td>

                        </tr>
                        <tr>
                          <td>
                            (Clarity)  Project ID  <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <input type="text" name="Project ID" id="addProjectID" ref={this.ProjectID} onChange={this.handleTextChange} value={this.state.EditProjectID} required />

                          </td>

                        </tr>
                        <br></br>
                        <tr>

                          <td>
                            FSO LE
                          </td>
                          <td>
                            <label>{this.state.EditFSOLe}</label>
                          </td>
                          <td style={{ paddingLeft: "30px" }}>
                            FSO PM
                          </td>
                          <td>
                            <label>{this.state.EditFSOPm}</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Edit FSO LE
                          </td>
                          <td>
                            <SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.handleFSOLEChange(this)} />
                          </td>
                          <td style={{ paddingLeft: "30px" }}>
                            Edit FSO PM
                          </td>
                          <td>
                            <SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.handleFSOPMChange(this)} />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            EEEC LE
                          </td>
                          <td> <label>{this.state.EditEEECLe}</label>  </td>

                          <td style={{ paddingLeft: "30px" }}>
                            EEEC PM
                          </td>
                          <td>  <label>{this.state.EditEEECPM}</label>  </td>
                        </tr>
                        <tr>
                          <td>
                            Edit EEEC LE
                          </td>
                          <td>
                            <SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.hardwareLeChange(this)} />
                          </td>
                          <td style={{ paddingLeft: "30px" }}> Edit EEECPM</td>
                          <td><SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.handlePeopleChnage("EEECPM")} /></td>
                        </tr>

                        <tr>
                          <td>
                            Hardware LE
                          </td>
                          <td>

                            <label>{this.state.EditHardwareLE}</label>

                          </td>
                          <td></td>
                          <td><input type="checkbox" checked={this.state.ISMIBChecked} name="chkMIB" id="chkMIB" onChange={this.handleInputChange} disabled={this.state.ISMIBDisable} />&nbsp;MIB</td>


                        </tr>
                        <tr>

                          <td> Edit Hardware LE</td>
                          <td> <SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.handleEEECLEChange(this)} /> </td>

                        </tr>

                        <br></br>
                        <br></br>
                        <tr>
                          <td>
                            Project Start Date  <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} highlightCurrentMonth={true} className="addStartDate" id="ProjStartDate" onSelectDate={this.handleDateEvent("ProjectData")} value={this.state.EditProjectStartDate} onChange={this.handleTextChange} formatDate={Helper._onFormatDate} parseDateFromString={this._onParseProjectStartDateFromString} ></DatePicker>

                          </td>
                          <td style={{ paddingLeft: "20px" }}>
                            Project Start Period
                          </td>
                          <td colSpan={1}>

                            <input type="text" name="ProjectStartPeriod" id="addProjectStartPeriod" ref={this.ProjectPeriod} value={this.state.EditProjectStartPeriod} onChange={this.handleTextChange} required onKeyPress={() => { return false }} style={{ opacity: 0.75, color: "grey" }} />

                          </td>


                        </tr>
                        <tr>
                          <td>
                            Request End Date  <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} minDate={this.state.EditProjectStartDate} highlightCurrentMonth={true} className="addRequestEndDate" id="ProjEndDate" onSelectDate={this.handleDateEvent("ProjEndDate")} value={this.state.EditProjectEndDate} onChange={this.handleTextChange} formatDate={Helper._onFormatDate} parseDateFromString={this._onParseProjectEndDateFromString} ></DatePicker>

                          </td>
                          <td style={{ paddingLeft: "20px" }}>
                            Agreed End Date <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} highlightCurrentMonth={true} minDate={this.state.EditProjectStartDate} className="form-addAgreedEndDate" id="AgreedEndDate" value={this.state.EditAgreedEndDateString} formatDate={Helper._onFormatDate} parseDateFromString={this._onParseAgreedEndDateFromString} onSelectDate={this.handleDateEvent("AgreedEndDate")} onChange={this.handleTextChange} />

                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            Actual  End Date
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} onAfterMenuDismiss={this.clear.bind(this)} maxDate={new Date()} minDate={new Date()} highlightCurrentMonth={true} className="addActualEndDate" id="ActualEndDate" onSelectDate={this.handleDateEvent("ActualEndDate")} value={this.state.EditActualEndDate} formatDate={Helper._onFormatDate} parseDateFromString={this._onParseActualEndDateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>
                          <td style={{ paddingLeft: "20px" }}>
                            Forecasted
                          </td>
                          <td>

                            <select className="AR-Select" id="ddlForecast" value={this.state.EditForecast} defaultValue={this.state.EditForecast} onChange={this.handleInputChange}>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </td>

                        </tr>
                        <tr>
                          <td style={{ paddingBottom: "20px" }}> Agreed Budget <b><span style={{ color: "red" }}>*</span></b> </td>
                          <td >

                            <input type='number' className="AgreedBudget" id="addAgreedBudget" ref={this.AgreedBudget} step="0.01" onChange={this.handleTextChange} value={this.state.EditAgreedBudget} />
                            <br></br><label>(Hours agreed with EPM FSO)</label></td>
                        </tr>


                      </tbody>
                    </table>



                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisConfigArrow} as={Card.Header} eventKey="1" className="header">
                    <span className={this.state.AnalysisConfigDown === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                    Configuration Data <br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <table>
                      <tbody>
                        {/* <tr >
                          {/* <td >
                            IO Series
                          </td>
                          <td>

                            (Future Provision)

                          </td>
                          <td>
                            IO Type
                          </td>
                          <td>

                            (Future Provision)

                          </td>
                          <td></td> */}
                        {/* </tr> */}
                        <tr>
                          <td style={{ width: '180px' }}>
                            HW IO
                          </td>
                          <td style={{ width: '100px' }}>

                            <input type="text" name="HWIO" id="addHWIO" ref={this.HWIO} onChange={this.handleTextChange} value={this.state.EditHWIO} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td style={{ width: '180px' }}>
                            SW IO
                          </td>
                          <td style={{ width: '100px' }}>

                            <input type="text" name="SWIO" id="addSWIO" pattern="^[0-9]{1,45}$" title="Please enter valid number" ref={this.SWIO} onChange={this.handleTextChange} value={this.state.EditSWIO} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td style={{ width: '180px' }}>
                            FF IO
                          </td>
                          <td style={{ width: '100px' }}>

                            <input type="text" name="FFIO" id="addFFIO" pattern="^[0-9]{1,45}$" title="Please enter valid number" ref={this.FFIO} onChange={this.handleTextChange} value={this.state.EditFWIO} />

                          </td>
                        </tr>


                        <tr>
                          <td>
                            SIS IO
                          </td>
                          <td>

                            <input type="text" name="SISIO" id="addSISIO" ref={this.SSIO} onChange={this.handleTextChange} pattern="^[0-9]{1,45}$" title="Please enter valid number" value={this.state.EditSSIO} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            Displays
                          </td>
                          <td>

                            <input type="text" name="Display" id="addDisplay" pattern="^[0-9]{1,45}$" title="Please enter valid number" ref={this.Display} onChange={this.handleTextChange} value={this.state.EditDisplays} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            Cabinet/JBS
                          </td>
                          <td>

                            <input type="text" name="PR" pattern="^[0-9]{1,45}$" title="Please enter valid number" id="addCabinetJBS" ref={this.Cabinet} onChange={this.handleTextChange} value={this.state.EditCabinetJBS} />

                          </td>
                        </tr>
                        <br>
                        </br>
                        <br></br>
                        <tr>

                          <td>
                            Module Classes
                          </td>
                          <td>

                            <input type="text" name="ModuleClasses" id="addModuleClasses" ref={this.newModuleClasses} onChange={this.handleTextChange} value={this.state.EditModulesClasses} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            Modules
                          </td>
                          <td>

                            <input type="text" name="Modules" id="addModules" ref={this.newModule} onChange={this.handleTextChange} value={this.state.EditModules} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            ILD (Instrument Loop Drawings)
                          </td>
                          <td>

                            <input type="text" name="ILD" id="addILD" ref={this.ILD} onChange={this.handleTextChange} value={this.state.EditILD} />

                          </td>
                        </tr>
                        <tr>
                          <td>
                            Complex Loops
                          </td>
                          <td>

                            <input type="text" name="ComplexLoops" id="addComplexLoops" ref={this.ComplexLoops} onChange={this.handleTextChange} value={this.state.EditComplexLoops} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            EQM Classes
                          </td>
                          <td>

                            <input type="text" name="EQMClasses" id="addEQMClasses" ref={this.EQMClasses} onChange={this.handleTextChange} value={this.state.EditEQMClasses} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            EQMs
                          </td>
                          <td>

                            <input type="text" name="EQM" id="addEQM" ref={this.EQM} onChange={this.handleTextChange} value={this.state.EditEQM} />

                          </td>

                        </tr>
                        <tr>
                          <td>
                            Phase Classes
                          </td>
                          <td>

                            <input type="text" name="PhraseClaases" id="addPhraseClasses" ref={this.PhraseClasses} onChange={this.handleTextChange} value={this.state.EditPhaseClasses} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            OP
                          </td>
                          <td>

                            <input type="text" name="OP" id="addOP" ref={this.OP} onChange={this.handleTextChange} value={this.state.EditOP} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            UP
                          </td>
                          <td>

                            <input type="text" name="UP" id="addUP" ref={this.UP} onChange={this.handleTextChange} value={this.state.EditUP} />

                          </td>
                        </tr>
                        <tr>
                          <td>
                            PR
                          </td>
                          <td>

                            <input type="text" name="PR" id="addPR" ref={this.PR} onChange={this.handleTextChange} value={this.state.EditPR} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            Dynamos
                          </td>
                          <td>

                            <input type="text" name="Dynamos" id="addDynamos" ref={this.Dynamos} onChange={this.handleTextChange} value={this.state.EditDynamos} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            No. Of Controllers
                          </td>
                          <td>

                            <input type="text" name="PR" id="addControl" ref={this.NoOfControl} onChange={this.handleTextChange} value={this.state.EditNoOfControl} />

                          </td>

                        </tr>
                        <tr>



                        </tr>
                        <tr>

                          <td>
                            No Of SLSs
                          </td>
                          <td>

                            <input type="text" name="NoOfSLS" id="NoOfSLS" ref={this.NoOfSLS} onChange={this.handleTextChange} value={this.state.EditNoOfSLS} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            Nodes On DeltaV Network
                          </td>
                          <td>

                            <input type="text" name="Display" id="NodesOnDelta" ref={this.NodesDelta} onChange={this.handleTextChange} value={this.state.EditNodesOnDelta} />

                          </td>
                        </tr>

                        {/* <br>
                    </br> */}

                        {/*                    
                    <br></br> */}
                        {/* <tr>
                          <td>
                            Special Design
                          </td>
                          <td>

                            (Future Provision)

                          </td>
                          <td>
                            Safety System
                          </td>
                          <td>

                            (Future Provision)

                          </td>
                          <td></td>
                        </tr> */}
                        {/* <br></br> */}
                        {/* <tr>
                          <td>
                            Cabinet Type
                          </td>
                          <td>

                            (Future Provision)

                          </td>
                          <td>
                            Cabinet Size
                          </td>
                          <td>

                            (Future Provision)

                          </td>
                          <td></td>
                        </tr> */}
                        <tr>
                          <td>
                            <table>

                            </table>
                          </td>
                        </tr>

                        {/* <tr>

                             </tr>
                             <tr> 
                           
                            
                                
    
                             
                    </tr> */}
                      </tbody>
                    </table>
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisInfoArrow} as={Card.Header} eventKey="1" className="header">
                    <span className={this.state.AnalysisInfoDown === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                    Project Information<br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>

                    <table id="phase2Table" className="phase2Table">
                      <tr>
                        <td>
                          Top Level Risk Status<br></br>
                          This field will be updated from backend
                        </td>
                        <td>
                          <input type="text" id="TopRisk" width="70px" value={this.state.TopRisk} disabled placeholder=""></input>
                        </td>
                        <td>
                          Project Level Risk Status
                        </td>
                        <td><select className="AR-Select" id="ddlProjectRiskStatus" onChange={this.handleInputChange} value={this.state.ProjectRiskStatus} defaultValue={this.state.ProjectRiskStatus} >
                          <option value=""> Please Select</option>
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                        </select></td>
                      </tr>
                      <tr>


                      </tr>

                      <br></br>
                      <tr>

                        <td style={{ width: "200px" }}>  <input type="checkbox" name="chkPAS" id="PAS" onChange={this.handleInputChange} value={this.state.EditPAS} checked={this.state.PASChecked}  ></input>&nbsp;PAS</td>

                        <td style={{ width: "200px" }}>  <input type="checkbox" name="chkSIS" id="ChkSIS" onChange={this.handleInputChange} value={this.state.ChkSIS} checked={this.state.ChkSISChecked}  ></input>&nbsp;SIS</td>

                        <td style={{ width: "200px" }}> <input type="checkbox" name="chkEI" id="EI" onChange={this.handleInputChange} value={this.state.EditEI} checked={this.state.EIChecked}  ></input>&nbsp;E & I</td>

                        <td style={{ width: "200px" }}> <input type="checkbox" name="chkICSS" id="ICSS" onChange={this.handleInputChange} value={this.state.EditICSS} checked={this.state.ICSSChecked}   ></input>&nbsp;ICSS</td>

                        <td style={{ width: "200px" }}><input type="checkbox" name="chkRVO2" id="RVO2" onChange={this.handleInputChange} value={this.state.EditVO} checked={this.state.VOChecked} ></input>&nbsp;RVO2</td>

                      </tr>
                      <tr>
                        <td style={{ width: "200px" }}>  <input type="checkbox" name="chkPCSD" id="PCSD" onChange={this.handleInputChange} checked={this.state.PCSDChecked}  ></input>&nbsp;PCSD</td>
                        <td style={{ width: "200px" }}> <input type="checkbox" name="chkPDL" id="PDL" onChange={this.handleInputChange} value={this.state.EditPDL} checked={this.state.PDLChecked} ></input>&nbsp;PDL


                        </td>
                        <td style={{ width: "200px" }}> <input type="checkbox" name="chkDVLive" id="DVLive" onChange={this.handleInputChange} value={this.state.EditDVLive} checked={this.state.DVChecked}  ></input>&nbsp;DV Live</td>
                        <td style={{ width: "200px" }}> <input type="checkbox" name="chkCTO" id="CTO" onChange={this.handleInputChange} value={this.state.EditCTO} checked={this.state.CTOChecked} ></input>&nbsp;CTO</td>
                        <td><input type="checkbox" name="chkWireless" id="Wireless" onChange={this.handleInputChange} value={this.state.EditWireless} checked={this.state.WireChecked}  ></input>&nbsp;Wireless</td>


                      </tr>
                      <tr>
                        <td>  <input type="checkbox" name="chkCybersecurity" id="Cybersecurity" onChange={this.handleInputChange} value={this.state.EditCybersecurity} checked={this.state.CyberChecked}   ></input>&nbsp;Cyber Security</td>
                        <td>  <input type="checkbox" name="chkSyncade" id="Syncade" onChange={this.handleInputChange} value={this.state.EditSyncade} checked={this.state.SyncadeChecked}   ></input>&nbsp;Syncade</td>
                        <td><input type="checkbox" name="chkOSIPI" id="OSIPI" onChange={this.handleInputChange} value={this.state.EditOSIPI} checked={this.state.OSIChecked}  ></input>&nbsp;OSI PI</td>
                        <td>  <input type="checkbox" name="chkMHM" id="MHM" onChange={this.handleInputChange} value={this.state.EditMHM} checked={this.state.MHMChecked} ></input>&nbsp;MHM</td>
                        <td>  <input type="checkbox" name="chkTMS" id="TMS" onChange={this.handleInputChange} value={this.state.EditTMS} checked={this.state.TMSChecked}   ></input>&nbsp;TMS</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" name="chkFEED" id="FEED" onChange={this.handleInputChange} value={this.state.EditFeed} checked={this.state.FeedChecked}   ></input>&nbsp;FEED</td>


                        <td>  <input type="checkbox" name="chkConsultancy" id="Consultancy" onChange={this.handleInputChange} value={this.state.EditConsultancy} checked={this.state.EditCChecked} ></input>&nbsp;Consultancy</td>

                        <td> <input type="checkbox" name="chkiSolution" id="iSolution" onChange={this.handleInputChange} value={this.state.ISolution} checked={this.state.ISolChecked}  ></input>&nbsp;iSolution</td>
                        <td>  <input type="checkbox" name="chkResourceCertifications" id="ResourceCertifications" onChange={this.handleInputChange} value={this.state.EditResourceCertifications} checked={this.state.ResourceChecked}  ></input>&nbsp;Resource Certifications?</td>


                        <td> <input type="checkbox" name="chkLBPManagingFAT" id="LBPManagingFAT" onChange={this.handleInputChange} value={this.state.EditLBPManagingFAT} checked={this.state.LBPChecked}  ></input>&nbsp;LBP Managing FAT?</td>
                      </tr>





                      <br></br>






                    </table>
                    <table>
                      <tr>
                        <td>
                          DCS AI
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSAI" value={this.state.EditDCSAI} onChange={this.handleTextChange} />
                        </td>
                        <td style={{ width: "50px" }}></td>

                        <td>
                          DCS AO
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSAO" value={this.state.EditDCSAO} onChange={this.handleTextChange} />
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td>
                          DCS DI
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSDI" value={this.state.EditDCSDI} onChange={this.handleTextChange} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          DCS DO
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSDO" value={this.state.EditDCSDO} onChange={this.handleTextChange} />
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td>
                          SIS AI
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="SISAI" value={this.state.EditSISAI} onChange={this.handleTextChange} />
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td>
                          SIS AO
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="SISAO" value={this.state.EditSISAO} onChange={this.handleTextChange} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          SIS DO
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="SISDO" value={this.state.EditSISDO} onChange={this.handleTextChange} />
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td>
                          SIS DI
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="SISDI" value={this.state.EditSISDI} onChange={this.handleTextChange} />
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td>
                          Workstation Nodes
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="Workstation" onChange={this.handleTextChange} value={this.state.EditWorkstationNodes} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          No Of CIOC
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="CIO" onChange={this.handleTextChange} value={this.state.EditNoofCIOC} />
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td>
                          No Of CSLS
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="CSLS" onChange={this.handleTextChange} value={this.state.EditNoofCSLS} />
                        </td>
                        <td style={{ width: "50px" }}></td>

                        <td>Voting Logic</td>

                        <td><input type="text" name="Syscabinet" id="VL" onChange={this.handleTextChange} value={this.state.EditVotingLogic}></input></td>
                      </tr>
                      <tr>
                        <td>System Cabinets</td>

                        <td><input type="text" name="Syscabinet" id="SysCabinet" onChange={this.handleTextChange} value={this.state.EditSysCabinet}></input></td>
                        <td style={{ width: "50px" }}></td>
                        <td>Server Cabinets</td>

                        <td><input type="text" name="PDBCabinet" id="Server" onChange={this.handleTextChange} value={this.state.EditServerCabinet}></input></td>
                        <td style={{ width: "50px" }}></td>
                        <td>Marshalling Cabinets</td>

                        <td><input type="text" name="marshalling" id="Marshalling" onChange={this.handleTextChange} value={this.state.EditMarshallingCabinets}></input></td>
                      </tr>
                    </table>








                  </Card.Body>
                </Accordion.Collapse>

              </Accordion>
              <Accordion defaultActiveKey="1">
                <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisEEEArrow} as={Card.Header} eventKey="1" className="header">
                    <span className={this.state.AnalysisPEEArrow === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                    Project EE Categorization (To be filled by BM) <br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {
                      (this.state.IsVisibleSectionMsg == true) &&
                      <span style={{ color: "red" }}>PEE Categorization section is incomplete</span>
                    }
                    <table>
                      <tr>
                        <th ></th>
                        <th  ></th>
                        {
                          (this.state.IsVisibleSectionMsg == false) &&
                          <th colSpan={2} style={{ textAlign: 'left', border: "1px solid black;" }}>
                            <span className="RiskIndex">
                              Total Risk Index : &nbsp;&nbsp; {parseInt(this.state.RiskIndex_ProjectCT) + parseInt(this.state.RiskIndex_ProjectLD) + parseInt(this.state.RiskIndex_ProjectGP) + parseInt(this.state.RiskIndex_ExecutionFSO) + parseInt(this.state.RiskIndex_Execution) + parseInt(this.state.RiskIndex_ExecutionMulti) + parseInt(this.state.RiskIndex_EmersonHours) + parseInt(this.state.RiskIndex_EEECHours) + parseInt(this.state.RiskIndex_Budget) + parseInt(this.state.RiskIndex_Utilization) + parseInt(this.state.RiskIndex_Duration) + parseInt(this.state.RiskIndex_EEECInvolvement) + parseInt(this.state.RiskIndex_ProjectChart) + parseInt(this.state.RiskIndex_EEECScope) + parseInt(this.state.RiskIndex_EEECInvolvementScope) + parseInt(this.state.RiskIndex_FAT) + parseInt(this.state.RiskIndex_OverallPM) + parseInt(this.state.RiskIndex_OverallRisk) + parseInt(this.state.RiskIndex_OverallLead) + parseInt(this.state.RiskIndex_FSOLead) + parseInt(this.state.RiskIndex_ResourceSkill) + parseInt(this.state.RiskIndex_FSOSuccess) + parseInt(this.state.RiskIndex_NonStandard) + parseInt(this.state.RiskIndex_ResourcePlan) + parseInt(this.state.Non_Std) + parseInt(this.state.FSO_Success) + parseInt(this.state.EEEInvScope) + parseInt(this.state.EEEScope) + parseInt(this.state.OverallRisk) + this.state.FSO + this.state.WA + this.state.FSO_WA + this.state.FSO_OPEN + this.state.FSO_Tech + this.state.FSO_Oth + this.state.FSO_EEC}
                            </span>
                          </th>

                        }



                      </tr>
                      <tr className="MyClass">
                        <th style={{ border: "1px solid black;" }}>Parameters</th>
                        <th style={{ border: "1px solid black;" }}>Selection</th>
                        <th style={{ border: "1px solid black;" }}>Risk Index</th>
                        <th style={{ border: "1px solid black;" }}>Remarks</th>
                      </tr>

                      <tr>
                        <td style={{ width: '20%' }}>
                          Project Contract Type (Emerson)
                        </td>
                        <td style={{ width: '65%' }}>
                          <select name="RiskIndex_ProjectCT" value={this.state.PEEProjectContractType} className="ms-Dropdown-select" id="PEEProjectContractType" onChange={this.handleRiskChange}>
                            <option data-set="0">Please Select</option>
                            <option data-set="1" value="Workpack" className="1">Workpack</option>
                            <option data-set="2" value="T And M" className="2">T And M</option>
                            <option data-set="3" value="Fixed Price" className="3">Fixed Price</option>
                            <option data-set="4" value="MIB/L1" className="4">MIB/L1</option>
                            <option data-set="5" value="Other" className="5">Other</option>

                          </select>
                          {(this.state.RiskIndex_ProjectCT==0) && <span  className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        </td>
                        <td style={{ width: '5%', textAlign: "center" }}>{this.state.RiskIndex_ProjectCT}</td>

                        <td><textarea name="ProjectCT_Remarks" id="ProjectCT_Remarks" value={this.state.ProjectCT_Remarks} onChange={this.handleTextChange} rows={2} cols={30} />
                          {
                            (this.state.ISProjectCTOtherChecked == true) && <div style={{ color: "red" }}>Please fill remark field</div>
                          }
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: '20%' }}>
                          Project LD  (Emerson)
                        </td>
                        <td style={{ width: '45%' }}>
                          <select name="RiskIndex_ProjectLD" value={this.state.PEEProjectLD} className="ms-Dropdown-select" id="PEEProjectLD" onChange={this.handleRiskChange}>
                            <option data-set="0">Please Select</option>
                            <option data-set="1" value="Not Applicable" className="2">Not Applicable</option>
                            <option data-set="2" value="Applicable" className="1">Applicable</option>


                          </select>
                          {(this.state.RiskIndex_ProjectLD==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        </td>
                        <td style={{ width: '10%', textAlign: "center" }}>{this.state.RiskIndex_ProjectLD}</td>
                        <td><textarea name="ProjectLD_Remarks" id="ProjectCT_Remarks" value={this.state.ProjectLD_Remarks} onChange={this.handleTextChange} rows={2} cols={30}></textarea></td>
                      </tr>

                      <tr>
                        <td>
                          Project GP
                        </td>
                        <td>
                          <select name="RiskIndex_ProjectGP" value={this.state.PEEProjectGP} className="ms-Dropdown-select" id="PEEProjectGP" onChange={this.handleRiskChange}>
                            <option data-set="0">Please Select</option>
                            <option data-set="1" value="Regular GP" className="2">Regular GP</option>
                            <option data-set="4" value="Low GP" className="1">Low GP</option>
                            <option data-set="6" value="Negative GP" className="2">Negative GP</option>
                          </select>
                          {(this.state.RiskIndex_ProjectGP==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        </td>
                        <td style={{ width: '10%', textAlign: "center" }}>{this.state.RiskIndex_ProjectGP}</td>
                        <td><textarea value={this.state.ProjectGP_Remarks} name="ProjectGP_Remarks" onChange={this.handleTextChange} rows={2} cols={30}></textarea></td>
                      </tr>


                      <tr>
                        <td >
                          Execution Strategy and Model
                        </td>
                        <td colSpan={1} style={{ width: '50%' }}>
                          <table style={{ borderCollapse: "collapse", borderStyle: "thin", borderWidth: "1px", border: "1px solid darkgray;", width: "95%" }}>
                            <tr>
                              <th style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}><u> Execution</u></th>
                              <th style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}> <u>FSO</u></th>
                            </tr>
                            <tr>
                              <td style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}>
                                <select name="FSO" value={this.state.ExecutionFSOValue} id="ExecutionFSOValue" onChange={this.handleRisk_Change}>
                                  <option data-set="0" value=""> Please Select</option>
                                  <option data-set="0" value="Same"> FSO/EEEC Split:Same as defined in the Proposal</option>
                                  <option data-set="2" value="Increase"> FSO/EEEC Split:Decreased EEEC Utilization/Scope</option>
                                  <option data-set="4" value="Decrease"> FSO/EEEC Split:Increased EEEC Utilization/Scope</option>
                                  <option data-set="6" value="Additional"> Additional/Change in EEEC roles after Project Initiation</option>
                                </select>
                              </td>

                              <td style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}>
                                <select name="WA" value={this.state.ExecutionFSOValueWA} id="ExecutionFSOValueWA" onChange={this.handleRisk_Change}>
                                  <option data-set="0" value=""> Please Select</option>
                                  <option data-set="0" value="One World Area">One World Area</option>
                                  <option data-set="3" value="Multiple World Area"> Multiple World Area</option>


                                </select> <br/>
                             
                              </td>
                            </tr>




                            <tr>
                              <td colSpan={2} style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}>
                                <td>  <input type="checkbox" name="FSOWA" className="ISMultiEPCChecked" id="ISMultiEPC" checked={this.state.ISMultiEPCChecked} onChange={this.handleRiskChange} ></input>&nbsp;<label>Multi EPC</label></td>

                                <td>  <input type="checkbox" name="FSOWA" id="ISMultiEngg" checked={this.state.ISMultiEnggChecked} className="ISMultiEnggChecked" onChange={this.handleRiskChange}></input>&nbsp;<label>Multi Engg Center</label></td>

                                <td> <input type="checkbox" name="FSOWA" id="ISMultiAreaPhased" checked={this.state.ISMultiAreaPhasedChecked} className="ISMultiAreaPhasedChecked" onChange={this.handleRiskChange}></input>&nbsp;<label>Multi Area Phased Execution</label></td>

                                <td > <input type="checkbox" name="FSOWA" id="ISMultiAreaParallal" checked={this.state.ISMultiAreaParallalChecked} className="ISMultiAreaParallalChecked" onChange={this.handleRiskChange}></input>&nbsp;<label>Multi Area Parallel Execution</label></td>
                                <br></br>
                                <td ><input type="checkbox" name="FSOWA" id="ISAdditional" checked={this.state.ISAdditionalChecked} className="ISAdditionalChecked" onChange={this.handleRiskChange}></input>&nbsp;<label>Additional Roles</label></td>

                              </td> <br/>
                              { ((!this.state.ExecutionFSOValue)||(!_ExecutionFSOValueWA)) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                            </tr>



                          </table>
                        </td>
                        <td style={{ textAlign: "center" }}>

                          {this.state.FSO + this.state.WA + this.state.FSO_WA}
                        </td>
                        <td>
                          <textarea value={this.state.Strategy_Remarks} name="Strategy_Remarks" onChange={this.handleTextChange} rows={2} cols={30} ></textarea>
                        </td>
                      </tr>


                      <tr>
                        <td>
                          Emerson Budgeted Engineering hours </td>
                        <td>
                          <select value={this.state.PEEEmersonHours} name="RiskIndex_EmersonHours" className="ms-Dropdown-select" id="PEEEmersonHours" onChange={this.handleRiskChange} >
                            <option data-set="0" value="">Please Select</option>
                            <option data-set="1" value="<1,000" className="2">{"<"}1,000</option>
                            <option data-set="2" value=">1,000 and <5,000" className="2"> {">"}1,000 and {"<"}5,000   </option>
                            <option data-set="3" value=">5,000 and <10,000" className="2"> {">"}5,000 and {"<"}10,000   </option>
                            <option data-set="4" value=">10,000 and <25,000" className="2"> {">"}10,000 and {"<"}25,000 </option>
                            <option data-set="5" value=">25,000 and <50,000" className="2"> {">"}25,000 and {"<"}50,000 </option>
                            <option data-set="6" value=">50,000 and <75,000" className="2"> {">"}50,000 and {"<"}75,000 </option>
                            <option data-set="7" value=">75,000 and <100,000" className="2"> {">"}75,000 and {"<"}100,000 </option>
                            <option data-set="8" value=">100,000" className="2"> {">"}100,000  </option>
                            <option data-set="9" value="Not Available" className="2">Not Available</option>
                          </select>
                          {(this.state.RiskIndex_EmersonHours==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}

                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_EmersonHours}
                        </td>
                        <td>
                          <textarea value={this.state.Emerson_Remarks} name="Emerson_Remarks" onChange={this.handleTextChange} rows={2} cols={30} ></textarea>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          EEEC Budgeted Engineering hours </td>
                        <td>
                          <select value={this.state.PEEEEECHours} name="RiskIndex_EEECHours" id="PEEEEECHours" className="ms-Dropdown-select" onChange={this.handleRiskChange} >
                            <option data-set="0" value="">Please Select</option>
                            <option data-set="1" value="<1,000" className="2">{"<"}1,000</option>
                            <option data-set="2" value=">1,000 and <5,000" className="2"> {">"}1,000 and {"<"}5,000   </option>
                            <option data-set="3" value=">5,000 and <10,000" className="2"> {">"}5,000 and {"<"}10,000   </option>
                            <option data-set="4" value=">10,000 and <25,000" className="2"> {">"}10,000 and {"<"}25,000 </option>
                            <option data-set="5" value=">25,000 and <50,000" className="2"> {">"}25,000 and {"<"}50,000 </option>
                            <option data-set="6" value=">50,000 and <75,000" className="2"> {">"}50,000 and {"<"}75,000 </option>
                            <option data-set="7" value=">75,000 and <100,000" className="2"> {">"}75,000 and {"<"}100,000 </option>
                            <option data-set="8" value=">100,000" className="2"> {">"}100,000  </option>
                            <option data-set="9" value="Not Available" className="2">Not Available</option>
                          </select>
                          {(this.state.RiskIndex_EEECHours==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_EEECHours}
                        </td>
                        <td>
                          <textarea value={this.state.EEECHours_Remarks} name="EEECHours_Remarks" onChange={this.handleTextChange} rows={2} cols={30} ></textarea>
                        </td>
                      </tr>

                      <tr>
                        <td> Adequacy of Budget & Schedule</td>
                        <td>
                          <select value={this.state.PEEBudget} name="RiskIndex_Budget" className="ms-Dropdown-select" id="PEEBudget" onChange={this.handleRiskChange} >
                            <option data-set="0">Please Select</option>
                            <option data-set="1" value="Adequate Budget and Schedule" className="2"> Adequate Budget and Schedule</option>
                            <option data-set="2" value="Budget Constraint" className="2">Budget Constraint</option>
                            <option data-set="2" value="Schedule Constraint" className="2">Schedule Constraint</option>
                            <option data-set="6" value="Budget and Schedule Constraint" className="2">Budget and Schedule Constraint</option>
                            <option data-set="8" value="Not Known" className="2"> Not Known</option>

                          </select>
                          {(this.state.RiskIndex_Budget==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_Budget}
                        </td>
                        <td>
                          <textarea value={this.state.Budget_Remarks} name="Budget_Remarks" onChange={this.handleTextChange} rows={2} cols={30} ></textarea>
                        </td>
                      </tr>


                      <tr>
                        <td>
                          EEEC Utilization (Engineering)
                        </td>
                        <td>
                          <select name="RiskIndex_Utilization" value={this.state.PEEUtilization} className="ms-Dropdown-select" id="PEEUtilization" onChange={this.handleRiskChange} >
                            <option data-set="0" value="">Please Select</option>
                            <option data-set="1" value="<30%" className="2">  {"<"}30% </option>
                            <option data-set="2" value=">30% And <35%" className="2"> {">"}30% And {"<"}35%  </option>
                            <option data-set="3" value=">35% And <50%" className="2"> {">"}35% And {"<"}50% </option>
                            <option data-set="4 " value=">50% And <70%" className="2"> {">"}50% And {"<"}70% </option>
                            <option data-set="5" value=">70%" className="2"> {">"}70% </option>
                          </select>

                          {(this.state.RiskIndex_Utilization==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_Utilization}
                        </td>
                        <td>
                          <textarea value={this.state.Utilization_Remarks} name="Utilization_Remarks" onChange={this.handleTextChange} rows={2} cols={30} ></textarea>
                        </td>

                      </tr>

                      <tr>
                        <td>Execution Duration</td>
                        <td> <select value={this.state.PEEDuration} name="RiskIndex_Duration" className="ms-Dropdown-select" id="PEEDuration" onChange={this.handleRiskChange} >
                          <option data-set="0">Please Select</option>
                          <option data-set="1" value="Normal" className="2">Normal</option>
                          <option data-set="2" value="Fast Track" className="2">Fast Track</option>

                        </select>
                        
                        {(this.state.RiskIndex_Duration==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_Duration}
                        </td>
                        <td>
                          <textarea value={this.state.Duration_Remarks} name="Duration_Remarks" onChange={this.handleTextChange} rows={2} cols={30} ></textarea>
                        </td>
                      </tr>

                      <tr>
                        <td>Time of EEEC Involvement</td>
                        <td> <select value={this.state.PEEInvolve} name="RiskIndex_EEECInvolvement" className="ms-Dropdown-select" id="PEEInvolve" onChange={this.handleRiskChange} >
                          <option data-set="0">Please Select</option>
                          <option data-set="1" value="Planned Late Involvement" className="2">Planned Late Involvement</option>
                          <option data-set="3" value="Same as FSO" className="2">Same as FSO</option>
                          <option data-set="5" value="Unexpected Requirement" className="2">Unexpected Requirement</option>

                        
                        </select>
                        {(this.state.RiskIndex_EEECInvolvement==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_EEECInvolvement}
                        </td>
                        <td>
                          <textarea value={this.state.EEECInvolve_Remarks} name="EEECInvolve_Remarks" onChange={this.handleTextChange} rows={2} cols={30} ></textarea>
                        </td>
                      </tr>


                      <tr>
                        <td>
                          Project Organisation Chart
                        </td>
                        <td>
                          <select value={this.state.PEEOrgChart} name="RiskIndex_ProjectChart" className="ms-Dropdown-select" id="PEEOrgChart" onChange={this.handleRiskChange} >
                            <option data-set="0">Please Select</option>
                            <option data-set="1" value="Well Defined Structure" className="2">Well Defined Structure</option>
                            <option data-set="2" value="Multiple Roles per resource" className="2">Multiple Roles per resource</option>
                            <option data-set="4" value="Resource allocation managed by FSO" className="2">Resource allocation managed by FSO</option>
                          </select>

                          {(this.state.RiskIndex_ProjectChart==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_ProjectChart}
                        </td>
                        <td>
                          <textarea value={this.state.ProjectOrg_Remarks} name="ProjectOrg_Remarks" onChange={this.handleTextChange} rows={2} cols={30}></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Overall Risk Ranking
                        </td>
                        <td>
                          <select value={this.state.PEERiskRanking} name="OverallRisk" className="ms-Dropdown-select" id="PEERiskRanking" onChange={this.handleRiskChange} >
                            <option data-set="0" value="">Please Select</option>
                            <option data-set="1" value="Low" className="2"> Low </option>
                            <option data-set="4" value="Medium" className="2"> Medium</option>
                            <option data-set="6" value="High" className="2">High  </option>
                          </select>

                          
                          {(this.state.OverallRisk==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.OverallRisk}
                        </td>
                        <td>
                          <textarea value={this.state.OverallRiskRanking_Remarks} name="OverallRiskRanking_Remarks" id="OverallRiskRanking_Remarks" onChange={this.handleTextChange} rows={2} cols={30}></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          EEEC Scope
                        </td>
                        <td>
                          <div style={{ width: "100%", border: "1px solid darkgray", padding: "10px", marginTop: "7px" }}>

                            <input type="checkbox" name="EEEScope" id="ISFEED" checked={this.state.ISFEEDChecked} className="ISFEEDChecked" onChange={this.handleRiskChange}></input> &nbsp; Feed  <br></br>
                            <input type="checkbox" name="EEEScope" id="ISExecute" checked={this.state.ISExecuteChecked} className="ISExecuteChecked" onChange={this.handleRiskChange}></input> &nbsp;Execute  <br></br>
                            <input type="checkbox" name="EEEScope" id="ISFAT" checked={this.state.ISFATChecked} className="ISFATChecked" onChange={this.handleRiskChange}></input>&nbsp; FAT  <br></br>
                            <input type="checkbox" name="EEEScope" id="ISSAT" checked={this.state.ISSATChecked} className="ISSATChecked" onChange={this.handleRiskChange}></input>&nbsp; SAT  <br></br>

                          </div>
                          {((this.state.EEEScope==2) &&(!this.state.ISFATChecked)) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}

                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.EEEScope}
                        </td>
                        <td>
                          <textarea value={this.state.EEECScope_Remarks} name="EEECScope_Remarks" onChange={this.handleTextChange} rows={2} cols={30}></textarea>
                        </td>
                      </tr>


                      <tr>
                        <td>
                          EEEC Involvement and Project Scope
                        </td>
                        <td>
                          <div id="EEECInvolvement" style={{ width: "100%", border: "1px solid darkgray", padding: "10px", marginTop: "7px" }}>
                            <table style={{ width: "100%" }} >
                              <tr>
                                <td style={{ width: "20px" }}><input type="checkbox" name="EEECInvScope" id="ISPASBase" checked={this.state.ISPASBaseChecked} className="ISPASBaseChecked" onChange={this.handleRiskChange} /></td><td>PAS Base DB,Interlocks,Graphics  </td>
                                <td style={{ width: "20px" }}><input type="checkbox" name="EEECInvScope" id="ISPASCustom" checked={this.state.ISPASCustomChecked} className="ISPASCustomChecked" onChange={this.handleRiskChange} /></td><td>PAS Custom Logic,Sequences </td>
                                <td style={{ width: "20px" }}><input type="checkbox" name="EEECInvScope" id="ISPASComplex" checked={this.state.ISPASComplexChecked} className="ISPASComplexChecked" onChange={this.handleRiskChange} /></td><td>PAS Complex Logic  </td>
                              </tr>

                              <tr>
                                <td style={{ width: "20px" }}><input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISPASBatch" checked={this.state.ISPASBatchChecked} className="ISPASBatchChecked" /></td><td>PAS Batch  </td>
                                <td style={{ width: "20px" }}><input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISPASThird" checked={this.state.ISPASThirdChecked} className="ISPASThirdChecked" /></td><td>PAS Third Party Integration </td>
                                <td style={{ width: "20px" }}><input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISOtherPAS" checked={this.state.ISOtherPASChecked} className="ISOtherPASChecked" /></td><td>Other PAS  </td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td style={{ width: "20px" }}><input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISMigration" checked={this.state.ISMigrationChecked} className="ISMigrationChecked" /></td><td>Migration With Batch </td>
                              </tr>
                              <tr>
                                <td>
                                  <br></br>
                                </td>
                              </tr>

                              <tr>
                                <td style={{ width: "20px" }}> <input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISSISESD" checked={this.state.ISSISESDChecked} className="ISSISESDChecked" /></td><td>SIS ESD  </td>
                                <td style={{ width: "20px" }}> <input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISSISFGS" checked={this.state.ISSISFGSChecked} className="ISSISFGSChecked" /></td><td>SIS FGS </td>
                                <td style={{ width: "20px" }}><input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISSISBMS" checked={this.state.ISSISBMSChecked} className="ISSISBMSChecked" /></td><td>SIS BMS   </td>
                              </tr>
                              <tr>
                                <td style={{ width: "20px" }}><input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISSISPASINT" checked={this.state.ISSISPASINTChecked} className="ISSISPASINTChecked" /> </td><td>SIS/PAS Integration </td>
                                <td style={{ width: "20px" }}><input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISOTHERSISINT" checked={this.state.ISOTHERSISINTChecked} className="ISOTHERSISINTChecked" /></td><td>Other SIS Integration </td>
                              </tr>
                              <tr>
                                <td>
                                  <br></br>
                                </td>
                              </tr>

                              <tr>
                                <td style={{ width: "20px" }}> <input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISPASCAB" checked={this.state.ISPASCABChecked} className="ISPASCABChecked" /></td><td>PAS Cabinets  </td>
                                <td style={{ width: "20px" }}><input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISSISCAB" checked={this.state.ISSISCABChecked} className="ISSISCABChecked" /></td><td>SIS Cabinets  </td>

                              </tr>
                              <tr>
                                <td>
                                  <br></br>
                                </td>
                              </tr>

                              <tr>
                                <td style={{ width: "20px" }}> <input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISOtherBU" checked={this.state.ISOtherBUChecked} className="ISOtherBUChecked" /> </td><td>Other BU's and Engg Support</td>
                                <td style={{ width: "20px" }}> <input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISInterface" checked={this.state.ISInterfaceChecked} className="ISInterfaceChecked" /></td><td>Interface Lead  </td>
                                <td style={{ width: "20px" }}><input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISDocControl" checked={this.state.ISDocControlChecked} className="ISDocControlChecked" /></td><td>Document Controller  </td>
                              </tr>
                              <tr>
                                <td style={{ width: "20px" }} >  <input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISTechWriter" checked={this.state.ISTechWriterChecked} className="ISTechWriterChecked" /></td><td>Technical Writer  </td>
                                <td style={{ width: "20px" }}><input type="checkbox" onChange={this.handleRiskChange} name="EEECInvScope" id="ISOTS" checked={this.state.ISOTSChecked} className="ISOTSChecked" /></td><td>OTS   </td>
                                <td style={{ width: "20px" }}><input type="checkbox" name="EEECInvScope" onChange={this.handleRiskChange} id="ISWireless" checked={this.state.ISWirelessChecked} className="ISWirelessChecked" /></td><td>Wireless  </td>
                              </tr>
                              <tr>

                                <td style={{ width: "20px" }}><input type="checkbox" name="EEECInvScope" onChange={this.handleRiskChange} id="ISAgile" checked={this.state.ISAgileChecked} className="ISAgileChecked" /> </td><td>Agile OPS  </td>
                                <td style={{ width: "20px" }}><input type="checkbox" id="ISOther" onChange={this.handleRiskChange} name="EEECInvScope" checked={this.state.ISOtherChecked} className="ISOtherChecked" /></td><td>Other </td>
                              </tr>

                             <tr>
                               <td colSpan={3}>  {(this.state.EEEInvScope==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}</td>
                             </tr>

                            </table>
                          </div>
                        
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.EEEInvScope}
                        </td>
                        <td>

                          <textarea value={this.state.EECInvolvScope_Remarks} name="EECInvolvScope_Remarks" onChange={this.handleTextChange} rows={2} cols={30}></textarea>

                          {
                            ((this.state.ISPASOtherRemarkChecked == true) || (this.state.ISISRemarkChecked == true) || (this.state.ISOthPASE == true)) && <div style={{ color: "red" }}>Please fill remark field</div>
                          }
                        </td>

                      </tr>
                      <tr>
                        <td>FAT Engagement</td>
                        <td><select value={this.state.PEEFAT} name="RiskIndex_FAT" className="ms-Dropdown-select" id="PEEFAT" onChange={this.handleRiskChange}>
                          <option data-set="0" value="" >Please Select</option>
                          <option data-set="1" value="Face to Face FAT">Face to Face FAT</option>
                          <option data-set="2" value="Remote FAT">Remote FAT</option>

                        </select>
                        {(this.state.RiskIndex_FAT==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_FAT}
                        </td>
                        <td>
                          <textarea name="FAT_Remarks" value={this.state.FAT_Remarks} onChange={this.handleTextChange} rows={2} cols={30}></textarea>
                        </td>


                      </tr>

                      <tr>
                        <td>Overall PM</td>
                        <td><select value={this.state.PEEOverall} name="RiskIndex_OverallPM" id="PEEOverall" className="ms-Dropdown-select" onChange={this.handleRiskChange}>
                          <option data-set="0">Please Select</option>
                          <option value="FSO" data-set="1">FSO</option>
                          <option value="EEEC + FSO" data-set="2">EEEC + FSO</option>
                          <option value="EEEC" data-set="3">EEEC</option>

                        </select>
                        {(this.state.RiskIndex_OverallPM==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_OverallPM}
                        </td>
                        <td>
                          <textarea value={this.state.OverallPM_Remarks} name="OverallPM_Remarks" onChange={this.handleTextChange} rows={2} cols={30}></textarea>
                        </td>

                      </tr>
                      <tr>
                        <td>Overall Lead and Other LE's</td>
                        <td>
                          <select value={this.state.PEELead} name="RiskIndex_OverallLead" id="PEELead" className="ms-Dropdown-select" onChange={this.handleRiskChange}>
                            <option value="" data-set="0">Please Select</option>
                            <option value="FSO" data-set="1">FSO</option>
                            <option value="EEEC + FSO" data-set="2">EEEC + FSO</option>
                            <option value="EEEC(Local+Remote)" data-set="3">EEEC(Local+Remote)</option>
                            <option value="EEEC (Remote)" data-set="4">EEEC (Remote)</option>
                            <option value="No Liaison in FSO" data-set="5">No Liaison in FSO</option>
                          </select>
                          {(this.state.RiskIndex_OverallLead==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_OverallLead}
                        </td>
                        <td>
                          <textarea value={this.state.LeadRemarks} onChange={this.handleTextChange} name="LeadRemarks" rows={2} cols={30}></textarea>
                        </td>
                      </tr>

                      <tr>
                        <td> FSO PM and Leads</td>
                        <td>
                          <table style={{ width: "100%", border: "1px solid lightgray" }}>

                            <tr style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}>
                              <tr>
                                <th style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}><u> Open</u></th>
                                <th style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}> <u>Technical</u></th>
                                <th style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}>Other</th>
                                <th style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}>EEEC Experience</th>
                              </tr>
                              <tr>
                                <td style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}>
                                  <select value={this.state.FSOPMLeadsOpen} id="FSOPMLeadsOpen" name="FSO_OPEN" onChange={this.handleRisk_Change}>
                                    <option data-set="0" value=""> Please Select</option>
                                    <option data-set="0" value="Accommodative">Accommodative</option>
                                    <option data-set="3" value="Non-Accommodative">Non-Accommodative</option>
                                    <option data-set="6" value="Difficult">Difficult to classify</option>

                                  </select>
                                </td>
                                <td style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}>
                                  <select value={this.state.FSOPMLeadsTechnical} id="FSOPMLeadsTechnical" name="FSO_Tech" onChange={this.handleRisk_Change}>
                                    <option data-set="0"> Please Select</option>
                                    <option data-set="0">Technical</option>
                                    <option data-set="3">Non-Technical</option>
                                    <option data-set="6">Difficult to classify</option>
                                  </select>
                                </td>
                                <td style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}>
                                  <select value={this.state.FSOPMLeadsOther} id="FSOPMLeadsOther" name="FSO_Oth" onChange={this.handleRisk_Change}>
                                    <option data-set="0"> Please Select</option>
                                    <option data-set="0">Proactive</option>
                                    <option data-set="3">Reactive</option>
                                    <option data-set="6">Difficult to classify</option>
                                  </select>
                                </td>
                                <td style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}>
                                  <select value={this.state.FSOPMLeadsEEECExp} id="FSOPMLeadsEEECExp" name="FSO_EEC" onChange={this.handleRisk_Change}>
                                    <option data-set="0"> Please Select</option>
                                    <option data-set="0">Worked with EEEC</option>
                                    <option data-set="3">New to EEEC </option>
                                    <option data-set="6">Difficult to classify</option>
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={3}>  {((!_FSOPMLeadsOpen) ||(!_FSOPMLeadsTechnical) ||(!_FSOPMLeadsOther) ||(!_FSOPMLeadsEEECExp)) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}</td>
                            
                              </tr>
                            </tr>
                          </table>


                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.FSO_OPEN + this.state.FSO_Tech + this.state.FSO_Oth + this.state.FSO_EEC}
                        </td>
                        <td>
                          <textarea value={this.state.FSOPM_Remarks} onChange={this.handleTextChange} name="FSOPM_Remarks" rows={2} cols={30}></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td> Resource Skillset</td>
                        <td>

                          <select value={this.state.PEEResource} name="RiskIndex_ResourceSkill" id="PEEResource" className="ms-Dropdown-select" onChange={this.handleRiskChange} >
                            <option data-set="0">Please Select</option>
                            <option data-set="1" value="No Special Requirement" className="2"> No Special Requirement </option>
                            <option data-set="2" value="Blended Mix" className="2"> Blended Mix</option>
                            <option data-set="4" value="Special Skills" className="2">Special Skills  </option>
                            <option data-set="6" value="Resource with Process background" className="2">Resource with Process background  </option>
                          </select>
                          {(this.state.RiskIndex_ResourceSkill==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_ResourceSkill}
                        </td>
                        <td>
                          <textarea onChange={this.handleTextChange} value={this.state.ResourceSkill_Remarks} name="ResourceSkill_Remarks" rows={2} cols={30}></textarea>
                        </td>

                      </tr>
                      <tr>
                        <td>Resource Plan and Project Loading Chart</td>
                        <select value={this.state.PEEProjectLoading} name="RiskIndex_ResourcePlan" id="PEEProjectLoading" className="ms-Dropdown-select" onChange={this.handleRiskChange} >
                          <option data-set="0">Please Select</option>
                          <option data-set="1" value="Yes" className="2"> Yes </option>
                          <option data-set="2" value="No" className="2"> No</option>
                          <option data-set="3" value="To Be Defined Later" className="2">To Be Defined Later  </option>

                        </select>

                        {(this.state.RiskIndex_ResourcePlan==0) && <span className='ErrorMsg' style={{color : "red"}}>Please fill out this field</span>}
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_ResourcePlan}
                        </td>
                        <td>
                          <textarea name="ResourcePlan_Remarks" value={this.state.ResourcePlan_Remarks} rows={2} cols={30} onChange={this.handleTextChange}> </textarea>
                        </td>
                      </tr>



                      <tr>
                        <td>What FSO considers as success</td>

                        <td>
                          <div style={{ width: "100%", border: "1px solid darkgray", padding: "10px", marginTop: "7px" }}>
                            <input type="checkbox" id="ISTimely" name="FSOSuccess" onClick={this.handleRiskChange} checked={this.state.ISTimelyChecked} className="ISTimelyChecked" /> &nbsp;Timely Delivery <br></br>
                            <input type="checkbox" id="ISNoBudget" name="FSOSuccess" onClick={this.handleRiskChange} checked={this.state.ISNoBudgetChecked} className="ISNoBudgetChecked" /> &nbsp;No Budget Overrun<br></br>
                            <input type="checkbox" id="ISFATReady" name="FSOSuccess" onClick={this.handleRiskChange} checked={this.state.ISFATReadyChecked} className="ISFATReadyChecked" /> &nbsp;FAT Ready Deliverables<br></br>
                            <input type="checkbox" id="ISRework" name="FSOSuccess" onClick={this.handleRiskChange} checked={this.state.ISReworkChecked} className="ISReworkChecked" /> &nbsp;Minimal Rework after FAT {"<"}1% of Budget
                            <br></br>
                            <input type="checkbox" id="ISMaintain" name="FSOSuccess" onClick={this.handleRiskChange} checked={this.state.ISMaintainChecked} className="ISMaintainChecked" /> &nbsp;Maintain or Improve Sales GP<br></br>
                           
                          </div>

                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.FSO_Success}
                        </td>
                        <td>
                                <textarea value={this.state.FSOSuccess_Remarks} onChange={this.handleTextChange} name="FSOSuccess_Remarks" rows={2} cols={30}></textarea>
                        </td>
                      </tr>

                      <tr>

                        <td> Non Standard Requirements</td>
                        <div id="EEECInvolvement" style={{ width: "95%", border: "1px solid darkgray", padding: "10px", marginTop: "7px" }}>
                          <table style={{ width: "100%" }}>
                            <tr>
                              <td><input type="checkbox" id="ISImplement" name="ChkNonStandardRequirements" onClick={this.handleRiskChange} checked={this.state.ISImplementChecked} className="ISImplementChecked" /> </td><td>Implement Batch without using Batch Licences </td> <br></br>
                              <td><input type="checkbox" id="ISUSESIS" name="ChkNonStandardRequirements" onClick={this.handleRiskChange} checked={this.state.ISUSESISChecked} className="ISUSESISChecked" /> </td><td>Use of SIS Blocks in PAS Control Module</td> <br></br>

                              <td><input type="checkbox" id="ISNonPCSD" name="ChkNonStandardRequirements" onClick={this.handleRiskChange} checked={this.state.ISNonPCSDChecked} className="ISNonPCSDChecked" /></td><td>Use of Non-PCSD Library</td> <br></br>
                            </tr>
                            <tr>
                              <td><input type="checkbox" id="ISGraphics" name="ChkNonStandardRequirements" onClick={this.handleRiskChange} checked={this.state.ISGraphicsChecked} className="ISGraphicsChecked" /></td><td>Graphics for custom resolutions</td> <br></br>
                              <td><input type="checkbox" id="ISNewProd" name="ChkNonStandardRequirements" onClick={this.handleRiskChange} checked={this.state.ISNewProdChecked} className="ISNewProdChecked" /> </td><td>New Product/Technology</td> <br></br>
                              <td><input type="checkbox" id="ISOdd" name="ChkNonStandardRequirements" onClick={this.handleRiskChange} checked={this.state.ISOddChecked} className="ISOddChecked" /> </td><td>Odd Shifts  </td><br></br>
                            </tr>
                            <tr>

                              <td><input type="checkbox" id="ISIP" name="ChkNonStandardRequirements" onClick={this.handleRiskChange} checked={this.state.ISIPChecked} className="ISIPChecked" /> </td><td>IP/Clause</td><br></br>
                              <td> <input type="checkbox" id="ISCust" name="ChkNonStandardRequirements" onClick={this.handleRiskChange} checked={this.state.ISCustChecked} className="ISCustChecked" /> </td><td>Customer Demos</td><br></br>
                            </tr>
                            <tr>
                              <td> <input type="checkbox" id="ISDev" name="ChkNonStandardRequirements" onClick={this.handleRiskChange} checked={this.state.ISDevChecked} className="ISDevChecked" /> </td><td>Develope Details FS based on limited information</td><br></br>
                              <td><input type="checkbox" id="ISOth" name="ChkNonStandardRequirements" onClick={this.handleRiskChange} checked={this.state.ISOthChecked} className="ISOthChecked" /> </td><td>Other</td> <br></br>

                            </tr>
                            <tr>
                            
                            </tr>
                          </table>
                        </div>
                        <td style={{ textAlign: "center" }}>
                          {this.state.Non_Std}
                        </td>
                        <td>
                          <textarea onChange={this.handleTextChange} value={this.state.NonStd_Remarks} name="NonStd_Remarks" rows={2} cols={30}></textarea>
                          <div>
                            {
                             (this.state.ISOtherRemarkChecked == true) && <div style={{ color: "red" }}>Please fill remark field</div>
                            }
                          </div>
                        </td>

                      </tr>
                      <tr>
                        <td>   Risk Management Training completed by PM and LE's</td>
                        <td> <select id="ddlRiskTraining" name="ddlRiskTraining" value={this.state.ddlRiskTraining} onChange={this.handleInputChange}>
                            <option value="">Please select</option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                          </select></td>
                      </tr>
                      <tr> <td></td>
                  

                      </tr>



                    </table>

                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              







           {/* <Accordion defaultActiveKey="1">
           <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisTrackArrow} as={Card.Header} eventKey="1" className="header">
                    <span className={this.state.AnalysisTrackDown == "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                    Project Review Tracking<br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                     <table style={{width:"100%"}}>
                       
                       <tr>
                         <td>PM/BM last review conducted on</td>
                         <td>

                              <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                                  showMonthPickerAsOverlay={true} highlightCurrentMonth={true} maxDate={this.state.today} className="PMLastReview" id="PMLastReview" onSelectDate={this.handleDateEvent("PMLastReview")} value={this.state.PMLastReview} formatDate={Helper._onFormatDate} parseDateFromString={this._RRDateFromString} onChange={this.handleTextChange}></DatePicker>

                            </td>
                         <td>Review Comments</td>
                         <td><textarea id="PMLastReviewComments" value={this.state.PMLastReviewComments} name="PMLastReviewComments" className='PMLastReviewComments'  onChange={this.handleTextChange}/></td>
                       </tr>
                       <tr>
                         <td>BM/WA Director last review conducted on</td>
                         <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} highlightCurrentMonth={true} maxDate={this.state.today} className="WALastReview" id="WALastReview" onSelectDate={this.handleDateEvent("WALastReview")} value={this.state.WALastReview} formatDate={Helper._onFormatDate} parseDateFromString={this._RRDateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>
                         <td>Review Comments</td>
                         <td><textarea id="WALastReviewComments" name="WALastReviewComments" value={this.state.WALastReviewComments} className='WALastReviewComments'  onChange={this.handleTextChange}/></td>
                       </tr>
                     </table>
                  </Card.Body>
                </Accordion.Collapse>
           </Accordion>
 */}

              <Accordion defaultActiveKey="1">
                <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisTrackArrow} as={Card.Header} eventKey="1" className="header">
                    <span className={this.state.AnalysisTrackDown == "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                    Project Tracking<br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <table className="FrequentEntry" id="addFrequentEntry">
                      <tbody>
                        {/* <tr>
                          <td colSpan={3}>

                            <a id="rootbar"> <b><u>Click here to add Risks and Opportunities.</u></b></a></td>
                        </tr> */}
                        <tr>
                          <td></td>
                        </tr>
                        <tr>
                          <td style={{ paddingBottom: "20px" }}> Agreed Budget <b><span style={{ color: "red" }}>*</span></b> </td>
                          <td >

                            <input type='number' className="AgreedBudget" id="addAgreedBudget" ref={this.AgreedBudget} step="0.01" onChange={this.handleTextChange} value={this.state.EditAgreedBudget} />
                            <br></br><label>(Hours agreed with EPM FSO)</label></td>

                          <td> Internal Budget </td>
                          <td >

                            <input type='number' className="InternalBudget" id="addInternalBudget" step="0.01" ref={this.InternalBudget} onChange={this.handleTextChange} value={this.state.EditInternalBudget} />
                            <br></br><label>(Internal budget agreed with the Resource Manager)</label></td>
                        </tr>
                        <tr>
                          <td> Actuals </td>
                          <td >

                            <input type='number' className="Actuals" id="addActuals" step="0.01" ref={this.Actuals} onChange={this.handleTextChange} value={this.state.EditActuals} />
                          </td>

                          <td> EAC </td>
                          <td>

                            <input type='number' className="ETC" id="addETC" ref={this.ETC} step="0.01" onChange={this.getExpectedHours} value={this.state.EditETC} />
                          </td>
                        </tr>
                        <tr>
                          <td> Progress % </td>
                          <td >

                            <input type='number' className="Progress" id="addProgress" step="0.01" ref={this.Progress} onChange={this.handleTextChange} max="100" value={this.state.EditProgress} />
                          </td>

                          <td> Expected Hours Per Week </td>
                          <td>

                            <input type='number' className="ExpHours" id="addExpHours" ref={this.ExpHours} value={this.state.EditExpectedHours} onChange={this.handleTextChange} style={{ opacity: 0.5 }} readOnly />
                          </td>
                        </tr>
                        <tr>
                          <td>Actual End Period </td>
                          <td>

                            <input type='text' className="ActualEnd" id="addActualEnd" ref={this.ActualEnd} onChange={this.handleTextChange} value={this.state.EndFinPeriod} style={{ opacity: 0.5 }} onKeyPress={() => { return false }} />
                          </td>

                          <td>
                            Budget Deviation
                          </td>
                          <td><table  >
                            <tr>

                              <td  >

                                <input type='text' className="UpdateDeviation" id="addBudgetDeviation" ref={this.BudgetDev} onChange={this.handleTextChange} value={this.state.EditBudgetDeviation} disabled />
                                <label> &nbsp; &nbsp;2% of Agreed Budget  </label> </td>
                            </tr>
                          </table>
                          </td>

                        </tr>
                        <tr>
                          <td>
                            Budget Change
                          </td>
                          <td>
                            <table>
                              <tr>

                                <td  >      <input type='text' className="addProgressDeviation" id="addBudgetChange" ref={this.BudgetChange} onChange={this.handleTextChange} value={this.state.EditBudgetChange} /> <label> &nbsp;Hours</label></td>
                              </tr>
                            </table>
                          </td>

                          <td>

                            Schedule Change
                          </td>
                          <td>
                            <table  >
                              <tr>

                                <td>

                                  <input type='text' className="addProgressDeviation" id="addScheduleChange" ref={this.ScheduleChange} onChange={this.handleTextChange} value={this.state.EditScheduleChange} />
                                  &nbsp; <label>Days</label>  </td>
                              </tr>
                            </table>

                          </td>
                        </tr>
                        <tr>

                          <td>
                            Progress Deviation
                          </td>
                          <td>
                            <table  >
                              <tr>

                                <td  >

                                  <input type='text' className="addProgressDeviation" id="addProgressDeviation" ref={this.ProgressDev} onChange={this.handleTextChange} value={this.state.EditProgressDeviation} />
                                  &nbsp;   <label>Hours </label>  </td>
                              </tr>
                            </table>

                          </td>

                          <td>
                            Update Frequency
                          </td>
                          <td>
                            <table >
                              <tr>

                                <td  >
                                  <input type='text' className="addProgressDeviation" id="addUpdateFrequenct" ref={this.UpdateFreq} onChange={this.handleTextChange} value={this.state.EditUpdateFrequency} />
                                  <label> &nbsp;  Days</label> </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <tr>
                          <td> Status </td>
                          <td colSpan={3}>
                            <select className="ms-Dropdown-select" ref={this.Status} id="ddlStatus" onChange={this.handleInputChange} defaultValue={this.state.EditStatus} value={this.state.EditStatus}>
                              {/* <option>WIP</option>
                                                   <option>On Hold</option>
                                                   <option>Shelved</option>
                                                   <option hidden>Delivered</option>
                                                   <option hidden>Closed</option> */}

                            </select>  "Delivered" only after entry of Actual End Date. "Closed" only after Project close-out activities are completed.</td>
                        </tr>
                        <tr>
                          <td>Remark </td>
                          <td>

                            <textarea className="Remark" id="addRemark" ref={this.Remark} onChange={this.handleTextChange} value={this.state.EditRemark} cols={42} rows={5} />
                          </td>
                        </tr>

                        <br></br>


                        <br></br>
                        <br></br>


                        <tr>
                          <td>
                            Risk Register Updated
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} highlightCurrentMonth={true} maxDate={this.state.today} className="addActualEndDate" id="RRDate" onSelectDate={this.handleDateEvent("RRDate")} value={this.state.RRDate} formatDate={Helper._onFormatDate} parseDateFromString={this._RRDateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>


                          <td>
                            QI DocumentsUpdated?
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} maxDate={this.state.today} highlightCurrentMonth={true} className="addActualEndDate" id="QIDate" onSelectDate={this.handleDateEvent("QIDate")} value={this.state.QIDate} formatDate={Helper._onFormatDate} parseDateFromString={this._QIDateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>

                        </tr>
                        <tr>
                          <td>
                            Change Management
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} maxDate={this.state.today} highlightCurrentMonth={true} className="addActualEndDate" id="ChangeDate" onSelectDate={this.handleDateEvent("ChangeDate")} value={this.state.ChangeDate} formatDate={Helper._onFormatDate} parseDateFromString={this._ChangeDateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>


                          <td>
                            Productivity Review-1
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} maxDate={this.state.today} highlightCurrentMonth={true} className="addActualEndDate" id="PR1Date" onSelectDate={this.handleDateEvent("PR1Date")} value={this.state.PR1Date} formatDate={Helper._onFormatDate} parseDateFromString={this._PR1DateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>

                        </tr>
                        <tr>
                          <td>
                            Productivity Review-2
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} maxDate={this.state.today} highlightCurrentMonth={true} className="addActualEndDate" id="PR2Date" onSelectDate={this.handleDateEvent("PR2Date")} value={this.state.PR2Date} formatDate={Helper._onFormatDate} parseDateFromString={this._PR2DateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>

                          <td>
                            Project Review Calls with FSO?
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} maxDate={this.state.today} highlightCurrentMonth={true} className="addActualEndDate" id="FSODate" onSelectDate={this.handleDateEvent("FSODate")} value={this.state.FSODate} formatDate={Helper._onFormatDate} parseDateFromString={this._FSODateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>

                        </tr>
                        <tr>
                          <td>
                            End User Design Review Meeting
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} maxDate={this.state.today} highlightCurrentMonth={true} className="addActualEndDate" id="EUDRDate" onSelectDate={this.handleDateEvent("EUDRDate")} value={this.state.EUDRDate} formatDate={Helper._onFormatDate} parseDateFromString={this._EUDRDateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>

                        </tr>
                      </tbody>
                    </table>



                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisCloseArrow} as={Card.Header} eventKey="1" className="header">
                    <span className={this.state.AnalysisCloseDown === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                    Project Closing <br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <table className="addClosureEntry" id="addClosureEntry">
                      <tbody>
                        <tr>
                          <td><li>Are all deliveries completed and communicated to front office?</li></td>
                          <td> <select className="ms-Dropdown-select" id="addDeliv" ref={this.delivery} onChange={this.handleInputChange} value={this.state.EditDeliveryComplete} >
                            <option>Yes</option>
                            <option selected>No</option>

                          </select> </td>

                          <td>  <textarea cols={30} rows={3} id="DeliveryComments" ref={this.deliverycomments} onChange={this.handleTextChange} value={this.state.EditDeliveryCompleteComments} /> </td>
                        </tr>
                        <tr>
                          <td> <li>Has the PM logged ITSS call for project folder archival and deletion from server (after deletion of "working documents" folder)?</li><br></br><i> &nbsp;&nbsp;&nbsp;&nbsp;<b>Note:</b> PM shall intimate the retention period in ITSS call, as per the "Project Plan (ProjectID)"</i></td>

                          <td> <select className="ms-Dropdown-select" id="AddITSS" ref={this.ITSS} onChange={this.handleInputChange} value={this.state.EditPMITSS}>
                            <option>Yes</option>
                            <option selected>No</option>


                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} id="ITSSComments" ref={this.ITSSComments} onChange={this.handleTextChange} value={this.state.EditPMITSSComments} />
                          </td>
                        </tr>
                        <tr>
                          <td><li>In case there are hardcopy documents, are these disposed / properly identified and archived by PM?</li></td>
                          <td><select className="ms-Dropdown-select" id="HardCopy" onChange={this.handleInputChange} value={this.state.EditProjectFolder} ref={this.hardcopy} >
                            <option>Yes</option>
                            <option selected>No</option>
                            <option >N/A </option>


                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} className="InternalBudget" id="HardCopyComments" ref={this.hardcopyComments} onChange={this.handleTextChange} value={this.state.EditProjectFolderComments} />
                          </td>
                        </tr>
                        <tr>
                          <td><li>Has the PM logged ITSS call for release of RVO2 resources</li></td>
                          <td><select className="ms-Dropdown-select" id="ITSS2" ref={this.ITSS2} onChange={this.handleInputChange} value={this.state.EditITSSCall}>
                            <option>Yes</option>
                            <option selected>No</option>


                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} className="Actuals" id="ITSS2Comments" ref={this.ITSS2Comments} value={this.state.ProjectHWComments} onChange={this.handleTextChange} />
                          </td>
                        </tr>
                        <tr>
                          <td><li>Has the Dongle been returned?</li> </td>
                          <td> <select className="ms-Dropdown-select" id="DongleReturn" ref={this.donglereturn} onChange={this.handleInputChange} value={this.state.EditDongleReturned}>
                            <option>Yes</option>
                            <option selected>No</option>


                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} className="ETC" id="DongleComments" ref={this.dongleComments} value={this.state.EditDongleReturnedComments} onChange={this.handleTextChange} />
                          </td>
                        </tr>
                        <tr>
                          <td><li>Is all project information and data correct and/or updated to reflect the values at project close?</li></td>
                          <td> <select className="ms-Dropdown-select" id="ProjectCorrect" ref={this.projectcorrect} value={this.state.EditDatacorrect} onChange={this.handleInputChange} >
                            <option>Yes</option>
                            <option selected>No</option>


                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} className="Progress" id="ProjectComments" ref={this.projectComments} onChange={this.handleTextChange} value={this.state.EditDatacorrectComments} />
                          </td>
                        </tr>
                        <tr>

                          <td><li>Are post-delivery defects (field non-conformities) collected from the Front Office and recorded?</li></td>
                          <td> <select className="ms-Dropdown-select" id="PostDelivery" ref={this.postdelivery} onChange={this.handleInputChange} value={this.state.EditPostdelivery}>
                            <option>No</option>
                            <option>Yes</option>



                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} className="ExpHours" id="PostDeliveryComments" ref={this.postdeliveryComments} onChange={this.handleTextChange} value={this.state.EditPostdeliveryComments} />
                          </td>

                        </tr>
                        <tr>
                          <td>
                            <li>Is file imported by FHX tool</li>
                          </td>
                          <td>
                            <td> <select className="ms-Dropdown-select" id="FHX" onChange={this.handleInputChange} value={this.state.EditFHX}>
                              <option>No</option>
                              <option>Yes</option>



                            </select> </td>
                          </td>
                          <td>

                            <textarea cols={30} rows={3} className="ExpHours" id="FHXComments" onChange={this.handleTextChange} value={this.state.EditFHXComments} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="showHide" style={{ pointerEvents: (this.state.showResults ? 'none' : 'auto'), opacity: (this.state.showResults ? 0.3 : 1) }}>
                      <tbody>
                        <tr>

                          <td  ><li>Is the CSS form received and circulated?</li></td>
                          <td ><select className="ms-Dropdown-select" id="CSS" ref={this.CSS} onChange={this.handleInputChange} value={this.state.EditCSSFormReceived}>
                            <option>No</option>
                            <option>Yes</option>


                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} className="ActualEnd" id="CSSComments" ref={this.CSSComments} onChange={this.handleTextChange} value={this.state.EditCSSFormReceivedComments} />
                          </td>

                        </tr>

                        <tr>

                          <td><li>Is project closeout meeting conducted And lessons learnt including project closeout report uploaded to the EEEC Technical Info.</li></td>
                          <td><select className="ms-Dropdown-select" id="Close" ref={this.close} onChange={this.handleInputChange} value={this.state.EditProjectCloseMeeting}>
                            <option>No</option>
                            <option>Yes</option>


                          </select></td>
                          <td>

                            <textarea cols={30} rows={3} className="ActualEnd" id="CloseComments" ref={this.closeComments} onChange={this.handleTextChange} value={this.state.EditProjectCloseMeetingComments} />
                          </td>

                        </tr>
                        <tr>

                          <td><li>Have resource skills been updated and communicated to ResourceSkills.EEEC@Emerson.com?</li></td>
                          <td><select className="ms-Dropdown-select" id="ResourceSkill" ref={this.resourceskill} onChange={this.handleInputChange} value={this.state.EditResourceSkillUpdated}>
                            <option>No</option>
                            <option>Yes</option>


                          </select> <br/> 
                         
                          </td>
                          <td>

                            <textarea cols={30} rows={3} className="ActualEnd" id="ResourceSkillComments" ref={this.resourceskillComments} onChange={this.handleTextChange} value={this.state.EditResourceSkillUpdatedComments} />
                          </td>

                        </tr>
                      </tbody>
                    </table>
                    <table style={{ pointerEvents: (this.state.showResults ? 'none' : 'auto'), opacity: (this.state.showResults ? 0.3 : 1), width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '20%', paddingLeft: '16px' }} > Close out Notes </td>
                          <td style={{ textAlign: 'initial' }}>

                            <textarea className="Remark" id="CloseOutNotes" disabled={!this.state.showButton} value={this.state.EditCloseOut} ref={this.closeOut} onChange={this.handleTextChange} cols={119} rows={5} />
                          </td>
                        </tr>
                      </tbody>
                    </table>





                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <table style={{ width: '100%' }}>
                <tr>
                  <td style={{ width: '50%', alignContent: 'right', textAlign: 'center', paddingLeft: '43.5%' }}>    <button type="submit" id="submitbtn" className="btn btn-primary" style={{ textAlign: 'center' }} disabled={!this.state.showButton}>Update</button>
                  </td>
                  <td>
                    <button type="reset" className="btn btn-primary" style={{ textAlign: 'center' }} disabled={!this.state.showButton} onClick={() => window.location.reload()} >Reset</button>
                  </td>
                </tr>
              </table>
            </div >
          </Card >
        </div >
      </form >
    )
  }
}
export default eProjectNewForm