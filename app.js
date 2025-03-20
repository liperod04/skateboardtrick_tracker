console.log("✅ app.js is loaded!");

window.startThreeJS = function() {
    console.log("Three.js function is running!");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    console.log("Renderer added to page.");

    scene.background = new THREE.Color(0xaaaaaa);

    const deckGeometry = new THREE.BoxGeometry(2, 0.1, 6);
    const deckMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513, wireframe: true });
    const skateboard = new THREE.Mesh(deckGeometry, deckMaterial);
    scene.add(skateboard);

    console.log("Skateboard added to scene.");

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        skateboard.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
    console.log("Animation loop started.");
};
