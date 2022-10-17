import { Flex, Spacer, Typography } from "../../styles";
import { ModalStyled, CloseModal } from "./styled";

export const Modal = ({ open, handleOpenModal, titleModal, messageModal }) => {
  return (
    <center>
      <ModalStyled open={open}>
        <Flex direction="column">
          <Flex>
            <Typography>{titleModal}</Typography>
            <Spacer margin="8px" />
            <CloseModal onClick={() => handleOpenModal(null)}>X</CloseModal>
          </Flex>
          <Flex>
            <Typography>{messageModal}</Typography>
          </Flex>
        </Flex>
      </ModalStyled>
    </center>
  );
};
