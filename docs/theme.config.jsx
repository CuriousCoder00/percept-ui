import { Badge } from "./components";
import Footer from "./components/Footer";
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import Logo from "./components/Logo";
export default {
    logo: <div className="flex items-center justify-center gap-2">
        <Logo />
        <span className="my-0 font-bold text-2xl">Percept UI</span>

    </div>,
    docsRepositoryBase: 'https://github.com/CuriousCoder00/percept-ui/tree/main/docs',
    project: {
        link: 'https://github.com/curiouscoder00/percept-ui',
    },
    head: () => {
        const router = useRouter();
        const path = router.pathname.split('/');
        let title = path[path.length === 1 ? path : path.length - 1];
        function capitalizeFirstLetter(string) {
            return string[0].toUpperCase() + string.slice(1);
        }
        title = capitalizeFirstLetter(title);
        return (
            <>
                <link rel="shortcut icon" href="./assets/favicon.ico" />
                <title>{title} - Percept UI</title>
            </>
        )

    },
    footer: {
        text: (
            <Footer />
        )
    },
    banner: {
        key: '2.0-release',
        text: (
            <a className="flex w-full justify-center items-center gap-4" href="https://docs-percept-ui.vercel.app/docs/getting-started">
                🎉 Percept UI is released. Read more →
                <span>
                    <Badge variant="soft" color="teal" size="xs">Beta</Badge>
                </span>
            </a>
        )
    },
    toc: {
        backToTop: true
    }
}