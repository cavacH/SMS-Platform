<?php 


//Not sure if it's post or sth else
$json_str = file_get_contents('php://input');
//$dept = $_POST['dept'];

$json_obj = json_decode($json_str, true);

//Variables can be accessed as such:
$word_1 = $json_obj['word'];

//Dummy result
$one = 1;

require 'database.php';

if(isset($word_1)){
$stmt = $mysqli->prepare("insert into words (word, word_count) values (?, ?)");
if(!$stmt){
	printf("Query Prep Failed: %s\n", $mysqli->error);
	exit;
}

$stmt->bind_param('si', $word_1, $one);

$stmt->execute();

$stmt->close();

	echo json_encode(array(
		"success" => true
	));
	exit;

}else{
    echo json_encode(array(
		"success" => false
	));
	exit;
}
?>