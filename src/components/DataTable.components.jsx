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
  console.log(data);

  return (
    <div className="">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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

          {/* <TableBody>
            <TableRow>
              <TableCell>1</TableCell>

              <TableCell>Wai</TableCell>
              <TableCell>wai@gmail.com</TableCell>

              <TableCell>Yangon</TableCell>
              <TableCell align="right">96665433234</TableCell>

            </TableRow>
          </TableBody> */}

          <TableBody>
            {data.map((d) => (
              <TableRow
                key={d.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  {d.name}
                </TableCell>
                <TableCell align="right">{d.phone}</TableCell>
                <TableCell align="right">{d.email}</TableCell>
                <TableCell align="right">{d.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTableComponents;
