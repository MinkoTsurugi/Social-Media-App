import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box) (({ theme }) => (
  {
    padding: "1.5rem 1.5rem 0.75 rem 1.5 rem",
    backgroundColor: theme.palette.background.alt,
    borderRadius: "o.75rem"
  }
));

export default WidgetWrapper;