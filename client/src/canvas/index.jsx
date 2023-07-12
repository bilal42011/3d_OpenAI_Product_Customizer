import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Center, Environment, Preload } from "@react-three/drei"
import Backdrop from "./backdrop"
import Shirt from "./Shirt"
import CameraRig from "./CameraRig"
import CanvasLoader from "../components/CanvasLoader"

const CanvasModel = () => {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 2], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            className="w-full max-w-full h-full transition-all ease-in">
            <Suspense fallback={<CanvasLoader />}>
                <ambientLight intensity={0.5} />
                <Environment preset="city" />
                <CameraRig>
                    <Backdrop />
                    <Center>
                        <Shirt />
                    </Center>
                </CameraRig>
            </Suspense>
        </Canvas>
    )
}

export default CanvasModel