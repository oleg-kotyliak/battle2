import {Box, Paper, styled} from "@mui/material"
import {ReactElement} from "react"
import {green} from "@mui/material/colors"

const ContentBox = styled(Box)({
    backgroundColor: green[800],
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '100px',
    width: '100%',
    '@media (max-width: 600px)': {
        alignItems: 'flex-start',
        paddingTop: 0,
        height: '100hv'
    },
})

const ContentPaper = styled(Paper)({
    background: '#fff',
    position: 'relative',
    width: '100%',
    maxWidth: '900px',
    borderRadius: '5px',
    flexGrow: 1,
    minHeight: '60vh',
    '@media (max-width: 600px)': {
        maxWidth: 'sm',
        paddingTop: 0,
        height: '100vh',
        borderRadius: '0'
    },
})

interface MainLayoutProps {
    children: ReactElement
}

export const MainLayout = ({children} : MainLayoutProps) => {

    return (
        <ContentBox>
            <ContentPaper elevation={2}>
                {children}
            </ContentPaper>
        </ContentBox>
    )
}
