import React from 'react'
import InputAndLabel from '../inputAndLabel/InputAndLabel'
import Label from '../inputAndLabel/Label'
import Input from '../inputAndLabel/Input'
import Button from '../button/Button'

const ServiceForm = () => {
    // const [input, setInput] = React.useState({
    //     message: '',
    //     currentOccupation: ''
    // })

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setInput({
    //         ...input,
    //         [event.target.name]: event.target.value
    //     })
    // }

    // const handleSubmit = async (event: React.FormEvent) => {
    //     event.preventDefault();
    //     if (!selectedService) return;

    //     const applicationData = {
    //         serviceId: selectedService._id,
    //         serviceName: selectedService.service_name,
    //         message: input.message,
    //         currentOccupation: input.currentOccupation,
    //     };

    //     await createApplication(applicationData);
    //     closeForm();
    // }

    // if (!isFormOpen) return null;

    // return (
    //     <form className='w-dvw max-w-dsktp fixed top-7 z-50 p-10 bg-light border-2' onSubmit={handleSubmit}>
    //         <h2>Applying for {selectedService.service_name}</h2>
    //         <div>
    //             <InputAndLabel>
    //                 <Label htmlFor='message'>Message</Label>
    //                 <Input
    //                     type='text'
    //                     id='message'
    //                     name='message'
    //                     value={input.message}
    //                     onChange={handleChange}
    //                     placeholder='Enter your message here'
    //                     required
    //                 />
    //             </InputAndLabel>
    //             <InputAndLabel>
    //                 <Label htmlFor='currentOccupation'>Current Occupation</Label>
    //                 <Input
    //                     type='text'
    //                     id='currentOccupation'
    //                     name='currentOccupation'
    //                     value={input.currentOccupation}
    //                     onChange={handleChange}
    //                     placeholder='Enter your current occupation'
    //                     required
    //                 />
    //             </InputAndLabel>
    //         </div>
    //         <Button type='submit'>Submit</Button>
    //         <Button onClick={closeForm} >Close</Button>
        // </form>
    // )
}

export default ServiceForm
