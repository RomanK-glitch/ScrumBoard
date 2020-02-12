$(function (){
			$(".button").click(function(){								//add new task		
				$("	<div class='backlogtask'><h4 class='tasknamebacklog'>task in backlog</h4><div class='use'><span class='usebacklog'> Backlog </span><span class='useinprogress'> In progress </span><span class='usedone'> Done </span><span class='usedelete'> Delete </span></div></div>").appendTo(".backlog");
				var text = $("#name").val();
				$(".tasknamebacklog").last().text(text);
				document.getElementById("name").value = "";					
			});		
			
			$(".backlog, .inprogress, .done").on("click", ".usedelete", function(e){		//delete
				$(e.currentTarget).parent().parent().remove();
			});
			
			$(".backlog, .done").on("click", ".useinprogress", function(e){	//to inprogress				
				$("<div class='inprogresstask'><h4 class='tasknameinprogress'>task in progress</h4><div class='use'><span class='usebacklog'> Backlog </span><span class='useinprogress'> In progress </span><span class='usedone'> Done </span><span class='usedelete'> Delete </span></div></div>").appendTo(".inprogress");
				var text = $(e.currentTarget).parent().parent().find("h4").text();					
				$(".tasknameinprogress").last().text(text);
				$(e.currentTarget).parent().parent().remove();
			});
			
			$(".inprogress, .backlog").on("click", ".usedone", function(e){		//to done
				$(" <div class='donetask'><h4 class='tasknamedone'>task done</h4><div class='use'><span class='usebacklog'> Backlog </span><span class='useinprogress'> In progress </span><span class='usedone'> Done </span><span class='usedelete'> Delete </span></div></div>").appendTo(".done");
				var text = $(e.currentTarget).parent().parent().find("h4").text();					
				$(".tasknamedone").last().text(text);
				$(e.currentTarget).parent().parent().remove();
			});
			
				$(".inprogress, .done").on("click", ".usebacklog", function(e){		//to backlog
				$("	<div class='backlogtask'><h4 class='tasknamebacklog'>task in backlog</h4><div class='use'><span class='usebacklog'> Backlog </span><span class='useinprogress'> In progress </span><span class='usedone'> Done </span><span class='usedelete'> Delete </span></div></div>").appendTo(".backlog");
				var text = $(e.currentTarget).parent().parent().find("h4").text();					
				$(".tasknamebacklog").last().text(text);
				$(e.currentTarget).parent().parent().remove();
			});
});