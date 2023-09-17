import { SelectChangeEvent, Stack, Typography } from "@mui/material";
import { Select } from "../../../../../common/ui";

type Option = { id: string | number; name: string } | string;

type FilterSelectProps<T> = {
  label: string;
  value?: string | number[];
  defaultValue?: string;
  onChange: (event: SelectChangeEvent<unknown>) => void;
  options: T[];
  maxHeightRatio?: number;
  width?: number;
};

export const FilterSelect = <T extends Option>({
  label,
  value,
  defaultValue,
  onChange,
  options,
  maxHeightRatio,
  width = 150,
}: FilterSelectProps<T>) => (
  <Stack direction="row" alignItems="center" spacing={2}>
    <Typography noWrap overflow="initial">
      {label}
    </Typography>

    <Select
      sx={{
        width: { width },
        height: 35,
        m: 0,
      }}
      fullWidth
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      maxHeightRatio={maxHeightRatio}
    />
  </Stack>
);
