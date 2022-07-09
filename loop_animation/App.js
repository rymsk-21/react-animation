import React from 'react'
import { useSpring, a } from '@react-spring/web'
import styled from 'styled-components'
import './styles.css'

export default function App() {
  const styles = useSpring({
    from: {
      rotate: '0deg'
    },
    to: {
      rotate: '360deg'
    },
    loop: true,
    config: {
      duration: 700
    }
  })
  return (
    <div className="App"
    style={{
      backgroundColor: 'black'
    }}>
      <Loader style={styles} />
    </div>
  )
}

const Loader = styled(a.div)({
  width: 50,
  height: 50,
  borderRadius: '50%',
  border: '5px solid #aaa',
  borderTopColor: 'transparent' 
})

