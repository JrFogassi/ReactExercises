
const ItemsArray = () => {
    const animalItems = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
    const animalList = animalItems.map(item => <ul>{item}</ul>)
    return <ul>{animalList}</ul>
       
}

export default ItemsArray