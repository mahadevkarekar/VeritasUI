import React from "react";
import {
    Button,
    Tearsheet,
    ProgressStep,
    ProgressIndicator
  } from "@carbon/ibm-security";
  import DatePicker from "carbon-components-react/lib/components/DatePicker";
  import DatePickerInput from "carbon-components-react/lib/components/DatePickerInput";
  import CreateSource from '../CreateSource/CreateSource';
 

const CreateFunnel = () => { 

  const [isLoading, setIsLoading] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [sourceId, setSourceId] = React.useState(0);
  const [source, setSource] = React.useState([]);
  const  data = {
      sourceId: '',
      SourceDetails: {
      location :'',
      isLocationKnown:false
    },
    ContentType:{

    },
    options :{ 
      preprocessingTemplateId :0,
      preprocessingOptions:{ 
       }
    }   
}
 /* 
postDataHandler = () => {
    const data = {
        sourceId: sourceId,
        //location: this.state.location,
        //isLocationKnown: this.state.isLocationKnown,
        
    };
  axios.post('/posts', data)
        .then(response => {
            console.log(response);
        }); 
}*/


function handleSourceIdChange(newValue) {
  setSourceId(newValue);
}
    
        const renderSidebar = () => {
          const STEP_ELEMENTS = [
            {
              firstText: "Select Source",
              secondaryText: " "
            },
            {
              firstText: "Select Content Type",
              secondaryText: " "
            },
            {
              firstText: "Select Options",
              secondaryText: " "
            },
            {
              firstText: "Select Destinations",
              secondaryText: " "
            },
            {
              firstText: "Summarry and Review",
              secondaryText: " "
            }
          ].map((step, index) => {
            return (
              <ProgressStep
                {...{
                  description: step.firstText,
                  disabled: index > currentStep,
                  id: `abc-progress-step-${index}`,
                  key: `abc-progress-step-${index}`,
                  label: step.firstText,
                  secondaryLabel: step.secondaryText
                }}
              />
            );
          });
      
          return (
            <ProgressIndicator
              vertical={true}
              currentIndex={currentStep}
              className={`abc-progress-indicator`}
            >
              {STEP_ELEMENTS}
            </ProgressIndicator>
          );
        };
        return (
          <Tearsheet
            {...{
              className: `test-tearsheet`,
              closeButton: {
                isDisabled: false,
                label: "CLOSE",
                onClick: () => {}
              },
              focusTrap: false,
              isOpen: true,
              loading: false,
              mainTitle: "",
              primaryButton: {
                isDisabled: false,
                label: "NEXT",
                onClick: () => {setCurrentStep( currentStep+1    )}
              },
              renderSidebar: renderSidebar, 
              
              renderMain: (sourceid) => (              
                <CreateSource sourceId={sourceId} handleSourceChange={handleSourceIdChange}></CreateSource>                              
              ),
              rootNode: undefined,
              secondaryButton: {
                isDisabled: false,
                label: "BACK",
                onClick: () => {
                   if(currentStep>0)
                   {
                      setCurrentStep(currentStep-1)
                   }
                }
              },
              tertiaryButton: {
                isDisabled: true,
                label: "BACK2",
                onClick: () => {}
              }
            }}
          />
        );
      
};

export default CreateFunnel;
