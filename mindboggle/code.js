window.onload = function() {


  if (location.href.match(/(\?)(\w*,*\w*)*/)) {
    
    //
    var _values = location.href.match(/(\?)(\w*,*.*\w*)*/)[0];
    
    subject = _values;
    subject = subject.replace('?', '').replace('/', ''); // replace any ? or /
    console.log(subject);

  } else {
  
    subject = 1;
  
  }

  rotate = true;

  left();
  right();
  
};

function left() {

  // renderer
  var r = new X.renderer3D();
  // r.config.PROGRESSBAR_ENABLED = false;
  r.container = 'lh';
  r.init();

  // create a new X.mesh
  left_fundi = new X.mesh();
  // .. and associate the .vtk file to it
  left_fundi.file = 'data/_hemi_' + 'lh' + '_subject_HLN-12-' + subject
      + '/fundi.vtk';
  left_fundi.color = [ 1, 0, 0 ];

  // .. add the mesh
  r.add(left_fundi);

  // only run the on showtime once
  r.onShowtime = function() {

    var gui = new dat.GUI();      
    
    // now we configure the gui for interacting with the X.mesh
    var leftgui = gui.addFolder('Left Hemisphere');
    // .. the mesh color
    var leftColorController = leftgui.addColor(left_fundi, 'color');
    leftgui.open();
    
    // now we configure the gui for interacting with the X.mesh
    var rightgui = gui.addFolder('Right Hemisphere');
    // .. the mesh color
    var rightColorController = rightgui.addColor(right_fundi, 'color');
    rightgui.open();
                
  };


  // animate..
  r.onRender = function() {

    if ( rotate ) {
      r.camera.rotate([ 1, 0 ]);
    }

  };

  r.camera.position = [0,0,300];
  
  r.render();
  r.container.style.position = 'absolute';

}

function right() {

  // renderer
  var r = new X.renderer3D();
  // r.config.PROGRESSBAR_ENABLED = false;
  r.container = 'rh';
  r.init();

  // create a new X.mesh
  right_fundi = new X.mesh();
  // .. and associate the .vtk file to it
  right_fundi.file = 'data/_hemi_' + 'rh' + '_subject_HLN-12-' + subject
      + '/fundi.vtk';
  right_fundi.color = [ 0, 1, 0 ];

  // .. add the mesh
  r.add(right_fundi);

  // animate..
  r.onRender = function() {

    if ( rotate ) {
      r.camera.rotate([ 1, 0 ]);
    }

  };

  r.camera.position = [0,0,300];
  
  r.render();
  r.container.style.position = 'absolute';

}