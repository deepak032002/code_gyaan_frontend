import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

type SearchModalProps = {
  handleOpen: () => void;
  open: boolean;
};

const SearchModal = ({ handleOpen, open }: SearchModalProps) => {
  return (
    <React.Fragment>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Search
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Your Query..." size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Search
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </React.Fragment>
  );
};

export default SearchModal;
