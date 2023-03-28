var $about = $('<p>University of Rhode Island<br /> Asian Student Association<br /> 2022-2033</p>');
$('#club').append($about);


$('#hello').after('<ul></ul>');
$('ul').append('<li>Nǐ hǎo is hello in Chinese</li>');
$('ul').append("<li>Kon'nichiwa is hello in Japanese</li>");
$('ul').append('<li>annyeonghaseyo" hello in Korean</li>');
$('ul').append('<li>S̄wạs̄dī is hello in Thai</li>');
$('ul').append('<li>Xin chào is hello in Vietnamese</li>');

$('li').css({
	'color': '#ffeecb',
    'font-family': 'serif',
	'padding': '3px'
});

$('li').hide();

$('#hello').append('<button>Hello!</button>');
// click hello button on about page to learn how to say 'hello' in five asian languages
$('#hello').on('click', function(){
	$(this).fadeOut('slow', function(){
		$('li').slideDown('slow');
	});
});