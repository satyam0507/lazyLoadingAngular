 $('.ajax').each(function () {
     this.addEventListener('click', function (evt) {
         evt.preventDefault();
         customAjaxCall('http://localhost:4000/work');
     })
 })

 function customAjaxCall(url) {
     $.ajax({
         url: url,
         method: 'GET',
     }).done(function(output){
         changeMainBodyContent(output);
     });
 }

 function changeMainBodyContent(output) {
    //  $scope.$destroy();
     $("#an-view").html(output);
 }