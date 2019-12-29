import Redirect from 'umi/redirect';

export function Index(){
  return(
    <div style = {{width:100+"%",height:100+"%"}} className = "main">
    <Redirect to="/login" />
    </div>
  )
}
export default Index;
