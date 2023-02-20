import Sheet from "react-modal-sheet";
import { useState } from "react";
import ThreePointsIcon from "../Icons/ThreePointsIcon";
import ThreePointsOperations from "@/components/Todos/ThreePointsOperations";

const ThreePointsModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <ThreePointsIcon />
      </button>
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[240]}>
        <Sheet.Container>
          <Sheet.Content> 
            <ThreePointsOperations />
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onClick={() => setOpen(false)} />
      </Sheet>
    </>
  );
};

export default ThreePointsModal;