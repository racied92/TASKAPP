import {useEffect, useState } from "react";
import {Task} from "../../types/Task"
import CategoriasSelector from "../CategoriasSelector/CategoriasSelector";
import CategoriasTareas from "../CategoriasTareas/CategoriasTareas";
import { TaskService } from "../../services/TaskSerice";

const Categorias = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory ] =useState<string>(''); //estado para la categoria seleccionada
  
  useEffect(()=> {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks ();
       setTasks(tasksData);
    };

    fetchTasks();
  },[]);

  //filtrar tareas por categoria seleccionada
  const filteredTask = selectedCategory
  ? tasks.filter (task => task.estado.toUpperCase() === selectedCategory.toUpperCase())
  : tasks;

  return (
    <div className="containser mt-5">
      <CategoriasSelector onSelectedCategory={setSelectedCategory}/>
      <CategoriasTareas tasks={ filteredTask } />

    </div>
  )
}

export default Categorias