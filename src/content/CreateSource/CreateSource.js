import React ,{ useState } from 'react';
import {
   RadioButton,
   RadioButtonGroup,
   Checkbox,
   TextArea,
   TextInput
} from 'carbon-components-react';



function  CreateSource(props)
{
/*class CreateSource  extends React.Component {
    constructor( ) {
      super();
      this.state = {sourceId: 0};
    }
    
  */  
 
 
 const [source, setSource] = useState([]);
  const [sourceId, setSourceId] = useState(1);
  const [isHidden, setIsHidden] = useState("Hidden");
  
        const handleSourceChangeImpl = value => {  
          if(value !=8)
          {
            setIsHidden("Hidden")
          }else
          {
            setIsHidden("")
          } 
          props.handleSourceChange(value); 
         
      };  

          
   
  return ( 
    
   <div className="bx--grid">
  <div className="bx--row">
    <div className="bx--col"> 
    <RadioButtonGroup
    defaultSelected="default-selected"
    legend="Group Legend"
    name="radio-button-group"
    valueSelected="default-selected"
    orientation='vertical'
    onChange={handleSourceChangeImpl}
    valueSelected={props.sourceId}
  >
    <RadioButton
      id="radio-1"
      labelText="API call"
      value="1"
    />
    <RadioButton
      id="radio-2"
      labelText="AWS"
      value="2"
    />
    <RadioButton
      id="radio-3"
      labelText="Box"
      value="3"
    />
    <RadioButton
      id="radio-4"
      labelText="API call"
      value="4"
    />
    <RadioButton
      id="radio-5"
      labelText="Content Navigator"
      value="5"
    />
    <RadioButton
      id="radio-6"
      labelText="Content navigator on cloud"
      value="6"
    />
    <RadioButton
      id="radio-7"
      labelText="DropBox"
      value="7"
    />
    <RadioButton
      id="radio-8"
      labelText="File Share"
      value="8"
      
    />
    <RadioButton
      id="radio-9"
      labelText="Git Hub"
      value="9"
       
    />
  </RadioButtonGroup>
    
    </div>

    <div class="bx--col" >  
      <div class="bx--grid"  {...isHidden} > 
      <div class="bx--row">

<div class="bx--col-lg-12" > 
<h5> File share details</h5>
<br></br>
 </div> 
</div>
        <div class="bx--row" >

        <div class="bx--col-lg-12"> 
                
                 
    <TextInput
      helperText=" "
      id="test2"
      invalidText="Invalid error message."
      labelText="Location of file Share"
      placeholder="Placeholder text"
      />
   
         </div> 
        </div>
        <div class="bx--row">
            <div class="bx--col"> 

            <fieldset className="bx--fieldset">
  <legend className="bx--label"></legend>
  <Checkbox defaultChecked labelText="I dont know location (please describe below)" id="checked" />
  
</fieldset>

            </div> 
        </div>
        <div class="bx--row">
            <div class="bx--col"> 
            <div>
      <TextArea
        helperText=" "
        id="test2"
        invalidText="A valid value is required"
        labelText="Description"
        placeholder=" "
      />
    </div>
            </div> 
        </div>
        </div>
    
    </div>
     
  </div>
</div>
      
  );
}
 

export default CreateSource;
