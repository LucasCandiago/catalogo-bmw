import styles from './../styles/carList.css'
import CarListItemsOA from '../mocks/carListModelAO'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function carList() {

    const carListBox = CarListItemsOA.map(
        (c, i) =>
        <div className='carListBox' key={i}>
            <div>
                <Image src={c.photo}/>
            </div>
            <div>{c.model}</div>
            <div>{c.year}</div>
            <div>{c.price}</div>
        </div>
    )

    return (
        <div className={styles.catalog}>
            <div className={styles.categories}>
                <h1>Ordenar por:</h1>
                <Button onClick> <Link to="/pages/alfabeticOrder">Modelo</Link> </Button>
                <Button onClick> <Link to="/pages/yearOrder">Ano</Link> </Button>
                <Button onClick> <Link to="/pages/priceOrder">Preço</Link> </Button>
            </div>
            <div className='tittleContainer'>
                {carListBox}
            </div>
            
        </div>
    )       
        
}