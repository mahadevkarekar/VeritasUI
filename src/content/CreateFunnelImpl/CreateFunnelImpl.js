import {
  Button,
  Tearsheet,
  ProgressStep,
  ProgressIndicator,
  Wizard,
  WizardStep,
  RadioButton,
  RadioButtonGroup,
  Checkbox,
  TextArea,
  TextInput
} from "@carbon/ibm-security";

import React from "react";
import { render } from "react-dom";

import CreateSource from '../CreateSource/CreateSource';


class CreateFunnelImpl extends React.Component {
    constructor(props) {
      super(props);
      this.state = {   date: new Date(),
       // sourceId:1,
        isOpen:false,
        wizardState:{},
      //  isLocationKnown:false,
      //  location:"",
      //  locationDescription:""
    };
    }
  

    
    componentDidMount() {
     
    }
  
    componentWillUnmount() {
      
    }
  
 handlelocationChange = value => {
 
    };
     updateSourceDeatails = value => {
     
    };
     handleisLocationKnownChange = value => {
     
      
    };
    
     handleSourceChange = value => {
     
        
      };
  
  
    render() {

        const {isOpen, wizardState = {}} = this.state;
      return (

<div>
        <Button
          onClick={(_)=>this.setState(
            ({isOpen}) => ({isOpen: !isOpen})
          )}
        >
          {this.state.isOpen ? 'Close' : 'Open'}
        </Button>

          <Wizard
            title="Example"
            subTitle="Example Wizard"
            isOpen={(wizardState) => this.setState({isOpen: true})}
            onClose={(wizardState) => this.setState({wizardState, isOpen: false})}
            initState={wizardState} 
            focusTrap= {false} 
          >
            <WizardStep
              title="First Step"
              renderMain={(state, setState) => (<div><div> <div class="bx--grid">
              <div class="bx--row">
                <div class="bx--col">
                  <RadioButtonGroup
                    defaultSelected="default-selected"
                    legend="Group Legend"
                    name="radio-button-group"
                    valueSelected="default-selected"
                    orientation='vertical'
                    onChange={this.handleSourceChange}
                     
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
                <div class="bx--col">
  
                  <div class="bx--grid" aria-hidden>
                    <div class="bx--row">
  
                      <div class="bx--col-lg-12" >
                        <h5> File share details</h5>
                        <br></br>
                      </div>
                    </div>
                    <div class="bx--row">
  
                      <div class="bx--col-lg-12">
                      <TextInput
                      helperText=" "
                      id="loc"
                      invalidText="Invalid error message."
                      labelText="Location of file Share"
                      placeholder="Placeholder text"
                      onChange={this.handlelocationChange}
                      />
                      </div>
                    </div>
                    <div class="bx--row">
                      <div class="bx--col">
  
                        <fieldset className="bx--fieldset">
                          <legend className="bx--label"></legend>
                          <Checkbox defaultChecked labelText="I dont know location (please describe below)"
                           id="checked"
                           onChange={this.handleisLocationKnownChange}
                           />
  
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
            </div></div></div>)}
              next={async state => state}
            //  validate={({ input1Value = '' }) => input1Value.trim().length >= 3}
            />
            <WizardStep
              title="2nd Step"
              renderMain={(state, setState) => (<div><p>....</p>...</div>)}
             // validate={({ checkboxValue = false }) => checkboxValue}
              next={async state => state}
            />
          </Wizard>
      </div>
 
       
      );
    }
  }
 


export default CreateFunnelImpl;
