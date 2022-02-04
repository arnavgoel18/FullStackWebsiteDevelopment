import GridLoader from 'react-spinners/GridLoader'
import { css } from '@emotion/react'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
`
function App(){
return(<GridLoader color={'#F5A623'} loading={true} css={override} size={15} />)
}
export default App