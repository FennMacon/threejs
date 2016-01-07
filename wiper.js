
renderer = new THREE.WebGLRenderer( { preserveDrawingBuffer: true } );
	renderer.autoClearColor = false;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

                scene.fog = new THREE.FogExp2( 0xffffff, .05 );
                light = new THREE.HemisphereLight( 0xfffff0, 0x101020, 1.25 );
                light.position.set( 0.75, 1, 0.25 );
                scene.add( light );

var geometry = new THREE.CubeGeometry(3,11,Math.sin(Date.now() * 4));
var material = new THREE.MeshBasicMaterial( { color: 0xb0f3a0 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function render() {
	requestAnimationFrame(render);
					var time = Date.now() * 0.000004;
				h = ( 360 * ( 0.99 + time ) % 360 ) / 360;
				cube.material.color.setHSL(h, 0.2, 0.6);
cube.rotation.x += 0.004;
cube.rotation.y += 0.003;
cube.rotation.z += 0.002;

