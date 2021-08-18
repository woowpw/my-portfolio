<?php 
    /*$message_sent = false;
    if(isset($_POST['email']) && $_POST['email'] != ''){

        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {*/
            if(isset($_POST['btn-send'])) {
                $username = $_POST['name'];
                $useremail = $_POST['email'];
                $usersubject = $_POST['subject'];
                $usermessage = $_POST['message'];
        
                if(empty($username) || empty($useremail) || empty($usersubject) || empty($usermessage) ||) {
                    header('location:index.php?error');
                }
                else {
                    $to = "abdouasri01@gmail.com";
                    if(mail($to,$usersubject,$usermessage,$useremail)) {
                        header('location:index.php?success');
                
                    }
                }
            }
            else {
                header('location:index.php');
            }
            
    
            /*$message_sent = true;
            $body = "";
    
            $body .= "From: " .$username. "\r\n";
            $body .= "Email: " .$useremail. "\r\n";
            $body .= "Message: " .$usermessage. "\r\n";
            
        }
        else {
            $invalid_class_name = "Form-invalid";
        }
    }*/

?>