export interface BalanceSheet {
    Status: string;
    Reports: Report[];
  }
  
  export interface Report {
    ReportID: string;
    ReportName: string;
    ReportType: string;
    ReportTitles: string[];
    ReportDate: string;
    UpdatedDateUTC: string;
    Fields: any[]; // Assuming Fields is an array of any type, adjust if needed
    Rows: Row[];
  }
  
  export interface Row {
    RowType: 'Header' | 'Section' | 'Row' | 'SummaryRow';
    Cells?: Cell[];
    Title?: string;
    Rows?: Row[];
  }
  
  export interface Cell {
    Value: string;
    Attributes?: Attribute[];
  }
  
  export interface Attribute {
    Value: string;
    Id: string;
  }