import React from 'react'
import InputAndLabel from '../inputAndLabel/InputAndLabel'
import Button from '../button/Button'
import Input from '../inputAndLabel/Input'
import Label from '../inputAndLabel/Label'
import ApplicationContext from '../../contexts/application/ApplicationContext'
import ApplicationFormContext from '../../contexts/applicationForm/ApplicationFormContext'

const ApplicationForm = () => {
  const { createApplication } = React.useContext(ApplicationContext);
  const { isFormOpen, selectedService, closeForm } = React.useContext(ApplicationFormContext);

  const [input, setInput] = React.useState({
    message: '',
    currentOccupation: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedService) return;

    const applicationData = {
      serviceId: selectedService._id,
      serviceName: selectedService.service_name,
      message: input.message,
      currentOccupation: input.currentOccupation,
    };

    createApplication(applicationData);
    closeForm();
  }

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
          <InputAndLabel.Input
            type='text'
            id='currentOccupation'
            name='currentOccupation'
            value={input.currentOccupation}
            onChange={handleChange}
            placeholder='Enter your current occupation'
            required
          />
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
        </InputAndLabel>
      </div>
      <div className='flex flex-col gap-4 mt-6 sm:flex-row sm:gap-6'>
        <Button type='submit'>
          Submit
        </Button>
        <Button onClick={closeForm}>
          Close
        </Button>
      </div>
    </form>
  )
}

export default ApplicationForm
