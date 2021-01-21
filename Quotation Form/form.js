$(document).ready(function () {
    $('.js-edit, .js-save').on('click', function () {
      var $form = $(this).closest('form');
      $form.toggleClass('is-readonly is-editing');
      var isReadonly = $form.hasClass('is-readonly');
      $form.find('input,textarea').prop('disabled', isReadonly);
      $("#print").removeAttr('disabled');
      $("#cancel").removeAttr('disabled');
      var one = $('#id_1').val();
      var two = $('#id_2').val();
      var three = $('#id_3').val();
      var four = $('#id_4').val();
      var five = $('#id_5').val();
      var six = $('#id_6').val();
      var seven = $('#id_7').val();
      var eight = $('#id_8').val();
      var nine = $('#id_9').val();
      var totalincome = parseFloat(one) + parseFloat(two||0) + parseFloat(three||0) + parseFloat(four||0) + parseFloat(five||0) + parseFloat(six||0) + parseFloat(seven||0) + parseFloat(eight||0) + parseFloat(nine||0);
      $(".totalincome").text(totalincome);
    });
    $('.js-save').on('click', function () {
    $(".add_row").hide();
    $(".delete_row").hide();
    });
    $('.js-edit').on('click', function () {
      $(".add_row").show();
      $(".delete_row").show();
      });
  });

  $('.static_row td:last-child').append('<a class="add_row" href="javascript:void(0)"><img src="img/add.png"></a>');

  var startnum = 1;
  $("table").on("click", ".add_row", function () {
    startnum += 1;
    $('<tr class="row_removable"><td><div class="form-group"><input type="text" class="form-control is-disabled name" id="exampleInputPassword1" placeholder="Home Page" ><div class="additional_field"><div class=" title">Duration:</div><input type="text" class="form-control is-disabled name" id="exampleInputPassword1" placeholder="15 days" ></div></div></td><td><div class="form-group"><input type="text" class="form-control is-disabled price" id="id_' + startnum + '" placeholder="XXXX" ></div></td></tr>').insertBefore(".last_table tr:last-child");
    $('.static_row .add_row').remove();
    $('.row_removable td:last-child').append('<a class="add_row" href="javascript:void(0)"><img src="img/add.png"></a>');
    $('.last_table tr:nth-last-of-type(n + 3) .add_row').remove(); 
    $('tr.row_removable:nth-last-of-type(n + 3) td:last-child').append('<a class="delete_row" href="javascript:void(0)"><img src="img/remove.png"></a>');
  });

    $("table").on("click", ".delete_row", function () {
        $(this).parent().parent().remove(); 
    });
    var select = document.getElementById('currency');
    var input = document.querySelector('.txtcurrency');
    var inputs = document.querySelector('.txtcurrencys');
    select.onchange = function() {
        input.value = select.value;
        inputs.value = select.value;
    }

    $('#preview').on('click', function(){
      $('#changes').css('width','0px');
      $('#pdf').css('top','50px');
      $("html, body").animate({ scrollTop: 0 }, "fast");
      var aa = $('.last_table tr.row_removable:nth-child(3) td:first-child input').val().length;
      var bb = $('.last_table tr.row_removable:nth-child(3) td:first-child .additional_field input').val().length;
      var cc = $('.last_table tr.row_removable:nth-child(3) td:last-child input').val().length;
      if (aa == 0 && bb == 0 && cc == 0) {
        //alert("Please Fill All Required Field");
        $('.last_table tr.row_removable:nth-child(3)').remove();
        $('.static_row td:last-child').append('<a class="add_row" href="javascript:void(0)"><img src="img/add.png"></a>');
        return false;
      }
      return false;
    });

    $('#cancel').on('click', function(){
      $('#changes').attr('style','');
      $('#pdf').attr('style','');
    });

    $('#print').on('click', function(){
      $(this).show();
    });
