/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Text, Cylinder } from '@react-three/drei'

// Interact button for external links and Scrom response
const  InteractButton = (props) => {

	let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
		width=600,height=800,left=50,top=50`;

  return (
    <group scale={0.2} {...props}>

			<Cylinder scale={[1, 0.01, 1]} rotation-x={Math.PI/2} 
				onClick={(e) => {
												window.open(props.url, "Popup window", params);
												props.sco.setStatus('completed'); /* Run a test call to the Scorm API */
												}}>
				<meshStandardMaterial color={"Blue"} />
			</Cylinder>
			<Text position={[0,0,0.02]} >
				i
			</Text>
    </group>
    
  )
}

export default InteractButton