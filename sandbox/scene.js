function createScene()
{
    console.log("create Scene");
    const elem = document.getElementById("canvas");
    const width = 800;
    const height = 256;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );

    elem.appendChild( renderer.domElement );

    const raycaster = new THREE.Raycaster();
    let pointer = null;//new THREE.Vector2();

    function pick()
    {
        if (!pointer) return;
        raycaster.setFromCamera( pointer, camera );
        const intersects = raycaster.intersectObjects( scene.children );

        Q("cube").selected = false;
        for ( let i = 0; i < intersects.length; i ++ ) {

            const o = intersects[i].object;
            Q("cube").selected = true;
        }
        pointer = null;
    }

    function animate() {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        pick();

    
        renderer.render( scene, camera );
    }

    function onPick( event ) {

        // calculate pointer position in normalized device coordinates
        // (-1 to +1) for both components
        pointer = new THREE.Vector2();
        pointer.x = ( event.offsetX / width ) * 2 - 1;
        pointer.y = - ( event.offsetY / height ) * 2 + 1;
    }

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    cube.name = "Cube";

    const light = new THREE.PointLight(0xffffff, 100, 500);

    light.position.set(0,10,10);

    scene.add( cube );
    scene.add(light);

    camera.position.z = 5;

    elem.addEventListener("mousedown", onPick);


    animate();

}