import { ITarefa } from '../../types/tarefa'
import Item from './Item';
import style from './List.module.scss'


function List({tarefas}: {tarefas: ITarefa[]}) {


    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item} 
                    />
                ))}
            </ul>
        </aside> 
    )
}

export default List;

//A tag <aside> do HTML deve ser usada para criar uma seção em uma página web com         
//conteúdo não necessariamente relacionado com o principal, algo totalmente separado do contexto.