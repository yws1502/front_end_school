class UserCheck {
  login(id, pwd) {
    return new Promise((resolve, reject) => {
    });
  }
}

const userInfo;

$(".btn-login").click(function() {
  $.ajax({
    url:'https://raw.githubusercontent.com/yws1502/ajaxlogintest/main/userdata.json',
    async: true,
    success: function(response) {
      const id = $("#id").val();
      const pwd = $("#pwd").val();
      userInfo = JSON.parse(response);

    }
  });
});
