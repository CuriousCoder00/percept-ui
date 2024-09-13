import Footer from "./components/Footer";
import "./app/globals.css"
export default {
    logo: <span>Percept UI</span>,
    docsRepositoryBase: 'https://github.com/CuriousCoder00/percept-ui/tree/main/docs',
    project: {
        link: 'https://github.com/curiouscoder00/percept-ui',
    },
    title:"Percept UI - React components library",
    footer: {
        text: (
            <Footer />
        )
    }
    // ... other theme options
}