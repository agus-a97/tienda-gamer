import React,{useEffect,useState} from 'react';
import data from '../data/data.json'
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ItemList } from '../itemListContainer/itemList/ItemList';

export const Categoria = () => {

    const [arrayProductos, setArrayProductos] = useState([]);

    const { category } = useParams();

    useEffect(() => {

        console.log(category);
        const promesaProd = new Promise((resolve) => {
            
                resolve(data)
            
        })

        promesaProd
            .then((res) => {
                console.log(res);
                if (category) {

                    res = res.filter(item => item.category === category)
                    setArrayProductos(res)
                } else {
                    setArrayProductos(res)
                }

            })

    }, [category])

  return <div>
      
      <Container fluid="md">
          <ItemList arrayProductos={arrayProductos} />
      </Container>

  </div>;
};
