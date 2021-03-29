import {CircularProgress} from '@material-ui/core'
import {FC} from 'react'

const Loading: FC = () => (
    <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
    >
      <CircularProgress size={120} disableShrink />;
    </div>
)

export default Loading
