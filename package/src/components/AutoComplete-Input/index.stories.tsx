
import { Meta,StoryObj } from "@storybook/react"; 
import { AutoCompleteSearch } from "."; 

const Suggestions= ["apple", "banana", "grape", "orange", "pear", "mango","papaya","pomegranate","lockey","ladyfinger","cucumber"] 
const Variants = ["classic", "standard", "ghost"];
const Radiuses = ["none", "sm", "md", "lg", "xl", "full"];
const meta: Meta<typeof AutoCompleteSearch>={
    title:"Input/AutoComplete", 
    component:AutoCompleteSearch, 
    parameters:{
        layout:"centered",
    },  argTypes: {
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

export default meta; 

type Story=StoryObj<typeof meta> 


export const AutoComplete: Story={
    args:{
        suggestions: Suggestions , 
        onSelection: (value) => console.log("Selected:", value),
        variant: "classic", 
        radius:"none",


    }
}