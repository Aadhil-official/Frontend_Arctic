import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  option1,
  option2,
  option3,
  option4,
  option5,
}) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{ minWidth: 120 }}
      style={{
        width: "200px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Show Only</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Showonly"
          onChange={handleChange}
        >
          {/* <MenuItem value={10}>Ten</MenuItem> */}
          <MenuItem value={20}> {option1} </MenuItem>
          <MenuItem value={30}> {option2} </MenuItem>
          <MenuItem value={40}> {option3} </MenuItem>
          <MenuItem value={50}> {option4} </MenuItem>
          <MenuItem value={60}> {option5} </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
