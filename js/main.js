$(document).ready(function(){

	function Player(name='Anon',sign='x'){
	  this.name = name;
	  this.sign = sign;
	}

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
	  this.grid = ' ';

	}

	Board.prototype = {
	  constructor: Board,

	  getValue: function(x){
	    return this.grid[x];
	  },

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
	  	$('#grid').html('');
	    for(var i = 0; i < 9; i++){
	      if(i == 3 || i == 6){
	        $('#grid').append('<div id="'+i+'" class="cell block"> <div>'+ this.grid[i].value +'</div></div>');
	      } else {
	      	 $('#grid').append('<div id="'+i+'" class="cell"><div>'+ this.grid[i].value + '</div></div>');
	      }
	    }
	  },

	  checkBoard: function(){
	  	var x = this.rows();
	  	var y = this.columns();
	  	var z = this.diagonals();
	    console.log(x);
	    console.log(y);
	    console.log(z);
	    
	    var temp = [x,y,z];
	    var length = temp.length;

	    console.log(length);
	    console.log(temp);
	    for(var i = 0; i < temp.length; i++){
	      console.log(temp[i].length);
	    }

	  },

	  clearBoard: function(){
	    for(var i = 0; i < this.grid.length; i++){
	      this.grid[i].value = '';
	    }
	  },

	  rows: function(){
	  	//console.log(this.getValue(0));
	     return [
	       [this.getValue(0),this.getValue(1),this.getValue(2)],
	       [this.getValue(3),this.getValue(4),this.getValue(5)],
	       [this.getValue(6),this.getValue(7),this.getValue(8)]
	    ]
	  },

	  columns: function(){
	  	return [
	  	  [this.getValue(0),this.getValue(3),this.getValue(6)],
	  	  [this.getValue(1),this.getValue(4),this.getValue(7)],
	  	  [this.getValue(2),this.getValue(5),this.getValue(8)]
	  	]
	  },

	  diagonals: function(){
	    return [
	      [this.getValue(0),this.getValue(4),this.getValue(8)],
	      [this.getValue(2),this.getValue(4),this.getValue(6)]
	    ]
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

	$('#grid').on('click',  function(e){
	  console.log('clicked!');
	  var x = $(e.target).html();
	  var player = new Player();

	  $(e.target).text(player.sign);
	});

	function doSomething(){
	  var x = new Cell ('beybi');
	  console.log(x.value);
	  x.changeValue('beyyb');
	  console.log(x.value);
	  var y = new Board();
	  y.createBoard();
	  console.log(y);
	  y.showBoard();
	  y.updateValue(0,'x');
	  y.updateValue(2,'o');
	  y.showBoard();
	  y.clearBoard();
	  y.showBoard();
	  y.updateValue(0,'o');
	  y.showBoard();
	  y.checkBoard();
	}
});