import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { RootState, useAppSelector } from '@features/store';
import { useSearchParam } from '@hooks/useSearchParam';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

export default function FilterSelect() {
  const theme = useTheme();
  const [selectedBillStatuses, setSelectedBillStatuses] = React.useState<string[]>([]);
  const {
    queryRecord: { bill_status },
  } = useAppSelector((state: RootState) => state.legislation);

  const handleChange = (event: SelectChangeEvent<typeof selectedBillStatuses>) => {
    const {
      target: { value },
    } = event;

    setSelectedBillStatuses(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );

    //planning to use this to update the url with the selected bill status
    // useSearchParam('bill_status', String(selectedBillStatuses));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          displayEmpty
          value={selectedBillStatuses}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <small>Filter By Bill Status</small>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <small>Filter By Bill Status</small>;
          </MenuItem>
          {Array.isArray(bill_status) ? (
            bill_status.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, selectedBillStatuses, theme)}>
                {name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="" disabled>
              No bill statuses found
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
}
