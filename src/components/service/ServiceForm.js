import styles from '../project/ProjectForm.module.css'

import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ServiceForm( {handleSubmit, btnText, projectData} ) {

    const [service, setService] = useState({})
    
    function submit(event) {
        event.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(event) {
        setService({...service, [event.target.name]: event.target.value})
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type='text'
                text='Nome do serviço'
                name='name'
                placeholder='Insira serviço a ser realizado'
                handleOnChange={handleChange}
            />
            <Input 
                type='number'
                text='Custo do serviço'
                name='cost'
                placeholder='Insira o valor total'
                handleOnChange={handleChange}
            />
            <Input 
                type='text'
                text='Descrição do serviço'
                name='description'
                placeholder='Descreva o serviço'
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ServiceForm