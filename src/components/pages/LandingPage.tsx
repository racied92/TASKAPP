import { useEffect, useState } from "react"
import CarouselHome from "../CarouselHome/CarouselHome"
import CategoriasSelector from "../CategoriasSelector/CategoriasSelector"
import CategoriasTareas from "../CategoriasTareas/CategoriasTareas"
import { TaskService } from "../../services/TaskSerice"
import { Task } from "../../types/Task"

const LandingPage = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData);
    };
    fetchTasks();

  },[]);

  useEffect(() => {
    if (selectedCategory){
      const filtered = tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase());
      setFilteredTasks(filtered);
    }else {
      setFilteredTasks(tasks);
    }

  }, [selectedCategory, tasks ]);
  
  return (
    <>
    
     <CarouselHome />
     <CategoriasSelector onSelectedCategory={setSelectedCategory}/>
     <CategoriasTareas tasks={filteredTasks.length > 0 ? filteredTasks : tasks} />
  
    </>
  )
}

export default LandingPage
