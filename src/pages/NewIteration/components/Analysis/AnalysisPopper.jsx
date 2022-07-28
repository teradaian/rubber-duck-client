import { useEffect, useState, useRef } from 'react'
import Box from '@mui/material/Box'
import Popper from '@mui/material/Popper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { ReactComponent as DuckIcon } from '../../../../assets/logo-icon.svg'
import { StyledMessageBox } from '../../../../styles/mui/StyledComponents'


const AnalysisPopper = ({ tips, warnings }) => {
  const duckEl = useRef()
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(tips.length > 0 || warnings.length > 0)
    setAnchorEl(duckEl.current)
  }, [tips, warnings])

  const id = open ? 'simple-popper' : undefined

  return (
    <Box sx={{ padding: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
      <Button aria-describedby={id} type="button">
        <DuckIcon aria-describedby={id} ref={duckEl} style={{  transform: 'rotateY(180deg)' }} />
      </Button>
      <Popper 
        id={id}
        open={open} 
        anchorEl={anchorEl || null} 
        placement='left'
        >
        <StyledMessageBox sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          <Typography>
            Quack! You have some issues! Idiot!
          </Typography>
        </StyledMessageBox>
      </Popper>
    </Box>
  )
}

 
export default AnalysisPopper;