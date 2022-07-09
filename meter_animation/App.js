import React from 'react'
import { useSpring, a } from '@react-spring/web'
import styled from 'styled-components'
import './styles.css'

export default function App() {
  const [toggle, setToggle] = React.useState(
    false
  )
  const styles = useSpring({
    from: {
      width: '0%',
      backgroundColor: '#eee'
    },
    to: async (next) => {
      if (toggle) {
        await next({
          width: '100%'
        })
        await next({
          backgroundColor: 'skyblue'
        })
      } else {
        await next({
          backgroundColor: '#eee'
        })
        await next({
          width: '0%'
        })
      }
    }
  })
  return (
    <div 
    className="App"
      style={{
        backgroundColor: '#f4f4f4'
      }}
    >

      <Container
      onClick={() => setToggle(!toggle)}
      >
        <Meter style={styles} />
        <a.div style={{ marginTop: 20 }}>
        {styles.width.to((w) => {
          return w.replace(/\.(\d+)/, '')
        })}
        </a.div>
      </Container>
    </div>
  )
}

const Container = styled('div')({
  width: 400,
  height: 70,
  backgroundColor: '#fff',
  borderRadius: 20
})

const Meter = styled(a.div)({
  width: 400,
  height: 70,
  borderRadius: 20
})
