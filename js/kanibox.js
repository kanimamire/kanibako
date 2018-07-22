  var width = window.innerWidth;
  var height = window.innerHeight;
  var side = Math.min(width, height) / 30;
  var scene;
  var camera;
  var renderer;
  var mesh;
  var controls;
  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(30, width / height, 1, 1000);
    renderer = createRenderer(width, height);
    mesh = createMesh(side);
    camera.position.z = 70;
    camera.position.x = 70;
    camera.position.y = 70;
    scene.add(mesh);
    controls = new THREE.OrbitControls(camera);
    controls.autoRotate = true;
    update();
  }
  function createRenderer(width, height) {
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    //document.body.appendChild(renderer.domElement);
    document.getElementById("kanibako").appendChild(renderer.domElement);
    return renderer;
  }
  function createMesh(radius) {
    
    var path = "https://gigaplus.makeshop.jp/kanimamire/kanibako/img/";
    var l1 = new THREE.TextureLoader().load(path+"texture4.png");
    var l2 = new THREE.TextureLoader().load(path+"texture4.png");
    var l3 = new THREE.TextureLoader().load(path+"texture3.png");
    var l4 = new THREE.TextureLoader().load(path+"texture1.png");
    var l5 = new THREE.TextureLoader().load(path+"texture0.png");
    var l6 = new THREE.TextureLoader().load(path+"texture2.png");
    
    
    var cubeGeometry = new THREE.CubeGeometry(49, 18, 38,5,5,5);
    var texture1 = new THREE.MeshBasicMaterial({ map: l1});//右横
    var texture2 = new THREE.MeshBasicMaterial({ map: l2});//左横
    var texture3 = new THREE.MeshBasicMaterial({ map: l3});//上
    var texture4 = new THREE.MeshBasicMaterial({ map: l4});//下
    var texture5 = new THREE.MeshBasicMaterial({ map: l5});//手前
    var texture6 = new THREE.MeshBasicMaterial({ map: l6});//奥
    var material = new THREE.MultiMaterial([texture1, texture2, texture3, texture4, texture5, texture6]);
    var mesh = new THREE.Mesh(cubeGeometry, material);
    
    return mesh;
  }
  function update() {
    controls.update();
    requestAnimationFrame(update);
    renderer.render(scene, camera);
  }
  window.addEventListener('DOMContentLoaded', init);