$(document).on('turbolinks:load', function() {
  function buildPost(post){

   var image = post.image.url? `<img src=${post.image.url}>` : "";

    var html = `<div class="message">
                  <div class="upper-message">
                  <div class="upper-message__user-name">
                    ${post.user_name}
                  </div>
                  <div class="upper-message__date">
                    ${post.date}
                  </div>
                </div>
                <div class="lower-message">
                  <p class="lower-message__content">
                    ${post.content}
                  </p>
                ${image}
                </div>
              </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(post){
      var html = buildPost(post);
      $('.messages').append(html)
      $('#new_message')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('エラー');
    })
    .always(function(){
      $('.form__submit').prop('disabled',false);
    })
  })
});