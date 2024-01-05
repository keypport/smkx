'use client';

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import NextImage from 'next/image';
import { ButtonName, Image } from '@/interfaces';

export default function ImageAlertDialog({
  image,
  buttonName,
  location,
}: {
  image: Image
  buttonName: ButtonName;
  location: string;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className={`fixed bottom-0 ${location}`}>
        <button className='my-4 md:my-10 float-right p-3 bg-sky-400 text-white text-xs md:text-lg font-bold tracking-wide rounded-full focus:outline-none' onClick={handleClickOpen}>
          {buttonName.kr}<br/>{buttonName.en}
        </button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"lg"}
        sx={{
          '.MuiPaper-root': {
            border: 0,
            margin: 0,
            padding: 0,
          },
        }}
      >
        <DialogActions>
          <NextImage
            src={image.url}
            alt={image.name}
            width={1000}
            height={1000}
          />
        </DialogActions>
        <DialogActions>
          <button className='float-right p-3 bg-red-400 text-white text-xs md:text-lg font-bold tracking-wide rounded-full focus:outline-none' onClick={handleClose}>
            Close
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}