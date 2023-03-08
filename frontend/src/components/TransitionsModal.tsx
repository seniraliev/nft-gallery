import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 10,
  borderRadius: '10px',
  overflowY: 'auto'
};

interface TransitionsModalProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}

export default function TransitionsModal(props: TransitionsModalProps) {
  const [open, setOpen] = useState(props.open);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    props.handleClose();
  };
  const { title, children } = props;

  useEffect(() => {
    setOpen(props.open);
  }, [props]);

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id='transition-modal-title' variant='h6' component='h2'>
            {title}
          </Typography>
          <Box sx={{ mt: 2 }}>{children}</Box>
        </Box>
      </Fade>
    </Modal>
  );
}
