'use client';

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { ButtonName, Image } from '@/interfaces';
import ImageSlider from './image-slider';

export default function ScheduleAlertDialog({
  images,
  sizes,
  buttonName,
  location,
}: {
  images: Image[];
  sizes: string;
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
      <div className={`fixed w-20 ${location}`}>
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
        <DialogActions className='flex w-96 h-96 md:w-[64rem] md:h-[64rem] justify-center'>
          <div className="w-full h-full">
            <ImageSlider images={images} sizes={sizes} />
          </div>

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