var $win = $(window);
var isMobile = $win.width() <= 480;

function setScroll(){
    var dY = 0;
    $(window).scroll(function(){
        dY = $(this).scrollTop();

        // 特色動畫--------------------------
        if (dY >= $('#Special .base-head.ani-move-top').offset().top - $(this).height() / 2)
        {
            $('#Special .base-head.ani-move-top').addClass('js-ani-move-top')
        }

        if (dY >= $('#Special .base-body.ani-move-top').offset().top - $(this).height() / 2)
        {
            $('#Special .base-body.ani-move-top').addClass('js-ani-move-top')
        }
    
        if (dY >= $('#Special2 .base-head.ani-move-top').offset().top - $(this).height() / 2)
        {
            $('#Special2 .base-head.ani-move-top').addClass('js-ani-move-top')
        }

        if (dY >= $('#Special2 .base-body.ani-move-top').offset().top - $(this).height() / 2)
        {
            $('#Special2 .base-body.ani-move-top').addClass('js-ani-move-top')
        }
    
        if (dY >= $('#Special3 .base-head.ani-move-top').offset().top - $(this).height() / 2)
        {
            $('#Special3 .base-head.ani-move-top').addClass('js-ani-move-top')
        }

        if (dY >= $('#Special3 .base-body.ani-move-top').offset().top - $(this).height() / 2)
        {
            $('#Special3 .base-body.ani-move-top').addClass('js-ani-move-top')
        }
    
        if (dY >= $('#Special4 .base-head.ani-move-top').offset().top - $(this).height() / 2)
        {
            $('#Special4 .base-head.ani-move-top').addClass('js-ani-move-top')
        }

        if (dY >= $('#Special4 .base-body.ani-move-top').offset().top - $(this).height() / 2)
        {
            $('#Special4 .base-body.ani-move-top').addClass('js-ani-move-top')
        }

        if (dY >= $('#Contact .cont-left.ani-move-top').offset().top - $(this).height() / 2)
        {
            $('#Contact .cont-left.ani-move-top').addClass('js-ani-move-top')
        }

        if (dY >= $('#Contact .cont-right.ani-move-top').offset().top - $(this).height() / 2)
        {
            $('#Contact .cont-right.ani-move-top').addClass('js-ani-move-top')
        }
    })
}

function setBtnMobiDownload() {
    var UA = navigator.userAgent;
    if (UA.match('iPad') || UA.match('iPhone')) {
      $('.btn-apple').show();
      $('.btn-google').hide();
    } else {
      $('.btn-apple').hide();
      $('.btn-google').show();
    }
  }

  function setSlideToggle() {
    $('#BtnBar').click(function (e) {
      $('#HeaderFoot').stop(true, false).slideToggle();
      e.stopPropagation();
    });
  
    $('html').click(function () {
      $('#HeaderFoot').slideUp();
    });
  }
  
  function setInit() {
  
    setScroll();
  
    if (isMobile) {
      setBtnMobiDownload();
      setSlideToggle();
    }
  }
  
  setInit();