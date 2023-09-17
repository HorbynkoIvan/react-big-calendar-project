import { Divider as DividerMui, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

type Props = {
  quantity: number;
};

export const Divider = ({ quantity }: Props) => (
  <Stack direction="row" alignItems="center" sx={{ mb: "20px" }}>
    <Typography fontWeight={600} color={grey} variant="subtitle1" noWrap>
      {`${quantity} events`}
    </Typography>
    <DividerMui sx={{ ml: "20px", flex: 1, borderColor: grey }} />
  </Stack>
);
