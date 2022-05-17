import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ScoreWindow(props: {
  data: string[],
  onClick:(problemScores:Array<number>)=>void;

}) {
  const [open, setOpen] = React.useState(false);
  const [problemScores,setProblemScores] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(problemScores)
    props.onClick(problemScores)

  };

 const handleScores = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {

     const newScore = [...problemScores];
     newScore[index] = parseInt(event.target.value);
     setProblemScores(newScore);

  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Set scores
      </Button>
      <Dialog open={open} onClose={handleClose}>
        {props.data.map((problem,index) => {
          return (
            <div key={index}>
              <DialogTitle>{problem}</DialogTitle>

              <DialogContent>

                <input
                  autoFocus
                  id="name"
                  type="text"
                  onChange={e => handleScores(index, e)}
                />

              </DialogContent>
            </div>
          )
        })}
        <DialogActions>

          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}
               style={{ alignItems: "center", justifyContent: "center" }}
               variant="contained"
               size="large"
               type="submit"
          >Save</Button>
     
        </DialogActions>
      </Dialog>
    </div>
  );
}
