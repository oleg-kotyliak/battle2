import {Box, Button, styled} from "@mui/material"
import {useState} from "react"
import {BATTLE_ROUNDS, MS_PER_ROUND} from "../../constants/battle.ts"
import {BattleArena} from "../../components/Battle/BattleArena.tsx"

const BattleBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    '@media (max-width: 600px)': {
        minHeight: '100vh',
    },
})

export const Battle = () => {
    const [isFighting, setIsFighting] = useState<boolean | null>(null)

    const startBattle = () => {
        setIsFighting(true)

        setTimeout(() => {
            setIsFighting(false)
        }, BATTLE_ROUNDS * MS_PER_ROUND)
    }

    return (
        <BattleBox>
            <Box>
                <BattleArena isFighting={isFighting} />
            </Box>
            <Box>
                <Box display="flex" justifyContent="center" p={4}>
                    <Button onClick={startBattle} disabled={!!isFighting} variant="contained">Start Battle</Button>
                </Box>
            </Box>
        </BattleBox>
    )
}
