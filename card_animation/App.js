import React from 'react'
import { animated, useSpring } from '@react-spring/web'
import styled from 'styled-components'
import './styles.css'


export default function App() {
  const [flipped, setFlipped] = React.useState(
    false
  )
  const styles = useSpring({
    opacity: flipped ? 1 : 0,
    rotateY: flipped ? '180deg' : '0deg'
  })
  return (
    <div className="App"
    style={{
      perspective: '500px'
    }}
      onClick={() => {
        setFlipped(!flipped)
      }}
    >
      <Card style={styles} />
      <BlueCard 
        style={{
          opacity: styles.opacity.to((o) => 1 - o),
          rotateY: styles.rotateY
        }}
        />
    </div>
  )
}

const Card = styled(animated.div)({
  position: 'absolute',
  width: 500,
  height: 300,
  borderRadius: 20,
  backgroundImage: 'linear-gradient(to right, #434343 0%, black 100%);'
})

const BlueCard = styled(animated.div)({
  position: 'absolute',
  width: 500,
  height: 300,
  borderRadius: 20,
  backgroundImage: 
  'linear-gradient(to right, #868f96 0%, #596164 100%);'
})
