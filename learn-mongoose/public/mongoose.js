document.querySelectorAll('#user-list tr').forEach(function (el) {
  el.addEventListener('click', function () {
    var id = el.querySelector('td').textContent;
    getComment(id);
  });
});

// 댓글 로딩
function getComment(id) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      var comments = JSON.parse(xhr.responseText);
    }
  }
}