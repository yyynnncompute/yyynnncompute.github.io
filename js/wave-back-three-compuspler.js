var scene = new THREE.Scene();

var container;
var W = window.innerWidth;
var H = window.innerHeight;

var renderer = new THREE.WebGLRenderer({antialias: false});
renderer.setClearColor(0xf2f9ff, 1);
renderer.setSize(W, H);

var camera = new THREE.PerspectiveCamera(5, W / H, 0.001, 1000);

var planeGeometry = new THREE.PlaneGeometry(30, 30, 20, 20);
var planeMaterial = new THREE.MeshBasicMaterial({color: 0xd6e4ef, wireframe: true, wireframeLinewidth:0.3 });
var plane = new THREE.Mesh(planeGeometry, planeMaterial);


plane.rotation.x = -0.5 * Math.PI;

plane.position.set(0, 0, 0);

scene.add(plane);

camera.position.set(20, 80, 80);
camera.lookAt(scene.position);

document.getElementById("canvas").appendChild(renderer.domElement);
window.addEventListener( 'resize', onWindowResize, false );

(function drawFrame(ts){
  var center = new THREE.Vector2(0,0);
  window.requestAnimationFrame(drawFrame);
  var vLength = plane.geometry.vertices.length;
  for (var i = 0; i < vLength; i++) {
    var v = plane.geometry.vertices[i];
    var dist = new THREE.Vector2(v.x, v.y).sub(center);
    var size = 4.0;
    var magnitude = 4;
    v.z = Math.sin(dist.length()/-size + (ts/5000)) * magnitude;
  }
  plane.geometry.verticesNeedUpdate = true;
  renderer.render(scene, camera);
}());



function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
