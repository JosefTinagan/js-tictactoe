$(document).ready(function(){


	function Cell(value=''){
	  this.value = value;

	}
	//Add Methods to the constructor Cell
	Cell.prototype = {
	  constructor: Cell,
	  changeValue: function(new_value){
	    this.value = new_value;
	  }
	}

	function Board(){
	  this.grid = '';

	}

	Board.prototype = {
	  constructor: Board,

	  updateValue: function(param,new_value){
	    this.grid[param].value = new_value;
	  },

	  createBoard: function(){
	    var temp = [];
	    for(var i = 0; i < 9; i++){
	      temp.push(new Cell());
	    }
	    this.grid = temp;
	  },

	  showBoard: function(){
	    for(var i = 0; i < 9; i++){
	      if(i == 3 || i == 6){
	        $('#grid').append('<div id="'+i+'" class="cell block"> <div>'+ this.grid[i].value +'</div></div>');
	      } else {
	      	 $('#grid').append('<div id="'+i+'" class="cell"> <div>'+ this.grid[i].value + '</div></div>');
	      }
	    }
	  },

	  clearBoard: function(){
	    
	  }
	}

	var $grid = {
	  value: '',
	  showGrid: function(){
	    for(var i = 0; i < value.length;i++){

	    }
	  },
	  createGrid: function(){
	  	var x = 9;
	    for(var i = 0; i < x; i++){
	      $cell.new
	    }
	  }
	}

	$('.test').on('click',doSomething);

	function doSomething(){
	  var x = new Cell ('beybi');
	  console.log(x.value);
	  x.changeValue('beyyb');
	  console.log(x.value);
	  var y = new Board();
	  y.createBoard();
	  console.log(y);
	  y.showBoard();
	  y.updateValue(0,'O');
	  y.showBoard();
	}
});