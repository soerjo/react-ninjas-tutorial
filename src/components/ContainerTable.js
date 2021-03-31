import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: "500px",
  },
});

export default function ContainerTable({ peoples }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Nama</StyledTableCell>
            <StyledTableCell align="right">No Telpon</StyledTableCell>
            <StyledTableCell align="right">Nama Ibadah</StyledTableCell>
            <StyledTableCell align="right">Tanggal Ibadah</StyledTableCell>
            <StyledTableCell align="right">Waktu Pendaftaran</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(peoples)}
          {peoples.map((people, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{index + 1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {people.nama}
              </StyledTableCell>
              <StyledTableCell align="right">{people.noTlp}</StyledTableCell>
              <StyledTableCell align="right">
                {people.namaIbadah}
              </StyledTableCell>
              <StyledTableCell align="right">
                {people.tanggalIbadah}
              </StyledTableCell>
              <StyledTableCell align="right">
                {people.waktuPendaftara}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button size="small" color="primary">
                  <span class="material-icons">border_color</span>
                </Button>
                <Button size="small" color="secondary">
                  <span class="material-icons">delete_forever</span>
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
