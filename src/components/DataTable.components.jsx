import {
  colors,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { HiOutlinePencil } from "react-icons/hi";
import { FaRegTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useDeleteContactMutation } from "../store/services/endpoints/contant.endpoinds";

const DataTableComponents = ({ tableData,handleEditBtn }) => {
  const [fun, { data, isLoading, isError }] = useDeleteContactMutation();

  const handleDelBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove?",
      icon: "warning",
      showCancelButton: true,
      // confirmButtonColor: "#3085d6",
      // cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showLoaderOnConfirm: true,
      preConfirm: async() => {
        await fun(id);
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your contact has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="h-[450px] w-full p-5">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((d) => (
              <TableRow key={d.id}>
                <TableCell>{d.id}</TableCell>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.email}</TableCell>
                <TableCell>{d.address}</TableCell>
                <TableCell align="right">{d.phone}</TableCell>
                <TableCell>
                  <div className=" space-x-3">
                    <button onClick={handleEditBtn.bind(null,d.id)}>
                      <HiOutlinePencil />
                    </button>
                    <button onClick={handleDelBtn.bind(null, d.id)}>
                      <FaRegTrashCan className=" text-red-500" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTableComponents;
