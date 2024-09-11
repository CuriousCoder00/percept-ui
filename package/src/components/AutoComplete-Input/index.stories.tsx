
import { Meta,StoryObj } from "@storybook/react"; 
import { AutoCompleteSearch } from "."; 

const Suggestions= ["apple", "banana", "grape", "orange", "pear", "mango","papaya","pomegranate","lockey","ladyfinger","cucumber"] 

const meta: Meta<typeof AutoCompleteSearch>={
    title:"Input/AutoComplete", 
    component:AutoCompleteSearch, 
    parameters:{
        layout:"centered",
    }, 
}

export default meta; 

type Story=StoryObj<typeof meta> 


export const AutoComplete: Story={
    args:{
        suggestions: Suggestions , 
        onSelection: (value) => console.log("Selected:", value),
    }
}