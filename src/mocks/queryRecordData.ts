import { QueryPayload } from 'src/types/http';

export const queryRecordData: QueryPayload = {
  bill_status: ['Current', 'Withdrawn', 'Enacted', 'Rejected', 'Defeated', 'Lapsed'].sort(),
  bill_source: ['Government', 'Private Member'],
  date_start: '1900-01-01',
  date_end: '2099-01-01',
  limit: '100',
  lang: 'en',
};
