import React from 'react'
import InputAndLabel from '../inputAndLabel/InputAndLabel'
import Button from '../button/Button'
import Input from '../inputAndLabel/Input'
import Label from '../inputAndLabel/Label'
import ApplicationContext from '../../contexts/application/ApplicationContext'
import ApplicationFormContext from '../../contexts/applicationForm/ApplicationFormContext'

interface InputState {
  message: string;
  currentOccupation: string;
}

interface ErrorsState {
  message?: string;
  currentOccupation?: string;
}

const ApplicationForm = () => {
  const { createApplication } = React.useContext(ApplicationContext);
  const { isFormOpen, selectedService, closeForm } = React.useContext(ApplicationFormContext);

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
    if (!selectedService) return;

    if (!validate()) return;

    const applicationData = {
      serviceId: selectedService._id,
      serviceName: selectedService.service_name,
      message: input.message,
      currentOccupation: input.currentOccupation,
    };

    createApplication(applicationData);
    closeForm();
  };

  if (!isFormOpen) return null;

  return (
    <form
      className='w-dvw max-w-dsktp fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-6 sm:p-8 md:p-10 bg-light-100 border-2 border-gray-300 rounded-lg shadow-lg'
      onSubmit={handleSubmit}
    >
      <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-6'>
        Applying for {selectedService.service_name}
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
          {errors.currentOccupation && <p className="text-red-500">{errors.currentOccupation}</p>}
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
            type='text'
            required={true}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </InputAndLabel>
      </div>
      <div className='flex flex-col gap-4 mt-6 sm:flex-row sm:gap-6'>
        <Button onClick={closeForm} design='stroked' color='color'>
          Cancel
        </Button>
        <Button type='submit' design='filled' color='color'>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default ApplicationForm
