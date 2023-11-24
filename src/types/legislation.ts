export type LegislationType = {
  head: LegislationResultHead;
  results: LegislationResult[];
};

export interface LegislationResultHead {
  counts: Counts;
  dateRange: DateRange;
  lang: string;
}

export interface Counts {
  billCount: number;
  resultCount: number;
}

export interface DateRange {
  start: string;
  end: string;
}
export interface LegislationResult {
  bill: Bill;
  billSort: BillSort;
  contextDate: string;
}

export interface Bill {
  act: string | number | undefined | null;
  amendmentLists: string | number | undefined | null | [];
  billNo: string;
  billType: string;
  billTypeURI: string;
  billYear: string;
  debates: string | number | undefined | null | [];
  events: Event[];
  lastUpdated: string;
  longTitleEn: string;
  longTitleGa: string;
  method: string;
  methodURI: string;
  mostRecentStage: MostRecentStage;
  originHouse: OriginHouse;
  originHouseURI: string;
  relatedDocs: RelatedDoc[];
  shortTitleEn: string;
  shortTitleGa: string;
  source: string;
  sourceURI: string;
  sponsors: Sponsor[];
  stages: Stage[];
  status: string;
  statusURI: string;
  uri: string;
  versions: Version[];
}

export interface Event {
  event: EventDetails;
}

export interface EventDetails {
  chamber: Chamber;
  dates: Date[];
  eventURI: string;
  showAs: string;
  uri: string;
}

export interface Chamber {
  chamberCode: string;
  showAs: string;
  uri: string;
}

export interface Date {
  date: string;
}

export interface MostRecentStage {
  event: MostRecentStageEvent;
}

export interface MostRecentStageEvent {
  chamber: ChamberType;
  dates: Date2[];
  house: House;
  progressStage: number;
  showAs: string;
  stageCompleted: boolean;
  stageOutcome: string | number | undefined | null;
  stageURI: string;
  uri: string;
}

export interface ChamberType {
  chamberCode: string;
  showAs: string;
  uri: string;
}

export interface Date2 {
  date: string;
}

export interface House {
  chamberCode: string;
  chamberType: string;
  houseCode: string;
  houseNo: string;
  showAs: string;
  uri: string;
}

export interface OriginHouse {
  showAs: string;
  uri: string;
}

export interface RelatedDoc {
  relatedDoc: RelatedDocDetails;
}

export interface RelatedDocDetails {
  date: string;
  docType: string;
  formats: Formats;
  lang: string;
  showAs: string;
  uri: string;
}

export interface Formats {
  pdf: Pdf;
  xml: string | number | undefined | null;
}

export interface Pdf {
  uri: string;
}

export interface Sponsor {
  sponsor: SponsorDetails;
}

export interface SponsorDetails {
  as: As;
  by: By;
  isPrimary: boolean;
}

export interface As {
  showAs: string;
  uri: string | number | undefined | null;
}

export interface By {
  showAs: string | number | undefined | null;
  uri: string | number | undefined | null;
}

export interface Stage {
  event: Event4;
}

export interface Event4 {
  chamber: Chamber3;
  dates: Date3[];
  house: House2;
  progressStage: number;
  showAs: string;
  stageCompleted: boolean;
  stageOutcome: string | number | undefined | null;
  stageURI: string;
  uri: string;
}

export interface Chamber3 {
  chamberCode: string;
  showAs: string;
  uri: string;
}

export interface Date3 {
  date: string;
}

export interface House2 {
  chamberCode: string;
  chamberType: string;
  houseCode: string;
  houseNo: string;
  showAs: string;
  uri: string;
}

export interface Version {
  version: Version2;
}

export interface Version2 {
  date: string;
  docType: string;
  formats: Formats2;
  lang: string;
  showAs: string;
  uri: string;
}

export interface Formats2 {
  pdf: Pdf2;
  xml: string | number | undefined | null;
}

export interface Pdf2 {
  uri: string;
}

export interface BillSort {
  actNoSort: string | number | undefined | null;
  actShortTitleEnSort: string | number | undefined | null;
  actShortTitleGaSort: string | number | undefined | null;
  actYearSort: string | number | undefined | null;
  billNoSort: number;
  billShortTitleEnSort: string;
  billShortTitleGaSort: string;
  billYearSort: number;
}
