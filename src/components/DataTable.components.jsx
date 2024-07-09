import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const DataTableComponents = ({ data }) => {
//   console.log(data);

  return (
    <div className="h-[450px] w-auto p-5">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell >Name</TableCell>
              <TableCell >Email</TableCell>

              <TableCell >Address</TableCell>
              <TableCell align="right">Phone</TableCell>

              <TableCell >Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.contacts?.data?.map((d) => <TableRow key={d.id}>
              <TableCell>{d.id}</TableCell>

              <TableCell>{d.name}</TableCell>
              <TableCell>{d.email}</TableCell>

              <TableCell>{d.address}</TableCell>
              <TableCell align="right">{d.phone}</TableCell>

            </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTableComponents;
