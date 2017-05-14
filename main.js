$(document).ready(function(){
	var boje=['aqua','blue','red','green','yellow','pink','orange','black','grey','purple'];
	setInterval(function(){
		$('.hw').each(function(){
			
			var x = Math.floor(Math.random() * 10);
			$(this).css('backgroundColor',boje[x])
			$(this).text('')
			$('<a>',{
    			class: boje[x],
    			href: '#',
   			click:function(e){ return false; }
   			 
			}).appendTo(this);
		
		});
		$('a').click(function(ev){
			ev.preventDefault();
			var link = $(this);
			
			if(link.attr('class')=='red'){
				alert('bravo!');
				
			}
			else{
				alert('Greska!');
			}
		});
		

		
	},300);

		




});
