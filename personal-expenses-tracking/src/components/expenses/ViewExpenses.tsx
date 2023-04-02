import { Button, Grid, Stack } from "@mui/material";
import { Fragment } from "react";

interface ExpenseObject {
  amount: number;
  type: string;
  description: string;
}

interface Expenseprops {
  expenseArr: ExpenseObject[];
  handleSubmit: () => void;
  handleReset: () => void;
}

export const ViewExpenses = ({ expenseArr, handleSubmit, handleReset }: Expenseprops) => {

  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          Expense Type
        </Grid>
        <Grid item xs={5}>
          Description
        </Grid>
        <Grid item xs={3}>
          Amount
        </Grid>
        {expenseArr?.map((item, key) => {
          return (
            <Fragment key={key}>
              <Grid item xs={4}>
                {item?.type}
              </Grid>
              <Grid item xs={5}>
                {item?.description}
              </Grid>
              <Grid item xs={3}>
                {item?.amount}
              </Grid>
            </Fragment>
          );
        })}
      </Grid>
      {/* <Grid container> */}
        <Stack direction="row" justifyContent="end" spacing={2} mt={2}>
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      {/* </Grid> */}
    </>
  );
};
