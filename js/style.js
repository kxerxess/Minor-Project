$(document).ready(function () {

  var screenHeight = $(document).height();
  var screenWidth = $(document).width();

  console.log("Width",screenWidth);
  console.log("Height",screenHeight);
  $(".loading").delay(500).fadeOut(500);
  $(".main").delay(1000).fadeIn(1000);
  $(".main-text").delay(1000).fadeIn(1000);
  $(".scrolldown-main").delay(1000).fadeIn(1000);

  $(".ryan").hover(function () {
    $(this).css('height','400px');
    $(".ryan .hidden").css('display', 'block');
  },function () {
    $(this).css('height','');
    $(".ryan .hidden").css('display', 'none');
  });

  $(".apj").hover(function () {
    $(this).css('height','400px');
    $(".apj .hidden").css('display', 'block');
  },function () {
    $(this).css('height','');
    $(".apj .hidden").css('display', 'none');
  });

  $(".rait").hover(function () {
    $(this).css('height','400px');
    $(".rait .hidden").css('display', 'block');
  },function () {
    $(this).css('height','');
    $(".rait .hidden").css('display', 'none');
  });

  var waypoints = $('.tech-rhs').waypoint(function() {
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 90) {
        clearInterval(id);
      } else {
        width++;
        $(".py .progress-bar").css('width', width + '%');
      }
    };
  }, {
    offset: '50%'
  })

  var waypoints = $('.tech-rhs').waypoint(function() {
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 70) {
        clearInterval(id);
      } else {
        width++;
        $(".jav .progress-bar").css('width', width + '%');
      }
    };
  }, {
    offset: '40%'
  })

  var waypoints = $('.tech-rhs').waypoint(function() {
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 60) {
        clearInterval(id);
      } else {
        width++;
        $(".cc .progress-bar").css('width', width + '%');
      }
    };
  }, {
    offset: '30%'
  })

  var waypoints = $('.tech-rhs').waypoint(function() {
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 90) {
        clearInterval(id);
      } else {
        width++;
        $(".wd .progress-bar").css('width', width + '%');
      }
    };
  }, {
    offset: '20%'
  })

  var waypoints = $('.tech-rhs').waypoint(function() {
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 70) {
        clearInterval(id);
      } else {
        width++;
        $(".ml .progress-bar").css('width', width + '%');
      }
    };
  }, {
    offset: '10%'
  })


});
