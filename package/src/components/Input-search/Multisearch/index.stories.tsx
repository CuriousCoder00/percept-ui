import { Meta,StoryObj } from "@storybook/react"; 
import { MultiSearchAutocomplete } from "."; 


const Suggestions= ["apple", "banana", "grape", "orange", "pear", "mango","papaya","pomegranate","lockey","ladyfinger","cucumber"] 
const Variants = ["classic", "standard", "ghost"];
const Radiuses = ["none", "sm", "md", "lg", "xl", "full"]; 

const meta:Meta<typeof MultiSearchAutocomplete>={
    title:"Input/MultiSearch", 
    component:MultiSearchAutocomplete, 
    parameters:{
        layout:"centered", 
    },argTypes:{
        variant: {
            options: Variants,
            control: { type: "select" },
          },
          radius: {
            options: Radiuses,
            control: { type: "select" },
          }, 
    },
} 

export default meta ; 

type Story=StoryObj <typeof meta>

export const Multisearch:Story={
    args:{
       suggestions:Suggestions, 
       onSelection: (value) => console.log(value), 
       variant:"classic", 
       radius:"sm"
    }
}