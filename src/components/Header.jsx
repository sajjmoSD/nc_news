import Typography from "@mui/material/Typography";
export default function Header({ text }) {
  return (
    <Typography variant="h1" component="h1" align="center" gutterBottom>
      {text}
    </Typography>
  );
}
