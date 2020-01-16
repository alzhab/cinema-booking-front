// @ts-nocheck
import React from "react";
import { Backpack, SeatsGrid, Buttons, Modal } from "UI";

const MovieSheduleModal = ({ showModal, submit, modalClosed, seatsGrid }) => {
  return (
    showModal && (
      <React.Fragment>
        <Backpack clicked={modalClosed} />
        <Modal className="movie-shedule__modal">
          <p>Welcome!</p>
          <h3>select yout seats</h3>
          <div className="movie-shedule__seats">
            <SeatsGrid grid={seatsGrid} />
          </div>
          <Buttons.Default className="" shadow clicked={submit}>
            seats plan >
          </Buttons.Default>
        </Modal>
      </React.Fragment>
    )
  );
};

export default MovieSheduleModal;
