import { Typography, Stack, Tabs, Tab } from "@mui/material";
import { ButtonFilter } from "../../../../common/ui";
import { useHidden } from "../../../../common/hooks";
import { MdFilter } from "react-icons/md";
import { PDTopFilter, MoreFilters } from "./views";

export const PDHeader = () => {
  const { isSwitch, handleSwitch } = useHidden();

  return (
    <Stack direction="column" sx={{ mb: 2 }}>
      <Stack
        direction="row"
        sx={{ margin: "20px 0 0", width: "100%" }}
        alignItems="center"
        justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <Tabs>
            <Tab href="events" label="List view" />
            <Tab href="calendar" label="Calendar" />
          </Tabs>

          <PDTopFilter />
        </Stack>

        <ButtonFilter
          startIcon={<MdFilter />}
          sx={{ alignSelf: "flex-end" }}
          onClick={handleSwitch}>
          <Typography variant="button" textTransform="initial">
            More Filters
          </Typography>
        </ButtonFilter>
      </Stack>

      {isSwitch && <MoreFilters />}
    </Stack>
  );
};
