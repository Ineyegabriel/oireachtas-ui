import { LegislationResult, Sponsor } from 'src/types/legislation';

export type ExtractedDataType = {
  billNo: string;
  billType: string;
  status: string;
  sponsors: string;
  longTitleEn: string;
  longTitleGa: string;
  billNoSort: number;
  billShortTitleEnSort: string;
};

export const tableHeaderData = ['Bill Number', 'Bill Type', 'Status', 'Sponsor'];

/**
 * Transforms the sponsors array to a string of sponsor names.
 * @param sponsors Array of sponsors
 * @returns String of sponsor names
 */
const useTransformedSponsors = (sponsors: Sponsor[]) => {
  return sponsors
    .map(({ sponsor: { as } }) => as.showAs)
    .join(' ')
    .trim();
};

/**
 * Simple hook that prepares the table data,
 * and handles all necessary transformation before hand
 * @param collection - Array
 * @returns
 */
export const useTableData = (collection: LegislationResult[]) => {
  if (!Array.isArray(collection)) {
    throw new Error('Invalid collection');
  }

  const tableData: ExtractedDataType[] = collection.map((prop) => {
    const {
      bill: { billNo, billType, status, sponsors, longTitleEn, longTitleGa },
      billSort: { billNoSort, billShortTitleEnSort },
    } = prop;

    const extractedSponsors = useTransformedSponsors(sponsors);

    return {
      billNo,
      billType,
      status,
      sponsors: extractedSponsors,
      longTitleEn,
      longTitleGa,
      billNoSort,
      billShortTitleEnSort,
    };
  });

  return { tableData };
};
