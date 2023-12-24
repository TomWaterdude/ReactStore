import {
  AppBar,
  FormControlLabel,
  FormGroup,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ pr: 2 }}>
          React Store
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={handleThemeChange} />}
            label="Dark Mode"
          />
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
}
