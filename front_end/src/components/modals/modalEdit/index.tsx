
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import FormEditContact from "../../Form/FormEditContact";

interface iModalProps{
   opemModalEdit:boolean
   setOpemModalEdit:React.Dispatch<React.SetStateAction<boolean>>
   id:number
}

const ModalEdit = ({opemModalEdit,setOpemModalEdit,id}:iModalProps) => {

   const Transition = React.forwardRef(function Transition(
      props: TransitionProps & {
         children: React.ReactElement<any, any>;
      },
      ref: React.Ref<unknown>
   ) {
      return <Slide direction="up" ref={ref} {...props} />;
   });

   const modalClose = () => {
      setOpemModalEdit(!opemModalEdit);
   };

   return (
      <>
         <Dialog
            open={opemModalEdit}
            TransitionComponent={Transition}
            keepMounted
            onClose={modalClose}
            aria-describedby="alert-dialog-slide-description"
         >

            <FormEditContact id={id} modalClose={modalClose}/> 

         </Dialog>
      </>
   );
};

export default ModalEdit;
