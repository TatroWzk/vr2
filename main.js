const scene = new THREE.Scene();
scene.background = new THREE.CubeTextureLoader()
	.setPath( 'texturas/' )
	.load( [ 'k_px.jpg', 'k_nx.jpg', 'k_py.jpg', 'k_ny.jpg', 'k_pz.jpg', 'k_nz.jpg' ] );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const textureLoader = new THREE.TextureLoader();
const tiro = textureLoader.load('26018.jpg')
const OSA = textureLoader.load('osa.png')
const PERROMENOR = textureLoader.load('menor.png')
const PERROMAYOR = textureLoader.load('mayor.png')
const ORION = textureLoader.load('orion.png')
const LunaT = textureLoader.load('luna.jpg')

const geometryluna = new THREE.SphereGeometry( 60, 32, 16 ); 
const materialluna = new THREE.MeshPhongMaterial( { map: LunaT } );  //map: LunaT
const spherezzz = new THREE.Mesh( geometryluna, materialluna ); 
scene.add( spherezzz );
spherezzz.scale.x = 5;
spherezzz.scale.z = 5;
spherezzz.scale.y = 4;
spherezzz.position.y = -270;
//const geometry2 = new THREE.CylinderGeometry(1, 1, 0.2,32);
//const material2 = new THREE.MeshBasicMaterial({ map:tiro,}); /// { color: 0xff0000, opacity: 0.5, transparent: true }
//const cube = new THREE.Mesh(geometry2, material2);
//scene.add(cube);
//cube.position.y=3
//cube.rotation.z=Math.PI/2

//cansula
const geometryobjtibvo = new THREE.CylinderGeometry(50, 50, 0.2,32);
const materialobjtibvo = new THREE.MeshBasicMaterial({ map:tiro,});


//OSA MAYOR 
const geometry3 = new THREE.BoxGeometry(800, 600, 1,1);
const materialosa = new THREE.MeshBasicMaterial({ map:OSA,});
const osa = new THREE.Mesh(geometry3, materialosa);
scene.add(osa);
osa.visible = false;
osa.position.x=900
osa.position.y=50
osa.rotation.y=Math.PI/2

/////on 
/// { color: 0xff0000, opacity: 0.5, transparent: true }

const onosa = new THREE.Mesh(geometryobjtibvo, materialobjtibvo);
scene.add(onosa);
onosa.position.x=850
onosa.position.y=-160
onosa.position.z=300
onosa.rotation.z=Math.PI/2
//// of
const offosa = new THREE.Mesh(geometryobjtibvo, materialobjtibvo);
scene.add(offosa);
offosa.position.x=850
offosa.position.y=-160
offosa.position.z=-300
offosa.rotation.z=Math.PI/2

// PERRO MENOR
const materialmenor = new THREE.MeshBasicMaterial({ map:PERROMENOR,});
const menor = new THREE.Mesh(geometry3, materialmenor);
scene.add(menor);
menor.visible = false;
menor.position.z=900
menor.position.y=50
//menor.position.x=100

////on 
const onmenor = new THREE.Mesh(geometryobjtibvo, materialobjtibvo);
scene.add(onmenor);
onmenor.position.x=-300
onmenor.position.y=-160
onmenor.position.z=850
onmenor.rotation.x=Math.PI/2
/////off
const offmenor = new THREE.Mesh(geometryobjtibvo, materialobjtibvo);
scene.add(offmenor);
offmenor.position.x=300
offmenor.position.y=-160
offmenor.position.z=850
offmenor.rotation.x=Math.PI/2

//PERRO MAYOR
const materialmayor = new THREE.MeshBasicMaterial({ map:PERROMAYOR,});
const mayor = new THREE.Mesh(geometry3, materialmayor);
scene.add(mayor);
mayor.visible = false;
mayor.position.z=-900   
mayor.position.y=50
//mayor.position.x=100

//////on 
const onmayor = new THREE.Mesh(geometryobjtibvo, materialobjtibvo);
scene.add(onmayor);
onmayor.position.x=300
onmayor.position.y=-160
onmayor.position.z=-850
onmayor.rotation.x=Math.PI/2
////off
const offmayor = new THREE.Mesh(geometryobjtibvo, materialobjtibvo);
scene.add(offmayor);
offmayor.position.x=-300
offmayor.position.y=-160
offmayor.position.z=-850
offmayor.rotation.x=Math.PI/2

//ORION
const materialorion = new THREE.MeshBasicMaterial({ map:ORION,});
const orion = new THREE.Mesh(geometry3, materialorion);
scene.add(orion);
orion.visible = false;
orion.position.x=-900
orion.position.y=50
orion.rotation.y=Math.PI/2

////on
const onorion = new THREE.Mesh(geometryobjtibvo, materialobjtibvo);
scene.add(onorion);
onorion.position.x=-850
onorion.position.y=-160
onorion.position.z=-300
onorion.rotation.z=Math.PI/2
////off
const offorion = new THREE.Mesh(geometryobjtibvo, materialobjtibvo);
scene.add(offorion);
offorion.position.x=-850
offorion.position.y=-160
offorion.position.z=300
offorion.rotation.z=Math.PI/2

//ANDROMEDA

// instantiate a loader
const loader = new THREE.OBJLoader();

// load a resource
loader.load(
    'Nave2.0.obj',
    function(object) {
        object.position.x = 80;
		object.position.z = 80;
		object.position.y = -55;
        object.rotation.y = 2.1;
        object.rotation.x = -0.1;
        object.rotation.z = 0.4;
        object.scale.set(4, 4, 4);

	        // Crear material con textura
		
        const texture = new THREE.TextureLoader().load('Prueba_final.jpeg');
        const material2 = new THREE.MeshStandardMaterial({ 
			map : texture ,
		  emissive: 0xffd500,
	emissiveIntensity : 0.01,
	envMap : texture,
	roughness : 0,
	});

        // Aplicar el material a cada parte del objeto cargado
        object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.material = material2;
            }
        });

        scene.add(object);
    },
    function(xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function(error) {
        console.log('An error happened');
        alert();
    }
);





const points = [];
for ( let i = -12; i < -10; i ++ ) {
	points.push( new THREE.Vector2( 0.9*Math.sin( i * 0.4 ) * 4 + 9, ( i - 12 ) * 0.5 ) );
}
for ( let i = -11; i < -8; i ++ ) {
	points.push( new THREE.Vector2(0.09* Math.cos( i * 5 ) * 4.5 + 9, ( i-12) * 0.4) );
}
for ( let i = -9; i < -6; i ++ ) {
	points.push( new THREE.Vector2( 0.9*Math.cos( i * 36 ) * 4.5 + 9, ( i - 7 ) *0.6 ) );
}







const texturah = textureLoader.load('dorado.jpg');
const texturapiso = textureLoader.load('pisotexture.jpg');
const normalpiso = textureLoader.load('NORMALPISO.png');
const geometry = new THREE.LatheGeometry( points, 100 );
const material =new THREE.MeshStandardMaterial( { 

	map: texturah,
	emissive: 0xffd500,
	emissiveIntensity : 0.01,
	envMap : texturah,
	roughness : 0,
	
	//receiveShadow: true,
	//castShadow: true
} );

const lathe = new THREE.Mesh( geometry, material );
scene.add( lathe );


//luces

renderer.shadowMap.enabled = true;

// Directional light settings
const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 70, 80,  0);
light.rotation.set( 6, 16, 8 );
light.castShadow = true;
scene.add( light );


light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default
const sphereSize = 1;
//const pointLightHelper = new THREE.PointLightHelper( light, sphereSize );
//scene.add( pointLightHelper );


const light2 = new THREE.PointLight( 0xffffff, 1, 60 );
light2.position.set( -30, 0, -30 );
light2.rotation.set( 6, 16, 8 );
light2.castShadow = true;
scene.add( light2 );

const light22 = new THREE.PointLight( 0xffffff, 1, 60 );
light22.position.set( -30, 0, 30 );
light22.rotation.set( 6, 16, 8 );
light22.castShadow = true;
scene.add( light22 );

//const pointLightHelper2 = new THREE.PointLightHelper( light2, sphereSize );
//scene.add( pointLightHelper2 );

const light3 = new THREE.PointLight( 0xffffff, 1, 100 );
light3.position.set( 70, 30, 0);
light3.rotation.set( 20, 30, 8 );
light3.castShadow = true;
scene.add( light3 );

////const pointLightHelper3 = new THREE.PointLightHelper( light3, sphereSize );
//scene.add( pointLightHelper3 );





//piso
////const geopiso = new THREE.BoxGeometry( 300,2, 300 );

//const matpiso = new THREE.MeshPhongMaterial( { 
	//map:texturapiso,
//	normalMap:normalpiso,
	//combine: texturah,
	//reflectivity : 1,
	//shininess : 100,

	
	//envMap : texturapiso,
	//roughness : 0,
	//receiveShadow: true,
	//castShadow: true,
	
//} );//

//const piso = new THREE.Mesh( geopiso, matpiso );

//piso.castShadow = true;
//piso.receiveShadow = true;
//scene.add( piso );
//piso.position.y = -50;

//mesap2.position.set(1,2,1);


//////audio

const listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
const sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'audio2.wav', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 1 );
	sound.play();
});


const ambli = new THREE.AmbientLight( 0xffffff , 0.1); // soft white light
scene.add( ambli );
//castear

//camera.position.z = 70;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
//controls.minDistance = 15;
//controls.maxDistance = 15;
//controls.screenSpacePanning = false;
//controls.enableDamping = false;
//controls.dampingFactor = false;
controls.mouseButtons = {
	LEFT: THREE.MOUSE.ROTATE,
	//MIDDLE: THREE.MOUSE.DOLLY,
//	//RIGHT: THREE.MOUSE.PAN
}

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const mouse = new THREE.Vector2();

function onPointerMove(event) {
    // calculate pointer position in normalized device coordinates (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    updateIntersectedObject();
}
camera.position.z=5;
function updateIntersectedObject(event) {
    // update the picking ray with the camera and pointer position
    raycaster.setFromCamera(mouse, camera);

    // calculate objects intersecting the picking ray  osa menor mayor orion
    const intersects = raycaster.intersectObjects([onosa]);
	console.log(intersects)
   if (intersects.length == 1) {
        osa.visible = true
        // Si el rayo intersecta el cubo al hacer clic, cambia su posiciÃ³n
        //cube.position.x = Math.random() * 10 - 5; // Rango de -5 a 5
        //cube.position.y = Math.random() * 10 - 5; // Rango de -5 a 5
    }
    const intersects2 = raycaster.intersectObjects([offosa]);
    if (intersects2.length == 1) {
        osa.visible = false
    }
    const intersects3 = raycaster.intersectObjects([onmenor]);
    if (intersects3.length == 1) {
        menor.visible = true
    }
    const intersects4 = raycaster.intersectObjects([offmenor]);
    if (intersects4.length == 1) {
        menor.visible = false
    }
    const intersects5 = raycaster.intersectObjects([onmayor]);
    if (intersects5.length == 1) {
        mayor.visible = true
    }
    const intersects6 = raycaster.intersectObjects([offmayor]);
    if (intersects6.length == 1) {
        mayor.visible = false
    }
    const intersects7 = raycaster.intersectObjects([onorion]);
    if (intersects7.length == 1) {
        orion.visible = true
    }
    const intersects8 = raycaster.intersectObjects([offorion]);
    if (intersects8.length == 1) {
        orion.visible = false
    }

	//const intersectsca = raycaster.intersectObjects([cylinder2]);
	//console.log(intersectsca)

	//if (intersectsca.length > 0) {
		//camera.position.x=raycaster

        // Si el rayo intersecta el cubo al hacer clic, cambia su posiciÃ³n
  //      cylinder2.position.x = Math.random() * 10 - 5; // Rango de -5 a 5
 //       cylinder2.position.y = Math.random() * 10 - 5; // Rango de -5 a 5
    }
//}


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
window.addEventListener('pointermove', onPointerMove);
window.addEventListener('click', onPointerClick);