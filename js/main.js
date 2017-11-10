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
	  this.value = '';

	}

	Board.prototype = {
	  constructor: Board,

	  createBoard: function(){
	    var temp = [];
	    for(var i = 0; i < 9; i++){
	      temp.push(new Cell());
	    }
	    this.value = temp;
	  },

	  showBoard: function(){
	    for(var i = 0; i < 9; i++){
	      console.log(this.value[i]);
	    }
	  }
	}

	var $grid = {
	  value: '',
	  showGrid: function(){

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
	}
});