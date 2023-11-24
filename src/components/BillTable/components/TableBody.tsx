import { ExtractedDataType } from '@hooks/useTableData';
import { FunctionComponent } from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import TitleModal from '@components/Modal/TitleModal';
import { CheckIsFavorites, useGetPaginatedData, useTableBody } from './table-utils';

type TableBodyProps = {
  rowsPerPage: number;
  tableData: ExtractedDataType[];
  page: number;
};

/**
 * TableBody component to display paginated bill data rows
 * and handle row click to open bill title modal
 */
const TableBody: FunctionComponent<TableBodyProps> = ({ rowsPerPage, tableData, page }) => {
  const { onRowClick, toggleFavorite, open, handleOpen, title, favorites } = useTableBody();
  const { paginatedData } = useGetPaginatedData(tableData, page, rowsPerPage);
  return (
    <>
      <tr>
        <td>
          <TitleModal open={open} setOpen={handleOpen} title={title} />
        </td>
      </tr>
      {paginatedData.map(
        ({ billNo, billType, status, sponsors, longTitleEn, longTitleGa, billShortTitleEnSort }, index) => {
          const isFavorited = CheckIsFavorites(favorites, billShortTitleEnSort);

          return (
            <tr key={`row-${billNo}-${index}`} onClick={(e) => onRowClick(e, longTitleEn, longTitleGa)}>
              <td>
                <span className="center-content">
                  <button
                    className="favoriteButton"
                    onClick={(e) => toggleFavorite(e, billShortTitleEnSort, isFavorited)}
                  >
                    {isFavorited ? <StarOutlinedIcon /> : <StarOutlineIcon />}
                  </button>
                  {billNo}
                </span>
              </td>
              <td>{billType}</td>
              <td>{status}</td>
              <td>{sponsors}</td>
            </tr>
          );
        },
      )}
    </>
  );
};

export default TableBody;
