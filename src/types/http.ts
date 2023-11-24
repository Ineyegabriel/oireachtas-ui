export type ErrorType = {
  response: {
    data: {
      message: string;
    };
  };
};

export type QueryPayload = {
  bill_status?: string[] | string;
  bill_source?: string[] | string;
  date_start?: string;
  date_end?: string;
  limit?: string;
  chamber_id?: string;
  lang?: string;
};
