<?php
/*
Uploadify v3.1.0
Copyright (c) 2012 Reactive Apps, Ronnie Garcia
Released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/

// Define a destination
//var_dump(file_exists('./uploads/uploadify.swf'));
//exit;

$targetFolder = '/bizelaw/contents/application_attachments/'; // Relative to the root

if (!empty($_FILES)) {
    $path = pathinfo($_FILES['Filedata']['name']);
    $randValue = rand(1,20);
    $newName = time(). md5($_FILES['Filedata']['name']) . $randValue . '.' . $path['extension'];
	$tempFile = $_FILES['Filedata']['tmp_name'];
	$targetPath = $_SERVER['DOCUMENT_ROOT'] . $targetFolder;
	$targetFile = rtrim($targetPath,'/') . '/' . $newName;
	// Validate the file type
	$fileTypes = array('docx','doc','pdf'); // File extensions
	$fileParts = pathinfo($_FILES['Filedata']['name']);
	
	if (in_array($fileParts['extension'],$fileTypes)) {
		move_uploaded_file($tempFile,$targetFile);
                echo $newName;
	} else {
		echo 'Invalid file type.';
	}
}
?>