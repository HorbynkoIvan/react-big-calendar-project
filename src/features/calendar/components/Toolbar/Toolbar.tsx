import { Typography, Box, Stack, IconButton } from "@mui/material";
import { Navigate, ToolbarProps } from "react-big-calendar";
import { ButtonAdd, ToggleButtonGroup } from "common/ui";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { palette, typography } from "theme";
import { useViewToggleButton } from "./hooks";
import { ToolbarSC } from "./ToolbarSC";
import { PERIOD_BUTTONS_CONFIG } from "../../constants";

type Props = ToolbarProps;

export const Toolbar = ({ label, onNavigate, ...props }: Props) => {
  const { selectedView, handleChangeView } = useViewToggleButton(props);

  return (
    <ToolbarSC>
      <Stack spacing={1} direction="row" alignItems="center">
        <Typography
          variant="h5"
          fontWeight={typography.fontWeightSemiBold}
          color={palette.grey[900]}
          width={125}>
          {label}
        </Typography>
        <IconButton
          sx={{ backgroundColor: palette.bodyBackground.main }}
          onClick={() => onNavigate(Navigate.PREVIOUS)}
          aria-label="previous">
          <MdKeyboardArrowLeft />
        </IconButton>
        <IconButton
          sx={{ backgroundColor: palette.bodyBackground.main }}
          onClick={() => onNavigate(Navigate.NEXT)}
          aria-label="next">
          <MdKeyboardArrowRight />
        </IconButton>
      </Stack>

      <Box sx={{ flexGrow: 1 }} />

      <Stack spacing={3} direction="row" alignItems="center">
        <Typography
          variant="subtitle2"
          fontWeight={typography.fontWeightSemiBold}
          color={palette.grey[600]}>
          View:
        </Typography>

        <ToggleButtonGroup
          buttonsMenu={PERIOD_BUTTONS_CONFIG}
          value={selectedView}
          onChange={handleChangeView}
        />

        <ButtonAdd>
          <Typography variant="button" textTransform="initial">
            Add event
          </Typography>
        </ButtonAdd>
      </Stack>
    </ToolbarSC>
  );
};
