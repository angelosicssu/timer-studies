import Item from './Item';
import style from './List.module.scss'

function List() {

    const tarefas = [{ //ESTOU CRIANDO UM ARRAY DE OBJETOS
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }]

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