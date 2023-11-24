import { FunctionComponent } from 'react';
import { StyledBackdrop, StyledModal, StyledModalContent } from './component/TitleModal.styled';
import TitleTabs from './component/TitleTabs';

type TitleModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  title: {
    longTitleEn?: string;
    longTitleGa?: string;
  };
};
const TitleModal: FunctionComponent<TitleModalProps> = ({
  open,
  setOpen,
  title: { longTitleEn = '', longTitleGa = '' },
}) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <StyledModalContent sx={custom_style}>
          <TitleTabs longTitleEn={longTitleEn} longTitleGa={longTitleGa} />
        </StyledModalContent>
      </StyledModal>
    </div>
  );
};

export default TitleModal;

const custom_style = {
  width: 400,
};
