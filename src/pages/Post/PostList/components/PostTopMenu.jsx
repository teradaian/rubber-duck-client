import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const PostTopMenu = ({ postTitles }) => {
  return ( 
    <Box style={{ display: 'flex', justifyContent: 'space-between', marginBotton: '1rem', marginTop: '1.5rem', width: '100%' }}>
      <Box>
        <Stack>
          <Typography variant='h5'>
            Literature
          </Typography>
          <Typography style={{ fontFamily: 'abril-display'}} variant='h2'>
            PostModernism
          </Typography>
        </Stack>
      </Box>
      <Box style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="controlled-native">
              Filter by:
            </InputLabel>
            <NativeSelect
              defaultValue={10}
              inputProps={{
                name: 'filterBy',
                id: 'controlled-native',
              }}
            >
              <option value={10}>New</option>
              <option value={20}>Popular</option>
              <option value={30}>Top</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <Autocomplete
        id="post-search"
        freeSolo
        options={postTitles?.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="Search input" />}
        disablePortal
        size='small'
        sx={{ width: 200 }}
      />
      <Button variant="contained" sx={{ height: 40, minWidth: 120 }} endIcon={<AddCircleOutlineIcon />}>
        New Post
      </Button>
      </Box>
    </Box>
   );
}
 
export default PostTopMenu;