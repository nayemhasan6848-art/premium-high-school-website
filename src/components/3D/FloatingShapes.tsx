'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 5

    // Create floating shapes
    const shapes: THREE.Mesh[] = []

    // Floating Cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
    const cubeMaterial = new THREE.MeshPhongMaterial({
      color: 0x2563EB,
      wireframe: false,
    })
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    cube.position.set(-2, 1, -3)
    scene.add(cube)
    shapes.push(cube)

    // Floating Sphere
    const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32)
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x0F172A,
      wireframe: false,
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.set(2, -0.5, -4)
    scene.add(sphere)
    shapes.push(sphere)

    // Floating Torus
    const torusGeometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100)
    const torusMaterial = new THREE.MeshPhongMaterial({
      color: 0x1E3A8A,
      wireframe: false,
    })
    const torus = new THREE.Mesh(torusGeometry, torusMaterial)
    torus.position.set(0, 1.5, -5)
    scene.add(torus)
    shapes.push(torus)

    // Lighting
    const light1 = new THREE.PointLight(0x2563EB, 1, 100)
    light1.position.set(5, 5, 5)
    scene.add(light1)

    const light2 = new THREE.PointLight(0x1E3A8A, 0.5, 100)
    light2.position.set(-5, -5, 5)
    scene.add(light2)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    // Animation
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      shapes.forEach((shape, idx) => {
        shape.rotation.x += 0.003 * (idx + 1)
        shape.rotation.y += 0.005 * (idx + 1)
        shape.position.y += Math.sin(Date.now() * 0.0005 + idx) * 0.0015
      })

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 opacity-40" />
}
