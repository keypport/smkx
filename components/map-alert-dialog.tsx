'use client';

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Image from 'next/image';

export default function MapAlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className='fixed bottom-0 w-full right-4 md:right-10'>
        <button className='my-4 md:my-10 float-right px-2 py-2 bg-sky-400 text-white text-base md:text-lg font-bold tracking-wide rounded-full focus:outline-none' onClick={handleClickOpen}>
          지도
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
          <Image
            src={'https://i.imgur.com/8IIswRW.png'}
            alt="2024 서울 기계식 키보드 엑스포 지도"
            width={2400}
            height={2400}
          />
        </DialogActions>
        <DialogActions>
          <button className='float-right px-2 py-2 bg-red-400 text-white text-base md:text-lg font-bold tracking-wide rounded-full focus:outline-none' onClick={handleClose}>
            닫기
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}