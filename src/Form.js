import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import "./Form.css";

function Form(){

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const [disabled, setDisabled] = useState(false);
      const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: '',
      });
    
      // Shows alert message for form submission feedback
      const toggleAlert = (message, type) => {
        setAlertInfo({ display: true, message, type });
    
        // Hide alert after 5 seconds
        setTimeout(() => {
          setAlertInfo({ display: false, message: '', type: '' });
        }, 5000);
      };
    
      // Function called on submit that uses emailjs to send email of valid contact form
      const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        try {
          // Disable form while processing submission
          setDisabled(true);
    
          // Define template params
          const templateParams = {
            name,
            email,
            subject,
            message,
          };
    
          // Use emailjs to email contact form data
          await emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_PUBLIC_KEY,
          );
    
          // Display success alert
          toggleAlert('Form submission was successful!', 'success');
        } catch (e) {
          console.error(e);
          // Display error alert
          toggleAlert('Uh oh. Something went wrong.', 'danger');
        } finally {
          // Re-enable form submission
          setDisabled(false);
          // Reset contact form fields after submission
          reset();
        }
      };

    return (

        <>
    
        <div className='containerAlert'>
            <table className='tableAlert'>
                <td className='videoCont'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SBsasyiaMsU?si=iZ_e6fGpPkImUGWb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </td>
                <td>
                <div className='ContactForm'>
              <h1>Envianos tu alerta</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='alertForm'>
              <form
                id='contact-form'
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className='rowformRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name',
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && (
                      <span className='errorMessage'>
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <select
                      type='select'
                      name='select'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please select a subject',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    >
                        <option value="" selected disabled hidden>Seleccione una actividad</option>
                        <option>Contaminación</option>
                        <option>Especies invasoras</option>
                        <option>Daños a la flora y fauna</option>
                        <option>Otras actividades dañinas</option>

                    </select>

                    {errors.subject && (
                      <span className='errorMessage'>
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true,
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && (
                      <span className='errorMessage'>
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>

                <button
                  className='submitAlert'
                  disabled={disabled}
                  type='submit'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role='alert'
        >
          {alertInfo.message}
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            } // Clear the alert when close button is clicked
          ></button>
        </div>
      )}
    </div>
                </td>          
            </table>
        </div>
    
        </>
      );

}

export default Form;