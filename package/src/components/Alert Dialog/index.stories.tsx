import {Meta,StoryObj} from "@storybook/react"; 
import { AlertDialog } from "."; 


const size=["xs","sm","md","lg","xl","xxl"]; 
const Position=[ "topCenter","center","bottomCenter"]; 


const meta:Meta<typeof AlertDialog> ={
    title:"Components/AlertDialog", 
    component:AlertDialog, 
    parameters:{
        layout:"centered",
    },
    argTypes:{
        size:{
            options:size, 
            control:{type:"select"}
        },position:{
            options:Position,
            control:{type:"select"}
        }
    }
}; 
export default meta;  

type Story =StoryObj<typeof meta> 

export const Dialog :Story={
    args:{
        size:"sm", 
        title:"Closing dialog", 
        message:"urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", 
        cancelText:"Cancel", 
        confirmText:"Ok", 
        // onClose:onClose() 
        onAction:()=>{
          console.log("hello i am clicked")
        }
    }

}
export const DialogWithoutClosingTab :Story={
    args:{
        size:"sm",
        message:"This is for testing purpose",  
        title:"Not Closing dialog",
        confirmText:"Ok",
    }
}
export const DialogWithoutTitle :Story={
    args:{
        size:"sm",
        message:"This is for testing purpose",  
        title:"Not Closing dialog",
        confirmText:"Ok",
    }
}