var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var light, controls;

renderer = new THREE.WebGLRenderer( { preserveDrawingBuffer: true } );
	renderer.setClearColor( 0xffffff, 0);
	var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

                scene.fog = new THREE.FogExp2( 0x604040, .11 );
                light = new THREE.HemisphereLight( 0xfffff0, 0x101020, 5.25 );
                light.position.set( 0.75, 1, 0.55 );
                scene.add( light );
                
var geometry = new THREE.CubeGeometry(2,5.5,0.5);
var material = new THREE.MeshBasicMaterial( { color: 0xb0f3a0 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function render() {
	requestAnimationFrame(render);
					var time = Date.now() * 0.0001;
				h = ( 360 * ( 1.00 + time ) % 360 ) / 360;
				cube.material.color.setHSL(h, 0.35, 0.8);
cube.rotation.x += 0.02;
cube.rotation.y += Math.random()*0.03;
cube.rotation.z += 0.01;
cube.scale.x =Math.sin(time);
cube.scale.y =Math.sin(time);

	renderer.render(scene, camera);
}
render();