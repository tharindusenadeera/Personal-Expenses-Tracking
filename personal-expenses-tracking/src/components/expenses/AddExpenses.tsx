import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { ViewExpenses } from "./ViewExpenses";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 10,
  p: 4,
};

type Expense = {
  type: string;
  description: string;
  amount: number;
};

export const AddExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [type, setType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const handleClear = () => {};
  const handleSave = () => {
    const newItem: Expense = {
      type: type,
      description: description,
      amount: amount,
    };
    setExpenses((prevItems) => [...prevItems, newItem]);
  };

  const handleType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };
  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(event.target.value));
  };

  return (
    <>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Expense
        </Typography>

        <Stack
          p={2}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          spacing={2}
        >
          <TextField placeholder="Expense type" onChange={handleType} />
          <TextField
            placeholder="Expense Description"
            onChange={handleDescription}
          />

          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Basic example"
              value={newExpenseData.date}
              onChange={(newValue) => {
                newExpenseData.setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}

          <TextField placeholder="Amount" onChange={handleAmount} />
        </Stack>
        <Stack direction="row" justifyContent="end" spacing={2}>
          <Button variant="outlined" onClick={handleClear}>
            Clear
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Add
          </Button>
        </Stack>
        <Grid container>
          <ViewExpenses />
        </Grid>
      </Box>
    </>
  );
};
