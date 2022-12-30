import { GetServerSideProps } from 'next';
import { IStore } from '../interfaces/store.interface';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home({ stores }: { stores: IStore[] }) {
  const [open, setOpen] = useState(false);
  const [store, setStore] = useState(stores[0]);

  const handleClickOpen = async (id: number) => {
    const response = await fetch(`http://localhost:9000/stores/${id}`);
    if (response.ok) {
      setStore(await response.json());
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="grid grid-cols-2" style={{ flex: 1 }}>
      {stores.map(({ id, name, thumb }) => {
        return (
          <Card
            key={id}
            className="m-4 cursor-pointer hover:scale-105 transition duration-300"
            sx={{ width: 280, height: 280 }}
            onClick={() => handleClickOpen(id)}
          >
            <CardMedia sx={{ height: 280, width: 280 }} image={thumb} title={name} />
          </Card>
        );
      })}

      <Dialog onClose={handleClose} open={open} maxWidth="lg">
        <div className="flex">
          <Image className="w-1/2" src={store.image} alt={store.name} width="600" height="600"></Image>
          <div className="w-1/2 relative">
            <button
              className="cursor-pointer text-3xl absolute right-2 hover:text-red-500 transition"
              onClick={handleClose}
            >
              ×
            </button>
            <DialogTitle className="text-3xl">{store.name}</DialogTitle>
            <DialogContent className="w-full">
              <DialogContentText id="alert-dialog-slide-description">
                <pre className="whitespace-pre-wrap">{store.description}</pre>
              </DialogContentText>

              {store.url ? (
                <DialogContentText className="pt-3" id="alert-dialog-slide-description">
                  <Link href={store.url}>{store.url}</Link>
                </DialogContentText>
              ) : null}
            </DialogContent>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:9000/stores');
  if (response.ok) {
    const stores = await response.json();
    return {
      props: {
        stores,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};
