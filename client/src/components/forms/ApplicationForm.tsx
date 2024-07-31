import React from 'react'
import InputAndLabel from '../inputAndLabel/InputAndLabel'
import Button from '../button/Button'
import ApplicationContext from '../../contexts/application/ApplicationContext'
import Modal from '../modal/Modal'

interface InputState {
  message: string;
  currentOccupation: string;
}

interface ErrorsState {
  message?: string;
  currentOccupation?: string;
}

interface ApplicationFormProps {
  _id: string;
  service_name: string;
}

const ApplicationForm : React.FC<ApplicationFormProps> = ({_id, service_name}) => {
  const { createApplication } = React.useContext(ApplicationContext);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [input, setInput] = React.useState<InputState>({
    message: '',
    currentOccupation: ''
  })

  const [errors, setErrors] = React.useState<ErrorsState>({
    message: '',
    currentOccupation: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const validate = () => {
    let newErrors: ErrorsState = {};

    if (!input.currentOccupation) newErrors.currentOccupation = 'Current occupation is required';
    if (!input.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validate()) return;

    const applicationData = {
      serviceId: _id,
      serviceName: service_name,
      message: input.message,
      currentOccupation: input.currentOccupation,
    };

    createApplication(applicationData);
    setIsModalOpen(false);
  };


  return (
    <div>
      <Button color='color' onClick={() => setIsModalOpen(true)}>
        Apply
      </Button>
      <Modal isOpen={isModalOpen}>
        <form
          className='w-full space-y-10 py-5'
          onSubmit={handleSubmit}
        >
          <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-6'>
            Applying for {service_name}
          </h2>
          <div className='space-y-6'>
            <InputAndLabel>
              <InputAndLabel.Label htmlFor='currentOccupation'>
                Current Occupation
              </InputAndLabel.Label>
              <InputAndLabel.Select id='currentOccupation' name='currentOccupation' value={input.currentOccupation} onChange={handleChange}>
                <InputAndLabel.Select.Option value='' disabled={true}>
                  Select Current Occupation
                </InputAndLabel.Select.Option>
                <InputAndLabel.Select.Option value='Student'>
                  Student
                </InputAndLabel.Select.Option>
                <InputAndLabel.Select.Option value='Employed'>
                  Employed
                </InputAndLabel.Select.Option>
                <InputAndLabel.Select.Option value='Unemployed'>
                  Unemployed
                </InputAndLabel.Select.Option>
                <InputAndLabel.Select.Option value='Retired'>
                  Retired
                </InputAndLabel.Select.Option>
              </InputAndLabel.Select>
              {errors.currentOccupation && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.currentOccupation}</p>}
            </InputAndLabel>
            <InputAndLabel>
              <InputAndLabel.Label htmlFor='message'>
                Message
              </InputAndLabel.Label>
              <InputAndLabel.TextArea
                id='message'
                name='message'
                value={input.message}
                onChange={handleChange}
                placeholder='Enter your message'
                required={true}
              />
              {errors.message && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.message}</p>}
            </InputAndLabel>
          </div>
          <div className='grid grid-cols-1 w-full flex-wrap md:flex justify-end gap-3'>
            <Button onClick={()=>{setIsModalOpen(false)}} design='stroked' color='color'>
              Cancel
            </Button>
            <Button type='submit' design='filled' color='color'>
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default ApplicationForm
