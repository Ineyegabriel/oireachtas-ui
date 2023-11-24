import { useState } from 'react';
import { removeFavorite, setFavorites } from '@features/legislation/legislationSlice';
import { useAppDispatch, useAppSelector, RootState } from '@features/store';
import { ExtractedDataType } from '@hooks/useTableData';

/**
 * Returns the paginated subset of table data for the given page and rowsPerPage.
 * Slices the tableData array appropriately based on the provided pagination params.
 * @param tableData
 * @param page
 * @param rowsPerPage
 * @returns
 */
export const useGetPaginatedData = (tableData: ExtractedDataType[], page: number, rowsPerPage: number) => {
  let paginatedData;
  if (rowsPerPage > 0) {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    paginatedData = tableData.slice(startIndex, endIndex);
  } else {
    paginatedData = tableData;
  }
  return { paginatedData };
};

export const useTableBody = () => {
  const [open, handleOpen] = useState(false);
  const [title, setTitle] = useState<{ longTitleEn?: string; longTitleGa?: string }>({
    longTitleEn: '',
    longTitleGa: '',
  });
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state: RootState) => state.legislation);

  /**
   * Event handler to toggle favorite status of a bill
   * @param event React.MouseEvent<HTMLButtonElement, MouseEvent>
   * @param billShortTitleEnSort string
   * @param isFavorited boolean
   * @returns void
   */
  const toggleFavorite = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    billShortTitleEnSort: string,
    isFavorited: boolean,
  ): void => {
    event.stopPropagation();
    if (isFavorited) {
      dispatch(removeFavorite(billShortTitleEnSort));
      return;
    }
    dispatch(setFavorites(billShortTitleEnSort));
  };

  const onRowClick = (
    _e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    longTitleEn: string,
    longTitleGa: string,
  ): void => {
    if (!longTitleEn || !longTitleGa) {
      return;
    }
    handleOpen(true);
    setTitle({
      longTitleEn,
      longTitleGa,
    });
  };

  return {
    onRowClick,
    toggleFavorite,
    open,
    handleOpen,
    title,
    favorites,
  };
};
