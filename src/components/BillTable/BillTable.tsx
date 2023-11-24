import { FunctionComponent, useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '@features/store';
import { fetchLegislation } from '@features/legislation/legislationSlice';
import { StyleSheetManager } from 'styled-components';
import { tableHeaderData, useTableData } from '@hooks/useTableData';
import { Root } from './BillTable.styled';
import TableBody from './components/TableBody';
import TablePagination from './components/TablePagination';
import { Skeleton } from '@mui/material';
import { usePagination } from './usePagination';

const BillTable: FunctionComponent = () => {
  const { page, rowsPerPage, onChangePage, onChangeRowsPerPage } = usePagination();

  const { queryRecord, isLoading, legislation } = useAppSelector((state: RootState) => state.legislation);
  const dispatch = useAppDispatch();
  const { tableData } = useTableData(legislation);

  useEffect(() => {
    dispatch(fetchLegislation(queryRecord));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Skeleton variant="rounded" width="100%" height="70dvh" />;
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  return (
    //This StyleSheetManager HOC is used to process let the transpiler handle sx prop correctly
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'sx'}>
      <Root sx={{ maxWidth: '100%', width: '100%' }}>
        <table aria-label="custom pagination table">
          <thead>
            <tr>
              {tableHeaderData.map((item) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <TableBody rowsPerPage={rowsPerPage} tableData={tableData} page={page} />
            {emptyRows > 0 && (
              <tr style={{ height: 41 * emptyRows }}>
                <td colSpan={3} aria-hidden />
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <TablePagination
                rowsPerPage={rowsPerPage}
                tableData={tableData}
                page={page}
                handleChangePage={onChangePage}
                handleChangeRowsPerPage={onChangeRowsPerPage}
              />
            </tr>
          </tfoot>
        </table>
      </Root>
    </StyleSheetManager>
  );
};

export default BillTable;
