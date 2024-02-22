import {Box, Fade, Typography} from "@mui/material"
import battleAnimation from "../../assets/animations/battle.json"
import Lottie, {LottieRefCurrentProps} from "lottie-react"
import {useEffect, useRef} from "react"
import {useBattleResult} from "../../hooks/useBattleResult.tsx"

interface BattleArenaProps {
    isFighting: boolean | null
}

export const BattleArena = ({isFighting}: BattleArenaProps) => {
    const animation = useRef<LottieRefCurrentProps | null>(null)
    const playerWins = useBattleResult()

    useEffect(() => {
        if (isFighting) {
            animation?.current?.play()
        } else {
            animation?.current?.stop()
        }
    }, [isFighting])

    return (
        <Box>
            <Box height={50} pt={2}>
                <Fade in={!isFighting}>
                    <Typography
                        color={playerWins ? 'green' : 'red'}
                        variant="h3"
                        align="center">
                        {isFighting === false ? playerWins ? 'Victory' : 'Defeat' : null}
                    </Typography>
                </Fade>
            </Box>
            <Box>
                <Lottie style={{ height: '50vh', width: 'auto' }} lottieRef={animation} autoplay={false} animationData={battleAnimation}/>
            </Box>
        </Box>
    )
}
