$('button[data-toggle="collapse"]').live('click', function() {
	if($(this).hasClass('collapsed')) {
		$(this).children(':last').addClass('hide');
		$(this).children(':first').removeClass('hide');
	} else {
		$(this).children(':first').addClass('hide');
		$(this).children(':last').removeClass('hide');
	}
});

_jssX = {v:2};
(function(id){
var e = encodeURIComponent, d = document, s = d.createElement("script"), x,
  p = d.getElementsByTagName("script")[0], c = d.cookie?d.cookie.split(";"):[],
  a = ["i="+id,"r="+e(d.referrer),"u="+e(d.location),"d="+new Date().getTime()];
while (c.length) { x = c.pop().replace(/^ /,"").split("=");
  if (x[0].match(/^_jss_/)) a.push(x[0]+"="+x[1]); }
s.type = "text/javascript"; s.async = true;
s.src = location.protocol+"//jss.jajja.com/jss?"+(_jssX._qparam=a.join("&"));
p.parentNode.insertBefore(s, p);
}("DP6iijjpfgeYnDan"));
