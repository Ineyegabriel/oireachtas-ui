import React, { FunctionComponent } from 'react';
import { CustomTablePagination } from '../BillTable.styled';
import { ExtractedDataType } from '@hooks/useTableData';

type TablePaginationProps = {
  rowsPerPage: number;
  tableData: ExtractedDataType[];
  page: number;
  handleChangePage: (_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const TablePagination: FunctionComponent<TablePaginationProps> = ({
  tableData,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <>
      <CustomTablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        colSpan={3}
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        slotProps={{
          select: {
            'aria-label': 'rows per page',
          },
          actions: {
            showFirstButton: true,
            showLastButton: true,
          },
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default TablePagination;
