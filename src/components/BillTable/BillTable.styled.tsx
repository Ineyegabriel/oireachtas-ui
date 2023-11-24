import { styled } from '@mui/system';
import { TablePagination, tablePaginationClasses as classes } from '@mui/base/TablePagination';
import { grey } from '@assets/Colors';

export const Root = styled('div')(
  ({ theme }) => `
    table {
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      border-collapse: collapse;
      width: 100%;
      table-layout: fixed;
    }
  
    td, th {
      text-align: left;
      padding: 8px;
    }
  
    th {
      background-color: ${theme.palette.mode === 'dark' ? grey[300] : '#fff'};
    }
  
    tbody {
      & > tr {
        transition: background-color 1s cubic-bezier(0.4, 0, 1, 1);
        cursor: pointer;
        &:hover {
          background-color:  ${grey[400]};
        }
      }
    }

    td {
      & > button {
        padding: 0;
      }
    }

    .center-content{
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .favoriteButton{
      padding: 0.2em 0.5em
    }

    & .${classes.selectLabel} {
      margin: 0;
    }

    tfoot {
      margin-top: 2rem;
    }

    `,
);

// eslint-disable-next-line react-refresh/only-export-components
export const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
`;
