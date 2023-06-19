import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {createTask, deleteTask, updateTask, getTask} from '../api/tasks.api'
import {useNavigate, useParams} from 'react-router-dom'

export function TaksFormPage(){


  const {register, handleSubmit, formState:{errors}, setValue} = useForm()

  const navigate = useNavigate();
  const params = useParams()

  const onsubmit = handleSubmit(async data => {
    if (params.id) {
      await updateTask(params.id, data);
    }else{
      await createTask(data);
    }
    navigate("/tasks/");
  })

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const {data} = await getTask(params.id)
        setValue('title', data.title)
        setValue('description', data.description)
      }
    }
    loadTask();
  }, [])

    return(
      <div>
        <form onSubmit={onsubmit}>

          <input type="text" placeholder="Titulo"
          {...register("title", {required: true})} />
          {errors.title && <span> Titulo es requerido</span>}

          <textarea  rows="3" placeholder="Descripción"
          {...register("description", {required: true})}></textarea>
          {errors.description && <span> Descripción es requerido</span>}

          <button>Guardar</button>

        </form>´

      {params.id && <button onClick={async() =>{
        const accepted = window.confirm('Estas seguro?')
        if (accepted) {
          await deleteTask(params.id)
          navigate("/tasks/");
        }
      }}>
        Eliminar
      </button>}

      </div>
    )
  }
  
  