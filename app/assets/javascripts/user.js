$(document).on('turbolinks:load', function() {

  function appendUser(user){
   var html =`<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
              </div>`
    return html;
  }

  function appendMembers(user_name, user_id){
      var html =`<div class='chat-group-user'>
                  <input name='group[user_ids][]' type='hidden' value= ${user_id}>
                  <p class='chat-group-user__name'>${user_name}</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                </div>`
    return html;
    }

  function appendErrMsgToHTML(user){
    var html =`<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${user}</p>
                </div>`;
    return html;
  }

  $("#user-search-field").on("keyup",function() {
    var input = $("#user-search-field").val();

    $.ajax({
      type: 'GET',
      url:  '/users',
      data: { keyword: input},
      dataType: 'json'
    })

    .done(function(users){

      $('#user-search-result').empty();

      if (users.lenght !== 0){
        users.forEach(function(user){
          var html = appendUser(user);
          $('#user-search-result').append(html);
        });
      }
      else{
        appendErrMsgToHTML("一致するユーザーが見つかりません");
      }
    })

    .fail(function(){
        alert('ユーザー検索に失敗しました');
    })
  });

  $(function(){
    $(document).on('click', '.user-search-add', function() {
      var user_name = $(this).data("user-name");
      var user_id = $(this).data("user-id");
      $(this).parent().remove();
      var html = appendMembers(user_name, user_id);
      $('#chat-group-users').append(html);
    });

    $(document).on("click", '.user-search-remove', function() {
      $(this).parent().remove();
    });
  });
});