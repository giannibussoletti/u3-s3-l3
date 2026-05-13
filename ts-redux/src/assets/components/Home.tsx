import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import type { IBook } from "../../interfaces/types"
import { useDispatch } from "react-redux"
import type { Action, Dispatch, PayloadAction } from "@reduxjs/toolkit"

const Home = () => {
  const [books, setBooks] = useState<IBook[]>([])
  const dispatch = useDispatch<Dispatch<PayloadAction<IBook>>>()

  const getBooks = async () => {
    try {
      const resposne = await fetch("https://striveschool-api.herokuapp.com/food-books")
      if (resposne.ok) {
        const libri: IBook[] = await resposne.json()
        setBooks(libri)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => getBooks(), [])

  return (
    <Container>
      <Row xl={1}>
        {books.map((libro) => {
          return (
            <div key={libro.title}>
              <img className="img-fluid" src={libro.imageUrl} alt="" />
              <h4>{libro.title}</h4>
              <p>{libro.description}</p>
              <Button
                onClick={() => {
                  dispatch({ type: "ADD_TO_CART", payload: libro })
                }}>
                {" "}
                AGGIUNGI AL CARRELLO
              </Button>
            </div>
          )
        })}
        <Col></Col>
      </Row>
    </Container>
  )
}
export default Home
